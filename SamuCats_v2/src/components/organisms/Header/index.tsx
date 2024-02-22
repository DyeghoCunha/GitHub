import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, HStack, Image, Box, Flex, Text, Spacer } from '@chakra-ui/react';

import logo from "@/assets/image/logov2.png"
import HeaderTab from './HeaderTabs';
import HeaderLogin from './HeaderLogin';
import HeaderHamburger from './HeaderHamburger';

function Header() {

  const [tabIndex, setTabIndex] = useState(0);


  return (
    <header>
      <Flex justifyContent="space-around" alignItems="end" mt="5px" p={0} w="100%" borderBottom="4px solid rgba(255,165,0,0.5)">
        <HStack>
          <Image alignItems="start" w="60px" h="60px" border="1px solid orange" borderRadius="full" src={logo.src} />
          <Text fontSize="30px" > SamuCats Dev Team</Text>
        </HStack>
        <HeaderTab />
        <Box w="10px"></Box>
        <HeaderLogin />
        <HeaderHamburger />
      </Flex>
    </header>
  );
}

export default Header;
