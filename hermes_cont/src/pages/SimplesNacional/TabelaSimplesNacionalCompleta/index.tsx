import GradientText from '@/components/atoms/GradientText/GradientText';
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import { Box, Center, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Text, Tfoot, Th, Thead, Td, Tr, VStack, Card, Tooltip, Button } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import image from "/public/hermesTabelaBg3.png"
import { ForumLayout } from '@/components/templates/ForumLayout';

export default function TabelaSimplesNacionalCompleta() {


  return (
    <Center w="100vw" h="100%" bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)" >
      <HStack w="80%" mt="80px"  >
        <Box border="1px solid white" as='aside' h="100vh" w="10%" ></Box>
        <Box w="100%" h="100%" pb={10}>
          <VStack mt={10}>
            <Box as='section'>
              <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                O que é o Simples Nacional ?
              </Heading>
              <Text px={5} fontSize="23px" lineHeight="35px">
                Ao iniciar uma empresa e registrar o CNPJ, o empresário deve definir um regime tributário.
                Essa decisão tem implicações em várias áreas, incluindo os <strong>tributos</strong> aplicáveis, como são <strong>calculados</strong> , além de regras gerais, como o limite de receita e o tamanho da empresa.
                No Brasil, há três regimes tributários disponíveis: Simples Nacional, Lucro Presumido e Lucro Real. Cada um tem suas próprias diretrizes e especificidades. O <strong>Simples Nacional</strong>  foi projetado para tornar a vida dos pequenos empresários mais fácil. Instituído por uma lei complementar em 2006, o Simples Nacional é voltado para micro e pequenas empresas. Foi criado com a intenção de diminuir a burocracia e os custos para pequenos empresários, estabelecendo um sistema unificado para o pagamento de impostos e simplificando as declarações fiscais, entre outros benefícios.
                Para um guia completo sobre como abrir uma empresa, entre em contato com a <Link href="/"><GradientText style={{ fontSize: "30px" }}>Hermès</GradientText></Link>, especializada em registro de CNPJs.
              </Text>
            </Box>
            <Box as='section'>
              <Heading my={10} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                Tabelas dos Anexos do Simples Nacional
              </Heading>
              <Text px={5} fontSize="23px" lineHeight="35px">
                Devido à complexidade do sistema tributário no Brasil, foram estabelecidos vários regimes e taxas para diferentes tipos de serviços e comércio. As diferenças entre eles estão basicamente nos impostos que o empresário precisa pagar e variam de acordo com a natureza e complexidade do negócio.

                Para entender como seu negócio está enquadrado, você primeiro precisará identificar a tabela do <strong>Simples Nacional</strong> que se aplica ao seu negócio e, em seguida, o código que foi estabelecido para o seu tipo de negócio. Continue conosco e forneceremos todas as orientações necessárias para usar as tabelas e descobrir suas alíquotas de impostos.
                O Simples Nacional é dividido em <strong>5 anexos</strong> (tabelas). Cada anexo tem diferentes faixas de alíquotas. Veja as alíquotas de cada anexo abaixo:
              </Text>
            </Box>

            <Box as='section' w="800px">
              <Heading mt={10} mb={5} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                Anexo I do Simples Nacional
              </Heading>
              <Text pl={5} as="h2"> Participantes: <strong>Empresas de Comércio </strong>(lojas em geral)</Text>
              <Text pl={5} as="h3"> Tabela 1 Simples Nacional: <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoI"><GradientText style={""}>Anexo 1 - Comércio</GradientText></Link></Text>
              <Text px={5} fontSize="23px" lineHeight="35px">
              </Text>

              <TableContainer w="800px" border="1px solid #28283c" borderRadius={8} ml={5} mt={10} boxShadow="1px 1px 3px rgba(0,0,0,0.5)">

                <Table >
                  <TableCaption color="white" bgColor="hermesBlue.400">Tabela Simples Nacional 2024 comércio</TableCaption>
                  <Thead bgColor="hermesBlue.400" >
                    <Tr >
                      <Th textTransform="none" fontSize="18px">
                        <Tooltip placement='auto' hasArrow label='Faturamento total dos últimos 12 meses'>
                          <Text color="white"> Receita Bruta Total<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Alíquota para fins de cálculo, não é a alíquota final'>
                        <Text color="white"> Alíquota<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Quanto descontar do valor recolhido'>
                        <Text color="white">Fator Redutor<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                    </Tr>
                  </Thead>
                  <Tbody backgroundImage={image.src} bgPosition="right" bgSize="contain" bgRepeat="no-repeat">
                    <Tr _hover={{ outline: "2px solid black" }} w="800px" >
                      <Td>Até R$ 180.000,00</Td>
                      <Td>4%</Td>
                      <Td>0</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 180.000,01 a R$ 360.000,00</Td>
                      <Td>7,3%</Td>
                      <Td>R$ 5.940,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 360.000,01 a R$ 720.000,00</Td>
                      <Td>9,5%</Td>
                      <Td >R$ 13.860,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 720.000,01 a R$ 1.800.000,00</Td>
                      <Td>10,7%</Td>
                      <Td >R$ 22.500,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 1.800.000,01 a R$ 3.600.000,00</Td>
                      <Td>14,3%</Td>
                      <Td >R$ 87.300,00</Td>
                    </Tr>

                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 3.600.000,01 a R$ 4.800.000,00</Td>
                      <Td>19%</Td>
                      <Td>R$ 378.000,00</Td>
                    </Tr>
                  </Tbody>

                </Table>
              </TableContainer>
            </Box>

            <Box as='section' w="800px">
              <Heading mt={10} mb={5} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                Anexo II do Simples Nacional
              </Heading>
              <Text pl={5} as="h2"> Participantes: <strong>fábricas/indústrias e empresas industriais</strong></Text>
              <Text pl={5} as="h3"> Tabela 2 Simples Nacional: <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoII"><GradientText style={""}>Anexo 2 – Indústria</GradientText></Link></Text>
              <Text px={5} fontSize="23px" lineHeight="35px">
              </Text>

              <TableContainer w="800px" border="1px solid #28283c" borderRadius={8} ml={5} mt={10} boxShadow="1px 1px 3px rgba(0,0,0,0.5)">
                <Table>
                  <TableCaption color="white" bgColor="hermesBlue.400">Tabela Simples Nacional 2024 indústria</TableCaption>
                  <Thead bgColor="hermesBlue.400" >
                    <Tr >
                      <Th textTransform="none" fontSize="18px">
                        <Tooltip placement='auto' hasArrow label='Faturamento total dos últimos 12 meses'>
                          <Text color="white"> Receita Bruta Total<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Alíquota para fins de cálculo, não é a alíquota final'>
                        <Text color="white"> Alíquota<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Quanto descontar do valor recolhido'>
                        <Text color="white"> Fator Redutor<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                    </Tr>
                  </Thead>
                  <Tbody backgroundImage={image.src} bgPosition="right" bgSize="contain" bgRepeat="no-repeat">
                    <Tr _hover={{ outline: "2px solid black" }}  >
                      <Td  >Até R$ 180.000,00</Td>
                      <Td>4,5%</Td>
                      <Td>0</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 180.000,01 a R$ 360.000,00</Td>
                      <Td>7,8%</Td>
                      <Td>R$ 5.940,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 360.000,01 a R$ 720.000,00</Td>
                      <Td>10%</Td>
                      <Td >R$ 13.860,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 720.000,01 a R$ 1.800.000,00</Td>
                      <Td>11,2%</Td>
                      <Td >R$ 22.500,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 1.800.000,01 a R$ 3.600.000,00</Td>
                      <Td>14,7%</Td>
                      <Td >R$ 85.500,00</Td>
                    </Tr>

                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 3.600.000,01 a R$ 4.800.000,00</Td>
                      <Td>30%</Td>
                      <Td>R$ 720.000,00</Td>
                    </Tr>
                  </Tbody>

                </Table>
              </TableContainer>
            </Box>


            <Box as='section' w="800px">
              <Heading mt={10} mb={5} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                Anexo III do Simples Nacional
              </Heading>
              <Text pl={5} as="h2"> Participantes: <strong>empresas que oferecem serviços de instalação, de reparos e de manutenção. Consideram-se neste anexo ainda, agências de viagens, escritórios de contabilidade, academias, laboratórios, empresas de medicina e odontologia.</strong></Text>
              <Text pl={5} as="h3"> Tabela 3 Simples Nacional: <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoIII"><GradientText style={""}>Anexo 3 – Prestadores de Serviço</GradientText></Link></Text>
              <Text px={5} fontSize="23px" lineHeight="35px">
              </Text>

              <TableContainer w="800px" border="1px solid #28283c" borderRadius={8} ml={5} mt={10} boxShadow="1px 1px 3px rgba(0,0,0,0.5)">
                <Table>
                  <TableCaption color="white" bgColor="hermesBlue.400">Tabela Simples Nacional 2024 serviços</TableCaption>
                  <Thead bgColor="hermesBlue.400" >
                    <Tr >
                      <Th textTransform="none" fontSize="18px">
                        <Tooltip placement='auto' hasArrow label='Faturamento total dos últimos 12 meses'>
                          <Text color="white"> Receita Bruta Total<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Alíquota para fins de cálculo, não é a alíquota final'>
                        <Text color="white"> Alíquota<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Quanto descontar do valor recolhido'>
                        <Text color="white"> Fator Redutor<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                    </Tr>
                  </Thead>
                  <Tbody backgroundImage={image.src} bgPosition="right" bgSize="contain" bgRepeat="no-repeat">
                    <Tr _hover={{ outline: "2px solid black" }}  >
                      <Td  >Até R$ 180.000,00</Td>
                      <Td>6%</Td>
                      <Td>0</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 180.000,01 a R$ 360.000,00</Td>
                      <Td>11,2%</Td>
                      <Td>R$ 9.360,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 360.000,01 a R$ 720.000,00</Td>
                      <Td>13,5%</Td>
                      <Td >R$ 17.640,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 720.000,01 a R$ 1.800.000,00</Td>
                      <Td>16%</Td>
                      <Td >R$ 35.640,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 1.800.000,01 a R$ 3.600.000,00</Td>
                      <Td>21%</Td>
                      <Td >R$ 125.640,00</Td>
                    </Tr>

                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 3.600.000,01 a R$ 4.800.000,00</Td>
                      <Td>33%</Td>
                      <Td>R$ 648.000,00</Td>
                    </Tr>
                  </Tbody>

                </Table>
              </TableContainer>
            </Box>

            <Box as='section' w="800px">
              <Heading mt={10} mb={5} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                Anexo IV do Simples Nacional
              </Heading>
              <Text pl={5} as="h2"> Participantes: <strong>empresas que fornecem serviço de limpeza, vigilância, obras, construção de imóveis, serviços advocatícios</strong></Text>
              <Text pl={5} as="h3"> Tabela 4 Simples Nacional: <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoIV"><GradientText style={""}>Anexo 4 – Prestadores de Serviço</GradientText></Link></Text>
              <Text px={5} fontSize="23px" lineHeight="35px">
              </Text>

              <TableContainer w="800px" border="1px solid #28283c" borderRadius={8} ml={5} mt={10} boxShadow="1px 1px 3px rgba(0,0,0,0.5)">
                <Table>
                  <TableCaption color="white" bgColor="hermesBlue.400">Tabela Simples Nacional 2024 serviços</TableCaption>
                  <Thead bgColor="hermesBlue.400" >
                    <Tr >
                      <Th textTransform="none" fontSize="18px">
                        <Tooltip placement='auto' hasArrow label='Faturamento total dos últimos 12 meses'>
                          <Text color="white"> Receita Bruta Total<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Alíquota para fins de cálculo, não é a alíquota final'>
                        <Text color="white"> Alíquota<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Quanto descontar do valor recolhido'>
                        <Text color="white"> Fator Redutor<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                    </Tr>
                  </Thead>
                  <Tbody backgroundImage={image.src} bgPosition="right" bgSize="contain" bgRepeat="no-repeat">
                    <Tr _hover={{ outline: "2px solid black" }}  >
                      <Td  >Até R$ 180.000,00</Td>
                      <Td>4,5%</Td>
                      <Td>0</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 180.000,01 a R$ 360.000,00</Td>
                      <Td>9%</Td>
                      <Td>R$ 8.100,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 360.000,01 a R$ 720.000,00</Td>
                      <Td>10,2%</Td>
                      <Td >R$ 12.420,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 720.000,01 a R$ 1.800.000,00</Td>
                      <Td>14%</Td>
                      <Td >R$ 39.780,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 1.800.000,01 a R$ 3.600.000,00</Td>
                      <Td>22%</Td>
                      <Td >R$ 183.780,00</Td>
                    </Tr>

                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 3.600.000,01 a R$ 4.800.000,00</Td>
                      <Td>33%</Td>
                      <Td>R$ 828.000,00</Td>
                    </Tr>
                  </Tbody>

                </Table>
              </TableContainer>
            </Box>

            <Box as='section' w="800px">
              <Heading mt={10} mb={5} fontSize="40" color="hermesBlue.500" w="100%" pl={5}>
                Anexo V do Simples Nacional
              </Heading>
              <Text pl={5} as="h2"> Participantes: <strong> empresas que fornecem serviço de auditoria, jornalismo, tecnologia, publicidade, engenharia, entre outros</strong></Text>
              <Text pl={5} as="h3"> Tabela 5 Simples Nacional: <Link href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoV"><GradientText style={""}>Anexo 5 – Prestadores de Serviço</GradientText></Link></Text>
              <Text px={5} fontSize="23px" lineHeight="35px">
              </Text>

              <TableContainer w="800px" border="1px solid #28283c" borderRadius={8} ml={5} mt={10} boxShadow="1px 1px 3px rgba(0,0,0,0.5)">
                <Table >
                  <TableCaption color="white" bgColor="hermesBlue.400">Tabela Simples Nacional 2024 serviços</TableCaption>
                  <Thead bgColor="hermesBlue.400" >
                    <Tr >
                      <Th textTransform="none" fontSize="18px">
                        <Tooltip placement='auto' hasArrow label='Faturamento total dos últimos 12 meses'>
                          <Text color="white"> Receita Bruta Total<GradientText style={""}>*</GradientText></Text>
                        </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Alíquota para fins de cálculo, não é a alíquota final'>
                        <Text color="white"> Alíquota<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                      <Th textTransform="none" fontSize="18px" ><Tooltip placement='auto' hasArrow label='Quanto descontar do valor recolhido'>
                        <Text color="white"> Fator Redutor<GradientText style={""}>*</GradientText></Text>
                      </Tooltip></Th>
                    </Tr>
                  </Thead>
                  <Tbody backgroundImage={image.src} bgPosition="right" bgSize="contain" bgRepeat="no-repeat">
                    <Tr _hover={{ outline: "2px solid black" }}  >
                      <Td  >Até R$ 180.000,00</Td>
                      <Td>15,5%</Td>
                      <Td>0</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 180.000,01 a R$ 360.000,00</Td>
                      <Td>18%</Td>
                      <Td>R$ 4.500,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 360.000,01 a R$ 720.000,00</Td>
                      <Td>19,5%</Td>
                      <Td >R$ 9.900,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 720.000,01 a R$ 1.800.000,00</Td>
                      <Td>20,5%</Td>
                      <Td >R$ 17.100,00</Td>
                    </Tr>
                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 1.800.000,01 a R$ 3.600.000,00</Td>
                      <Td>23%</Td>
                      <Td >R$ 62.100,00</Td>
                    </Tr>

                    <Tr _hover={{ outline: "2px solid black" }} >
                      <Td>De R$ 3.600.000,01 a R$ 4.800.000,00</Td>
                      <Td>30,50%</Td>
                      <Td>R$ 540.000,00</Td>
                    </Tr>
                  </Tbody>

                </Table>
              </TableContainer>
            </Box>



          </VStack>

        </Box>
      </HStack>
    </Center>
  )
}
TabelaSimplesNacionalCompleta.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};
