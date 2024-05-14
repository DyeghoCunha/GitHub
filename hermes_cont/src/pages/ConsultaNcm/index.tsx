import { Box, Card, CardBody, CardHeader, Center, Heading, HStack, Skeleton, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import InputNcm from '../SimplesNacional/components/InputNcm/InputNcm'
import { INcm } from '@/types/types';
import CardDefault from '@/components/atoms/CardDefault/CardDefault';
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import GradientText from '@/components/atoms/GradientText/GradientText';
import { m } from 'framer-motion';

export default function ConsultaNcm() {

  const [ncm, setNcm] = useState<any>();

  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(true)

  const prop = {
    codigo: "",
    data_inicio: "",
    data_fim: "",
    descricao: ""
  }


  const CardNcm = ({ prop }: any) => {
    return (
      <CardDefault>
        <CardHeader mb={0} pb={0} >
          <Text fontSize="20px"><GradientText>NCM</GradientText></Text>
          <VStack align="start" >
            <HStack justifyContent="start" gap="5%" w="100%">
              <HStack>
                <Text color="gray">Código: </Text>
                <Text w="100px"><Skeleton isLoaded={!isLoading} startColor='white' h="20px" fadeDuration={4} endColor='hermesGold.400'>{prop.codigo}</Skeleton></Text>
              </HStack>
              <HStack>
                <Text color="gray">Data de Início: </Text>
                <Text w="100px"><Skeleton isLoaded={!isLoading} startColor='white' h="20px" fadeDuration={4} endColor='hermesGold.400'>{prop.data_inicio}</Skeleton></Text>
              </HStack>
              <HStack>
                <Text color="gray">Data de Fim: </Text>
                <Text w="100px"><Skeleton isLoaded={!isLoading} startColor='white' h="20px" fadeDuration={4} endColor='hermesGold.400'>{prop.data_fim}</Skeleton></Text>
              </HStack>
            </HStack>
          </VStack>
        </CardHeader>

        <CardBody mt={0} w="100%">
          <VStack align="start">
            <Text fontSize="20px"><GradientText>Descrição</GradientText></Text>
            <Text w="100%"><Skeleton isLoaded={!isLoading} startColor='white' h="20px" fadeDuration={4} endColor='hermesGold.400'>{prop.descricao}</Skeleton></Text>
          </VStack>
        </CardBody>
      </CardDefault>
    )
  }


  return (
    <Center w="100vw" h="100vh" bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)" my={0}>
     
      <VStack>
        <Heading fontSize="3vw"><GradientText>Consulta de NCM</GradientText></Heading>
        <Box w="340px">
          <CardDefault>
            <InputNcm setResultProp={setNcm} setIsLoading={setIsLoading} setIsSearching={setIsSearching} />
          </CardDefault>
        </Box>
        <Card p="50px" minH="0px" maxH="600px" bgColor="rgba(255,255,255,0.3)"
        
        justifyContent="start" alignItems="center" overflowY="auto" >
          <VStack gap={2} w="1200px" >

            {isLoading ? (

              <Box w="100%" display={!isSearching ? "block" : "none"}>
                <CardNcm prop={prop} />
              </Box>

            ) :

              (ncm && ncm.map((ncm, index) => (
                <CardNcm key={index} prop={ncm} />
              )))}
          </VStack>
        </Card>
      </VStack>
    </Center>
  )
}

ConsultaNcm.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};


