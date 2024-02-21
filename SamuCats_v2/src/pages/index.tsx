import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Box, Center, HStack, Heading, Image, Mark, Spinner, Text, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import programmersImg from "@/assets/image/img2.png"
import shieldIcon from "@/assets/image/shield.png"


export default function Home() {

  return (
    <Center my="50px">
      <HStack justifyContent="space-around" alignItems="center">
        <VStack>
          <Heading as='h2' size='3xl'>
            Uma Plataforma para Cadastro de Programadores <Mark bgGradient="linear(to-r, orange, red)" bgClip="text">e Projetos</Mark>
          </Heading>
          <Text mt="10px" color="gray">Está cansado de fazer Pokedex e BootCamps que não levam a nada? Faça parte do nosso time e participe de nossos projetos.</Text>
          <HStack mt="30px">
            <HStack w="50%">
              <Image src={shieldIcon.src} w="50px" />
              <Text fontSize="20px">Suas informações estão totalmente seguras</Text>
            </HStack>
            <HStack w="50%">
              <Image src={shieldIcon.src} w="50px" />
              <Text fontSize="20px">Cadastre-se gratuitamente e faça parte do time</Text>
            </HStack>
          </HStack>
        </VStack>
        <Image src={programmersImg.src} borderRadius="20px" w="50%" />
      </HStack>
    </Center>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};