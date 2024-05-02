"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Image, HStack, Text } from '@chakra-ui/react';
import LinkHeader from '@/components/atoms/LinkHeader';

function HeaderTab() {
  return (
    <HStack>
      <LinkHeader href="/"><Text fontSize="25px">Home</Text></LinkHeader>
      <LinkHeader href="/Ferramentas"><Text fontSize="25px">Sobre</Text></LinkHeader>
      <LinkHeader href="/Ferramentas"><Text fontSize="25px">Serviços</Text></LinkHeader>
      <LinkHeader href="/Ferramentas"><Text fontSize="25px">Time</Text></LinkHeader>
      <LinkHeader href="/Ferramentas"><Text fontSize="25px">Estrutura</Text></LinkHeader>
      <LinkHeader href="/Ferramentas"><Text fontSize="25px">Ferramentas</Text></LinkHeader>
    </HStack>
  );
}

export default HeaderTab;
