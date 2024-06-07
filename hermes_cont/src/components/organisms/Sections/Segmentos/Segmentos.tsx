import { Box, Center, GridItem, Heading, HStack, Image, Mark, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
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
    <Box as='section' w="100vw" h={{ base: "100%", md: "100%" }}
      bgGradient="linear(180deg, rgba(242,242,243,1) 0%,rgba(242,242,243,1) 50% , rgba(241,226,194,1)100%)"
      position="relative"
      ref={container}
    >
      <VStack w="100%" h="100%">
        <Box pl={{ base: "10px", md: "120px" }} pt={{ base: "0px", md: "80px" }} w="100%" mb={0} pb={0} >
          <HermesCharacter colorProp={""} fontSize={{ base: "50px", md: "130px", xxl: "180px" }} paragraph={paragraph} />
        </Box>
        <Stack direction={{ base: "column", md: "row" }}
          justifyContent="space-around" mt={{ base: "20px", md: "130px" }}
          alignItems="center"
          px={{ base: "4px", md: "80px" }}>

          <Center w="100%" h="100%"  >
            <SimpleGrid columns={{ base: 2, md: 3 }} gap={{ base: 1, md: 3 }} data-scroll data-scroll-speed={0.1}>
              {props.map((card, index) => (
                <GridItem key={index}><ServiceCard name={card.name} image={card.image} /></GridItem>
              ))}
            </SimpleGrid>
          </Center>

          <Center w="100%" px={{ base: "4px", md: "40px" }} mb={{ base: "0px", md: "100px" }} h="100%" pt={{ base: "0%", md: "7%" }} gap={{ base: "10px", md: "60px" }} >
            <VStack w="100%" h="100%" data-scroll data-scroll-speed={0.1}>
              <Text
                letterSpacing="3px"
                textAlign={{ base: "start", md: "right" }}
                fontSize={{ base: "15px", md: "21px" }}
                mb={{ base: "10px", md: "80px" }}
                mt={{base:"10px",md:"0px"}}
              >
                Unindo nossa experiência, profissionais
                treinados e a diversidade da nossa atuação
                nas mais diversas áreas, temos expertise para
                fornecer a solução ideal para o seu negócio.</Text>

              <VStack alignItems="end">
                <Heading lineHeight={{ base: "15px", md: "50px" }} textAlign="right" fontSize={{ base: "15px", md: "51px" }}>
                  Seja qual for a sua
                  necessidade, estamos aqui
                  para impulsionar o seu sucesso
                </Heading>
                <Text fontStyle="italic" letterSpacing="3px" textAlign="right" fontSize={{ base: "15px", md: "35px" }} >
                  <GradientText style={""} >- relaxe enquanto nós
                    fazemos as contas!</GradientText>
                </Text>
              </VStack>

            </VStack>
          </Center>

        </Stack>
        <MotionBox w="100%" style={{ height }}
          position="relative"
          mt={{ base: "0px", md: "200px" }}
          zIndex={20}

        >
          <Box
            bgColor="rgba(241,226,194,1)"
            h={{ base: "500%", md: "1550%" }}
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
