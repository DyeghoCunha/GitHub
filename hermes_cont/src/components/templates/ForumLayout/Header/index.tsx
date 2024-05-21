import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, HStack, Image, Box, Flex, Text, Spacer, useDisclosure } from '@chakra-ui/react';

import logo from "@/assets/image/logoHeaderHermes.png"
import HeaderTabForum from './HeaderTabs';


function HeaderForum() {

  return (
    <HStack as='header' zIndex={1000} backgroundColor="hermesBlue.400" h="80px" boxShadow="0px 5px 10px black" borderRadius="0px 0px 20% 20%">
      <Box ml="10%" w="300px"><Image h="70px" src={logo.src} alt='Logo' /></Box>
      <HStack w="100%" h="100%" pt={5} pr="10%" justifyContent="center" alignItems="center">
        <HeaderTabForum />
      </HStack>
    </HStack>
  );
}

export default HeaderForum;
