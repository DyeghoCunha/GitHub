import CurvedTextFooter from '@/components/atoms/CurvedTextFooter/CurvedTextFooter'
import GradientText from '@/components/atoms/GradientText/GradientText'
import FooterCurved from '@/components/molecules/FooterCurved/FooterCurved'
import SmoothParallaxScroll from '@/components/molecules/SmoothParallaxScroll/SmoothParallaxScroll'
import { Box, Card, Text } from '@chakra-ui/react'
import React from 'react'

export default function Galeria() {
  return (
    <Box w="100vw" h="100%" position="relative">
      <Card bgColor="transparent" boxShadow="5px 5px 5px rgba(0,0,0,0.5)" border="1px solid white"
        bgGradient="linear(130deg, rgba(241,226,194,0.8) 0%, rgba(242,242,243,0.5) 40%, rgba(242,242,243,0.9) 100%)"
        backdropFilter="blur(10px)"
        position="absolute" top="-7%" left="5%" w="70vw" zIndex={10} p={10} >
        <Text textAlign="justify" >
          <GradientText style={{ fontSize: "65px", textShadow: "-2px -2px 1px #28283c" }}>
            “
            Além de fazer a contabilidade contribuímos
            acompanhando de perto cada cliente, orientando,
            aconselhando e colaborando com o empresário.
            ”

          </GradientText>
        </Text>
        <Text mt={5} w="100%" textAlign="end">
          <GradientText style={{ fontSize: "80px" }}>
            - Emir A. Muse</GradientText></Text>
      </Card>
      <Card
        w="25vw"
        fontSize="32px" color="hermesBlue.400"
        p={4}
        justifyContent="center"
        alignItems="center"
        // bgColor="transparent"
        backdropFilter="blur(10px)"
        bgGradient="linear(130deg, rgba(241,226,194,0.5) 0%, rgba(242,242,243,0.5) 40%, rgba(242,242,243,0.5) 100%)"
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
        w="25vw"
        fontSize="32px" color="hermesBlue.400"
        p={4}
        justifyContent="center"
        alignItems="center"
        // bgColor="transparent"
        backdropFilter="blur(10px)"
        bgGradient="linear(130deg, rgba(241,226,194,0.5) 0%, rgba(242,242,243,0.5) 40%, rgba(242,242,243,0.5) 100%)"
        position="absolute" top="25%" left="40%" zIndex={10}
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

      <Text position="absolute" top="14.2%" left="35%" zIndex={10}><GradientText style={{ fontSize: "500px" }}>Os</GradientText></Text>
      <Text position="absolute" top="30%" left="50%" zIndex={10}><GradientText style={{ fontSize: "500px" }}>100</GradientText></Text>







      <Card
        w="25vw"
        fontSize="32px" color="hermesBlue.400"
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
      
      <Box position="absolute" bottom="0px" h="80vh" w="100vw" zIndex={20}>
        <CurvedTextFooter/>
      </Box>


      <SmoothParallaxScroll />
    </Box >
  )
}
