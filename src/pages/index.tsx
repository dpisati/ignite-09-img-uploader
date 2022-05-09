import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  async function fetchImages({ pageParam = 0 }) {
    return await api.get('/api/images?after=' + pageParam);    
  }

  const getNextPageParam = (nextPage: number) => {
    return nextPage;
  };

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', fetchImages, {
    getNextPageParam: pageParam => getNextPageParam(pageParam.data.after),
  });

  const formattedData = useMemo(() => {
    if (data) {
      const result = data.pages
        .map(page => {
          return page.data.data;
        })
        .flat();
      return result;
    }
  }, [data]);

  if (isLoading && !isError) {
    return <Loading />;
  }
  if (!isLoading && isError) {
    return <Error />;
  }

  return (
    <>
      <Header />
      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Carregando...'
              : hasNextPage
              ? 'Carregar mais'
              : 'Nada para carregar'}
          </Button>
        )}
      </Box>
    </>
  );
}
