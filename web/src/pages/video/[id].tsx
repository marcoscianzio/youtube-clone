import {
  Avatar,
  Box,
  Button,
  Collapse,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactPlayer from "react-player";
import CommentSection from "../../components/CommentSection";
import DateAndViews from "../../components/DateAndViews";
import Navbar from "../../components/Navbar";
import { useVideoQuery } from "../../generated/graphql";
import { DislikeIcon } from "../../icons/Dislike";
import { LikeIcon } from "../../icons/Like";
import { SaveIcon } from "../../icons/Save";
import { ShareIcon } from "../../icons/Share";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { withApollo } from "../../utils/withApollo";

function VideoPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleToggle = () => setShow(!show);

  const { id } = router.query;

  const { loading, data } = useVideoQuery({
    variables: {
      videoId: id as string,
    },
    skip: id === undefined,
  });

  if (loading) {
    return <Spinner />;
  }

  if (!data?.video) {
    return <Text>no hay video xd</Text>;
  }

  return (
    <Navbar>
      <SimpleGrid
        minH="calc(100vh - var(--chakra-sizes-16) - var(--chakra-space-4))"
        columns={2}
        templateRows="1fr"
        spacing={10}
        templateColumns="2.5fr 1fr"
      >
        <Stack spacing={6}>
          <Box h="80%" position="relative">
            <ReactPlayer
              controls={true}
              width="100%"
              height="100%"
              className="react-player"
              url={data.video.file}
            />
          </Box>
          <Stack spacing={1}>
            <Text fontSize="xl" textStyle="primary">
              {data.video.title}
            </Text>
            <Stack
              spacing={6}
              divider={<StackDivider borderColor="percentLayer" />}
            >
              <HStack justify="space-between">
                <DateAndViews
                  views={data.video.views}
                  date={data.video.createdAt}
                  typeDate="complete"
                />
                <HStack spacing={6}>
                  <HStack cursor="pointer">
                    <Icon as={LikeIcon} boxSize={7} />
                    <Text textStyle="primary">
                      {numberWithCommas(data.video.likeCount)}
                    </Text>
                  </HStack>
                  <HStack cursor="pointer">
                    <Icon as={DislikeIcon} boxSize={7} />
                    <Text textStyle="primary">NO ME GUSTA</Text>
                  </HStack>
                  <HStack cursor="pointer">
                    <Icon cursor="pointer" as={ShareIcon} boxSize={7} />
                    <Text textStyle="primary">COMPARTIR</Text>
                  </HStack>
                  <HStack cursor="pointer">
                    <Icon as={SaveIcon} boxSize={7} />
                    <Text textStyle="primary">GUARDAR</Text>
                  </HStack>
                </HStack>
              </HStack>
              <Stack
                spacing={6}
                divider={<StackDivider borderColor="percentLayer" />}
              >
                <Stack spacing={6}>
                  {data.video.author && (
                    <HStack justify="space-between">
                      <Stack spacing={4} direction="row" align="center">
                        <Avatar
                          src={data.video.author.pic as string}
                          boxSize={14}
                          rounded="full"
                        />

                        <Stack spacing={0}>
                          <Text textStyle="primary">
                            {data.video.author.displayName}
                          </Text>
                          <Text textStyle="secondary">
                            {numberWithCommas(3000000)} subscriptores
                          </Text>
                        </Stack>
                      </Stack>
                      <Button variant="primary">subscribirse</Button>
                    </HStack>
                  )}
                  <Stack
                    spacing={4}
                    pl="calc(var(--chakra-sizes-14) + var(--chakra-space-4))"
                  >
                    <Collapse in={show}>
                      <Text maxW="615px">{data.video.description}</Text>
                    </Collapse>
                    <Text
                      onClick={handleToggle}
                      cursor="pointer"
                      textStyle="secondary"
                      fontWeight="500"
                    >
                      MOSTRAR {show ? "MENOS" : "MÁS"}
                    </Text>
                  </Stack>
                </Stack>
                <Stack spacing={6}>
                  <HStack>
                    <Text fontSize="lg" textStyle="primary">
                      {numberWithCommas(data.video.commentCount)} comentarios
                    </Text>
                  </HStack>
                  <Stack spacing={10}>
                    {data.me && (
                      <HStack spacing={4}>
                        <Avatar
                          src={data.me?.pic as string}
                          boxSize={12}
                          rounded="full"
                        />
                        <Stack w="full">
                          <Input
                            onFocus={() => {
                              setFocused(true);
                            }}
                            placeholder="Agrega un comentario..."
                            variant="flushed"
                          />
                          {focused && (
                            <HStack justify="end">
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  setFocused(false);
                                }}
                              >
                                Cancelar
                              </Button>
                              <Button variant="secondary">Comentar</Button>
                            </HStack>
                          )}
                        </Stack>
                      </HStack>
                    )}
                    <CommentSection videoId={data.video.id} />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Navbar>
  );
}

export default withApollo()(VideoPage);
