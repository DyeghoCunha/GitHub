import type { NextPage } from "next";
import type { AppProps } from "next/app";
import ThemeContainer from "@/components/templates/ThemeContainer";
import { ThemeProvider } from "@/context/ThemeContext";
import { ModalProvider } from "@/context/ModalContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <ThemeContainer>
        <ModalProvider>
        {getLayout(<Component {...pageProps} />)}
        </ModalProvider>
      </ThemeContainer>
      </ThemeProvider>
  );
}
