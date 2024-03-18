import styles from './developerCard.module.css'; // Substitua pelo caminho correto do arquivo CSS
import { RiTwitterXLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, HStack, Heading, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import BgCardLight from "@/assets/image/DeveloperCardBackGroundLight3.gif"
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";

export default function DeveloperCard() {

  const [isHovered, setIsHovered] = useState(false);
  const [isFlip, setIsFlip] = useState(false)




  return (
    <Box className={styles.container}>
      <Box className={styles["card-inner"]}
        transform={isFlip ? "rotateY(180deg)" : "rotateY(0deg)"}
      >
        <Box className={styles["card-front"]}>
          <Card
            w="280px"
            h="280px"
            bgColor="rgba(255, 255, 255, 0.3)"
            backdropFilter="blur(5px)"
            // bgGradient="linear-gradient(145deg, rgba(255, 255, 255, 0.3), rgba(218, 218, 218, 0.5))"
            boxShadow="13px 13px 24px #d0d0d0, -13px -13px 24px #ffffff"
            borderRadius="32px"
            position="absolute"
            top={0}
            left={0}
            border="3px solid white"
            zIndex={1}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={
              { borderTopLeftRadius: "55px" }
            }
            className={styles.card}>

            <CardHeader
              position="absolute"
              right="1rem"
              top="1rem"
              background="transparent"
              border="none"
              m={0}
              p={0}
              className={styles.mail}>
              <Icon as={FaWhatsapp} boxSize="30px" />
            </CardHeader>

            <CardBody
              position="absolute"
              top="3px"
              left="3px"
              borderRadius="29px"
              zIndex="1"
              border="0px solid orange"
              overflow="hidden"
              p={0}
              m={0}
              className={styles['profile-pic']}>
              <Image
                src="https://github.com/DyeghoCunha.png"
                alt="Profile"
                boxSize="300px"
                objectFit="cover"
              />
            </CardBody>
            <CardFooter
              position="absolute"
              bottom="3px"
              left="3px"
              right="3px"
              top="80%"
              borderRadius="29px"
              zIndex="2"
              bgColor="rgba(255, 255, 255, 0.3)"
              backdropFilter="blur(5px)"
              bgGradient={isHovered ? "linear(to-r, orange, orangered)" : ""}
              overflow="hidden"
              boxShadow=" rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset"
              _hover={
                {
                  top: "20%",
                  borderRadius: "80px 29px 29px 29px",
                  bgGradient: "linear(to-r, orange, orangered)"
                }
              }
              className={styles.bottom}>

              <Box
                position="absolute"
                bottom="0"
                left="1.5rem"
                right="1.5rem"
                height="160px"
              >

                <Text
                  display="block"
                  fontSize="1.2rem"
                  color="white"
                  fontWeight="bold"
                >Dyegho M C G Cunha</Text>

                <Text
                  display="block"
                  fontSize="0.9rem"
                  color="white"
                  mt="0.5rem"
                >
                  Programador Front-End,Odeia Python, PHP, Linux e acha Java muito Verboso
                </Text>
              </Box>

              <HStack
                position="absolute"
                bottom="0.5rem"
                left="1.5rem"
                right="1.5rem"
                alignItems="center"
                justifyContent="space-between"
              >
                <HStack
                  gap="1rem"
                  className={styles['social-links-container']}>
                  <Icon as={RiTwitterXLine} boxSize="30px" />
                  <Icon as={FiGithub} boxSize="30px" />
                  <Icon as={FiInstagram} boxSize="30px" />
                </HStack>
                <HStack>
                  <Button
                    variant="primary"
                    //background="white"
                    //color="orange"
                    border="none"
                    borderRadius="20px"
                    fontSize="0.6rem"
                    padding="0.4rem 0.6rem"
                    onClick={() => setIsFlip(!isFlip)}
                  //boxShadow=" rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;"
                  >Contato</Button>

                  <Button
                    variant="secondary"
                    background="rgba(165, 132, 130, 0.1333333333)"
                    color="Black"
                    border="none"
                    borderRadius="50%"
                    fontSize="1rem"
                    p={1}
                    onClick={() => setIsFlip(!isFlip)}
                    boxShadow=" rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;"
                  ><IoArrowRedoOutline />
                  </Button>
                </HStack>
              </HStack>
            </CardFooter>
          </Card>
          <Box
            w="270px"
            h="270px"
            border="6px solid #f2f2f2"
            bgGradient="linear-gradient(145deg, red, blue)"
            boxShadow="intes 3px 3px 4px #d0d0d0, inset -3px -3px 4px #ffffff"
            borderRadius="32px"
            position="absolute"
            top="7px"
            left="7px"
            right="7px"
            bottom="7px"
            zIndex={0}
            bgImage={BgCardLight.src}
            bgPosition="center"
            borderTopLeftRadius={isHovered ? "55px" : "32px"}
            className={styles.card}>
          </Box>
        </Box>
        <Box className={styles["card-back"]}>
          <Card
            w="280px"
            h="280px"

            background="linear-gradient(145deg, #f0f0f0, #cacaca)"
            boxShadow="13px 13px 24px #d0d0d0, -13px -13px 24px #ffffff"
            onClick={() => setIsFlip(!isFlip)}
          >
            <CardBody>
              <VStack>
                <Heading>Titulo</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, eum.</Text>
              </VStack>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>


  );
}
