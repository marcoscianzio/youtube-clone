import { ComponentStyleConfig } from "@chakra-ui/react";

export const Input: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    search: {
      field: {
        bg: "searchBg",
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "searchBorder",
        boxShadow: "inset 1px 1px 1px #00000017",
        _focus: {
          borderColor: "searchInputBorder",
          boxShadow: "inset 1px 1px 2px #00000047",
        },
        _placeholder: {
          color: "textSecondary",
        },
      },
    },
    outline: {
      field: {
        rounded: "md",
        _focus: {
          boxShadow: "none",
          outline: "none",
          borderColor: "themedBlue",
        },
        _placeholder: {
          fontSize: "sm",
          color: "textDisabled",
        },
      },
    },
  },
  defaultProps: {},
};
