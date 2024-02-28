import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type LinkHeaderType = {
  href: string,
  children: React.ReactNode
}


export default function LinkHeader({ href, children }: LinkHeaderType) {

  const path = usePathname()

  return (
   
    <Box p="10px" m="10px" borderRadius="10px" boxSizing="border-box" border={path===href?"2px solid orange":""} justifyContent="center" alignItems="center">
      <Link href={href}>{children}</Link>
    </Box>
   
  )
}
