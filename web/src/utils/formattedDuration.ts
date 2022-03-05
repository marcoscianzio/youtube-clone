import { addSeconds, format } from "date-fns";

export const formattedDuration = (seconds: number) => {
  var helperDate = addSeconds(new Date(0), seconds);
  return format(helperDate, "mm:ss");
};
