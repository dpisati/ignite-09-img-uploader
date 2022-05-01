import { Box, Image, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function viewImage(url: string) {
    onOpen();
  }

  return (
    <SimpleGrid
      columns={3}
      spacing="40px"
      marginBottom="40px"
      minChildWidth="290px"
    >
      {cards.map(card => (
        <div key={card.id} onClick={() => setSelectedImageUrl(card.url)}>
          <Card viewImage={viewImage} data={card} />
          <ModalViewImage
            isOpen={isOpen}
            onClose={onClose}
            imgUrl={selectedImageUrl}
          />
        </div>
      ))}
    </SimpleGrid>
  );
}
