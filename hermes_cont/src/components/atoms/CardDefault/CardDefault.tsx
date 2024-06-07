import { Card } from '@chakra-ui/react'
import React from 'react'
import bgImage from "@/assets/image/marcaDagua.png"

export default function CardDefault({ children }: { children: React.ReactNode }) {
  return (
    <Card bgColor="hermesBlue.400" w="100%" h="100%" p={2} boxShadow=" 5px 4px 10px rgba(0,0,0,0.5)" 
       bgImg={bgImage.src}
      bgPos="center"
      bgSize="contain"
      bgRepeat="no-repeat"
    
    
    >
      {children}
    </Card>
  )
}
