import SquadCard from '@/components/molecules/SquadCard/SquadCard'
import { squadProps } from '@/lib/props'
import { Box, Center, Flex, Heading, HStack, Image, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import equipe from "@/assets/image/equipeCor.png"
import emir from "@/assets/image/emir.png"
import valmor from "@/assets/image/valmor.png"
import gabriel from "@/assets/image/gabriel.png"
import { motion } from 'framer-motion'
import GradientText from '@/components/atoms/GradientText/GradientText'

const MotionImage = motion(Image);

export default function QuemSomos() {

  const [imageSrc, setImageSrc] = useState(equipe.src);

  const handleMouseEnter = (newSrc: string) => {
    setImageSrc(newSrc);
  };

  const handleMouseLeave = () => {
    setImageSrc(equipe.src)
  };

  const cardProps = squadProps

  return (

    <Center as='section' h="100vh" w="100vw" justifyContent="center" alignItems="center" >
      <HStack w="100%">

        <Box w="40%" position="relative" >
          <MotionImage src={imageSrc} alt='Foto da equipe Hermes' initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} />
          <Heading position="absolute" top="-15%" w="100vw" pl="2%" fontSize="7vw" color="white"><GradientText>Quem Somos</GradientText></Heading>
        </Box>
        <VStack w="50%"  >
          <Box onMouseLeave={handleMouseLeave} >
            {cardProps.map((props, index) => (
              <Box key={index} my={10} onMouseOver={() => handleMouseEnter(props.image)} >
                <SquadCard name={props.name} text={props.text} />
              </Box>
            ))}
          </Box>
        </VStack>
      </HStack>
    </Center>
  )
}
