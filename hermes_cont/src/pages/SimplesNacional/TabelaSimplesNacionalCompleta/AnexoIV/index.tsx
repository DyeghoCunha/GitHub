import { DefaultLayout } from '@/components/templates/DefaultLayout';
import React from 'react'
import { Box, Center, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Text, Tfoot, Th, Thead, Td, Tr, VStack, Card, Tooltip, Button, CardFooter, Divider, Flex, UnorderedList, ListItem } from '@chakra-ui/react'
import GradientText from '@/components/atoms/GradientText/GradientText';
import Link from 'next/link';

import image from "/public/hermesTabelaBg3.png"
import { ForumLayout } from '@/components/templates/ForumLayout';
export default function AnexoIV() {


  return (
    <Center w="100vw" h="100%" bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)" >
      <VStack align="center" justify="start" h="100%" w="100%" marginTop="80px" >
        <Box w="50%" h="100%" pb={10}>
          <VStack  >
            <Flex w="100%" justify="center" align="center" direction="column">
              <Box as='section'>
                <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                  O que é Anexo IV do Simples Nacional?
                </Heading>
                <Text px={5} fontSize="23px" lineHeight="35px">
                  O Anexo IV da tabela do <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/"><GradientText style={{ fontWeight: "bold" }}>Simples Nacional </GradientText></Link>é destinado às empresas de Serviços: empresas que fornecem serviço de limpeza, vigilância, obras, construção de imóveis, serviços advocatícios. Percentual destinado a cada Tributo de acordo com a sua respectiva Faixa.
                </Text>
              </Box>
              <Box as='section'>
                <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                  Como calcular os impostos pelo Anexo IV?
                </Heading>
                <Text px={5} fontSize="23px" lineHeight="35px">
                  Desde 2018, as atividades de prestação de serviços seguintes são tributadas pelo Anexo IV, onde não está incluída no Simples Nacional a CPP (Contribuição Previdenciária Patronal), devendo ela ser recolhida segundo a legislação prevista para os demais contribuintes ou responsáveis (LC nº 123/06, art. 18, § 5º-C; Resolução CGSN nº 94/2011, art. 25-A, § 1º, IV).
                </Text>

                <Text px={5} fontSize="23px" lineHeight="35px">
                  Na CPP devida pelas empresas do Simples Nacional não se inclui os valores relacionados a terceiros (SENAI, SESC, SEST, SENAT etc.), pois as empresas do Simples Nacional estão dispensadas do pagamento das demais contribuições instituídas pela União (art. 13, § 3º).
                </Text>

                <Text px={5} fontSize="23px" lineHeight="35px">
                  Os serviços abrangidos pelo Anexo IV são os seguintes:
                </Text>


                <Flex justify="center" align="center" >
                  <UnorderedList border="3px solid #28283c" my="40px" bgColor="white" borderRadius="8px" boxShadow=" 4px 4px 8px rgba(0,0,0,0.5)" px="40px" fontSize="20px" lineHeight="35px">
                    <ListItem>Construção de imóveis e obras de engenharia em geral, inclusive sob a forma de subempreitada. </ListItem>
                    <ListItem>Execução de projetos e serviços de paisagismo, bem como decoração de interiores.</ListItem>
                    <ListItem>Serviço de vigilância, limpeza ou conservação</ListItem>
                    <ListItem>Serviços advocatícios. (Incluído pela LC nº 147/2014; efeitos: 1º/01/2015)</ListItem>
                  </UnorderedList>
                </Flex>
              </Box>

              <Box as='section' w="850px">
                <Heading mt={10} mb={5} fontSize="30" color="hermesBlue.500" w="100%" pl={5}>
                  ANEXO 4 – Tabela Simples Nacional 2024 – Serviços
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
                        <Td>Até R$ 180.000,00</Td>
                        <Td>4,5%</Td>
                        <Td>0</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>2ª Faixa</Td>
                        <Td>De R$ 180.000,01 a R$ 360.000,00</Td>
                        <Td>9%</Td>
                        <Td>R$ 8.100,00</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>3ª Faixa</Td>
                        <Td>De R$ 360.000,01 a R$ 720.000,00</Td>
                        <Td>10,2%</Td>
                        <Td >R$ 12.420,00</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>4ª Faixa</Td>
                        <Td>De R$ 720.000,01 a R$ 1.800.000,00</Td>
                        <Td>14%</Td>
                        <Td >R$ 39.780,00</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>5ª Faixa</Td>
                        <Td>De R$ 1.800.000,01 a R$ 3.600.000,00</Td>
                        <Td>22%</Td>
                        <Td >R$ 183.780,00</Td>
                      </Tr>

                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>6ª Faixa</Td>
                        <Td>De R$ 3.600.000,01 a R$ 4.800.000,00</Td>
                        <Td>33%</Td>
                        <Td>R$ 828.000,00</Td>
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
                        <Td>44,50%</Td>
                        <Td>15,20%</Td>
                        <Td>18,80%</Td>
                        <Td>17,67%</Td>
                        <Td>3,83%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>2ª Faixa</Td>
                        <Td>40,00%</Td>
                        <Td>15,20%</Td>
                        <Td>19,80%</Td>
                        <Td>20,55%</Td>
                        <Td>4,45%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>3ª Faixa	</Td>
                        <Td>40,00%</Td>
                        <Td>15,20%</Td>
                        <Td>20,80%</Td>
                        <Td>19,73%</Td>
                        <Td>4,27%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>4ª Faixa	</Td>
                        <Td>40,00%</Td>
                        <Td>19,20%</Td>
                        <Td>17,80%</Td>
                        <Td>18,90%</Td>
                        <Td>4,10%</Td>
                      </Tr>
                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>5ª Faixa	</Td>
                        <Td>40,00%<GradientText style={""}>(*)</GradientText></Td>
                        <Td>19,20%</Td>
                        <Td>18,80%</Td>
                        <Td>18,08%</Td>
                        <Td>3,92%</Td>
                      </Tr>

                      <Tr _hover={{ outline: "2px solid black" }} >
                        <Td>6ª Faixa	</Td>
                        <Td>_</Td>
                        <Td>21,50%</Td>
                        <Td>53,50%</Td>
                        <Td>20,55%</Td>
                        <Td>4,45%</Td>
                      </Tr>
                    </Tbody>

                  </Table>
                </TableContainer>
              </Box>
              <Text px={5} my={5} fontSize="23px" lineHeight="35px"><GradientText style={""}>(*)</GradientText> O percentual efetivo máximo devido ao ISS será de 5%, transferindo-se a diferença, de forma proporcional, aos tributos federais da mesma faixa de receita bruta anual. Sendo assim, na 5a faixa, quando a alíquota efetiva for superior a 12,5%, a repartição será:</Text>


              <Card color="hermesBlue.400" fontSize="23px" lineHeight="35px" p={3} border="1px solid #28283c">
                <Text><strong>Faixa = </strong>5ª Faixa, com alíquota efetiva superior a 12,5%</Text>
                <Text><strong>CPP =   </strong>(Alíquota efetiva 5%) x 65,26%</Text>
                <Text><strong>ISS = </strong>Percentual de ISS fixo em 5%</Text>
                <Text><strong>CSLL = </strong>(Alíquota efetiva 5%) x 32,00%</Text>
                <Text><strong>IRPJ = </strong>(Alíquota efetiva 5%) x 31,33%</Text>
                <Text><strong>Cofins = </strong>(Alíquota efetiva 5%) x 30,13%</Text>
                <Text><strong>Pis/Pasep = </strong>(Alíquota efetiva 5%) x 6,54%</Text>
              </Card>
            </Flex>
          </VStack>

        </Box>
      </VStack>
    </Center >
  )
}
AnexoIV.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};