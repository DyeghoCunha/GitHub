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
        <MenuGroup fontSize="26px" color="white" fontWeight="400"  title="Calculadora">
          <MenuItem as={Link} href="/" fontSize="20px" color="grey" _hover={{color:"#F1AC19"}} >Fator R</MenuItem>
          <MenuItem as={Link} href="/SimplesNacional/CalculadoraSimples"  fontSize="20px" color="grey"  _hover={{color:"#F1AC19"}} >Simples Nacional</MenuItem>
        </MenuGroup>
        <Divider/>
        <MenuGroup fontSize="26px"  color="white" fontWeight="400" title="Consultar">
        <MenuItem as={Link} href="/ConsultaCnpj" fontSize="20px" color="grey"  _hover={{color:"#F1AC19"}} >CNPJ</MenuItem>
        <MenuItem as={Link} href="/" fontSize="20px" color="grey"  _hover={{color:"hermesGold.400"}} >CNAE</MenuItem>
        <MenuItem as={Link} href="/ConsultaNcm" fontSize="20px"  color="grey"  _hover={{color:"hermesGold.400"}} >NCM</MenuItem>
        <MenuItem as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta" fontSize="20px" color="grey"  _hover={{color:"#F1AC19"}} >ANEXO Simples Nacional</MenuItem>
      </MenuGroup>
    </MenuList>
    </Menu >
  )
}
