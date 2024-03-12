import { DefaultLayout } from "@/components/template/DefaultLayout";
import { Box, Center, Flex, HStack, Heading, Image, Mark, Spacer, Text, VStack, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import HeroImage from "@/assets/image/heroImage.jpeg"



export default function Home() {
  return (
    <Center my="50px">
      <HStack justifyContent="space-around" alignItems="center">
        <VStack>
          <Heading as='h2' size='3xl'>
            Welcome to my Portifolio, my name is <Mark bgGradient="linear(to-r, orange, red)" bgClip="text"> Dyegho Cunha </Mark>
            and I am <Mark bgGradient="linear(to-r, orange, red)" bgClip="text">Front-end Developper</Mark>
          </Heading>
          <Text lineHeight={1} mt="10px" color="gray">Está cansado de fazer Pokedex e BootCamps que não levam a nada? Faça parte do nosso time e participe de nossos projetos.</Text>
          <HStack mt="30px" justifyContent="center" alignItems="center">
            <HStack w="49%">
              <Image w="55px" />
              <Text lineHeight={1} fontSize="18px">Suas informações estão totalmente seguras</Text>
            </HStack>
            <Spacer />
            <HStack w="49%">
              <Image w="55px" />
              <Text lineHeight={1} fontSize="18px">Cadastre-se gratuitamente e faça parte do time</Text>
            </HStack>
          </HStack>
          <Box mt={5}>
            <Link href="/developers">
              <Text fontSize="40px" fontWeight="bold" bgGradient="linear(to-r, orange, red)" bgClip="text">Faça já o seu Cadastro</Text>
            </Link>
          </Box>
        </VStack>
        <Image src={HeroImage.src} borderRadius="20px" w="40%" />
      </HStack>
    </Center>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};