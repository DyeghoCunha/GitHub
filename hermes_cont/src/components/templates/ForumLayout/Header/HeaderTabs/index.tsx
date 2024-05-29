"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue, Image, HStack, Text, Box } from '@chakra-ui/react';
import LinkHeader from '@/components/atoms/LinkHeader';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Magnetic from '@/common/Magnetic';

import styles from './style.module.scss';
import { motion } from 'framer-motion';



const MotionBox = motion(Box)

function HeaderTabForum() {



  function handleScrollToSection(sectionId: any) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const HoverContainer = ({ children }: any) => {
    return (
      <MotionBox
        initial={{ opacity: 1 }}
        whileHover={{
          opacity: 1,
          outline: "2px solid rgba(0,0,0,0.3)",
          borderRadius: "8px",
          boxShadow:
            "inset 4px 4px 8px black,inset -4px -4px 8px black, -4px -4px 8px rgba(255,255,255,0.1),4px 4px 8px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
        transition={{ duration: 0.2, ease: "linear" }}
      >{children}</MotionBox>
    )
  }


  return (

    <HStack gap="40px" className={styles.nav} >
      <HoverContainer>
          <Box position="relative">
            <Box >
              <LinkHeader href="/" onClick={()=>{}}>Home</LinkHeader>
            </Box>
          </Box>
      </HoverContainer>
      <HeaderMenu />
    </HStack>



  );
}

export default HeaderTabForum;
