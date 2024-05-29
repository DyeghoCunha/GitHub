import { Box, Card, Center, Heading, HStack, Mark, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import background from "@/assets/image/bannerhome2.svg"
import bgImage from "@/assets/image/bannerImage.png"
import bgSide from "@/assets/image/bannerLateral.png"
import GradientText from '@/components/atoms/GradientText/GradientText'





export default function HomeSection() {
  return (
    <Box as='section' w="100%" pt="30px" position="relative" h={{ base: "210px", md: "100vh" }} bgColor="hermesBlue.500" >
      <Box overflow="hidden"
        as='section' w="100%"
        position="absolute" h="100vh" bgImage={bgImage.src} bgPosition="start" bgSize="contain" bgRepeat="no-repeat">
      </Box>

      <Box display={{ base: "none", md: "flex" }} bgImage={bgSide.src} overflow="hidden" w="100%" right="0" position="absolute" h="100%" bgPosition="end" bgSize="cover" bgRepeat="no-repeat"></Box>

      <Text bgColor="rgba(40, 40, 60,0.8)" p={3}
        textAlign="center"
        borderRadius="8px" boxShadow="0px 4px 8px black"
        backdropFilter="blur(10px)" 
        data-scroll data-scroll-speed={0.5}
        position="absolute" 
        bottom={{ base: "-75px", xl: "-330px", xxl: "-420px" }} opacity="1" color="white"
        fontSize="8vw" w="100%" lineHeight="8vw" >Relaxe enquanto
        <GradientText style={""}> nós fazemos as contas</GradientText></Text>
    </Box>
  )
}
