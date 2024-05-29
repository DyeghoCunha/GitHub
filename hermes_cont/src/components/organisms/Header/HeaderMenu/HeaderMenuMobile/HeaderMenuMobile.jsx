import GradientText from '@/components/atoms/GradientText/GradientText';
import { Box, Center, Divider, Flex, HStack, MenuGroup, MenuItem, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function HeaderMenuMobile() {


  const CalculadoraProp = [
    { href: "/FatorR/CalculadoraFatorR", text: "Fator R" },
    { href: "/SimplesNacional/CalculadoraSimples", text: "Simples Nacional" },
    // Adicione mais objetos conforme necessário
  ];

  const ConsultarProp = [
    { href: "/ConsultaCnpj", text: "CNPJ" },
    { href: "/ConsultaNcm", text: "NCM" },
  ];

  const SimplesNacionalProp = [
    { href: "/SimplesNacional/TabelaSimplesNacionalCompleta", text: "ANEXOS" },
    { href: "/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoI", text: "I" },
    { href: "/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoII", text: " II" },
    { href: "/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoIII", text: " III" },
    { href: "/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoIV", text: "IV" },
    { href: "/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoV", text: " V" },
    // Adicione mais objetos conforme necessário
  ];


  const MenuButton = ({ href, text }) =>
    <Link href={href}>
      <Flex justify="center" h="100%" align="center" w="100%" p={1} border="1px solid gray" borderRadius="8px" boxShadow="2px 2px 4px black">
        <Center>
          <Text h="100%" fontSize="20px">{text}</Text>
        </Center>
      </Flex></Link>

  const original = () => <>
    <MenuGroup fontSize="26px" color="white" fontWeight="400" title="Calculadora">
      <MenuItem as={Link} href="/FatorR/CalculadoraFatorR" fontSize="20px" color="grey" _hover={{ color: "#F1AC19" }} >Fator R</MenuItem>
      <MenuItem as={Link} href="/SimplesNacional/CalculadoraSimples" fontSize="20px" color="grey" _hover={{ color: "#F1AC19" }} >Simples Nacional</MenuItem>
    </MenuGroup>
    <Divider />
    <MenuGroup fontSize="26px" color="white" fontWeight="400" title="Consultar">
      <MenuItem as={Link} href="/ConsultaCnpj" fontSize="20px" color="grey" _hover={{ color: "#F1AC19" }} >CNPJ</MenuItem>
      <MenuItem as={Link} display="none" href="/" fontSize="20px" color="grey" _hover={{ color: "hermesGold.400" }} >CNAE</MenuItem>
      <MenuItem as={Link} href="/ConsultaNcm" fontSize="20px" color="grey" _hover={{ color: "hermesGold.400" }} >NCM</MenuItem>
    </MenuGroup>
    <MenuGroup fontSize="26px" color="white" fontWeight="400" title="Simples Nacional">
      <MenuItem as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta" fontSize="20px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXOS</MenuItem>
      <MenuItem ml={2} as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoI" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO I</MenuItem>
      <MenuItem ml={2} as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoII" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO II</MenuItem>
      <MenuItem ml={2} as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoIII" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO III</MenuItem>
      <MenuItem ml={2} as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoIV" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO IV</MenuItem>
      <MenuItem ml={2} as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoV" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO V</MenuItem>
    </MenuGroup>
  </>


  return (
    <VStack w="100vw" overflowY="auto" >
      <VStack w="100vw" boxShadow="inset -3px -3px 6px black,inset 3px 3px 6px black" pb={3} borderRadius="8px">
        <Text w="100%" textAlign="center" fontSize="30px"><GradientText style={""}>Calculadora</GradientText></Text>
        <VStack w="100%" px={2} py={2} boxShadow=" -3px -3px 6px black, 3px 3px 6px black">
          {CalculadoraProp.map((prop, index) => (
            <Box w="100%" px={2} key={index}  >
              <MenuButton href={prop.href} text={prop.text} />
            </Box>
          ))}</VStack>
      </VStack>

      <VStack w="100vw" boxShadow="inset -3px -3px 6px black,inset 3px 3px 6px black" pb={3} borderRadius="8px">

        <Text w="100%" textAlign="center" fontSize="30px"><GradientText style={""}>Consultar</GradientText></Text>
        <HStack w="100%" px={2} py={2} boxShadow=" -3px -3px 6px black, 3px 3px 6px black">
          {ConsultarProp.map((prop, index) => (
            <Box w="100%" px={2} key={index}  >
              <MenuButton href={prop.href} text={prop.text} />
            </Box>
          ))}</HStack>
      </VStack>
      <VStack w="100vw" boxShadow="inset -3px -3px 6px black,inset 3px 3px 6px black" pb={3} borderRadius="8px">

        <Text w="100%" textAlign="center" fontSize="30px"><GradientText style={""}>Simples Nacional</GradientText></Text>
        <HStack w="100%" px={2} py={2} boxShadow=" -3px -3px 6px black, 3px 3px 6px black">
          <Box w="100%" justifyContent="center" alignItems="center" h="100px" px={2}  >
            <MenuButton href={SimplesNacionalProp[0].href} text={SimplesNacionalProp[0].text} />
          </Box>
          <Flex w="100vw" flexWrap="wrap" gap={2}>
            {SimplesNacionalProp.splice(1).map((prop, index) => (
              <Box w="60px" px={2} key={index}  >
                <MenuButton href={prop.href} text={prop.text} />
              </Box>

            ))}</Flex>
        </HStack>
      </VStack>


    </VStack>
  )
}
