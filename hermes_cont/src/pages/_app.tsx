import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { lightTheme } from "@/styles/theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider theme={lightTheme}>
      
        {getLayout(<Component {...pageProps} />)}
     
      </ChakraProvider>
  );
}
