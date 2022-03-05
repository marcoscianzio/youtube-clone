import { Icon, IconProps } from "@chakra-ui/react";

export const SubsIcon = (props: IconProps) => (
  <Icon
    fill="textPrimary"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    {...props}
  >
    <g>
      <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
    </g>
  </Icon>
);
