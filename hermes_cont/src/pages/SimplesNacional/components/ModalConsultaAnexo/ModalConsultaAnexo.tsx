import { Button, Card, Center, Divider, Flex, Heading, HStack, Tooltip, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
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
import { IEmpresa } from '@/types/types';
import InputValue from '../InputCnpj/InputCnpj';
import { contemCaractereInvalido, formatarNumero, limparNumero } from '@/utils/manipulaNumeros';
import AnexoBox from '../AnexoBox/AnexoBox';
import GradientBox from '@/components/atoms/GradientBox/GradientBox';

interface ITextModal {
  title: string,
  prop: string
}

function TextModalCNPJ({ title, prop }: ITextModal) {
  return (
    <HStack justify="start" align="end" w="100%">
      <Text color="gray" fontSize="14px">
        {title}
      </Text>
      <Text fontSize="20px">{formatarNumero(prop)}</Text>
    </HStack>
  )
}


function TextModal({ title, prop }: ITextModal) {
  return (
    <HStack justify="start" align="end" w="100%">
      <Text color="gray" fontSize="14px">
        {title}
      </Text>
      <Text fontSize="16px">{prop}</Text>
    </HStack>
  )
}





function EmpresaAnexo({ empresa }: any) {
  return (
    <Card mb={5} w="100%" bgColor="hermesBlue.400" boxShadow="inset 2px 2px 10px rgba(0,0,0,0.4)" p={3}>
      {empresa.opcao_pelo_simples ?
        <VStack align="start" color="white" w="100%" >
          <TextModalCNPJ title="CNPJ:" prop={empresa.cnpj} />
          <TextModal title='Razão Socia:' prop={empresa.razao_social} />

          <Box h="100%" px={2} mt={5} pt={6} pb={2} w="100%" position="relative" borderRadius="8px" border="3px solid gray" >
            <Text position="absolute" borderRadius="8px" border="3px solid gray" bgColor="hermesBlue.400" px={2} top={-4} left={6} fontWeight={600} fontSize={18}> Anexos </Text>
            <VStack gap={2} >

              <AnexoBox cnae={empresa.cnae_fiscal} descricao={empresa.cnae_fiscal_descricao} isPrincipal={true} />
              {empresa.cnaes_secundarios.map((cnae: any, index: any) => (
                <AnexoBox key={index} cnae={cnae.codigo} descricao={cnae.descricao} isPrincipal={false} />
              ))}

            </VStack>
          </Box>
        </VStack> : <Card my={5} bgColor="hermesBlue.400" boxShadow="2px 2px 10px rgba(0,0,0,0.4)" p={2}><Heading textAlign="center" color="gray">A Empresa Não é Optante pelo Simples Nacional</Heading></Card>}


    </Card>

  );
}
export default function ModalConsultaAnexo() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cnpj, setCnpj] = useState("");
  const [empresa, setEmpresa] = useState(null);
  const [isValidated, setIsValidated] = useState(false)
  const [isShowBody, setIsShowBody] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleShowBody = () => setIsShowBody(true)

  useEffect(() => {
    setEmpresa(null)
  }, [isOpen])


  return (

    <Center >
      <Box as='button' justifyContent="end" pr={0} pt={0} pl="0px"
        alignItems="end" borderRadius="100% 0px 6px 0px"
        onClick={onOpen}
        outline="2px solid gray "
        boxShadow="-4px -4px 8px rgba(0,0,0,0.5)"
      >
        <Box 
        bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)"
        justifyContent= "end" 
        paddingRight= "1px" 
        paddingTop= "6px" 
        paddingLeft= "120px"
          alignItems= "end" 
          borderRadius= "100% 0px 8px 0px">
        <GradientText style={{
          fontSize: "25px", fontWeight: "bold",
        }}>Consulta Anexo</GradientText>
        </Box>

      </Box>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />

        <ModalContent bgColor="hermesBlue.400" mt="5%">
          <ModalHeader>
            <Heading><GradientText style={""}>Consulta de Anexo</GradientText></Heading>
            <Card p={4} bgColor="transparent"
              boxShadow=" 5px 5px 15px rgba(0,0,0,0.2),-5px -5px 15px rgba(255,255,255,0.1) , 
            inset -2px -2px 5px rgba(0,0,0,0.1),inset 2px 2px 5px rgba(255,255,255,0.1) "
              w="100%" mt={5} justifyContent="center">
              <InputValue setShowCard={setShowCard} isLoading={isLoading} setIsLoading={setIsLoading} setCnpjProp={setCnpj} setEmpresaProp={setEmpresa} setIsValidated={setIsValidated} />
            </Card>
          </ModalHeader>
          <ModalCloseButton color='rgba(255,255,255,0.2)' />
          <ModalBody display={isShowBody ? "flex" : "none"} w="100%">
            <VStack w="100%" >

              {empresa && <EmpresaAnexo empresa={empresa} />}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant='outline' colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button isDisabled={!isValidated} display={isShowBody ? "none" : "flex"} variant="hermes" onClick={handleShowBody}><Text><GradientText style={""}>Buscar</GradientText></Text></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Center>
  );
}

