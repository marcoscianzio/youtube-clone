import { ComponentStyleConfig } from "@chakra-ui/react";

export const Badge: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    solid: {
      bg: "chipBg",
      color: "textSecondary",
    },
  },
  defaultProps: {
    variant: "solid",
  },
};
