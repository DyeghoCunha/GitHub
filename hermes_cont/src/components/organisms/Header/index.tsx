import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, HStack, Image, Box, Flex, Text, Spacer, useDisclosure } from '@chakra-ui/react';

import HeaderTab from './HeaderTabs';
import logo from "@/assets/image/logoHeaderHermes.png"


function Header() {

  return (
    <HStack as='header' zIndex={1000} backgroundColor="hermesBlue.400" h="80px" boxShadow="0px 5px 10px black">
      <Box ml={20} w="300px"><Image h="70px" src={logo.src} alt='Logo' /></Box>
      <HStack w="100%" h="100%" pt={5} pr="50px" justifyContent="center" alignItems="center">
        <HeaderTab />
      </HStack>
    </HStack>
  );
}

export default Header;
