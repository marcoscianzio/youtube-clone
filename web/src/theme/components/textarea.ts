import { ComponentStyleConfig } from "@chakra-ui/react";

export const Textarea: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    outline: {
      rounded: "md",
      focusBorderColor: "themedBlue",
      _focus: {
        boxShadow: "none",
        outline: "none",
      },
      _placeholder: {
        fontSize: "sm",
        color: "textDisabled",
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
};
