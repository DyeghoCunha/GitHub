import { ChakraProvider } from "@chakra-ui/react";
import { darkTheme } from "@/styles/theme"
import "../styles/global.css"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={darkTheme} cssVarsRoot={undefined} >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
