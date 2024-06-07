import { Box, Center, GridItem, Heading, HStack, Image, Mark, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
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
    <Box ref={description} as='section' w="100vw" h="100vh " mt={{ base: "0px", md: "50px" }}
      bgGradient="linear(130deg, rgba(241,226,194,1) 0%, rgba(242,242,243,1) 40%, rgba(242,242,243,1) 100%)" >
      <VStack h="100vh" w="100%">
        <Box pl={{ base: "10px", md: "120px" }} pt={{ base: "0px", md: "80px" }} w="100%" mb={0} pb={0} >
          <HermesCharacter colorProp={""} fontSize={{ base: "50px", md: "130px", xxl: "180px" }} paragraph={paragraph} />
        </Box>
        <Stack direction={{ base: "column", md: "row" }} justifyContent="space-between" mt={0} pt={0} alignItems="center" h="100%" px={{ base: "2px", md: "40px" }}>
          <Center w={{ base: "100%", md: "50%" }} h="100%" pl={{ base: "10px", md: "40px" }} position="relative"  >
            <Text m={0} fontSize={{ base: "20px", md: "5vw" }} lineHeight="1.5" fontWeight="900" >
              {
                phrase.split(" ").map((word, index) => {
                  return (
                      <MotionSpan 
                      as="span" key={index} color="hermesGold.500" position="relative" fontStyle="Fantasy" overflow="hidden" display="inline-flex" mr={{ base: "3px", md: "20px" }} 
                      variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} >
                        <GradientText style={""}> {word}</GradientText>
                      </MotionSpan>
                  )
                })
              }

            </Text>
          </Center>
          <Center w={{ base: "100%", md: "70%" }} h="100%"  >
            <SimpleGrid columns={{ base: 2, md: 3 }} gap={{ base: 1, md: 3 }} data-scroll data-scroll-speed={0.1}>
              {props.map((card, index) => (
                <GridItem key={index} ><ServiceCard name={card.name} image={card.image} /></GridItem>
              ))}
            </SimpleGrid>

          </Center>
        </Stack>
      </VStack>
    </Box>
  )
}
