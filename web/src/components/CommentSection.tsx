import { Avatar, HStack, Icon, Spinner, Stack, Text } from "@chakra-ui/react";
import { formatDistanceToNowStrict } from "date-fns";
import es from "date-fns/locale/es";
import React from "react";
import { useVideoCommentsQuery } from "../generated/graphql";
import { DislikeIcon } from "../icons/Dislike";
import { LikeIcon } from "../icons/Like";
import { numberWithCommas } from "../utils/numberWithCommas";

export default function CommentSection({ videoId }: { videoId: string }) {
  const { data, loading } = useVideoCommentsQuery({
    variables: {
      take: 5,
      videoId,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {data?.videoComments.comments.map((comment, i) => {
        const jsDate = new Date(comment.createdAt);

        const date = formatDistanceToNowStrict(jsDate, {
          locale: es,
          addSuffix: true,
        });

        return (
          <React.Fragment key={comment.id}>
            <Stack spacing={4} direction="row">
              <Avatar
                src={comment.author?.pic as string}
                boxSize={12}
                rounded="full"
              />
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <HStack>
                    <Text fontSize="sm" textStyle="primary">
                      {comment.author?.displayName}
                    </Text>
                    <Text fontSize="sm" textStyle="secondary">
                      {date}
                    </Text>
                  </HStack>
                  <Text textStyle="primary">{comment.content}</Text>
                </Stack>

                <HStack spacing={6}>
                  <HStack cursor="pointer">
                    <Icon as={LikeIcon} boxSize={5} />
                    <Text fontSize="sm" textStyle="secondary">
                      {numberWithCommas(200)}
                    </Text>
                  </HStack>
                  <HStack cursor="pointer">
                    <Icon as={DislikeIcon} boxSize={5} />
                  </HStack>
                </HStack>
              </Stack>
            </Stack>
          </React.Fragment>
        );
      })}
    </>
  );
}
