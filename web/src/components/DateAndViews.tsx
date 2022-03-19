import { HStack, StackProps, Text } from "@chakra-ui/react";
import { format, formatDistanceToNowStrict } from "date-fns";
import es from "date-fns/locale/es";
import { numberWithCommas } from "../utils/numberWithCommas";

type DateAndViewsProps = StackProps & {
  views: number;
  date: Date;
  typeDate: "ago" | "complete";
};

export default function DateAndViews({
  views,
  date,
  typeDate,
  ...props
}: DateAndViewsProps) {
  const jsDate = new Date(date);

  const dates = {
    ago: formatDistanceToNowStrict(jsDate, {
      locale: es,
      addSuffix: true,
    }),
    complete: format(jsDate, "d MMM yyy", {
      locale: es,
    }),
  };

  return (
    <HStack {...props} spacing={2}>
      <Text textStyle="secondary">{numberWithCommas(views)} visitas</Text>
      <Text textStyle="secondary">•</Text>
      <Text textStyle="secondary">{dates[typeDate]}</Text>
    </HStack>
  );
}
