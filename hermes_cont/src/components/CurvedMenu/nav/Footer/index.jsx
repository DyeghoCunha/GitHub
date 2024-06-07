import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import styles from './style.module.scss';
import Link from 'next/link';
import whatsImg from "/public/images/whats.png"
import instaImg from "/public/images/insta.png"
import mailImg from "/public/images/email.png"

export default function index() {
  return (
    <Flex bgColor="hermesBlue.400" >
      <HStack align="center" justify="space-around" 
        w="100vw" boxShadow="inset -3px -3px 6px black,inset 3px 3px 6px black"  borderRadius="8px"
        h="50px"
        my="10px"
      >
        <Link href='https://api.whatsapp.com/send?phone=554735144771&text=Ola!%20Eu%20vim%20atrav%C3%A9s%20do%20Site%20e%20estou%20com%20d%C3%BAvidas' target='_blank'>
          <Image w={{ base: "30px", md: "60px" }} src={whatsImg.src} alt="" />
        </Link>
        <Link href='https://www.instagram.com/hermescontabilidade/' target='_blank'>
          <Image w={{ base: "30px", md: "60px" }} src={instaImg.src} alt="" />
        </Link>
        <Link href="mailto:contato@hermes.cnt.br" target='_blank'>
          <Image w={{ base: "30px", md: "60px" }} src={mailImg.src} alt="" />
        </Link>
      </HStack>
    </Flex>
  )
}
