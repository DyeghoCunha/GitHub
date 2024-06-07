import Btn_LogoSidebar from '@/components/Atom/Btn_LogoSidebar'
import { Box, Button, Flex, HStack, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import HeaderLink from './HeaderLink'

export default function Header() {
  return (
    <HStack zIndex={50} w="100%" h="60px"  backgroundColor="rgba(255,255,255,0.5)" borderBottom="3px solid orange">
      <Flex w="100%" justify="center" align="center" >

        <HStack gap={10}>
          <HeaderLink href='/' >Home</HeaderLink>
          <HeaderLink href='/About'>About</HeaderLink>
          <HeaderLink href='/Projects'>Projects</HeaderLink>
          <HeaderLink href='/Blog'>Blog</HeaderLink>
        </HStack>
      </Flex>
    </HStack>
  )
}
