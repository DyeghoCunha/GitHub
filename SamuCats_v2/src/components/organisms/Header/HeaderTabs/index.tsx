"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Image, HStack, Text } from '@chakra-ui/react';
import LinkHeader from '@/components/atoms/LinkHeader';

function HeaderTab() {
  return (
    <HStack>
      <LinkHeader href="/"><Text fontSize="20px">Home</Text></LinkHeader>
      <LinkHeader href="/Developers"><Text fontSize="20px">Developers</Text></LinkHeader>
      <LinkHeader href="/Projects"><Text fontSize="20px">Projects</Text></LinkHeader>
      <LinkHeader href="/Forum"><Text fontSize="20px">Forum</Text></LinkHeader>
      <LinkHeader href="/Blog"><Text fontSize="20px">Blog</Text></LinkHeader>
    </HStack>
  );
}

export default HeaderTab;
