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
      //backdropFilter="blur(10px)" 
      bgColor="hermesBlue.400" 
      //</Menu>bgGradient="linear(130deg, rgba(241,226,194,0.8) 0%, white 40%, rgba(242,242,243,0.5) 100%)" 
      >
        <MenuGroup fontSize="26px" color="white" fontWeight="400"  title="Calculadora">
          <MenuItem as={Link} href="/" fontSize="20px" color="grey" _hover={{color:"hermesGold.400"}} >Fator R</MenuItem>
          <MenuItem as={Link} href="/SimplesNacional/CalculadoraSimples"  fontSize="20px" color="grey"  _hover={{color:"hermesGold.400"}} >Simples Nacional</MenuItem>
        </MenuGroup>
        <Divider/>
        <MenuGroup fontSize="26px"  color="white" fontWeight="400" title="Consultar">
        <MenuItem as={Link} href="/" fontSize="20px" color="grey"  _hover={{color:"hermesGold.400"}} >CNAE</MenuItem>
        <MenuItem as={Link} href="/" fontSize="20px"  color="grey"  _hover={{color:"hermesGold.400"}} >NCM</MenuItem>
        <MenuItem as={Link} href="/SimplesNacional/TabelaSimplesNacionalCompleta" fontSize="20px" color="grey"  _hover={{color:"hermesGold.400"}} >Anexo Simples Nacional</MenuItem>
      </MenuGroup>
    </MenuList>
    </Menu >
  )
}
