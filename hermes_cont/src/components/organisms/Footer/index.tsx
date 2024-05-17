import { Box, Divider, HStack, Image, Link, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import ytLogo from "@/assets/image/youtube.png"
import img from "@/assets/image/footerHermes.png"


export default function Footer() {
  return (
    <Box as='footer' w="100vw" h="700px"border="1px solid red" bgColor="hermesBlue.400" bgImage={img.src} bgPos="center"
     bgRepeat="no-repeat" bgSize="fill">
     

    </Box >
  )
}
