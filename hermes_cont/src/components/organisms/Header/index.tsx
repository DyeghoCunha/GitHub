import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, HStack, Image, Box, Flex, Text, Spacer, useDisclosure, useMediaQuery } from '@chakra-ui/react';

import { HeaderTab } from './HeaderTabs';
import logo from "@/assets/image/logoHeaderHermes.png"
import logoMobile from "@/assets/image/logo.png"


function Header() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <HStack
      as='header'
      zIndex={1000}
      backgroundColor="hermesBlue.400"
      h={{ base: "10%", md: "80px" }}
      boxShadow="0px 5px 10px black"
      borderRadius="0px 0px 20% 20%">
      <Box
        ml={{ base: "0%", md: "10%" }}
        w={{ base: "250px", md: "300px" }}>
        <Image
          h={{ base: "100%", md: "70px" }}
          src={logo.src}
          alt='Logo' />
      </Box>
      <HStack
        w="100%"
        h="100%"
        pt={5}
        pr={{ base: 0, md: "10%" }}
        justifyContent="center"
        alignItems="center">
        {isLargerThan800 ? <HeaderTab.Desktop /> : <HeaderTab.Mobile />}
      </HStack>
    </HStack>
  );
}

export default Header;
