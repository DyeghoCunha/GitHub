import { Box, Center, GridItem, Heading, HStack, Image, Mark, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import logo from "@/assets/image/logo.svg"
import GradientText from '@/components/atoms/GradientText/GradientText'
import ServiceCard from '@/components/molecules/ServiceCard/ServiceCard'
import { segmentProps, servicesProps } from '@/lib/props'
import HermesCharacter from "@/components/TextOpacityScroll/HermesCharacter/HermesCharacter"
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionBox = motion(Box);
export default function Segmentos() {


  const props = segmentProps;
  const paragraph = "Segmentos"

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])



  return (
    <Box as='section' w="100vw"    h="100vh"
      bgGradient="linear(180deg, rgba(242,242,243,1) 0%,rgba(242,242,243,1) 50% , rgba(241,226,194,1)100%)"
      position="relative"
      ref={container}
    >
      <VStack w="100%" h="100%">

        <Box pl="120px" mt="40px" w="100%">
          <HermesCharacter colorProp={""} fontSize={""}  paragraph={paragraph} />
        </Box>


        
        <Box h="90px"></Box>
        <HStack justifyContent="space-around" alignItems="center" px="80px">
          <Center w="100%" h="100%"  >
            <SimpleGrid columns={3} gap={3} data-scroll data-scroll-speed={0.1}>
              {props.map((card, index) => (
                <GridItem key={index}><ServiceCard name={card.name} image={card.image} /></GridItem>
              ))}
            </SimpleGrid>
          </Center>

          <Center w="100%" px="40px" mb="100px" h="100%" pt="7%" gap="60px" >
            <VStack w="100%" h="100%" data-scroll data-scroll-speed={0.1}>
              <Text letterSpacing="3px" textAlign="right" fontSize="21px" mb="80px" >
                Unindo nossa experiência, profissionais
                treinados e a diversidade da nossa atuação
                nas mais diversas áreas, temos expertise para
                fornecer a solução ideal para o seu negócio.</Text>

              <VStack  alignItems="end">
                <Heading lineHeight="50px" textAlign="right">Seja qual for a sua
                  necessidade, estamos aqui
                  para impulsionar o seu sucesso
                </Heading>

                <GradientText style={{ fontStyle: "italic", letterSpacing: "3px", textAlign: "right", fontSize: "35px" }}>- relaxe enquanto nós
                  fazemos as contas!</GradientText>
              </VStack>

            </VStack>
          </Center>

        </HStack>
        <MotionBox w="100%" style={{ height }}
          position="relative"
          mt="300px"
          zIndex={20}
           
        >
          <Box
            bgColor="rgba(241,226,194,1)"
            h="1550%"
            w="100%"
            left="0"
            borderRadius="0 0 50% 50%"
            zIndex={1}
           
            boxShadow="0px 60px 50px rgba(0, 0, 0, 0.748)"

          ></Box>
        </MotionBox >
      </VStack>
    </Box >
  )
}
