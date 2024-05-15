import { Button, Divider, HStack, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons"
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <Menu>
      <MenuButton    >
        <HStack gap={0} color="white" fontSize="26px"><Text>Ferramentas</Text><ChevronDownIcon color="hermesGold.400" /></HStack>
      </MenuButton>
      <MenuList

        bgColor="hermesBlue.400"
        boxShadow=" 5px 4px 10px rgba(0,0,0,0.5)"
      >
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
          <MenuItem  as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta" fontSize="20px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXOS</MenuItem>
          <MenuItem ml={2}as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoI" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO I</MenuItem>
          <MenuItem ml={2}as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoII" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO II</MenuItem>
          <MenuItem ml={2}as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoIII" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO III</MenuItem>
          <MenuItem ml={2}as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoIV" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO IV</MenuItem>
          <MenuItem ml={2}as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta/AnexoV" fontSize="16px" color="grey" _hover={{ color: "#F1AC19" }} >ANEXO V</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu >
  )
}
