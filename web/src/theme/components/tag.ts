import { ComponentStyleConfig } from "@chakra-ui/react";

export const Tag: ComponentStyleConfig = {
  parts: ["container", "label", "closeButton"],
  baseStyle: {
    container: {
      textTransform: "capitalize",
    },
  },
  sizes: {},
  variants: {
    solid: {
      container: {
        bg: "chipBg",
        color: "textPrimary",
        rounded: "full",
        borderWidth: 1,
        borderColor: "percentLayer",
      },
    },
  },
  defaultProps: {
    variant: "solid",
    size: "lg",
  },
};
