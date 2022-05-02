import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  ModalHeader,
  ModalCloseButton,
  Text,
  Button,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal blockScrollOnMount isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="blackAlpha.300" />
      <ModalContent
        bgColor="pGray.800"
        borderRadius="6px"
        w="auto"
        maxW="900px"
      >
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            alt={imgUrl}
            maxW="900px"
            maxH="600px"
            objectFit="contain"
            borderRadius="6px 6px 0 0"
          />

          <Text fontSize="14px" py="8px" marginLeft="10px">
            <a href={imgUrl} target="_blank">
              Abrir original
            </a>
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
