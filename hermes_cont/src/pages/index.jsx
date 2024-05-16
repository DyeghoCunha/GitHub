import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Box, Center, HStack, Heading, Image, Mark, Text, VStack } from "@chakra-ui/react";

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
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader/Preloader"
import { useEffect, useState } from "react";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main   >
      <VStack>
        {/** <AnimatePresence mode="wait">
          {isLoading && <Preloader/>}
        </AnimatePresence>
      
       
        <SecondSection /> */} <HomeSection />
        <ThirdSection />
        <FourthSection />
        <Sobre />
        <Galeria />
        <FifthSection />
      </VStack>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};