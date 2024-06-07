import { Box, Card, CardBody, CardHeader, Center, Heading, HStack, Skeleton, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import InputNcm from '../SimplesNacional/components/InputNcm/InputNcm'
import { INcm } from '@/types/types';
import CardDefault from '@/components/atoms/CardDefault/CardDefault';
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import GradientText from '@/components/atoms/GradientText/GradientText';
import { m } from 'framer-motion';
import PageContainer from '@/components/atoms/PageContainer/PageContainer';
import PreloaderComponent from '@/components/PreloaderComponent/PreloaderComponent';
import { ForumLayout } from '@/components/templates/ForumLayout';

export default function ConsultaNcm() {

  const [ncm, setNcm] = useState<any>();

  const [isLoading, setIsLoading] = useState(false);
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
          <Text fontSize="20px"><GradientText style={""}>NCM</GradientText></Text>
          <VStack align="start" >
            <HStack justifyContent="start" gap="5%" w="100%">
              <HStack>
                <Text color="gray">Código: </Text>
                <Skeleton w="200px" fontSize="20px" isLoaded={!isLoading} h="20px" startColor='rgba(242,242,243,1)' fadeDuration={4} endColor='rgba(241,226,194,1)'>{prop.codigo}</Skeleton>
              </HStack>
              <HStack>
                <Text color="gray">Data de Início: </Text>
                <Skeleton w="200px" isLoaded={!isLoading} h="20px" startColor='rgba(242,242,243,1)' fadeDuration={4} endColor='rgba(241,226,194,1)'>{prop.data_inicio}</Skeleton>
              </HStack>
              <HStack>
                <Text color="gray">Data de Fim: </Text>
                <Skeleton w="200px" isLoaded={!isLoading} h="20px" startColor='rgba(242,242,243,1)' fadeDuration={4} endColor='rgba(241,226,194,1)'>{prop.data_fim}</Skeleton>
              </HStack>
            </HStack>
          </VStack>
        </CardHeader>

        <CardBody mt={0} w="100%">
          <VStack align="start">
            <Text fontSize="20px"><GradientText style={""}>Descrição</GradientText></Text>
            <Skeleton w="100%" isLoaded={!isLoading} h="20px" startColor='rgba(242,242,243,1)' fadeDuration={4} endColor='rgba(241,226,194,1)'>{prop.descricao}</Skeleton>
          </VStack>
        </CardBody>
      </CardDefault>
    )
  }


  return (
    <>
      <PreloaderComponent />
      <PageContainer>
        <Heading mb="60px" mt="180px" fontSize="4vw"><GradientText style={""}>Consulta de NCM</GradientText></Heading>
        <Box w="340px" mb="60px">
          <CardDefault>
            <InputNcm isLoading={isLoading} setResultProp={setNcm} setIsLoading={setIsLoading} setIsSearching={setIsSearching} />
          </CardDefault>
        </Box>
        <Card p="20px" minH="0px" maxH="600px" bgColor="rgba(255,255,255,0.3) " boxShadow="inset 2px 2px 10px rgba(0,0,0,0.4)"
          justifyContent="start" alignItems="center" overflowY="auto"
          sx={{
            '::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
            '::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '::-webkit-scrollbar-thumb': {
              background: 'hermesGold.300',
              borderRadius: "0px 3px 3px 0px",
              '&:hover': {
                background: 'hermesGold.400',
              },
            },
          }} >
          <VStack gap={2} w="1200px" >

            {isLoading ? (

              <Box w="100%" display={!isSearching ? "block" : "none"}>
                <CardNcm prop={prop} />
              </Box>

            ) :

              (ncm && ncm.map((ncm:any, index:any) => (
                <CardNcm key={index} prop={ncm} />
              )))}
          </VStack>
        </Card>
      </PageContainer>
    </>
  )
}

ConsultaNcm.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};


