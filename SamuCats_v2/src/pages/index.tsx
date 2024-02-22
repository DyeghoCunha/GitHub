import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Box, Center, HStack, Heading, Image, Mark, Spacer, Spinner, Text, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import programmersImg from "@/assets/image/programadores.png"
import shieldIcon from "@/assets/image/shield.png"
import groupIcon from "@/assets/image/group.png"
import ButtonDefault from "@/components/atoms/Button";


export default function Home() {

  function teste() {
    console.log("Teste")
  }

  return (
    <Center my="50px">
      <HStack justifyContent="space-around" alignItems="center">
        <VStack>
          <Heading as='h2' size='3xl'>
            Uma Plataforma para Cadastro de Programadores e<Mark bgGradient="linear(to-r, orange, red)" bgClip="text"> Desenvolver Projetos</Mark>
          </Heading>
          <Text lineHeight={1} mt="10px" color="gray">Está cansado de fazer Pokedex e BootCamps que não levam a nada? Faça parte do nosso time e participe de nossos projetos.</Text>
          <HStack mt="30px" justifyContent="center" alignItems="center">
            <HStack w="49%">
              <Image src={shieldIcon.src} w="55px" />
              <Text lineHeight={1} fontSize="18px">Suas informações estão totalmente seguras</Text>
            </HStack>
            <Spacer/>
            <HStack w="49%">
              <Image src={groupIcon.src} w="55px" />
              <Text lineHeight={1} fontSize="18px">Cadastre-se gratuitamente e faça parte do time</Text>
            </HStack>
          </HStack>
          <Box mt={10}>
            <ButtonDefault fontSize="40px" text="Faça já o seu Cadastro" onClick={teste} />
          </Box>
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