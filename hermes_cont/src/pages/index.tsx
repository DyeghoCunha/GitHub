import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Box, Center, HStack, Heading, Image, Mark, Text, VStack } from "@chakra-ui/react";

import homePageImg from "@/assets/image/homePage.png"
import Link from "next/link";
import HomeSection from "@/components/organisms/Sections/HomeSection/HomeSection";
import SecondSection from "@/components/organisms/Sections/SecondSection/SecondSection";
import ThirdSection from "@/components/organisms/Sections/ThirdSection/ThirdSection";
import FourthSection from "@/components/organisms/Sections/FourthSection/FourthSection";
import FifthSection from "@/components/organisms/Sections/QuemSomos/QuemSomos";
import ParallaxSection from "@/components/organisms/Sections/ParallaxSection/ParallaxSection";
import Sobre from "@/components/organisms/Sections/Sobre";
import SmoothParallaxScroll from "@/components/molecules/SmoothParallaxScroll/SmoothParallaxScroll";
import Galeria from "@/components/organisms/Sections/Galeria/Galeria";
import FooterCurved from "@/components/molecules/FooterCurved/FooterCurved";



export default function Home() {

  function teste() {
    //console.log("Teste")
  }

  return (
    <main   >
      <VStack>
        {/***/}
        <HomeSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Sobre />
        <Galeria />
        <FifthSection />
      </VStack>
    </main>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};