import { Box, Card, CardBody, CardFooter, CardHeader, Center, CheckboxIcon, Flex, Heading, Icon, Tag, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react'
import VanillaTilt from "vanilla-tilt";

export default function ServiceCard() {

  const tiltRef = useRef(null);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 5000,
        glare: true,
        reverse: false,
        "full-page-listening": false,
        "max-glare": 1.0,
      });
    }
  }, []);


  return (
    <Center position="relative" >
      <Card
        h="200px"
        w="350px"
        ref={tiltRef}
        color="gray.100"
        cursor="pointer"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        style={{ transformStyle: "preserve-3d" }}
        backgroundSize="cover"
        resize="both"
        alignItems="center"
        justifyContent="center"
        >
        <Box  style={{ transform: `translateZ(20px)` }}  >
        <Heading textAlign="center">Assessoria Contábil</Heading>
        </Box>
      </Card>
    </Center>
  )
}






export function ItemCard() {


  //!!____
  //! Aleração para CARD 3d
  const tiltRef = useRef(null);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 5000,
        glare: true,
        reverse: false,
        "full-page-listening": false,
        "max-glare": 1.0,
      });
    }
  }, []);


  return (
    <Flex
      w={{ base: "auto", md: "auto", lg: "auto", xl: "auto", "2xl": "269px" }}
      position="relative"
      pl={{ base: "10px", sm: "0px" }}

    >
      <Card
        h="500px"
        ref={tiltRef}
        color="gray.100"
        cursor="pointer"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        style={{ transformStyle: "preserve-3d" }}

        backgroundSize="cover"
        resize="both"
      >
        <CardHeader
          m="0px"
          pb="0px"
          h="20%"
          style={{ transform: `translateZ(20px)` }}
        >
          <Flex justify="space-between" w="100%">
            <Box minH="100px" mb={1.5} >
              <Heading
                transform={{ translateZ: "30px" }}
                fontSize="sm"
                mb={1}
              >
                Text1
              </Heading>
              <Text
                fontSize="xs"
                mb={1.5}

              >
                Type1
              </Text>
            </Box>

            <VStack align="flex-end" gap="7px !important" zIndex={3}>

              <Tag
                color="gray.100"
                fontSize="xs"
                bgColor="#1B931B"
                mt="0px !important"
                mb="0px !important"
              >
                50%
              </Tag>
            </VStack>
          </Flex>
        </CardHeader>

        <CardBody
          mb="0px"
          pb="0px"
          zIndex="3"
          style={{ transform: `translateZ(50px)` }}
          display="flex"
          flexDirection="column"
          maxH={500}
        >

          <Flex
            textAlign="center"
            direction="column"
            align="center"
            flex={1}
          >


          </Flex>
        </CardBody>

        <Flex
          textAlign="center"
          direction="column"
          align="center"
          zIndex="6"
          flex={1}
          style={{ transform: `translateZ(60px)` }}
        >

        </Flex>
        <CardFooter
          m="0px"
          pt="0px"
          style={{ transform: `translateZ(20px)` }}
        >
          <Flex
            textAlign="center"
            direction="column"
            align="center"
            flex={1}
          >
            <Flex align="center" color={"#1B931B"}>
              <Icon as={CheckboxIcon} boxSize={3.5} mr={1} />
              <Text fontSize="xs" fontWeight="medium">
                Disponível Imediatamente
              </Text>
            </Flex>


          </Flex>
        </CardFooter>
      </Card>
    </Flex>
  );
}