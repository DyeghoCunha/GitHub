import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Box, Center, Flex, HStack, Heading, Image, Mark, Text, VStack } from "@chakra-ui/react";

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
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Preloader from "@/components/Preloader/Preloader"
import { useEffect, useRef, useState } from "react";
import Lenis from 'lenis';
import Valores from "@/components/organisms/Sections/Valores/Valores";
const MotionBox = motion(Box);

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <MotionBox
      style={{ scale, rotate }}
      position="sticky"
      top="0"
      h="100vh"
      fontSize="3.5vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      pb="10vh"
    >
      <ThirdSection />
    </MotionBox>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <MotionBox style={{ scale, rotate }} h="100vh" position="relative">
      <FourthSection />
    </MotionBox>
  );
};

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


  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main   >
      <VStack>
        {/** <AnimatePresence mode="wait">
          {isLoading && <Preloader/>}
        </AnimatePresence>
     
        <HomeSection />
        <SecondSection />
        
        <Box ref={container} position="relative" h="200vh">
          <Section1 scrollYProgress={scrollYProgress} />
          <Section2 scrollYProgress={scrollYProgress} />
        </Box>

        <Sobre />
        <Galeria /> */}
        <Valores/>
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