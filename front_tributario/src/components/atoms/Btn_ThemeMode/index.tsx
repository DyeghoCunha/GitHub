import { Box, Button } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useThemeContext } from "@/context/ThemeContext";
import sun from "@/assets/image/sun.gif";
import moon from "@/assets/image/moon.gif";

const MotionButton = motion(Box);

export default function Btn_ThemeMode() {
  const { toggleTheme, theme } = useThemeContext();
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.set({ rotate: 0 });
    await controls.start({ rotate: 360, opacity: 0 });
    toggleTheme();
    controls.start({ opacity: 1 });
  };

  return (
    <Box mb="10px">
      <MotionButton
        borderRadius="full"
        variant="ghost"
        backgroundImage={`url('${theme ? moon.src : sun.src}') !important`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        h="40px"
        w="40px"
        onClick={handleClick}
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: "center" }}
      />
    </Box>
  );
}
