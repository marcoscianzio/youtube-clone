import { Icon, IconProps } from "@chakra-ui/react";

export const VerifiedIcon = (props: IconProps) => (
  <Icon
    fill="textSecondary"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    {...props}
  >
    <g>
      <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"></path>
    </g>
  </Icon>
);
