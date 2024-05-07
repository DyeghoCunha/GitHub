import { Box, Center, GridItem, Heading, HStack, Image, Mark, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from "@/assets/image/logo.svg"
import GradientText from '@/components/atoms/GradientText/GradientText'
import ServiceCard from '@/components/molecules/ServiceCard/ServiceCard'
import { segmentProps, servicesProps } from '@/lib/props'

export default function FourthSection() {


  const props = segmentProps;

  return (
    <Box as='section' w="100vw" h="100vh" bgGradient="linear(180deg, rgba(242,242,243,1) 0%,rgba(242,242,243,1) 50% , rgba(241,226,194,1)100%)" >
      <HStack justifyContent="space-around" alignItems="center" px="80px">
        <Center w="60%" h="100vh"  >
          <SimpleGrid columns={3} gap={3}>
            {props.map((card, index) => (
              <GridItem key={index}><ServiceCard name={card.name} image={card.image} /></GridItem>
            ))}
          </SimpleGrid>
        </Center>
        <Center w="40%" h="100vh" px="40px" pt="50px" gap="60px">
          <VStack w="100%" h="100%" py="130px" >
            <Text letterSpacing="3px" textAlign="right" fontSize="21px" mb="80px" >Unindo nossa experiência, profissionais
              treinados e a diversidade da nossa atuação
              nas mais diversas áreas, temos expertise para
              fornecer a solução ideal para o seu negócio.</Text>

            <VStack w="94%" alignItems="end">
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
    </Box >
  )
}
