import { ComponentStyleConfig } from "@chakra-ui/react";

export const Form: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    default: {
      container: {
        _focusWithin: {
          label: {
            color: "callToAction",
          },
        },
        label: {
          mb: 0,
          textTransform: "capitalize",
          fontSize: "small",
          color: "textSecondary",
        },
      },
    },
  },
  defaultProps: {
    variant: "default",
  },
};
