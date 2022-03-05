import { Avatar, Box, HStack, Link, Stack, Text } from "@chakra-ui/react";
import { formatDistanceToNowStrict } from "date-fns";
import es from "date-fns/locale/es";
import { VerifiedIcon } from "../icons/Verified";
import { formattedDuration } from "../utils/formattedDuration";
import { numberWithCommas } from "../utils/numberWithCommas";

interface VideoItemProps {
  url: string;
  title: string;
  displayName: string;
  isVerified?: boolean;
  views: number;
  date: Date;
  duration: number;
}

const VideoItem: React.FC<VideoItemProps> = ({
  url,
  isVerified,
  title,
  displayName,
  views,
  date,
  duration,
}) => {
  return (
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

            {isVerified ? <VerifiedIcon /> : null}
          </HStack>
          <HStack spacing={2}>
            <Text textStyle="secondary">{numberWithCommas(views)} visitas</Text>
            <Text textStyle="secondary">•</Text>
            <Text textStyle="secondary">
              {formatDistanceToNowStrict(new Date(date), {
                locale: es,
                addSuffix: true,
              })}
            </Text>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VideoItem;
