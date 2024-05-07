"use client"

import { Box, Text, useStyleConfig } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type LinkHeaderType = {
  href: string,
  children: React.ReactNode
}

const MotionBox = motion(Box)

export default function LinkHeader({ href, children }: LinkHeaderType) {
  const path = usePathname()
  const styles = useStyleConfig("Box", {})
  return (
    <Box
      py="2px"
      px="10px"
      borderRadius="10px"
      boxSizing="border-box"
      border={path === href ? "1px solid #f2ab21" : ""}
      justifyContent="center"
      alignItems="center"
    >
      <Link href={href} ><Text color="hermesWhite.500" 
      _hover={{
        color:path === href ? "hermesWhite.500" :"hermesGold.500"}}
        >{children}</Text>
       
        </Link>
    </Box>
  )
}
