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
    <Modal
      isCentered
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent bgColor="pGray.800" maxWidth="900px" maxHigh="600px">
        <ModalBody padding="0">
          <Image
            src={imgUrl}
            alt={imgUrl}
            w="900px"
            h="600px"
            objectFit="cover"
            borderRadius="6px 6px 0 0"
          />
          <Link href={imgUrl} isExternal>
            <Text fontSize="14px" py="8px" marginLeft="10px">
              Abrir original
            </Text>
          </Link>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
