import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Box, Center, HStack, Heading, Image, Mark, Text, VStack} from "@chakra-ui/react";

import homePageImg from "@/assets/image/homePage.png"
import Link from "next/link";



export default function Home() {

  function teste() {
    console.log("Teste")
  }

  return (
    <Center mt="50px" pl="60px">
      <HStack justifyContent="space-around" alignItems="center">
        <VStack justifyContent="center" alignItems="center" >
          <Heading as='h2' fontSize="80px"  >
            Uma Plataforma para <Mark bgGradient="linear(to-r,#84D571, #296B18)" bgClip="text"> Calculos Tributários </Mark>
          </Heading>
          <Text lineHeight={1} mt="10px" color="gray" >Projeto desenvolvido pensando em você Cliente e Contador</Text>
          <Box mt={5}>
            <Link href="/Ferramentas">
              <Text fontSize="40px" fontWeight="bold" _hover={{color:"#84D571"}} bgGradient="linear(to-r, #84D571, #296B18)" bgClip="text">Faça já a sua Simulação</Text>
            </Link>
          </Box>
        </VStack>
        <Image src={homePageImg.src} borderRadius="20px" w="50%" />
      </HStack>
    </Center>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};