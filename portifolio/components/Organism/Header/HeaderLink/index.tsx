import { Box, Center, Image, Text, useStyleConfig } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import linkHoverLight from "@/assets/image/linkHoverLight.gif"
import linkHoverDark from "@/assets/image/linkHoverDark.gif"
import { useThemeContext } from '@/context/ThemeContext'

type LinkHeaderType = {
  href: string,
  children: React.ReactNode
}



export default function HeaderLink({ href, children }: LinkHeaderType) {
  const path = usePathname()
  const styles = useStyleConfig("Box", {})
  const {theme} = useThemeContext()

  return (
    <Center position="relative">
      <Box
        p="10px"
        borderRadius="10px"
        boxSizing="border-box"
        border={path === href ? "1px solid rgba(255, 255, 255, 0.18)": ""}
        justifyContent="center"
        alignItems="center"
        zIndex={10}
        bg={path === href ? "rgba(255, 255, 255, 0.1)": ""} // Cor de fundo semi-transparente
        backdropFilter={path === href ? "blur(10px)" : ""} // Efeito de desfoque
        boxShadow={path === href ? "0 4px 6px 0 rgba(31, 38, 135, 0.37)" : ""}// Sombra da caixa
       
      >
        <Link  href={href}><Text fontSize="18px">{children}</Text></Link>
      </Box>
      
      {path === href ? (
  <Box zIndex={2} position="absolute" w="100%" h="100%" left="50%" top="50%" transform="translate(-50%, -50%)">
    <Image py={2} w="120%" h="100%" src={theme?linkHoverLight.src:linkHoverDark.src} />
  </Box>) : (<Box></Box>)
}

    </Center>
  )
}
