import { Box, Center, GridItem, Heading, HStack, Image, Mark, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import logo from "@/assets/image/logo.svg"
import GradientText from '@/components/atoms/GradientText/GradientText'
import ServiceCard from '@/components/molecules/ServiceCard/ServiceCard'
import { servicesProps } from '@/lib/props'
import { motion, useInView } from 'framer-motion'
import { slideUp } from "./animation.js"
import GradientBox from '@/components/atoms/GradientBox/GradientBox.jsx'
import HermesCharacter from '@/components/TextOpacityScroll/HermesCharacter/HermesCharacter.jsx'


const MotionSpan = motion(Text)

export default function Servicos() {


  const props = servicesProps;
  const paragraph = "Serviços"

  const phrase = "Temos a solução ideal para você e o seu negócio";
  const description = useRef(null);
  const isInView = useInView(description)


  return (
    <Box ref={description} as='section' w="100vw" h="100vh " mt="50px"
      bgGradient="linear(130deg, rgba(241,226,194,1) 0%, rgba(242,242,243,1) 40%, rgba(242,242,243,1) 100%)" >
      <VStack h="100vh" w="100%">
        <Box pl="120px" pt="80px"  w="100%" mb={0} pb={0} >
          <HermesCharacter colorProp={""} fontSize={{base:"100px",md:"130px",xxl:"180px"}} paragraph={paragraph} />
        </Box>
        <HStack  justifyContent="space-between" mt={0} pt={0} alignItems="center" h="100%" px="40px">
          <Center w="50%" h="100%" pl="40px"  position="relative"  >
            <Text m={0} fontSize={{ base: "18px", md: "5vw" }} lineHeight="1.5" fontWeight="900" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              {
                phrase.split(" ").map((word, index) => {
                  return (
                    <Text as="span" key={index} color="hermesGold.500" position="relative" fontStyle="Fantasy" overflow="hidden" display="inline-flex" mr="20px" >
                      <MotionSpan variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                        {word}
                      </MotionSpan>
                    </Text>
                  )
                })
              }

            </Text>
          </Center>
          <Center w="70%" h="100%"  >
            <SimpleGrid columns={3} gap={3} data-scroll data-scroll-speed={0.1}>
              {props.map((card, index) => (
                <GridItem key={index} ><ServiceCard name={card.name} image={card.image} /></GridItem>
              ))}
            </SimpleGrid>

          </Center>
        </HStack>
      </VStack>
    </Box>
  )
}
