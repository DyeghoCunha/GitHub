'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Box, Card, Flex, Heading, HStack, Text, Image as ClientImg, UnorderedList, ListItem } from '@chakra-ui/react';
import Triangulo from "@/assets/image/triangulo.png"
import HermesCharacter from '../TextOpacityScroll/HermesCharacter/HermesCharacter';

const MotionCard = motion(Card)
const MotionBox = motion(Box)

interface ICardParallax {
  i: any;
  title: any;
  description: string;
  src: string;
  color: string;
  progress: any;
  range: any;
  targetScale: any;
}



const CardParallax = ({ i, title, description, src, color, progress, range, targetScale }: ICardParallax) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })



  const imageScale = useTransform(scrollYProgress, [0, 1], [3, 1])
  const scale = useTransform(progress, range, [1.3, targetScale]);

  return (
    <Box
      h="100vh"
      w={{base:"300px",md:"100%"}}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="sticky"
      top="0px"
      color="white"
      ref={container} >

      <MotionCard
        style={{
          backgroundColor: i === 0 ? color : `${color}80`
          , scale, top: `calc(-5vh + ${i * 25}px)`
        }}
        backdropFilter="blur(10px)"
        display="flex"
        flexDirection="column"
        position="relative"
        top="-25%"
        height={{ base: "350px", md: "800px" }}
        width={{ base: "82%", md: "900px" }}
        p={{ base: "0px", md: "10px" }}
        transformOrigin="top"
      >
        <HStack color="white" position="relative" w="100%" >
          <ClientImg h={{ base: "30px", md: "80px" }} m={{base:"8px",md:"0"}} src={Triangulo.src} />
          <Box position="absolute" top={{base:"-1px",md:"5px"}} left={{ base: 10, md: "90px" }}>
            <HermesCharacter colorProp={i === 2 ? "black" : "white"} fontSize={{ base: "20px", md: "45px" }} paragraph={title} />
          </Box>
        </HStack>
        <Flex direction={{base:"column",md:"row"}} align={{base:"center",md:"start"}}  h="100%" mt={{base:"-20px",md:"50px"}} gap={{ base: 0, md: "50px" }}>
          <Box w={{ base: "100%", md: "50%" }} backdropFilter="blur(20px)"
            pos="relative" h={{base:"100px",md:"500px"}}
            px={4} py={2} top="6%"
            border={`1px solid ${color}20`}
            borderRadius="8px" boxShadow={`inset 4px 4px 8px rgba(0,0,0,0.3),inset -4px -4px 8px rgba(0,0,0,0.3)`}>

            <Text fontSize={{ base: "10px", md: "26px" }} display={i === 2 ? "none" : "block"}>
              <Box as="span" fontSize={{base:"20px",md:"48px"}} fontFamily="Title" >
                {description.charAt(0)}
              </Box>
              {description.slice(1)}
            </Text>
            <UnorderedList display={i === 2 ? "block" : "none"} fontSize={{ base: "10px", md: "26px" }} mt={{base:"5px",md:"30px"}} color="hermesBlue.400">
              <ListItem>RESPONSABILIDADE </ListItem>
              <ListItem> TRANSPARÊNCIA </ListItem>
              <ListItem> ÉTICA </ListItem>
              <ListItem>SERIEDADE</ListItem>
              <ListItem>RELAÇÕES GENUÍNAS</ListItem>
            </UnorderedList>


          </Box>
          <Box pos="relative" w={{ base: "90%", md: "50%" }} h={{base:"55%",md:"600px"}} mt={{base:"30px",md:"0"}} borderRadius="25px" overflow="hidden"  >
            <MotionBox
              style={{ scale: imageScale }}
              width="100%"
              height="100%"

            >
              <Image
                fill
                src={src}
                alt="image"
                objectFit='cover'
              />

            </MotionBox>
          </Box>

        </Flex>
      </MotionCard>
    </Box>
  )
}

export default CardParallax