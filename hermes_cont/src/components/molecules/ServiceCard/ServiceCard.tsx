import { Box, Card, CardBody, CardFooter, CardHeader, Center, CheckboxIcon, Flex, Heading, Icon, Tag, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react'
import VanillaTilt from "vanilla-tilt";
import image from "@/assets/image/serviços/1.svg"

interface IServiceCard {
  name: string;
  image: any;
}



export default function ServiceCard({ name, image }: IServiceCard) {

  const tiltRef = useRef(null);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 5000,
        glare: true,
        reverse: false,
        "full-page-listening": false,
        "max-glare": 2.0,
      });
    }
  }, []);


  return (
    <Center  >
      <Card
        h={{ base: "80px", md: "180px" }}
        w={{ base: "150px", md: "350px" }}
        ref={tiltRef}
        color="gray.100"
        cursor="pointer"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        style={{ transformStyle: "preserve-3d" }}
        backgroundSize="cover"
        resize="both"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bgImage={image.src}

      >
        <Box style={{ transform: `translateZ(30px)` }}
          position="absolute" border="1px solid rgba(255,255,255,0.3)"
          //backdropFilter="blur(1px)" 
          boxShadow="inset 5px 5px 5px rgba(255,255,255,0.3),inset -5px -5px 5px rgba(0,0,0,0.3)"
          bgColor="hermesBlue.rgba2" w="97%" h="97.5%"
          borderRadius="10px" >
        </Box>

        <Box style={{ transform: `translateZ(80px)` }} position="absolute" p={6}>
          <Heading fontSize={{ base: "12px", md: "30px" }} textAlign="center" textShadow="2px 2px 5px black">{name}</Heading>
        </Box>
      </Card>
    </Center>
  )
}





