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

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <SimpleGrid
      columns={3}
      spacing={10}
      marginBottom="40px"
      minChildWidth="290px"
    >
      {cards.map(card => (
        <Box key={card.id} h="290px" bg="#353431" borderRadius={6}>
          <Image
            src={card.url}
            alt={card.title}
            h="192px"
            w="100%"
            objectFit="cover"
            borderRadius="6px 6px 0 0"
          />
          <Text fontWeight="bold" marginTop="20px" mx="25px">
            {card.title}
          </Text>
          <Text mx="25px">{card.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
