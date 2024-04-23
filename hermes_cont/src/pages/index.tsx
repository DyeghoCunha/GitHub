import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Box, Center, HStack, Heading, Image, Mark, Text, VStack } from "@chakra-ui/react";

import homePageImg from "@/assets/image/homePage.png"
import Link from "next/link";
import HomeSection from "@/components/organisms/Sections/HomeSection/HomeSection";
import SecondSection from "@/components/organisms/Sections/SecondSection/SecondSection";
import ThirdSection from "@/components/organisms/Sections/ThirdSection/ThirdSection";



export default function Home() {

  function teste() {
    console.log("Teste")
  }

  return (
    <Center mt="50px"  w="100vw" h="100%" overflow="hidden">
      <VStack>
        <HomeSection/>
        <SecondSection/>
        <ThirdSection/>
      </VStack>
    </Center>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};