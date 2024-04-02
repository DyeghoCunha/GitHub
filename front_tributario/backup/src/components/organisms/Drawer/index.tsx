import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Radio, RadioGroup, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import SamucaDrawer from "@/assets/image/samucaCrawer.png"
import Link from "next/link";

type DrawerType = {
  placement: any;
  setPlacement: any
}


export default function DrawerDefault() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button variant="primary" onClick={onOpen}>
        Menu
      </Button>
      <Drawer placement={"left"} variant="side-menu" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' bgGradient="linear(to-r, orange, red)" bgClip="text" >
            SamuCats
            </DrawerHeader>
          <DrawerBody>
            <Link href="/">
              <Text bgGradient="linear(to-r, orange, red)" bgClip="text">Projetos</Text>
            </Link>
            <Link href="/">
              <Text bgGradient="linear(to-r, orange, red)" bgClip="text">Cadastro</Text>
            </Link>
            <Link href="/">
              <Text bgGradient="linear(to-r, orange, red)" bgClip="text">Configuração</Text>
            </Link>

          </DrawerBody>
          <DrawerFooter width="100%">
            <Image src={SamucaDrawer.src} fit="cover" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}