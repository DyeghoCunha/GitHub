import { DefaultLayout } from '@/components/templates/DefaultLayout';
import React from 'react'
import { Box, Center, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Text, Tfoot, Th, Thead, Td, Tr, VStack, Card, Tooltip, Button, CardFooter, Divider, Flex } from '@chakra-ui/react'
import GradientText from '@/components/atoms/GradientText/GradientText';
import Link from 'next/link';
import image from "/public/hermesTabelaBg3.png"
import GradientBox from '@/components/atoms/GradientBox/GradientBox';
import { ForumLayout } from '@/components/templates/ForumLayout';
export default function AnexoV() {


  return (
    <Center w="100vw" h="100%" bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)" >
      <VStack align="center" justify="start" h="100%" w="100%" mt="80px">

        <Box w="50%" h="100%" pb={10}>
          <VStack  >
            <Flex w="100%" justify="center" align="center" direction="column">
              <Box as='section'>
                <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                  O que é Anexo V do Simples Nacional?
                </Heading>
                <Text px={5} fontSize="23px" lineHeight="35px">
                  O Anexo V é usado para calcular os impostos de um determinado grupo de empresas prestadoras de serviços e optantes pelo
                  <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/"><GradientText style={{ fontWeight: "bold" }}> Simples Nacional </GradientText></Link>
                  enquadra atividades que vão desde serviços de manutenção, reparos e usinagem até agências de viagem, escritórios contábeis, escolas e empresas médicas, com alíquotas que variam entre 6% e 33% de acordo com a receita bruta.
                </Text>
              </Box>
              <Box as='section'>
                <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                  Como funciona o fator R e qual a relação com o Anexo V?
                </Heading>
                <Text px={5} fontSize="23px" lineHeight="35px">
                  O cálculo do Fator R para as atividades que pertencem ao <strong>Anexo V</strong> ocorre da mesma maneira que o <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoIII"><GradientText style={{ fontWeight: "bold" }}>Anexo III </GradientText></Link>. No entanto, enquadram-se nessas alíquotas resultados <strong>inferiores a 28%</strong>. Exemplo:
                </Text>
                <HStack justify="center" align="center" my="40px">
                  <Link href="/FatorR/CalculadoraFatorR" >
                    <GradientBox
                      style={{
                        width: "200px",
                        borderRadius: "8px",
                        boxShadow: " inset 4px 4px 8px rgba(255,255,255,0.5),inset -4px -4px 8px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,0.2),-4px -4px 8px rgba(0,0,0,0.2)",
                        padding: "15px",
                        cursor: "pointer",
                      }}>
                      <Text textAlign="center" fontWeight="bold" fontSize="20px">Use nossa Calculadora</Text>
                    </GradientBox></Link>
                  <Flex justify="center" align="center" >
                    <Card mx={4} mt={0} color="hermesBlue.400" border="1px solid #28283c" p={0} w="400px" fontSize="20px">
                      <Text px={2}><strong>Fator R</strong> = Massa Salarial / Receita Bruta</Text>
                      <Divider borderColor="rgba(0,0,0,0.5)" />
                      <Text px={2}><strong>Fator R</strong> = R$ 22.000,00 / 100.000,00</Text>
                      <CardFooter p={0} m={0} bgColor="hermesBlue.400" borderRadius="0px 0px 8px 8px">
                        <Text px={2}><GradientText style={""}>Fator R = 0,22 ou 22%</GradientText></Text>
                      </CardFooter>
                    </Card>
                  </Flex>
                  <Link href="/FatorR" >
                    <GradientBox
                      style={{
                        width: "200px",
                        borderRadius: "8px",
                        boxShadow: " inset 4px 4px 8px rgba(255,255,255,0.5),inset -4px -4px 8px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,0.2),-4px -4px 8px rgba(0,0,0,0.2)",
                        padding: "15px",
                        cursor: "pointer",
                      }}>
                      <Text textAlign="center" fontWeight="bold" fontSize="20px">Duvidas Sobre Fator R ?</Text>
                    </GradientBox></Link>
                </HStack>
              </Box>

              <Box as='section' w="850px">
                <Heading mt={10} mb={5} fontSize="30" color="hermesBlue.500" w="100%" pl={5}>
                  ANEXO 5 – Tabela Simples Nacional 2024 – Serviços
                </Heading>
                <Text px={5} fontSize="23px" lineHeight="35px">
                </Text>

                <TableContainer bgPosition="center" bgSize="contain" bgRepeat="no-repeat" w="810px" border="1px solid #28283c" borderRadius={8} ml={4} mt={10} boxShadow="1px 1px 3px rgba(0,0,0,0.5)">

                  <Table>
                    <TableCaption bgColor="hermesBlue.400"></TableCaption>
                    <Thead bgColor="hermesBlue.400" >
                      <Tr>
                        <Th color="white" textTransform="none" fontSize="18px">
                          <Tooltip placement='auto' hasArrow label='Faixa em que a empresa se encontra'>
                            <Text>Faixa<GradientText style={""}>*</GradientText></Text>
                          </Tooltip> </Th>

                        <Th color="white" textTransform="none" fontSize="18px">
                          <Tooltip placement='auto' hasArrow label='Faturamento total dos últimos 12 meses'>
                            <Text> Receita Bruta Total<GradientText style={""}>*</GradientText></Text>
                          </Tooltip></Th>
                        <Th color="white" textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Alíquota para fins de cálculo, não é a alíquota final'>
                          <Text> Alíquota<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                        <Th color="white" textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Quanto descontar do valor recolhido'>
                          <Text>Fator Redutor<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                      </Tr>
                    </Thead>
                    <Tbody backgroundImage={image.src} bgPosition="right" bgSize="contain" bgRepeat="no-repeat">
                      <Tr _hover={{ outline: "2px solid black" }}  >
                        <Td>1ª Faixa</Td>
                        <Td >Até R$ 180.000,00</Td>
                        <Td>15,5%</Td>
                        <Td>0</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>2ª Faixa</Td>
                        <Td>De R$ 180.000,01 a R$ 360.000,00</Td>
                        <Td>18%</Td>
                        <Td>R$ 4.500,00</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>3ª Faixa</Td>
                        <Td>De R$ 360.000,01 a R$ 720.000,00</Td>
                        <Td>19,5%</Td>
                        <Td >R$ 9.900,00</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>4ª Faixa</Td>
                        <Td>De R$ 720.000,01 a R$ 1.800.000,00</Td>
                        <Td>20,5%</Td>
                        <Td >R$ 17.100,00</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>5ª Faixa</Td>
                        <Td>De R$ 1.800.000,01 a R$ 3.600.000,00</Td>
                        <Td>23%</Td>
                        <Td >R$ 62.100,00</Td>
                      </Tr>

                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>6ª Faixa</Td>
                        <Td>De R$ 3.600.000,01 a R$ 4.800.000,00</Td>
                        <Td>30,50%</Td>
                        <Td>R$ 540.000,00</Td>
                      </Tr>
                    </Tbody>


                  </Table>
                </TableContainer>
              </Box>

              <Box as='section' w="850px">
                <Heading mt={10} mb={5} fontSize="30" color="hermesBlue.500" w="100%" pl={5}>
                  Percentual de Repartição dos Tributos
                </Heading>
                <Text px={5} fontSize="23px" lineHeight="35px">
                </Text>

                <TableContainer bgPosition="center" bgSize="contain" bgRepeat="no-repeat" w="100%" border="1px solid #28283c" borderRadius={8} ml={4} mt={10} boxShadow="1px 1px 3px rgba(0,0,0,0.5)">

                  <Table>
                    <TableCaption bgColor="hermesBlue.400"></TableCaption>
                    <Thead bgColor="hermesBlue.400" >
                      <Tr>
                        <Th color="white" textTransform="none" fontSize="18px" >
                          <Text>Faixa</Text>
                        </Th>
                        <Th color="white" textTransform="none" fontSize="18px">
                          <Tooltip placement='auto' hasArrow label='Contribuição Patronal Previdenciária'>
                            <Text>CPP<GradientText style={""}>*</GradientText></Text>
                          </Tooltip> </Th>
                        <Th color="white" textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow
                          label='Imposto Sobre Serviços'>
                          <Text> ISS<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                        <Th color="white" textTransform="none" fontSize="18px">
                          <Tooltip placement='auto' hasArrow label='Contribuição Social Sob Lucro Líquido'>
                            <Text> CSLL<GradientText style={""}>*</GradientText></Text>
                          </Tooltip></Th>

                        <Th color="white" textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow
                          label='Imposto de Renda de Pessoa Jurídica'>
                          <Text>IRPJ<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                        <Th color="white" textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow
                          label='Contribuição para o Financiamento da Seguridade Social'>
                          <Text>Cofins<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                        <Th color="white" textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow
                          label='Programa de Integração Social (PIS) e o Programa de Formação do Patrimônio do Servidor Público (PASEP)'>
                          <Text>PIS/Pasep<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                      </Tr>
                    </Thead>
                    <Tbody backgroundImage={image.src} bgPosition="right" bgSize="contain" bgRepeat="no-repeat">
                      <Tr _hover={{ outline: "2px solid black" }} w="800px" >
                        <Td>1ª Faixa</Td>
                        <Td>28,85%</Td>
                        <Td>14,00%	</Td>
                        <Td>15,00%</Td>
                        <Td>25,00%</Td>
                        <Td>14,10%</Td>
                        <Td>3,05%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>2ª Faixa</Td>
                        <Td>27,85%</Td>
                        <Td>17,00%	</Td>
                        <Td>15,00%</Td>
                        <Td>23,00%</Td>
                        <Td>14,10%</Td>
                        <Td>3,05%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>3ª Faixa	</Td>
                        <Td>23,85%</Td>
                        <Td>19,00%	</Td>
                        <Td>15,00%</Td>
                        <Td>24,00%</Td>
                        <Td>14,92%</Td>
                        <Td>3,23%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>4ª Faixa	</Td>
                        <Td>23,85%</Td>
                        <Td>21,00%	</Td>
                        <Td>15,00%</Td>
                        <Td>21,00%</Td>
                        <Td>15,74%</Td>
                        <Td>3,41%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>5ª Faixa	</Td>
                        <Td>23,85%</Td>
                        <Td>23,50%	</Td>
                        <Td>12,50%</Td>
                        <Td>23,00%</Td>
                        <Td>14,10%</Td>
                        <Td>3,05%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>6ª Faixa	</Td>
                        <Td>29,50%</Td>
                        <Td>_</Td>
                        <Td>15,50%</Td>
                        <Td>35,00%</Td>
                        <Td>16,44%</Td>
                        <Td>3,56%</Td>
                      </Tr>


                    </Tbody>

                  </Table>
                </TableContainer>
              </Box>

            </Flex>
          </VStack>

        </Box>
      </VStack>
    </Center >
  )
}
AnexoV.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};