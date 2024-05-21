import { Box, Card, Divider, HStack, Image, Link, List, ListIcon, ListItem, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ytLogo from "@/assets/image/youtube.png"
import img from "@/assets/image/footerHermes.png"
import Map from './Map/Map'
import GradientBox from '@/components/atoms/GradientBox/GradientBox'
import GradientText from '@/components/atoms/GradientText/GradientText'
import whatsImg from "/public/images/whats.png"
import instaImg from "/public/images/insta.png"
import mailImg from "/public/images/email.png"
import SvgBezierCurve from "@/components/SvgBezierCurve/SvgBezierCurve"

const Endereco = () => {
  return (
    <VStack zIndex={100} color="white" fontSize="20px" justify="start" align="start" mr="5%">
      <Map />
      <GradientText style={{ fontSize: "30px" }}>Endereço</GradientText>
      <HStack gap="20px">
        <Text>Rua: 2028 </Text>
        <Text>nº: 100 </Text>
        <Text>Sala 01 </Text>
        <Text>Cep: 88330-486</Text>
      </HStack>
      <Text>Balneário Camboriú - Santa Catarina</Text>

    </VStack>)
}


export default function Footer() {
  return (
    <Box as='footer' pb="20px" w="100vw" h="100%" bgColor="hermesBlue.400" bgImage={img.src} bgPos="top"
      bgRepeat="no-repeat" bgSize="fill">
      <VStack w="100%" >
        <Box w="100%" h="100%" mb="40px" zIndex={1}>
          <SvgBezierCurve />
        </Box>
        <HStack w="100%" h="100%" justify="space-between">

          <VStack align="start" gap="20px" ml="5%">

            <Link href='https://api.whatsapp.com/send?phone=554735144771&text=Ola!%20Eu%20vim%20atrav%C3%A9s%20do%20Site%20e%20estou%20com%20d%C3%BAvidas' target='_blank'>
              <HStack><Image w="60px" src={whatsImg.src} />
                <GradientText style={{ fontSize: "30px" }}>
                  (47) 3514 4771
                </GradientText>
              </HStack>
            </Link>
            <Link href='https://www.instagram.com/hermescontabilidade/' target='_blank'>
              <HStack><Image w="60px" src={instaImg.src} />
                <GradientText style={{ fontSize: "30px" }}>
                  HERMESCONTABILIDADE
                </GradientText>
              </HStack>
            </Link>

            <Link href="mailto:contato@hermes.cnt.br" target='_blank'>
              <HStack><Image w="60px" src={mailImg.src} />
                <GradientText style={{ fontSize: "30px" }}>
                  contato@hermes.cnt.br
                </GradientText>
              </HStack>
            </Link>


          </VStack>
          <Endereco />
        </HStack>
      </VStack>
    </Box >
  )
}
