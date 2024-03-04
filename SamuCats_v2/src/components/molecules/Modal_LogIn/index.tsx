import { useModalContext } from "@/context/ModalContext"
import { Box, Button, Divider, FormControl, FormLabel, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, useDisclosure } from "@chakra-ui/react"

import googleLogo from "@/assets/image/googleLogo.png"
import gitHubLofo from "@/assets/image/github.png"
import linkedIn from "@/assets/image/linkedin.png"


type ModalLoginType = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;

}


export function Modal_logIn({ isOpen, onClose, onOpen }: ModalLoginType) {
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent bgColor="rgba(255,255,255,0.2)" backdropFilter="blur(30px)">
          <ModalHeader
          >Faça seu LogIn</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Login</FormLabel>
              <Input placeholder='Digite o seu Nome' />
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input placeholder='Digite a sua Senha' />
            </FormControl>
            <Divider mt={10} />
            <HStack justifyContent="center" alignItems="center" gap="5" mt="15px">
              <Box p={3} borderRadius="10px" bgColor="rgba(255,255,255,0.2)" _hover={{bgColor:"rgba(255,150,0,0.2)",border:"2px solid rgba(255,150,0,0.7)"}} backdropFilter="blur(30px)" border="1px solid rgba(255,255,255,0.5)">
                <Image  src={gitHubLofo.src} w="50px" h="50px" />
              </Box>

              <Box p={3} borderRadius="10px" bgColor="rgba(255,255,255,0.2)" _hover={{bgColor:"rgba(255,150,0,0.2)",border:"2px solid rgba(255,150,0,0.7)"}} backdropFilter="blur(30px)" border="1px solid rgba(255,255,255,0.5)">
              <Image src={googleLogo.src} w="50px" h="50px" />
              </Box>
 
              <Box p={3} borderRadius="10px" bgColor="rgba(255,255,255,0.2)" _hover={{bgColor:"rgba(255,150,0,0.2)",border:"2px solid rgba(255,150,0,0.7)"}} backdropFilter="blur(30px)" border="1px solid rgba(255,255,255,0.5)">
              <Image src={linkedIn.src} w="50px" h="50px" />
              </Box>



            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant='primary'>Entrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}