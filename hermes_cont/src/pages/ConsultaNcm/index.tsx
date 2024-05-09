import { Box, CardBody, CardHeader, Center, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import InputNcm from '../SimplesNacional/components/InputNcm/InputNcm'
import { INcm } from '@/types/types';
import CardDefault from '@/components/atoms/CardDefault/CardDefault';
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import GradientText from '@/components/atoms/GradientText/GradientText';

export default function ConsultaNcm() {

  const [ncm, setNcm] = useState<any>(
);

const CardNcm = ({prop}:any)=>{
  return(
     <CardDefault>
            <CardHeader mb={0}pb={0}>
                <Text fontSize="20px"><GradientText>NCM</GradientText></Text>
              <VStack align="start">
                <HStack justifyContent="space-between" w="100%">
                  <HStack>
                    <Text color="gray">Código: </Text>
                    <Text>{prop.codigo}</Text>
                  </HStack>
                  <HStack>
                    <Text color="gray">Data de Início: </Text>
                    <Text>{prop.data_inicio}</Text>
                  </HStack>
                  <HStack>
                    <Text color="gray">Data de Fim: </Text>
                    <Text>{prop.data_fim}</Text>
                  </HStack>
                </HStack>
              </VStack>
            </CardHeader>

            <CardBody mt={0}>
              <VStack align="start">
                <Text fontSize="20px"><GradientText>Descrição</GradientText></Text>
                <Text>{prop.descricao}</Text>
              </VStack>
            </CardBody>
          </CardDefault>
  )
}

  return (
    <Center w="100vw" h="100vh" bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)" my={0}>
      <VStack>
        <Box w="340px">
          <CardDefault>
            <InputNcm setResultProp={setNcm} />
          </CardDefault>
        </Box>
        <VStack gap={2} w="700px">

          {ncm && ncm.map((ncm,index)=>(
            <CardNcm key={index} prop={ncm}/>
          ))}
         
        </VStack>
      </VStack>
    </Center>
  )
}

ConsultaNcm.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};


