"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, HStack, Image, Box, Flex, Text, Spacer, useDisclosure } from '@chakra-ui/react';

import HeaderTab from './HeaderTabs';
import HeaderLogin from './HeaderLogin';
import Switch_ThemeMode from '@/components/atoms/Switch_ThemeMode';
import { Modal_logIn } from '@/components/molecules/Modal_LogIn';

function Header() {

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box as='header'zIndex={10000}>
      <Box m={0} p={0} >
        <Flex backgroundColor="gray.600" h="60px" justifyContent="space-around" alignItems="center" p={0} w="100%" borderBottom="4px solid rgba(255,165,0,0.5)">
          <Box w="300px"></Box>
          <HeaderTab />
          <Box mb={0}>
          </Box>
          <Box w="10px"></Box>

          {/*<Switch_ThemeMode />
          <Modal_logIn isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
  <HeaderLogin  isOpen={isOpen} onOpen={onOpen}/>*/}

        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
