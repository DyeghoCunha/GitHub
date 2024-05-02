"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, HStack, Image, Box, Flex, Text, Spacer, useDisclosure } from '@chakra-ui/react';

import HeaderTab from './HeaderTabs';
import logo from "@/assets/image/logoHeaderHermes.png"
function Header() {

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <HStack as='header' zIndex={10000} backgroundColor="hermesBlue.400" h="80px">
      <Box ml={20} w="300px"><Image h="70px" src={logo.src} alt='Logo' /></Box>
      <HStack w="100%" h="100%" pt={5} pr="50px" justifyContent="center" alignItems="center">
        <HeaderTab />
        </HStack>
      
    



    </HStack>
  );
}

export default Header;
