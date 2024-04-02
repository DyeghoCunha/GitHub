import Btn_LogoSidebar from '@/components/atoms/Btn_LogoSidebar'
import { useThemeContext } from '@/context/ThemeContext';
import { Box, Button, Divider, Flex, HStack, Icon, Link, Spacer, Stack, Text, useColorMode } from '@chakra-ui/react'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { MdCalendarMonth, MdMailLock } from "react-icons/md";
import SidebarLink from './SidebarLink';
import SidebarAccordion from './SidebarAccordion';
import { BsSignpost } from "react-icons/bs";
import { BsPersonVcard } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegFileCode } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaQuestion } from "react-icons/fa6";
import snImg from "@/assets/image/calc.png"
import tkImg from "@/assets/image/truck.png"
import sifImg from "@/assets/image/sif.png"
const MotionBox = motion(Box)

const sidebarVariants = {
  open: {
    width: '317.5px',
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
  closed: {
    width: '55px',
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
}


const Sidebar = ({ isOpen, toggleOpen }: any) => {

  const { theme } = useThemeContext()


  const sidebarLinks = [
    {
      href: "/",
      icon: snImg.src,
      text: "Simples Nacional"
    },
     {
      href: "/",
      icon: tkImg.src,
      text: "Comunicação de Transporte e Serviço"
    },
     {
      href: "/",
      icon: sifImg.src,
      text: "Locação de Bens Móveis"
    },
  ]

  return (

    <HStack>

      <HStack justifyContent="start" alignItems="start" zIndex="1001" >
        <Box position="fixed" zIndex="1001" top="0" left="0" >
          <Btn_LogoSidebar isOpen={isOpen} toggleOpen={toggleOpen} />
        </Box>
        <MotionBox
          as="aside"
          bgGradient={isOpen? ("linear(to-r,rgba(132, 213, 113, 1), #296B18)") :("linear(to-r,rgba(132, 213, 113, 1), rgba(132, 213, 113, 0.8))")}
          color={theme ? "black" : "white"}
          position="fixed"
          top="60px"
          left={0}
          height="100vh"
          variants={sidebarVariants}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}

        >
          <Flex
            as="nav"
            direction="column"
            align="start"
            justify="start"
            height="100%"
            pl={2}
            pt={10}
            gap={5}
          >

            {!isOpen?
            sidebarLinks.map((item,index) => (
              <SidebarLink key={index} href={item.href} icon={item.icon} isOpen={isOpen} >{item.text}</SidebarLink>
            )):
             sidebarLinks.map((item,index) => (
              <SidebarLink key={index} href={item.href} icon={item.icon} isOpen={isOpen} >{item.text}</SidebarLink>
            ))
            
          
          }

            {isOpen ? (<SidebarAccordion isOpen={isOpen} />) : <></>}

          </Flex>

        </MotionBox>
      </HStack>
      <Box
        position="fixed"
        top={0}
        left="0"
        right={0}
        bottom={0}
        bgColor="rgba(132, 213, 113, 0.3)"
        onClick={toggleOpen}
        zIndex={isOpen ? 1 : -1}
      ></Box>
    </HStack>
  )
}

export default Sidebar
