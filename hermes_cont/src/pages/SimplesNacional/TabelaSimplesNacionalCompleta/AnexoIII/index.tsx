import { DefaultLayout } from '@/components/templates/DefaultLayout';
import React from 'react'
import { Box, Center, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Text, Tfoot, Th, Thead, Td, Tr, VStack, Card, Tooltip, Button, CardFooter, Divider, Flex } from '@chakra-ui/react'
import GradientText from '@/components/atoms/GradientText/GradientText';
import Link from 'next/link';
import image from "/public/hermesTabelaBg3.png"
import GradientBox from '@/components/atoms/GradientBox/GradientBox';
import { ForumLayout } from '@/components/templates/ForumLayout';

export default function AnexoIII() {


  return (
    <Center w="100vw" h="100%" bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)" >
      <VStack align="center" justify="start" h="100%" w="100%" mt="80px">

        <Box w="50%" h="100%" pb={10}>
          <VStack  >
            <Flex w="100%" justify="center" align="center" direction="column">
              <Box as='section'>
                <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                  O que é Anexo III do Simples Nacional?
                </Heading>
                <Text px={5} fontSize="23px" lineHeight="35px">
                  O Anexo III da tabela do <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/"><GradientText style={{ fontWeight: "bold" }}>Simples Nacional </GradientText></Link>enquadra atividades que vão desde serviços de manutenção, reparos e usinagem até agências de viagem, escritórios contábeis, escolas e empresas médicas, com alíquotas que variam entre 6% e 33% de acordo com a receita bruta.
                </Text>
              </Box>
              <Box as='section'>
                <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                  Como funciona o fator R e qual a relação com o Anexo III?
                </Heading>
                <Text px={5} fontSize="23px" lineHeight="35px">
                  Se você utilizar a fórmula, fica fácil descobrir se a tributação da sua empresa se enquadra no Anexo III. Para isso, o resultado do cálculo simples nacional deve ser igual ou superior a 28%. Veja o exemplo:
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
                      <Text px={2}><strong>Fator R</strong> = R$ 11.200,00 / R$ 40.000,00</Text>
                      <CardFooter p={0} m={0} bgColor="hermesBlue.400" borderRadius="0px 0px 8px 8px">
                        <Text px={2}><GradientText style={""}>Fator R = 0,28 ou 28%</GradientText></Text>
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
                  ANEXO 3 – Tabela Simples Nacional 2024 – Serviços
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
                        <Td  >Até R$ 180.000,00</Td>
                        <Td>6%</Td>
                        <Td>0</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>2ª Faixa</Td>
                        <Td>De R$ 180.000,01 a R$ 360.000,00</Td>
                        <Td>11,2%</Td>
                        <Td>R$ 9.360,00</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>3ª Faixa</Td>
                        <Td>De R$ 360.000,01 a R$ 720.000,00</Td>
                        <Td>13,5%</Td>
                        <Td >R$ 17.640,00</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>4ª Faixa</Td>
                        <Td>De R$ 720.000,01 a R$ 1.800.000,00</Td>
                        <Td>16%</Td>
                        <Td >R$ 35.640,00</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>5ª Faixa</Td>
                        <Td>De R$ 1.800.000,01 a R$ 3.600.000,00</Td>
                        <Td>21%</Td>
                        <Td >R$ 125.640,00</Td>
                      </Tr>

                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>6ª Faixa</Td>
                        <Td>De R$ 3.600.000,01 a R$ 4.800.000,00</Td>
                        <Td>33%</Td>
                        <Td>R$ 648.000,00</Td>
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
                        <Td>43,40%</Td>
                        <Td>33,50%</Td>
                        <Td>3,50%</Td>
                        <Td>4,00%</Td>
                        <Td>12,82%</Td>
                        <Td>2,78%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>2ª Faixa</Td>
                        <Td>43,40%</Td>
                        <Td>32,00%</Td>
                        <Td>3,50%</Td>
                        <Td>4,00%</Td>
                        <Td>14,05%</Td>
                        <Td>3,05%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>3ª Faixa	</Td>
                        <Td>43,40%</Td>
                        <Td>32,50%</Td>
                        <Td>3,50%</Td>
                        <Td>4,00%</Td>
                        <Td>13,64%	</Td>
                        <Td>2,96%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>4ª Faixa	</Td>
                        <Td>43,40%</Td>
                        <Td>32,50%</Td>
                        <Td>3,50%</Td>
                        <Td>4,00%</Td>
                        <Td>13,64%</Td>
                        <Td>2,96%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>5ª Faixa	</Td>
                        <Td>43,40%</Td>
                        <Td>33,50%<GradientText style={""}>(*)</GradientText></Td>
                        <Td>3,50%</Td>
                        <Td>4,00%</Td>
                        <Td>12,82%</Td>
                        <Td>2,78%</Td>
                      </Tr>

                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>6ª Faixa	</Td>
                        <Td>30,50%</Td>
                        <Td>_</Td>
                        <Td>15,00%</Td>
                        <Td>35,00%</Td>
                        <Td>16,03%</Td>
                        <Td>3,47%</Td>
                      </Tr>
                    </Tbody>

                  </Table>
                </TableContainer>
              </Box>
              <Text px={5} my={5} fontSize="23px" lineHeight="35px"><GradientText style={""}>(*)</GradientText> O percentual efetivo máximo devido ao ISS será de 5%,
                transferindo-se a diferença, de forma proporcional,
                aos tributos federais da mesma faixa de receita bruta anual.
                Sendo assim, na 5a faixa, quando a alíquota efetiva for superior a 14,92537%, a repartição será:</Text>


              <Card color="hermesBlue.400" fontSize="23px" lineHeight="35px" p={3} border="1px solid #28283c">
                <Text><strong>Faixa = </strong>5ª Faixa, com alíquota efetiva superior a 14,92537%</Text>
                <Text><strong>CPP =   </strong>(Alíquota efetiva 5%) x 65,26%</Text>
                <Text><strong>ISS = </strong>Percentual de ISS fixo em 5%</Text>
                <Text><strong>CSLL = </strong>(Alíquota efetiva 5%) x 5,26%</Text>
                <Text><strong>IRPJ = </strong>(Alíquota efetiva 5%) x 6,02%</Text>
                <Text><strong>Cofins = </strong>(Alíquota efetiva 5%) x 19,28%</Text>
                <Text><strong>Pis/Pasep = </strong>(Alíquota efetiva 5%) x 4,18%</Text>
              </Card>
            </Flex>
          </VStack>

        </Box>

      </VStack >
    </Center >
  )
}
AnexoIII.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};