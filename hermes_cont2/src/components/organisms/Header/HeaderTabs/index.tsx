"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Image, HStack, Text } from '@chakra-ui/react';
import LinkHeader from '@/components/atoms/LinkHeader';

function HeaderTab() {
  return (
    <HStack>
      <LinkHeader href="/"><Text fontSize="20px">Home</Text></LinkHeader>
      <LinkHeader href="/Ferramentas"><Text fontSize="20px">Ferramentas</Text></LinkHeader>
    </HStack>
  );
}

export default HeaderTab;
