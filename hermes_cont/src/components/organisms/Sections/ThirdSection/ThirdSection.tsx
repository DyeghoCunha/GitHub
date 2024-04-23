import { Box, Center, Heading, HStack, Image, Mark, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from "@/assets/image/logo.svg"
import GradientText from '@/components/atoms/GradientText/GradientText'
import ServiceCard from '@/components/molecules/ServiceCard/ServiceCard'

export default function ThirdSection() {







  return (
    <Box as='section' w="100vw" h="100vh"  bgGradient="linear(38deg, rgba(241,226,194,1) 0%, rgba(242,242,243,1) 100%)" >
      <HStack justifyContent="space-around" alignItems="center" px="40px">
        <Center w="30%" h="100vh" px="40px" pt="50px" gap="60px">
          <Text fontSize="80px" variant="gradientGold" fontFamily={'fantasy'}>Temos a solução ideal para você e o seu negócio</Text>
        </Center>
        <Center w="70%" h="100vh"  >
      <ServiceCard/>
        </Center>
      </HStack>
    </Box>
  )
}
