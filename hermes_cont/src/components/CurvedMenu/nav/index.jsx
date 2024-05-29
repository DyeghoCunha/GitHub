import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import GradientText from '@/components/atoms/GradientText/GradientText';
import LinkHeader from '@/components/atoms/LinkHeader';
import HeaderMenu from '@/components/organisms/Header/HeaderMenu/HeaderMenu';
import HeaderMenuMobile from "@/components/organisms/Header/HeaderMenu/HeaderMenuMobile/HeaderMenuMobile"
const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

const MotionDiv = motion(Box)
export default function Nav({ isActive, setIsActive }) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <MotionDiv
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      h="100vh"
      bgColor="transparent"
      position="fixed"
      right={0}
      bottom={0}
      top={-3}
      color="white"
      borderBottom="10px solid rgba(255,255,255,0.3)"
      
      borderRadius="0px 0px 8px 8px"
      boxShadow=" inset 10px -40px 8px black"
    >
      <VStack
        height="100%"
        gap={0} overflow="auto"

      >
        <VStack
          fontSize="56px"
          m="0px"
          p={0}
          gap={0}
        >
          <Box
            color="hermesGold.500"
            //borderBottom="1px solid white"
            w="100vw"
            fontSize="51px"
            mt="10px"
            bgColor="hermesBlue.400"
          >
            <Text w="100%" textAlign="center"><GradientText style={""}>Menu</GradientText></Text>
          </Box>
          <HStack w="100vw" p={0} gap="0" m={0}
            borderLeft="5px solid #28283c"
            borderBottom="5px solid #28283c"
            borderTop="5px solid #28283c"

          >
            <Box bgColor="rgba(255,255,255,0.2)"
              outline="5px solid #28283c"
              borderRadius="8px " boxShadow="inset -4px -4px 8px black,inset 0px 4px 8px black" h="100%" w="100%"></Box>
            <Box bgColor="hermesBlue.400" h="100%" p={0} m={0}>
              <LinkHeader href="#home" onClick={() => handleScrollToSection('home')}><Text fontSize="25px">Home</Text></LinkHeader>
              <LinkHeader href="#sobre" onClick={() => handleScrollToSection('sobre')}><Text fontSize="25px">Sobre</Text></LinkHeader>
              <LinkHeader href="#servicos" onClick={() => handleScrollToSection('servicos')} ><Text fontSize="25px">Serviços</Text></LinkHeader>
              <LinkHeader href="#time" onClick={() => handleScrollToSection('time')} ><Text fontSize="25px">Time</Text></LinkHeader>
            </Box>
          </HStack>
          <Box zIndex={1000000000} overflow="auto" bgColor="hermesBlue.400">
            {/**<HeaderMenu />*/}
            <HeaderMenuMobile />
          </Box>
        </VStack>
        <Footer />
      </VStack>
      <Curve />
    </MotionDiv>
  )
}