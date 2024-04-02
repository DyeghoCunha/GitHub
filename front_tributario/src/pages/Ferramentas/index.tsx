import { AbsoluteCenter, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, Heading, HStack, Image, Input, List, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import FlipCard3d from '@/components/atoms/flipCard3d/FlipCard3d';
import FerramentasCard from '@/components/molecules/FerramentasCard/FerramentasCard';
import SimplesImg from "@/assets/image/calc.png"
import truckImg from "@/assets/image/truck.png"
import sifraoImg from "@/assets/image/sif.png"
import Link from 'next/link';



const cardProps =[
  {
    id:1,
    image:SimplesImg.src,
    text:"Simples Nacional",
    href:"/"
  },
   {
    id:2,
    image:truckImg.src,
    text:"Calculo de Comunicação de Transporte e Serviço",
    href:"/"
  },
   {
    id:3,
    image:sifraoImg.src,
    text:"Locação de Bens Móveis",
    href:"/"
  },
]



export default function FerramentasPage() {

  return (
    <Center w="100vw" h="100vh">

      <Card w="1200px" h="500px"  >
        <CardHeader>
          <Box position='relative' padding='10'>
            <Divider color="red" />
            <AbsoluteCenter bg='white' px='4'>
              <Heading color="gray.100">Ferramentas</Heading>
            </AbsoluteCenter>
          </Box>

        </CardHeader>
        <CardBody>
          <AbsoluteCenter>
          <HStack gap={10}>
            {cardProps.map((card)=>(
              <Link key={card.id}href={card.href}>
              <FerramentasCard  image={card.image} text={card.text} />
              </Link>
            ))}
            
          </HStack>
           </AbsoluteCenter>
        </CardBody>
      </Card>

    </Center>
  )
}

FerramentasPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};
