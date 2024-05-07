"use client"

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeContext, useThemeContext } from "@/context/ThemeContext";
import { lightTheme,darkTheme } from "@/styles/theme";
import { useEffect } from "react";

const ThemeContainer = ({ children }) => {
  const { theme } = useThemeContext();

  return (
    <ChakraProvider resetCSS theme={theme? lightTheme:darkTheme}>
      {children}
    </ChakraProvider>
  );
};

export default ThemeContainer;
