import { Icon, IconProps } from "@chakra-ui/react";

export const MainIcon = (props: IconProps) => (
  <Icon
    fill="textPrimary"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    {...props}
  >
    <g>
      <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
    </g>
  </Icon>
);
