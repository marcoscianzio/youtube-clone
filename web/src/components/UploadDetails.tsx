import { CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useCreateVideoMutation } from "../generated/graphql";
import InputField from "./InputField";

interface Values {
  title: string;
  description: string;
}

const UploadDetails: React.FC<{ data: any; next: any }> = ({ next, data }) => {
  const toast = useToast();
  const { onCopy } = useClipboard(data.url);
  const [createVideo] = useCreateVideoMutation();

  console.log(data);

  const handleSubmit = async (
    values: Values,
    { setErrors }: FormikHelpers<Values>
  ) => {
    const response = await createVideo({
      variables: {
        values: {
          ...values,
          duration: Math.round(data.duration),
          thumbnail: data.thumbnail,
          file: data.url,
        },
      },
    });

    next();
  };

  return (
    <Stack p={8}>
      <Text textStyle="primary" fontSize="2xl" fontWeight="bold">
        Detalles
      </Text>
      <Stack direction="row" spacing={4}>
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Stack w="60%" as={Form} spacing={4}>
              <InputField
                label="titulo"
                textArea
                name="title"
                placeholder="Agrega un título en el que se describa el video"
              />
              <InputField
                label="descripción"
                textArea
                name="description"
                placeholder="Cuentale a los usuarios sobre el video"
              />
              <Button
                isLoading={isSubmitting}
                loadingText="Creando video..."
                type="submit"
                isFullWidth
                variant="callToAction"
              >
                Crear video
              </Button>
            </Stack>
          )}
        </Formik>
        <Stack w="40%">
          <Stack spacing={0}>
            <Image
              w="full"
              h={40}
              objectFit="cover"
              src={data.thumbnail}
            ></Image>
            <Stack bg="bgGeneral" p={2}>
              <HStack overflow="auto" justify="space-between">
                <Stack overflow="hidden" spacing={0}>
                  <Text textStyle="secondary" fontSize="smaller">
                    Vinculo del video
                  </Text>
                  <Link
                    variant="callToAction"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden"
                  >
                    {data.url}
                  </Link>
                </Stack>
                <Icon
                  onClick={() => {
                    onCopy();
                    toast({
                      title: "Link copied",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    });
                  }}
                  cursor="pointer"
                  color="textSecondary"
                  boxSize={6}
                  as={CopyIcon}
                />
              </HStack>
              <Stack spacing={0}>
                <Text textStyle="secondary" fontSize="smaller">
                  Nombre del archivo
                </Text>
                <Text isTruncated textStyle="primary">
                  {data.original_filename}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UploadDetails;
