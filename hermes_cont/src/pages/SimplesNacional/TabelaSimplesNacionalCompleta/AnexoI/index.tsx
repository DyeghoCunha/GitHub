import { DefaultLayout } from '@/components/templates/DefaultLayout';
import React from 'react'
import { Box, Center, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Text, Tfoot, Th, Thead, Td, Tr, VStack, Card, Tooltip, Button } from '@chakra-ui/react'
import GradientText from '@/components/atoms/GradientText/GradientText';
import Link from 'next/link';
import image from "/public/hermesTabelaBg3.png"
import { ForumLayout } from '@/components/templates/ForumLayout';

export default function AnexoI() {


  return (
    <Center w="100vw" h="100%" bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)">
      <VStack align="center" justify="start" h="100%" w="100%" mt="80px">
        <Box w="50%" h="100%" pb={10}>
          <VStack >
            <Box as='section'>
              <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                O que é Anexo I do Simples Nacional?
              </Heading>
              <Text px={5} fontSize="23px" lineHeight="35px">
                O Anexo I da tabela do <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/"><GradientText style={{ fontWeight: "bold" }}>Simples Nacional</GradientText></Link> é destinado às empresas do Comércio em geral. Os impostos são calculados com base em percentual destinado a cada Tributo de acordo com a sua respectiva Faixa.
              </Text>
            </Box>
            <Box as='section'>
              <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                Como calcular os impostos pelo Anexo I?
              </Heading>
              <Text px={5} fontSize="23px" lineHeight="35px">
                O cálculo do DAS mensal para empresas do Anexo I funciona de forma similar aos demais anexos do Simples Nacional.
                O primeiro passo é o enquadramento na faixa de faturamento correta, e o cálculo da alíquota efetiva, utilizando os valores correspondentes da tabela abaixo.
                É necessário o auxílio de uma contabilidade especializada para garantir que todos os benefícios fiscais disponíveis para a empresa sejam considerados, como é o caso das reduções estaduais de ICMS, substituição tributária do ICMS e PIS e COFINS monofásico.
              </Text>
            </Box>

            <Box as='section' w="850px">
              <Heading mt={10} mb={5} fontSize="30" color="hermesBlue.500" w="100%" pl={5}>
                ANEXO 1 – Tabela Simples Nacional – Comércio – 2024
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
                    <Tr _hover={{ outline: "2px solid black" }} w="800px" >
                      <Td>1ª Faixa	</Td>
                      <Td>Até R$ 180.000,00</Td>
                      <Td>4%</Td>
                      <Td>0</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>2ª Faixa	</Td>
                      <Td>De R$ 180.000,01 a R$ 360.000,00</Td>
                      <Td>7,3%</Td>
                      <Td>R$ 5.940,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>3ª Faixa	</Td>
                      <Td>De R$ 360.000,01 a R$ 720.000,00</Td>
                      <Td>9,5%</Td>
                      <Td >R$ 13.860,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>4ª Faixa	</Td>
                      <Td>De R$ 720.000,01 a R$ 1.800.000,00</Td>
                      <Td>10,7%</Td>
                      <Td >R$ 22.500,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>5ª Faixa	</Td>
                      <Td>De R$ 1.800.000,01 a R$ 3.600.000,00</Td>
                      <Td>14,3%</Td>
                      <Td >R$ 87.300,00</Td>
                    </Tr>

                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>6ª Faixa	</Td>
                      <Td>De R$ 3.600.000,01 a R$ 4.800.000,00</Td>
                      <Td>19%</Td>
                      <Td>R$ 378.000,00</Td>
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

              <TableContainer bgPosition="center" bgSize="contain" bgRepeat="no-repeat" w="810px" border="1px solid #28283c" borderRadius={8} ml={4} mt={10} boxShadow="1px 1px 3px rgba(0,0,0,0.5)">

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

                      <Th color="white" textTransform="none" fontSize="18px">
                        <Tooltip placement='auto' hasArrow label='Contribuição Social Sob Lucro Líquido'>
                          <Text> CSLL<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                      <Th color="white" textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow
                        label='Imposto de Circulação de Mercadoria e Serviços'>
                        <Text> ICMS<GradientText style={""}>*</GradientText></Text>
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
                      <Td>41,50%</Td>
                      <Td>3,50%</Td>
                      <Td>34,00%</Td>
                      <Td>5,50%</Td>
                      <Td>12,74%</Td>
                      <Td>2,76%</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>2ª Faixa	</Td>
                      <Td>41,50%</Td>
                      <Td>3,50%</Td>
                      <Td>34,00%</Td>
                      <Td>5,50%</Td>
                      <Td>12,74%</Td>
                      <Td>2,76%</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>3ª Faixa	</Td>
                      <Td>42,00%</Td>
                      <Td>3,50%</Td>
                      <Td>33,50%</Td>
                      <Td>5,50%</Td>
                      <Td>12,74%</Td>
                      <Td>2,76%</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>4ª Faixa	</Td>
                      <Td>42,00%</Td>
                      <Td>3,50%</Td>
                      <Td>33,50%</Td>
                      <Td>5,50%</Td>
                      <Td>12,74%</Td>
                      <Td>2,76%</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>5ª Faixa	</Td>
                      <Td>42,00%</Td>
                      <Td>3,50%</Td>
                      <Td>33,50%</Td>
                      <Td>5,50%</Td>
                      <Td>12,74%</Td>
                      <Td>2,76%</Td>
                    </Tr>

                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>6ª Faixa	</Td>
                      <Td>42,00%</Td>
                      <Td>3,50%</Td>
                      <Td> _ </Td>
                      <Td>5,50%</Td>
                      <Td>12,74%</Td>
                      <Td>2,76%</Td>
                    </Tr>
                  </Tbody>

                </Table>
              </TableContainer>
            </Box>

          </VStack>

        </Box>
      </VStack>
    </Center>
  )
}
AnexoI.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};