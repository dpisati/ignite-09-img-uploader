import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
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

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <SimpleGrid
      columns={3}
      spacing="40px"
      marginBottom="40px"
      minChildWidth="290px"
    >
      {cards.map(card => (
        <Box
          key={card.id}
          h="290px"
          bg="#353431"
          borderRadius={6}
          cursor="pointer"
          onClick={onOpen}
        >
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
          <ModalViewImage
            key={card.id}
            isOpen={isOpen}
            onClose={onClose}
            imgUrl={card.url}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
}
