import { Box, Center, Heading, HStack, Image, Mark, Text, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import logo from "@/assets/image/logo.svg"
import GradientText from '@/components/atoms/GradientText/GradientText'
import styles from "./style.module.css"
import { useScroll, useTransform, motion } from 'framer-motion'


const MotionBox = motion(Box);



export default function SecondSection() {


  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])






  return (
    <Box as='section' w="100%" h="100vh" ref={container} position="relative" >
      <HStack justifyContent="space-around" alignItems="center">
        <VStack w="50%" h="100vh" px="40px" pt="150px" gap="60px">
          <Heading data-scroll data-scroll-speed={0.1} color="hermesWhite.500">Sabemos que a sua empresa é única, tem
            necessidades singulares e detalhes
            importantes que precisam ser considerados
            para que o nosso trabalho seja efetivo.</Heading>
          <Box data-scroll data-scroll-speed={0.1}>
            <Text fontSize="30px" color="hermesWhite.500">
              Combinamos a essência do atendimento humanizado
              com a precisão e agilidade proporcionadas pela
              tecnologia para fornecer soluções contábeis eficientes,
              <GradientText style={{ fontWeight: "bold" }}>transformando a complexidade dos números em
                estratégias de sucesso para seus negócios.</GradientText>
            </Text>
          </Box>
          <Text data-scroll data-scroll-speed={0.1} fontSize="30px" color="hermesWhite.500">
            Buscamos ser parceiros indispensáveis no
            crescimento e na sustentabilidade dos nossos
            clientes, contribuindo ativamente para o seu
            desenvolvimento econômico.
          </Text>
        </VStack>
        <Center data-scroll data-scroll-speed={0.1} w="50%" h="100vh"  >
          <Image src={logo.src} filter="drop-shadow( 2px 3px 5px black)" alt='logo' />
        </Center>
        {/*<Box w="50%" h="100vh" bgImage={logo.src} bgPosition="center" bgSize="contain" bgRepeat="no-repeat"></Box>*/}

      </HStack>

      <MotionBox w="100%" style={{ height }}
        position="relative"
        mt="-60px"
       
      >
        <Box bgColor="hermesBlue.400" 
          h="1550%"
          w="101%"
          right="0"
          left="0"
          borderRadius="0 0 50% 50%"
          zIndex={1}
          position="absolute"
          boxShadow="0px 60px 50px rgba(0, 0, 0, 0.748)"

        ></Box>
      </MotionBox >
    </Box >
  )
}
