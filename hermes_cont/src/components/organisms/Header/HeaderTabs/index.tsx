"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Image, HStack, Text, Box } from '@chakra-ui/react';
import LinkHeader from '@/components/atoms/LinkHeader';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { css } from '@emotion/react';
import Rounded from '@/common/RoundedButton';
import Magnetic from '@/common/Magnetic';
import StickyCursor from '@/common/Sticky/stickyCursor/StickyCursor';

import styles from './style.module.scss';
import { AnimatePresence } from 'framer-motion';
function HeaderTab() {

  const original = () => {
    return (
      <HStack>

        <LinkHeader href="/"><Text fontSize="25px">Home</Text></LinkHeader>
        <LinkHeader href="/Ferramentas"><Text fontSize="25px">Sobre</Text></LinkHeader>
        <LinkHeader href="/Ferramentas"><Text fontSize="25px">Serviços</Text></LinkHeader>
        <LinkHeader href="/Ferramentas"><Text fontSize="25px">Time</Text></LinkHeader>
        <LinkHeader href="/Ferramentas"><Text fontSize="25px">Estrutura</Text></LinkHeader>
        <HeaderMenu />
      </HStack>
    )
  }

  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);
  const stickyElement = useRef(null);
  const stickyElement2 = useRef(null);
  const stickyElement3 = useRef(null);


  return (




    <HStack gap="40px" className={styles.nav} >
      <Magnetic>
        <Box  position="relative">
          <LinkHeader href="/"><Text fontSize="25px">Home</Text></LinkHeader>
        </Box>
      </Magnetic>
      <Magnetic>
        <Box position="relative">
          <LinkHeader href="/Ferramentas"><Text fontSize="25px">Sobre</Text></LinkHeader>
        </Box>
      </Magnetic>
      <Magnetic>
        <Box position="relative">
          <LinkHeader href="/Ferramentas"><Text fontSize="25px">Serviços</Text></LinkHeader>
        </Box>
      </Magnetic>
      <Magnetic>
        <Box position="relative" mr="50px">
          <LinkHeader href="/Ferramentas"><Text fontSize="25px">Time</Text></LinkHeader>
        </Box>
      </Magnetic>


      <HeaderMenu />
    </HStack>



  );
}

export default HeaderTab;
