import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, HStack, Image, Box,Flex, Text, Spacer } from '@chakra-ui/react';

import image from "@/assets/image/img1.jpg"
import HeaderTab from './HeaderTabs';
import HeaderLogin from './HeaderLogin';
import HeaderHamburger from './HeaderHamburger';

function Header() {

  const [tabIndex, setTabIndex] = useState(0);
  

  return (
   <Flex justifyContent="space-around" alignItems="end" p={0} w="100%" borderBottom="3px solid rgba(255,255,255,0.1)">
    <HStack>
    <Image alignItems="start" w={20} h={20} borderRadius="full" src={image.src}/>
    <Text fontSize="30px"> SamuCats Dev Team</Text>
    </HStack>
    <HeaderTab/>
    <Box w="10px"></Box>
    <HeaderLogin/>
    <HeaderHamburger/>
   </Flex>
  );
}

export default Header;
