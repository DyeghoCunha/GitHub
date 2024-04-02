"use client"
import { Avatar, Box, Button, HStack, Text } from '@chakra-ui/react'
import Logo from "@/assets/image/logo.png"
import { motion } from "framer-motion"
import { ChevronRightIcon } from '@chakra-ui/icons';


const MotionIcon = motion(ChevronRightIcon)

export default function Btn_LogoSidebar({ isOpen, toggleOpen }: any) {
  return (
    <Box  bgColor="rgba(132, 213, 113, 1)" borderBottom="2px solid #457C49" display="flex"  position="relative" p="3.5px 25px 3.5px 5px" m={0} h="58px" w="318px">
      <HStack justifyContent="center" alignItems="center"  >
        <Avatar size="md" src={Logo.src} />
        <Text fontSize="20px" fontWeight="bold">Calculadora Tributária</Text>
        <Button onClick={()=>toggleOpen()}  w="20px" h="40px" variant="primary" borderRadius="full" position="absolute" right="-5">
          <MotionIcon boxSize={10} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.4 }}/>
        </Button>
      </HStack>
    </Box>
  )
}
