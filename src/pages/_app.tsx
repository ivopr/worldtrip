import "swiper/swiper-bundle.min.css";
import "../styles/swiper.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { theme } from "../styles/theme";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
