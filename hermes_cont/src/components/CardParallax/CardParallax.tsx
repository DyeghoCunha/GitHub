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
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="sticky"
      top="0px"
      color="white"
      ref={container} >

      <MotionCard
        style={{
          backgroundColor: `${color}99`
          , scale, top: `calc(-5vh + ${i * 25}px)`
        }}
        backdropFilter="blur(10px)"
        display="flex"
        flexDirection="column"
        position="relative"
        top="-25%"
        height="800px"
        width="900px"
        p="50px"
        transformOrigin="top"
      >
        <HStack color="white" position="relative">
          <ClientImg h="80px" src={Triangulo.src} />
          <Box position="absolute" top="5px" left="90px">
            <HermesCharacter colorProp={i ===2? "black":"white"} fontSize="45px" paragraph={title} />
          </Box>
        </HStack>
        <Flex h="100%" mt="50px" gap="50px" >
          <Box w="50%" backdropFilter="blur(20px)" pos="relative" h="500px" px={4} py={2} top="6%" border={`1px solid ${color}20`} borderRadius="8px" boxShadow={`inset 4px 4px 8px rgba(0,0,0,0.3),inset -4px -4px 8px rgba(0,0,0,0.3)`}>

            <Text fontSize="26px" display={i === 2 ? "none" : "block"}>
              <Box as="span" fontSize="48px" fontFamily="Title" >
                {description.charAt(0)}
              </Box>
              {description.slice(1)}
            </Text>
            <UnorderedList display={i === 2 ? "block" : "none"} fontSize="26px" mt="30px" color="hermesBlue.400">
              <ListItem>RESPONSABILIDADE </ListItem>
              <ListItem> TRANSPARÊNCIA </ListItem>
              <ListItem> ÉTICA </ListItem>
              <ListItem>SERIEDADE</ListItem>
              <ListItem>RELAÇÕES GENUÍNAS</ListItem>
            </UnorderedList>


          </Box>
          <Box pos="relative" w="60%" h="100%" borderRadius="25px" overflow="hidden"  >
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