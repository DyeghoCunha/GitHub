import moon from "@/assets/image/moon.gif"
import nightbg from "@/assets/image/night.gif"
import daybg from "@/assets/image/day.gif"
import sun from "@/assets/image/sun.gif"

import { css } from "@emotion/react";


import { CSSObject } from "@emotion/react";

import { Box } from "@chakra-ui/react";
import { useThemeContext } from "@/context/ThemeContext";
import { FC } from "react";

const Switch_ThemeMode: FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Box
      width="80px"
      height="30px"
      backgroundImage={!theme ? nightbg.src:daybg.src}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      cursor="pointer"
      position="relative"
      onClick={toggleTheme}
      borderRadius="20px"
      border="2px solid orange"
      transition="background-image 0.5s ease-in-out"
      boxShadow={!theme ? " -2px -2px 5px #0a0a0a, 2px 2px 5px #141414" : " -2px -2px 5px #f3f3f3, 2px 2px 5px #e0e0e0"}

    >
      <Box
        position="absolute"
        top="2.5px"
      //border="3px solid orange"
        left={theme ? "50px" : "2.5px"}
        width="25px"
        height="25px"
        backgroundImage={theme ? sun.src:moon.src}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        
        borderRadius="full"
        transition="left 0.5s linear, transform 0.5s linear,background-image 0.5s ease-in-out"
        transform={theme ? "rotate(360deg)" : "rotate(-360deg)"}
      />
    </Box>
  );
};

export default Switch_ThemeMode;
