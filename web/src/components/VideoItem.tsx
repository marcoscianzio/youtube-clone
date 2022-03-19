import { Avatar, Box, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { VerifiedIcon } from "../icons/Verified";
import { formattedDuration } from "../utils/formattedDuration";
import NextLink from "next/link";
import DateAndViews from "./DateAndViews";

interface VideoItemProps {
  id: string;
  url: string;
  title: string;
  displayName: string;
  isVerified?: boolean;
  views: number;
  date: Date;
  duration: number;
  typeDate: "ago" | "complete";
}

const VideoItem: React.FC<VideoItemProps> = ({
  id,
  url,
  isVerified,
  title,
  displayName,
  views,
  date,
  typeDate,
  duration,
}) => {
  return (
    <NextLink href={`/video/${id}`}>
      <Stack spacing={4} w="96" cursor="pointer">
        <Stack
          bgImage={`url(${url})`}
          position="relative"
          bgSize="cover"
          w="96"
          h="60"
        >
          <Box
            bg="#000"
            rounded="sm"
            px={1}
            position="absolute"
            right={2}
            bottom={1}
          >
            <Text fontSize="sm" color="#fff">
              {formattedDuration(duration)}
            </Text>
          </Box>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Avatar size="sm" />
          <Stack spacing={0}>
            <Text textStyle="primary" noOfLines={2} wordBreak="break-all">
              {title}
            </Text>
            <HStack>
              <Text noOfLines={1} textStyle="secondary">
                <Link wordBreak="break-word">{displayName}</Link>
              </Text>

              {isVerified && <VerifiedIcon />}
            </HStack>
            <DateAndViews typeDate={typeDate} views={views} date={date} />
          </Stack>
        </Stack>
      </Stack>
    </NextLink>
  );
};

export default VideoItem;
