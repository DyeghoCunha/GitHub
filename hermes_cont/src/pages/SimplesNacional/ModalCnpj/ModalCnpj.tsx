import { Button, Center, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Box, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { buscarEmpresa } from '@/pages/api/brasilApi';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import GradientText from '@/components/atoms/GradientText/GradientText';

function Empresa({ empresa }) {
  return (
    <VStack align="start" color="white">
      <Text>Razão Social: {empresa.razao_social}</Text>
      <Text>Nome Fantasia: {empresa.nome_fantasia}</Text>
      <Text>CNPJ: {empresa.cnpj}</Text>
      {/* Adicione mais campos conforme necessário */}
    </VStack>
  );
}

export default function ModalCnpj() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cnpj, setCnpj] = useState("");
  const [empresa, setEmpresa] = useState(null);

  const handleClick = async () => {
    try {
      const data = await buscarEmpresa({ cnpj });
      setEmpresa(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <Center >
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent bgColor="hermesBlue.400" mt="40px">
          <ModalHeader>
            <Text><GradientText>Consulta de Anexo por CNPJ</GradientText></Text>

            <Input
              variant="hermes"
              mt={3}
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              placeholder="Digite o CNPJ"
            />

          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            {empresa && <Empresa empresa={empresa} />}
          </ModalBody>
          <ModalFooter>
            <Button variant='outline' colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="hermes"  onClick={handleClick}><Text><GradientText>Buscar</GradientText></Text></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Center>
  );
}

