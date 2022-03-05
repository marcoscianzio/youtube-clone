import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Badge,
  IconButton,
  Spinner,
  Stack,
  Tag,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import type { NextPage } from "next";
import React from "react";
import { Waypoint } from "react-waypoint";
import Navbar from "../components/Navbar";
import VideoItem from "../components/VideoItem";
import { useVideosQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { data, loading, fetchMore, networkStatus } = useVideosQuery({
    variables: {
      take: 10,
    },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Navbar>
      <Stack p={8} alignItems="flex-start">
        <IconButton
          aria-label="mode"
          icon={
            colorMode === "light" ? (
              <MoonIcon color="blue.800" />
            ) : (
              <SunIcon color="yellow.200" />
            )
          }
          onClick={toggleColorMode}
        ></IconButton>
        <Text textStyle="primary">Texto primario</Text>
        <Text textStyle="secondary">Texto secundario</Text>
        <Text textStyle="sectionTitle">SUBSCRIPTORES</Text>

        <Badge>nuevo</Badge>
        <Tag>Entretenimiento</Tag>
      </Stack>
      {data?.videos.videos.map((video, i) => (
        <React.Fragment key={video.id}>
          <VideoItem
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
                    cursor:
                      data.videos.videos[data.videos.videos.length - 1].id,
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
    </Navbar>
  );
};

export default withApollo()(Home);
