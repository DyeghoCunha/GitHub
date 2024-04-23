import { Box, Card, Center, Heading, HStack, Mark, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import background from "@/assets/image/hermesCont.jpeg"
import GradientText from '@/components/atoms/GradientText/GradientText'





export default function HomeSection() {
  return (
    <Box overflow="hidden" as='section' w="100vw" h="100vh" bgImage={background.src} bgPosition="center" bgSize="cover" bgRepeat="no-repeat" >
      <HStack justifyContent="space-around" alignItems="center">
        <HStack justifyContent="center" alignItems="center" gap={0} mt="40%" >
          <Card bgColor="hermesBlue.rgba" backdropFilter="blur(5px)">
            <Heading px={2} fontSize="80px" color="hermesWhite.500" >
              Relaxe enquanto <Mark variant="gradientGold"> nós fazemos as contas</Mark>
            </Heading>
          </Card>
        </HStack>
      </HStack>
    </Box>
  )
}
