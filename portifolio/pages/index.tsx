import { DefaultLayout } from "@/components/template/DefaultLayout";
import { Box, Center, Flex, HStack, Heading, Image, Mark, Spacer, Text, VStack, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import HeroImage from "@/assets/image/heroImage.jpeg"
import background from "@/assets/image/BannerBackGround.png"
import bannerDark from "@/assets/image/bannerDark.gif"
import bannerLight from "@/assets/image/bannerLight.gif"
import { motion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';
import { css } from '@emotion/react';
import MotionCenter from "@/components/Atom/MotionCenter";

import transition from "@/assets/image/effect4.gif"
import { GlassContact } from "@/components/Molecule/GlassContact";



export default function Home() {

  const waveAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

  // Estilos para a animação
  const waveAnimationStyle = css`
    animation: ${waveAnimation} 8s ease infinite;
    background-size: 400% 400%;
  `;

  // Valor do gradiente que muda com o modo de cor (claro/escuro)
  const bgGradientValue = useColorModeValue(
    'linear(to-r, turquoise, black, lightblue, darkblue)',
    'linear(to-r, turquoise, black, lightblue, darkblue)'
  );

  return (
    <main>
      <MotionCenter>
        <Center
          mt="60px"
          w="100vw"
          h="100vh"
          mx={0}
          bgImage={bannerLight.src}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          justifyContent="start"
          alignItems="center"
        >
          <Flex ml="60px" mt="0px" w="100%" h="100%" p={10} >
            <VStack w="70%" mt="180px">
              <Heading as='h1' fontSize="100px">
                Welcome to my Portfolio, my name is 
                <Box as="span" mx={3}
                  bgImage={transition.src}
                  bgClip="text"
                  fontSize="100px"
                  filter="drop-shadow(2px 2px 2px rgba(0,0,0,1))"
                >
                  Dyegho Cunha 
                </Box>
                 and I am
                <Mark
                  bgGradient={bgGradientValue}
                  css={waveAnimationStyle}
                  bgClip="text"
                  mx={3}
                >
                  Front-end Developer
                </Mark>
              </Heading>
              <Box border="1px solid red" w="500px" h="200px">
              <GlassContact/>
              </Box>
            </VStack>
          </Flex>

        </Center>

      </MotionCenter>
    </main>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};