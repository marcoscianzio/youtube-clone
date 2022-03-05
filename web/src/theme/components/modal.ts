import { ComponentStyleConfig } from "@chakra-ui/react";

export const Modal: ComponentStyleConfig = {
  parts: [
    "dialogContainer",
    "dialog",
    "header",
    "closeButton",
    "body",
    "footer",
  ],
  baseStyle: {
    dialog: {
      bg: "bgDialog",
      shadow: "dark-lg",
    },
    header: {
      borderBottomWidth: 1,
      borderColor: "percentLayer",
    },
  },
  sizes: {},
  defaultProps: {},
};
