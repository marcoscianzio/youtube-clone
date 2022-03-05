import { DownloadIcon } from "@chakra-ui/icons";
import { Button, Circle, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { fileUpload } from "../utils/fileUpload";

const Upload: React.FC<{ next: (values: any) => void }> = ({ next }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputFile = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    inputFile.current!.click();
  };

  const onChangeFile = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!e.currentTarget.files) {
      return;
    }

    const video = e.currentTarget.files[0];

    const response = await fileUpload(video);

    setIsLoading(false);
    next({ ...response, thumbnail: response.url.replace(/.mp4/, ".png") });
  };

  return (
    <Stack py={32} spacing={6} align="center" justify="center">
      <Circle bg="bgCircle" p={10}>
        <Icon color="inactive" boxSize={14} as={DownloadIcon}></Icon>
      </Circle>
      <VStack spacing={0}>
        <Text fontSize="revert" textStyle="primary">
          Arrastra y suelta archivos de video para subirlos
        </Text>
        <Text fontSize="smaller" textStyle="secondary">
          Tus videos serán privados hasta que los publiques.
        </Text>
      </VStack>
      <Button
        isLoading={isLoading}
        onClick={onButtonClick}
        size="sm"
        variant="callToAction"
      >
        seleccionar archivos
      </Button>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
    </Stack>
  );
};

export default Upload;
