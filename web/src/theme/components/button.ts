import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    textTransform: "uppercase",
    fontWeight: 500,
    rounded: "none",
  },
  sizes: {},
  variants: {
    primary: {
      bg: "brand",
      color: "#fff",
    },
    secondary: {
      bg: "chipBg",
      color: "textSecondary",
    },
    callToAction: {
      bg: "callToAction",
      color: "primaryInverse",
    },
    bordered: {
      bg: "transparent",
      color: "callToAction",
      borderWidth: 1,
      borderColor: "callToAction",
    },
  },
  defaultProps: {},
};
