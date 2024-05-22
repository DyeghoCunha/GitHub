import CurvedTextFooter from '@/components/atoms/CurvedTextFooter/CurvedTextFooter'
import GradientText from '@/components/atoms/GradientText/GradientText'
import FooterCurved from '@/components/molecules/FooterCurved/FooterCurved'
import SmoothParallaxScroll from '@/components/molecules/SmoothParallaxScroll/SmoothParallaxScroll'
import { Box, Card, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionBox = motion(Box);
export default function Galeria() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <Box w="100vw" h="100%" position="relative" ref={container}>
      <Card bgColor="transparent" boxShadow="5px 5px 5px rgba(0,0,0,0.5)" border="1px solid white"
        bgGradient="linear(130deg, rgba(241,226,194,0.8) 0%, rgba(242,242,243,0.5) 40%, rgba(242,242,243,0.9) 100%)"
        backdropFilter="blur(10px)"
        position="absolute" top="-6%" left="5%" w="70vw" zIndex={10} p={10} >
        <Text textAlign="justify" color="hermesBlue.400" fontWeight="bold" fontSize={{base:"30px",md:"40px",xxl:"50px"}}>
         
            “
            Além de fazer a contabilidade contribuímos
            acompanhando de perto cada cliente, orientando,
            aconselhando e colaborando com o empresário.
            ”

         
        </Text>
        <Text mt={0} w="100%" textAlign="end" lineHeight={{base:"1px",xxl:"40px"}}>
          <GradientText style={{ fontSize: "40px" }}>
            - Emir A. Muse</GradientText></Text>
      </Card>
      <Card
        w="25vw"
        fontSize={{base:"20px",md:"25px",xxl:"32px"}} color="hermesBlue.400"
        p={4}
        justifyContent="center"
        alignItems="center"
         bgColor="transparent"
         boxShadow="4px 4px 8px black"
        backdropFilter="blur(10px)"
        bgGradient="linear(130deg, rgba(241,226,194,0.8) 0%, rgba(242,242,243,0.8) 40%, rgba(242,242,243,1) 100%)"
        position="absolute" top="5%" left="4%" zIndex={10}
      >
        <Text textAlign="justify">
          Como muitos empresários brasileiros tínhamos o objetivo de ter um
          escritório moderno e tecnológico em
          que desde o primeiro dia contasse
          com o melhor sistema disponível.
          Começamos essa busca de forma
          singela, com dois computadores,
          cadeiras simples, uma impressora,
          duas pessoas e muito trabalho.</Text>
      </Card>

      <Card
       w={{base:"30vw", md:"50vw", xxl:"35vw"}}
        fontSize={{base:"20px",md:"25px",xxl:"32px"}} color="hermesBlue.400"
        p={4}
        justifyContent="center"
        alignItems="center"
        boxShadow="4px 4px 8px black"
        backdropFilter="blur(10px)"
        bgGradient="linear(130deg, rgba(241,226,194,1) 0%, rgba(242,242,243,1) 40%, rgba(242,242,243,1) 100%)"
        position="absolute" top="25%" left={{base:"40%",md:"25%",xxl:"35%"}} zIndex={10}
      >
        <Text textAlign="justify">
          Dois meses depois o Gabriel se uniu à
          causa, e no dia <strong>01/01/2021</strong> abrimos
          oficialmente a <GradientText>Hermès</GradientText>. Ainda no
          primeiro ano o comprometimento
          com o atendimento personalizado e
          humanizado para cada cliente
          proporcionou o marco de <GradientText>100 clientes </GradientText>
          o que foi muito celebrado na época e
          provou que estávamos no caminho
          certo.</Text>
      </Card>

      <Text position="absolute" top={{base:"15.2%",md:"14%",xxl:"15.2%"}} left={{base:"35%",md:"5%",xxl:"20%"}} zIndex={10}><GradientText style={{ fontSize: "430px" }}>Os</GradientText></Text>
      <Text position="absolute" top={{base:"29%",md:"26.3%",xxl:"29%"}} left={{base:"50%",md:"50%",xxl:"50%"}} zIndex={10}><GradientText style={{ fontSize: "460px" }}>100</GradientText></Text>







      <Card
        w={{base:"30vw", md:"50vw", xxl:"35vw"}}
        fontSize={{base:"20px",md:"30px",xxl:"32px"}} color="hermesBlue.400"
        p={4}

        // bgColor="transparent"
        backdropFilter="blur(10px)"
        bgGradient="linear(130deg, rgba(241,226,194,0.5) 0%, rgba(242,242,243,0.5) 40%, rgba(242,242,243,0.5) 100%)"
        position="absolute" top="50%" right="10%" zIndex={10}
      >

        <Text textAlign="justify"> Hoje somos formados pelos mesmos 3
          sócios e por um time de profissionais
          excepcionais que representam nossos
          valores e compartilham o nosso
          propósito de fazer o melhor pelos
          clientes usando as melhores
          ferramentas tecnológicas sem perder
          nosso traço fundamental, <GradientText>o contato
            individualizado e humano</GradientText>.</Text>


      </Card>

   


      <SmoothParallaxScroll />

      <MotionBox w="100%" style={{ height }}
        position="relative"
        mt="0px"
        zIndex={20}
      >
        <Box
          bgColor="hermesBlue.400"
          h="3550%"
          w="100%"
          borderRadius="0 0 50% 50%"
          zIndex={1}

          boxShadow="0px 60px 50px rgba(0, 0, 0, 0.748)"

        ></Box>
      </MotionBox >

    </Box >
  )
}
