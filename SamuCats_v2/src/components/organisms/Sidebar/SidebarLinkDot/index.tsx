import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, HStack, Icon, Link } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion';

import React from 'react'
import { IconType } from 'react-icons/lib';
import { MdCalendarMonth } from 'react-icons/md'



type TextComponentType = {
  isOpen: boolean;
  children: React.ReactNode
}

type SidebarLink = {
  isOpen: boolean;
  color: string;
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
          animate={{ opacity: 1, x: 20 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </MotionBox>
      )}
    </AnimatePresence>
  );
};


export default function SidebarLinkDot({ isOpen, color, href, children }: SidebarLink) {


  return (

    <HStack>
      <Link href={href}>
        <Icon viewBox='0 0 200 200' color={color}>
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
      </Link>
      <Link   href={href}>
        <TextComponent isOpen={isOpen}>{children}</TextComponent>
      </Link>
    </HStack>
  )
}
