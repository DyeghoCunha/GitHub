import { Box, HStack, Icon, Image, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib';
import { MdCalendarMonth } from 'react-icons/md'



type TextComponentType = {
  isOpen: boolean;
  children: React.ReactNode
}

type SidebarLink = {
  isOpen: boolean;
  icon: string;
  href: string;
  children: React.ReactNode
}

const TextComponent = ({ isOpen, children }: TextComponentType) => {


  const MotionBox = motion(Box)

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 10 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.01 }}
        >
          {children}
        </MotionBox>
      )}
    </AnimatePresence>
  );
};


export default function SidebarLink({ isOpen, icon, href, children }: SidebarLink) {


  return (

    <HStack w="100%" >
      <Box _hover={{ color: "#FF5349" }}width="40px" height="40px">
      <Link href={href}  >
        <Image m="0" p="0" src={icon} alt={href}  width="40px" height="40px"  />
      </Link>
      </Box>
      <Link href={href}>
        <TextComponent isOpen={isOpen} ><Text fontSize="15px" _hover={{ bgGradient: "linear(to-r,#2E7E17, #121C12)", bgClip: "text" }}>{children}</Text></TextComponent>
      </Link>
    </HStack>
  )
}
