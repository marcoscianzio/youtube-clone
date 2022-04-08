import { Flex, HStack, Spinner } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import type { NextPage } from "next";
import React from "react";
import { Waypoint } from "react-waypoint";
import Navbar from "../components/Navbar";
import VideoItem from "../components/VideoItem";
import { useVideosQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

const Home: NextPage = () => {
  const { data, fetchMore, networkStatus } = useVideosQuery({
    variables: {
      take: 10,
    },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Navbar>
      <Flex
        flexWrap="wrap"
        justify="center"
        alignItems="flex-start"
        p={4}
        gap={4}
        w="full"
        direction="row"
      >
        {data?.videos.videos.map((video, i) => (
          <React.Fragment key={video.id}>
            <VideoItem
              typeDate="ago"
              id={video.id}
              duration={video.duration}
              title={video.title}
              displayName={video.author!.displayName}
              isVerified={video.author!.verified}
              date={video.createdAt}
              url={video.thumbnail}
              views={video.views}
            />
            {data.videos.hasMore && i === data?.videos.videos.length - 2 && (
              <Waypoint
                onEnter={() => {
                  fetchMore({
                    variables: {
                      take: 10,
                      cursor: {
                        id: data.videos.videos[data.videos.videos.length - 1]
                          .id,
                      },
                    },
                    updateQuery: (pv, { fetchMoreResult }) => {
                      if (!fetchMoreResult) {
                        return pv;
                      }

                      return {
                        __typename: "Query",
                        videos: {
                          __typename: "VideoPagination",
                          videos: [
                            ...pv.videos.videos,
                            ...fetchMoreResult.videos.videos,
                          ],
                          hasMore: fetchMoreResult.videos.hasMore,
                        },
                      };
                    },
                  });
                }}
              ></Waypoint>
            )}
          </React.Fragment>
        ))}
      </Flex>
      {networkStatus === 3 && (
        <HStack p={6} justify="center" w="full">
          <Spinner />
        </HStack>
      )}
    </Navbar>
  );
};

export default withApollo()(Home);
