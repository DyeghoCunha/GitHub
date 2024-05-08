import { DefaultLayout } from '@/components/templates/DefaultLayout';
import { Box, Button, Card, CardBody, CardHeader, Center, Flex, Heading, HStack, Icon, Image, SimpleGrid, Text, Tooltip, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import InputCnpj from '../SimplesNacional/components/InputValue/InputCnpj';
import GradientText from '@/components/atoms/GradientText/GradientText';

import { formatarNumero } from '@/utils/manipulaNumeros';
import CnaeImg from "./image/cnaeIMG.svg"
import { IoIosPeople } from "react-icons/io";
import FlipCard3dClick from './flipCard3dClick/FlipCard3dClick';
import { GrNext } from "react-icons/gr";
import GradientBox from '@/components/atoms/GradientBox/GradientBox';
import Link from 'next/link';
import { retornaAnexo } from '@/utils/cnae';

export default function ConsultaCnpj() {



  const [cnpj, setCnpj] = useState("");
  const [empresa, setEmpresa] = useState(null);
  const [isValidated, setIsValidated] = useState(false)
  const [isFlip, setIsFlip] = useState(false)

  const CardDefault = ({ children }: { children: React.ReactNode }) => {
    return (
      <Card bgColor="hermesBlue.400" w="100%" h="100%" p={2} boxShadow=" 5px 4px 10px rgba(0,0,0,0.5)" >
        {children}
      </Card>
    )
  }

  interface ITextProps {
    title: string | number,
    text: string
  }

  const TextProps = ({ title, text }: ITextProps) => {
    return (

      <VStack justify="center" align="start" gap={0} role='group'>
        <Text color="gray">{title}</Text>

        <Text _groupHover={{ color: "#F1AC19" }}  >{text}</Text>

      </VStack >

    )
  }

  const TextPropsCnae = ({ title, text }: ITextProps) => {
    return (

      <VStack justify="center" align="start" gap={0} role='group'>
        <Text color="gray">{title}</Text>
        <Tooltip hasArrow label={text}>
          <Text _groupHover={{ color: "#F1AC19" }} noOfLines={1} w="400px" >{text}</Text>
        </Tooltip>
      </VStack >

    )
  }




  return (
    <Center w="100vw" h="100vh" bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)" my={0}>
       <VStack>
        <Heading fontSize="3vw"><GradientText>Consulta de CNPJ</GradientText></Heading>
        <Card p={4} w="700px" justify="center" align="center" mb={5}>
          <Box w="340px">
            <CardDefault>
              <InputCnpj setCnpjProp={setCnpj} setEmpresaProp={setEmpresa} setIsValidated={setIsValidated} />
            </CardDefault>
          </Box>
        </Card>
        {empresa &&
        <FlipCard3dClick front={
          <Box position="relative" w="700px" h="550px">
            <CardDefault>
              <CardHeader>
                <Heading><GradientText>Detalhes</GradientText></Heading>
              </CardHeader>
              <CardBody w="100%">
                <SimpleGrid columns={2} spacingY={5} w="100%">
                  <TextProps title="Tipo de Unidade" text={empresa.descricao_identificador_matriz_filial} />
                  <TextProps title="Porte" text={empresa.porte} />
                  <TextProps title="CNPJ" text={formatarNumero(empresa.cnpj)} />
                  <TextProps title='Razão Social' text={empresa.razao_social} />
                  <TextProps title='Data de Abertura' text={empresa.data_inicio_atividade} />
                  <TextProps title='Opção pelo Simples Nacional' text={`${empresa.opcao_pelo_simples === true ? `Optante desde ${empresa.data_opcao_pelo_simples}` : "Não Optante"}`} />
                </SimpleGrid >
                <Heading fontSize={20} mt={10} mb={2}><GradientText>Endereço</GradientText></Heading>
                <SimpleGrid columns={2} spacingY={2} w="100%" >
                  <TextProps title={empresa.descricao_tipo_de_logradouro.length > 0 ? empresa.descricao_tipo_de_logradouro : "Rua"} text={empresa.logradouro} />
                  <TextProps title='Numero' text={empresa.numero} />
                  <TextProps title='Complemento' text={empresa.complemento} />
                  <TextProps title='Bairro' text={empresa.bairro} />
                  <TextProps title='Município' text={`${empresa.municipio} - ${empresa.uf}`} />
                  <TextProps title='CEP' text={empresa.cep} />
                </SimpleGrid>
              </CardBody>
            </CardDefault>

            <Tooltip label="Veja o Quadro Societário da Empresa" placement='right' hasArrow>
              <Button boxShadow="-5px -4px 10px rgba(0,0,0,0.8),inset 5px -4px 10px rgba(0,0,0,0.5),inset 5px 4px 10px rgba(255,255,255,0.5)"
                variant="hermes" borderRadius="50% 0px 0px 50%" px={0} position="absolute" zIndex={11}
                bottom={5} right={0} onClick={() => setIsFlip(!isFlip)}
                w="50px"
              >
                <Text ml={3} fontSize="50px" textAlign="end"><GradientText>➧︎</GradientText></Text>

              </Button>
            </Tooltip>
          </Box>
        }
          back={


            <Box position="relative" w="700px" h="550px">
              <CardDefault>
                <CardHeader>
                  <Heading><GradientText>Detalhes</GradientText></Heading>
                </CardHeader>
                <CardBody w="100%" pl={20} justifyContent="start" position="relative">
                  <Heading fontSize={20} mt={0} mb={2}><GradientText>CNAE</GradientText></Heading>
                  <VStack w="100%" overflowY="auto" overflowX="hidden" h="350px" >
                    <HStack w="100%" h="55px" border="1px solid white" px={0} py={0} borderRadius="8px" >
                      <Box pl={2}>
                        <TextPropsCnae title={empresa.cnae_fiscal} text={empresa.cnae_fiscal_descricao} />
                      </Box>
                      <GradientBox style={{ h: "100%", w: "200px", p: "4px", position: "relative", borderRadius: "100% 6px 6px 0", justifyContent: "end", alignItems: "end" }} >
                        <Text position="absolute" bottom={1.5} right={2} fontWeight="bold" color="hermesBlue.400" fontSize="20px">Anexo III</Text>
                      </GradientBox>
                    </HStack>

                    {empresa.cnaes_secundarios.map((cnae, index) => (
                      <HStack w="100%" h="55px" key={index} border="1px solid white" px={0} py={0} borderRadius="8px" justify="space-between">
                        <Box pl={2} >
                          <TextPropsCnae title={cnae.codigo} text={cnae.descricao} />
                        </Box>
                        <GradientBox style={{ h: "100%", w: "200px", p: "4px", position: "relative", borderRadius: "100% 6px 6px 0", justifyContent: "end", alignItems: "end" }} >
                          <Text position="absolute" bottom={1.5} right={2} fontWeight="bold" color="hermesBlue.400" fontSize="20px">{retornaAnexo(`${cnae.codigo}`)}</Text>
                        </GradientBox>
                      </HStack>
                    ))}

                  </VStack >
                  <Box display={empresa.cnaes_secundarios.length > 5 ? "flex" : "none"} w="583px" boxShadow="0px -15px 10px rgba(0,0,0,0.5)" h="40px" position="absolute" bottom={2}></Box>
                </CardBody>
              </CardDefault>

              <Button boxShadow="5px 4px 10px rgba(0,0,0,0.8),inset -5px 4px 10px rgba(0,0,0,0.5),inset -5px -4px 10px rgba(255,255,255,0.5)"
                variant="hermes" borderRadius=" 0px 50% 50% 0%" px={0} position="absolute" zIndex={11}
                bottom={5} left={0} onClick={() => setIsFlip(!isFlip)}
                w="50px"
              >
                <Text transform="rotate(180deg)" mr={3} fontSize="50px" textAlign="end"><GradientText>➧︎</GradientText></Text>
              </Button>
            </Box>

          }
          isFlipProp={isFlip}
        />}
      </VStack>
      
      
      
    </Center>
  )
}

ConsultaCnpj.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};