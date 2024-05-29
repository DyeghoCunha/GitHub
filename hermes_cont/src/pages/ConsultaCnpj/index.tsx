import { DefaultLayout } from '@/components/templates/DefaultLayout';
import { Box, Button, Card, CardBody, CardHeader, Center, CircularProgress, Flex, Heading, HStack, Icon, Image, SimpleGrid, Skeleton, SkeletonText, Text, Tooltip, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import InputCnpj from '../SimplesNacional/components/InputCnpj/InputCnpj';
import GradientText from '@/components/atoms/GradientText/GradientText';

import { formatarNumero, limparNumero, removerEspacos } from '@/utils/manipulaNumeros';
import CnaeImg from "./image/cnaeIMG.svg"
import { IoIosPeople } from "react-icons/io";
import FlipCard3dClick from './flipCard3dClick/FlipCard3dClick';
import { GrNext } from "react-icons/gr";
import GradientBox from '@/components/atoms/GradientBox/GradientBox';
import Link from 'next/link';
import { retornaAnexo } from '@/utils/cnae';
import CardDefault from '@/components/atoms/CardDefault/CardDefault';
import PageContainer from '@/components/atoms/PageContainer/PageContainer';
import PreloaderComponent from '@/components/PreloaderComponent/PreloaderComponent';
import { ForumLayout } from '@/components/templates/ForumLayout';

export default function ConsultaCnpj() {



  const [cnpj, setCnpj] = useState("");
  const [empresa, setEmpresa] = useState<any>({});
  const [isValidated, setIsValidated] = useState(false)
  const [isFlip, setIsFlip] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showCard, setShowCard] = useState(false)

  interface ITextProps {
    title: string | number,
    text: string
    isLoading: boolean
  }

  const TextProps = ({ title, text, isLoading }: ITextProps) => {
    return (
      <VStack justify="center" align="start" gap={0} role='group'>
        <Text color="gray">{title}</Text>
        <Skeleton startColor='rgba(242,242,243,0.5)' fadeDuration={4} endColor='rgba(241,226,194,1)' isLoaded={!isLoading}>
          <Text _groupHover={{ color: "#F1AC19" }}>
            {text}
          </Text></Skeleton>
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
    <>
      <PreloaderComponent />
      <PageContainer>
        <Heading mb="60px" mt="180px" fontSize="4vw"><GradientText style={""}>Consulta de CNPJ</GradientText></Heading>

        <Box w="340px" mb="30px">
          <CardDefault>
            <InputCnpj 
            isLoading={isLoading} 
            setShowCard={setShowCard} 
            setIsLoading={setIsLoading} 
            setCnpjProp={setCnpj} 
            setEmpresaProp={setEmpresa} 
            setIsValidated={setIsValidated} />
          </CardDefault>
        </Box>

        {showCard &&
          <FlipCard3dClick front={
            <Box position="relative" w="700px" h="550px">
              <CardDefault>
                <CardHeader>
                  <HStack>
                    <Heading><GradientText style={""}>Detalhes</GradientText></Heading>

                  </HStack>
                </CardHeader>
                {empresa && <CardBody w="100%">
                  <SimpleGrid columns={2} spacingY={5} w="100%">
                    <TextProps isLoading={isLoading} title="Tipo de Unidade" text={empresa.descricao_identificador_matriz_filial} />
                    <TextProps isLoading={isLoading} title="Porte" text={empresa.porte} />
                    <TextProps isLoading={isLoading} title="CNPJ" text={formatarNumero(empresa.cnpj)} />
                    <TextProps isLoading={isLoading} title='Razão Social' text={empresa.razao_social} />
                    <TextProps isLoading={isLoading} title='Data de Abertura' text={empresa.data_inicio_atividade} />
                    <TextProps isLoading={isLoading} title='Opção pelo Simples Nacional' text={`${empresa.opcao_pelo_simples === true ? `Optante desde ${empresa.data_opcao_pelo_simples}` : "Não Optante"}`} />
                  </SimpleGrid >
                  <Heading fontSize={20} mt={10} mb={2}><GradientText style={""}>Endereço</GradientText></Heading>
                  <SimpleGrid columns={2} spacingY={2} w="100%" >
                    <TextProps isLoading={isLoading} title={empresa.descricao_tipo_de_logradouro.length > 0 ? empresa.descricao_tipo_de_logradouro : "Rua"} text={empresa.logradouro} />
                    <TextProps isLoading={isLoading} title='Numero' text={empresa.numero} />
                    <TextProps isLoading={isLoading} title='Complemento' text={empresa.complemento} />
                    <TextProps isLoading={isLoading} title='Bairro' text={empresa.bairro} />
                    <TextProps isLoading={isLoading} title='Município' text={`${empresa.municipio} - ${empresa.uf}`} />
                    <TextProps isLoading={isLoading} title='CEP' text={empresa.cep} />
                  </SimpleGrid>
                </CardBody>}


              </CardDefault>

              <Tooltip label="Veja o Quadro Societário da Empresa" placement='right' hasArrow>
                <Button boxShadow="-5px -4px 10px rgba(0,0,0,0.8),inset 5px -4px 10px rgba(0,0,0,0.5),inset 5px 4px 10px rgba(255,255,255,0.5)"
                  variant="hermes"  borderRadius="50% 0px 0px 50%" px={0} position="absolute" 
                  bottom={5} right={0} onClick={() => setIsFlip(!isFlip)}
                  w="50px"
                >
                  <Text ml={3} fontSize="50px" textAlign="end"><GradientText style={""}>➧︎</GradientText></Text>

                </Button>
              </Tooltip>
            </Box>
          }
            back={


              <Box position="relative" w="700px" h="550px">
                <CardDefault>
                  <CardHeader>
                    <Heading><GradientText style={""}>Detalhes</GradientText></Heading>
                  </CardHeader>
                  <CardBody w="100%" pl={20} justifyContent="start" position="relative">
                    <Heading fontSize={20} mt={0} mb={2}><GradientText style={""}>CNAE</GradientText></Heading>
                    <VStack w="100%" overflowY="auto" overflowX="hidden" h="350px" >
                      <HStack w="100%" h="55px" border="1px solid white" px={0} py={0} borderRadius="8px" >
                        <Box pl={2}>
                          <TextPropsCnae isLoading={isLoading} title={empresa.cnae_fiscal} text={empresa.cnae_fiscal_descricao} />
                        </Box>
                        <GradientBox style={{ h: "100%", w: "200px", p: "4px", position: "relative", borderRadius: "100% 6px 6px 0", justifyContent: "end", alignItems: "end" }} >
                          <Link href={`/SimplesNacional/TabelaSimplesNacionalCompleta/${removerEspacos(retornaAnexo(empresa.cnae_fiscal))}`}>
                            <Text position="absolute" bottom={1.5} right={2} fontWeight="bold" color="hermesBlue.400" fontSize="20px">{retornaAnexo(`${empresa.cnae_fiscal}`)}</Text>
                          </Link>
                        </GradientBox>
                      </HStack>

                      {empresa.cnaes_secundarios.map((cnae:any, index:any) => (
                        <HStack w="100%" h="55px" key={index} border="1px solid white" px={0} py={0} borderRadius="8px" justify="space-between">
                          <Box pl={2} >
                            <TextPropsCnae isLoading={isLoading} title={cnae.codigo} text={cnae.descricao} />
                          </Box>
                          <GradientBox style={{ h: "100%", w: "200px", p: "4px", position: "relative", borderRadius: "100% 6px 6px 0", justifyContent: "end", alignItems: "end" }} >
                            <Link href={`/SimplesNacional/TabelaSimplesNacionalCompleta/${removerEspacos(retornaAnexo(cnae.codigo))}`}>
                              <Text position="absolute" bottom={1.5} right={2} fontWeight="bold" color="hermesBlue.400" fontSize="20px">{retornaAnexo(`${cnae.codigo}`)}</Text>
                            </Link>
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
                  <Text transform="rotate(180deg)" mr={3} fontSize="50px" textAlign="end"><GradientText style={""}>➧︎</GradientText></Text>
                </Button>
              </Box>

            }
            isFlipProp={isFlip}
          />}
      </PageContainer>
    </>
  )
}

ConsultaCnpj.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};