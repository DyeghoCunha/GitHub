import { Box, useStyleConfig } from '@chakra-ui/react'
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
    <MotionBox
      p="10px"
      borderRadius="10px"
      boxSizing="border-box"
      border={path === href ? "2px solid orange" : ""}
      justifyContent="center"
      alignItems="center"
      sx={styles}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{ repeat: Infinity, duration: 2 }}
      variants="shimmer"
    >
      <Link href={href}>{children}</Link>
    </MotionBox>
  )
}
