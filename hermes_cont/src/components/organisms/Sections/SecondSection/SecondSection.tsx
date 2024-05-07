import { Box, Center, Heading, HStack, Image, Mark, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from "@/assets/image/logo.svg"
import GradientText from '@/components/atoms/GradientText/GradientText'

export default function SecondSection() {
  return (
    <Box as='section' w="100vw" h="100vh" >
      <HStack justifyContent="space-around" alignItems="center">
        <VStack w="50%" h="100vh" px="40px" pt="150px" gap="60px">
          <Heading color="hermesWhite.500">Sabemos que a sua empresa é única, tem
            necessidades singulares e detalhes
            importantes que precisam ser considerados
            para que o nosso trabalho seja efetivo.</Heading>
          <Box>
            <Text fontSize="30px" color="hermesWhite.500">
              Combinamos a essência do atendimento humanizado
              com a precisão e agilidade proporcionadas pela
              tecnologia para fornecer soluções contábeis eficientes,
              <GradientText style={{ fontWeight: "bold" }}>transformando a complexidade dos números em
                estratégias de sucesso para seus negócios.</GradientText>
            </Text>
          </Box>
          <Text fontSize="30px" color="hermesWhite.500">
            Buscamos ser parceiros indispensáveis no
            crescimento e na sustentabilidade dos nossos
            clientes, contribuindo ativamente para o seu
            desenvolvimento econômico.
          </Text>
        </VStack>
        <Center w="50%" h="100vh"  >
          <Image src={logo.src} filter="drop-shadow( 2px 3px 5px black)" alt='logo'  />
        </Center>
        {/*<Box w="50%" h="100vh" bgImage={logo.src} bgPosition="center" bgSize="contain" bgRepeat="no-repeat"></Box>*/}
      </HStack>
    </Box>
  )
}
