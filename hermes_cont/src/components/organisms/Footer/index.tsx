import { Box, Card, Divider, HStack, Image, Link, List, ListIcon, ListItem, Spacer, Stack, Text, useMediaQuery, VStack } from '@chakra-ui/react'
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

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <VStack w={{base:"100%",md:"610px"}}  zIndex={{ base: 100, md: 10, xxl: 100 }} color="white" fontSize="20px" justify="start" align="start" mr={{base:"0", md:"5%"}}>
      <Map />
      <Box px={{base:"10px",md:"0"}} >
      <GradientText style={{ fontSize: isLargerThan800 ? "30px" : "10px" }}>Endereço</GradientText>
      </Box>
      <HStack gap="20px" fontSize={{ base: "10px", md: "22px" }} px={{base:"10px",md:"0"}}>
        <Text>Rua: 2028 </Text>
        <Text>nº: 100 </Text>
        <Text>Sala 01 </Text>
        <Text>Cep: 88330-486</Text>
      </HStack>
      <Text fontSize={{ base: "10px", md: "22px" }} px={{base:"10px",md:"0"}}>Balneário Camboriú - Santa Catarina</Text>

    </VStack >)
}


export default function Footer() {

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  return (
    <Box as='footer' pb="20px" w="100vw" h="100%" bgColor="hermesBlue.400" 
    bgImage={img.src} 
    bgPos={{base:"top",md:"top"}}
    bgRepeat="no-repeat" 
    bgSize={{base:"contain",md:"fit"}}>
      <VStack w="100%" >
        <Box w="100%" h="100%" mb="40px" zIndex={1}>
          <SvgBezierCurve />
        </Box>
        <Stack direction={{ base: "column", md: "row" }} w="100%" h="100%" justify="space-between" align="center">
          <VStack align="start" justify="start"  w="100%" gap="20px" pl={{base:"10px",md:"5%"}}>
            <Link href='https://api.whatsapp.com/send?phone=554735144771&text=Ola!%20Eu%20vim%20atrav%C3%A9s%20do%20Site%20e%20estou%20com%20d%C3%BAvidas' target='_blank'>
              <HStack ><Image w={{ base: "30px", md: "60px" }} src={whatsImg.src} alt="" />
                <Box>
                  <GradientText style={{ fontSize: isLargerThan800 ? "30px" : "10px" }}>
                    (47) 3514 4771
                  </GradientText>
                </Box>

              </HStack>
            </Link>
            <Link href='https://www.instagram.com/hermescontabilidade/' target='_blank'>
              <HStack><Image w={{ base: "30px", md: "60px" }} src={instaImg.src} alt="" />
                <GradientText style={{ fontSize: isLargerThan800 ? "30px" : "10px" }}>
                  HERMESCONTABILIDADE
                </GradientText>
              </HStack>
            </Link>

            <Link href="mailto:contato@hermes.cnt.br" target='_blank'>
              <HStack><Image w={{ base: "30px", md: "60px" }} src={mailImg.src} alt="" />
                <GradientText style={{ fontSize: isLargerThan800 ? "30px" : "10px" }}>
                  contato@hermes.cnt.br
                </GradientText>
              </HStack>
            </Link>
          </VStack>
          <Endereco />
        </Stack>
      </VStack>
    </Box >
  )
}
