import { ComponentStyleConfig } from "@chakra-ui/react";

const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      borderColor: "brand.500",
      _hover: {
        borderColor: "brand.600",
      },
      _focus: {
        borderColor: "brand.600",
        boxShadow: "0 0 0 1px brand.600",
      },
    },
  },
  sizes: {
    md: {
      field: {
        fontSize: "md",
        px: 4,
        py: 2,
      },
    },
  },
  variants: {
    outline: {
      field: {
        borderColor: "brand.500",
        _hover: {
          borderColor: "brand.600",
        },
        _focus: {
          borderColor: "brand.600",
          boxShadow: "0 0 0 1px brand.600",
        },
      },
    },
  },
};

export default Input;
