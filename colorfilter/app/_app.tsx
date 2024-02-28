import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ItemColorProvider } from "@/context/weaponsContext";




export default function App({ Component, pageProps }:AppProps ) {



  return (
    <ChakraProvider theme={theme}>
      <ItemColorProvider>
        <Component {...pageProps} />
        </ItemColorProvider>
    </ChakraProvider>
  );
}
