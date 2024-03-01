import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, HStack, Image, Box, Flex, Text, Spacer } from '@chakra-ui/react';

import logo from "@/assets/image/logov2.png"
import HeaderTab from './HeaderTabs';
import HeaderLogin from './HeaderLogin';
import HeaderHamburger from './HeaderHamburger';
import Btn_ThemeMode from '@/components/atoms/Btn_ThemeMode';

function Header() {

  const [tabIndex, setTabIndex] = useState(0);


  return (
    <header>
      <Box  m={0} p={0}>
        <Flex backgroundColor="gray.600" h="60px"justifyContent="space-around" alignItems="end"  p={0} w="100%" borderBottom="4px solid rgba(255,165,0,0.5)">
          <Box w="300px"></Box>
          <HeaderTab />
          <Box mb={0}>
            <Btn_ThemeMode />
          </Box>
          <Box w="10px"></Box>
          <HeaderLogin />
          <HeaderHamburger />
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
