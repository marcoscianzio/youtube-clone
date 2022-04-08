import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "@fontsource/roboto";
import type { AppProps } from "next/app";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <ColorModeScript initialColorMode="dark" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
