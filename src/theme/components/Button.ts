import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "md",
  },
  sizes: {
    md: {
      fontSize: "md",
      px: 4,
      py: 2,
    },
  },
  variants: {
    solid: {
      bg: "brand.500",
      color: "white",
      _hover: {
        bg: "brand.600",
      },
    },
    outline: {
      borderColor: "brand.500",
      color: "brand.500",
      _hover: {
        bg: "brand.50",
      },
    },
  },
};

export default Button;
