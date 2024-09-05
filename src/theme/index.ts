import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import Button from "./components/Button";
import Input from "./components/Input";
import spacing from "./spacing";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#e3f2f9",
      100: "#c5e4f3",
      200: "#a2d4ec",
      300: "#7ac1e4",
      400: "#47a9da",
      500: "#0088cc",
      600: "#007ab8",
      700: "#006ba1",
      800: "#005885",
      900: "#003f5e",
    },
  },

  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },

  styles: {
    global: {
      "html, body": {
        backgroundColor: "gray.50",
        color: "gray.800",
      },
    },
  },

  components: {
    Button,
    Input,
  },
  space: spacing.space,
});

export default customTheme;
