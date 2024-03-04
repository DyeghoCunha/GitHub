import { Box, HStack, Icon, Text } from '@chakra-ui/react'
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
  icon: IconType;
  href: string;
  children: React.ReactNode
}

const TextComponent = ({ isOpen, children }: TextComponentType) => {


  const MotionBox = motion(Box)

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 10 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </MotionBox>
      )}
    </AnimatePresence>
  );
};


export default function SidebarLink({ isOpen, icon, href, children }: SidebarLink) {


  return (

    <HStack  >
      <Link href={href}  >
        <Icon m="0" p="0" as={icon} boxSize={10} _hover={{ color: "#FF5349" }} />
      </Link>
      <Link href={href}>
        <TextComponent isOpen={isOpen} ><Text fontSize="20px" _hover={{ bgGradient: "linear(to-r, orange, red)", bgClip: "text" }}>{children}</Text></TextComponent>
      </Link>
    </HStack>
  )
}
