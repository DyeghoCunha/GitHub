"use client"

import { Box, Text, useStyleConfig } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type LinkHeaderType = {
  href: string,
  children: React.ReactNode
  onClick:Function
}

const MotionBox = motion(Box)

export default function LinkHeader({ href, children,onClick }: LinkHeaderType) {
  const path = usePathname()
  const styles = useStyleConfig("Box", {})
  let currentHash =""
  if (typeof window !== 'undefined') {

    currentHash = window.location.hash;

}
   const isSelected = currentHash === href
  return (
    <Box
      py="2px"
      px="10px"
      borderRadius="10px"
      boxSizing="border-box"
      border={isSelected ? "1px solid rgba(242,171,33,0.2) " : ""}
      boxShadow={isSelected ?"inset 2px 2px 6px rgba(242,171,33,0.5),inset -1px -1px 7px rgba(242,171,33,0.8)":""}
      justifyContent="center"
      alignItems="center"
    >
      <Link href={href} ><Text fontSize="25px" color="hermesWhite.500" 
      onClick={()=>onClick}
      _hover={{
        color:isSelected? "hermesWhite.500" :"hermesGold.500"}}
        >{children}</Text>
       
        </Link>
    </Box>
  )
}
