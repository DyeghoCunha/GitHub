import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Image, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import LinkHeader from '@/components/atoms/LinkHeader';

function HeaderTab() {

  const [tabIndex, setTabIndex] = useState(0);


  return (
    <HStack>
      <LinkHeader href="/"><Text fontSize="20px">Home</Text></LinkHeader>
      <LinkHeader href="/Developers"><Text fontSize="20px">Developers</Text></LinkHeader>
      <LinkHeader href="/Projects"><Text fontSize="20px">Projects</Text></LinkHeader>
    </HStack>
  );
}

export default HeaderTab;
