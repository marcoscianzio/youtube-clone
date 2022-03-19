import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CreateVideoIcon } from "../icons/CreateVideo";
import Upload from "./Upload";
import UploadDetails from "./UploadDetails";

const CreateVideoModal: React.FC = ({}) => {
  const [step, setStep] = useState<number>(0);
  const [videoData, setVideoData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const next = (values: any = {}) => {
    if (step === pages.length - 1) {
      onClose();
    } else {
      setVideoData(() => values);
      setStep((step) => step + 1);
    }

    return;
  };

  const pages = [
    <Upload next={next} />,
    <UploadDetails data={videoData} next={next} />,
  ];

  return (
    <>
      <IconButton
        bg="transparent"
        aria-label="create-video"
        icon={<CreateVideoIcon boxSize={7} />}
        onClick={onOpen}
      >
        Open Modal
      </IconButton>

      <Modal isCentered size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Subir video</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {pages[step]}

            <Text
              py={6}
              textAlign="center"
              textStyle="secondary"
              fontSize="smaller"
            >
              Si envías tus videos a YouTube, aceptas las Condiciones del
              Servicio y los Lineamientos de la Comunidad de la plataforma.
              Asegúrate de no infringir los derechos de autor o de privacidad de
              otras personas. Más información
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateVideoModal;
