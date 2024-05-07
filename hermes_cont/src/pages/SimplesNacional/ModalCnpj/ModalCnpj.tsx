import { Button, Center, Heading, HStack, Tooltip, useDisclosure } from '@chakra-ui/react'
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
import { IEmpresa } from '@/types/types';

function Empresa({ empresa }) {
  return (
    <>
      {empresa.opcao_pelo_simples ? <VStack align="start" color="white">

        <Text>CNPJ: {empresa.cnpj}</Text>
        <Text>Razão Social: {empresa.razao_social}</Text>

        <Box h="100%" px={2} pt={6} pb={2} w="100%" position="relative" borderRadius="8px" border="3px solid gray" >
          <Text  position="absolute" borderRadius="8px" border="3px solid gray" bgColor="hermesBlue.400" px={2} top={-4} left={6} fontWeight={600} fontSize={18}> Anexos </Text>
          <VStack gap={2}>
          <AnexoBox empresa={empresa} />
          <AnexoBox empresa={empresa} />
          <AnexoBox empresa={empresa} />
          <AnexoBox empresa={empresa} />
          </VStack>
        </Box>
        
        {/** 
        <Text>Identificador Matriz Filial: {empresa.identificador_matriz_filial}</Text>
        <Text>Descrição Matriz Filial: {empresa.descricao_matriz_filial}</Text>
        
        <Text>Nome Fantasia: {empresa.nome_fantasia}</Text>
        <Text>Situação Cadastral: {empresa.situacao_cadastral}</Text>
        <Text>Descrição Situação Cadastral: {empresa.descricao_situacao_cadastral}</Text>
        <Text>Data Situação Cadastral: {empresa.data_situacao_cadastral}</Text>
        <Text>Motivo Situação Cadastral: {empresa.motivo_situacao_cadastral}</Text>
        <Text>Nome Cidade Exterior: {empresa.nome_cidade_exterior}</Text>
        <Text>Código Natureza Jurídica: {empresa.codigo_natureza_juridica}</Text>
        <Text>Data Início Atividade: {empresa.data_inicio_atividade}</Text>
        <Text>CNAE Fiscal: {empresa.cnae_fiscal}</Text>
        <Text>CNAE Fiscal Descrição: {empresa.cnae_fiscal_descricao}</Text>
        <Text>Descrição Tipo de Logradouro: {empresa.descricao_tipo_de_logradouro}</Text>
        <Text>Logradouro: {empresa.logradouro}</Text>
        <Text>Número: {empresa.numero}</Text>
        <Text>Complemento: {empresa.complemento}</Text>
        <Text>Bairro: {empresa.bairro}</Text>
        <Text>CEP: {empresa.cep}</Text>
        <Text>UF: {empresa.uf}</Text>
        <Text>Código Município: {empresa.codigo_municipio}</Text>
        <Text>Município: {empresa.municipio}</Text>
        <Text>DDD Telefone 1: {empresa.ddd_telefone_1}</Text>
        <Text>DDD Telefone 2: {empresa.ddd_telefone_2}</Text>
        <Text>DDD Fax: {empresa.ddd_fax}</Text>
        <Text>Qualificação do Responsável: {empresa.qualificacao_do_responsavel}</Text>
        <Text>Capital Social: {empresa.capital_social}</Text>
        <Text>Porte: {empresa.porte}</Text>
        <Text>Descrição Porte: {empresa.descricao_porte}</Text>
        <Text>Opção pelo Simples: {empresa.opcao_pelo_simples ? 'Sim' : 'Não'}</Text>
        <Text>Data Opção pelo Simples: {empresa.data_opcao_pelo_simples}</Text>
        <Text>Data Exclusão do Simples: {empresa.data_exclusao_do_simples}</Text>
        <Text>Opção pelo MEI: {empresa.opcao_pelo_mei ? 'Sim' : 'Não'}</Text>
        <Text>Situação Especial: {empresa.situacao_especial}</Text>
        <Text>Data Situação Especial: {empresa.data_situacao_especial}</Text>
*/}
      </VStack> : <Box><Heading>A Empresa Não é Optante pelo Simples Nacional</Heading></Box>}


    </>

  );
}

function AnexoBox({ empresa }: any) {

  return (
    <Tooltip
      //label={empresa.cnae_fiscal_descricao}
      label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, beatae!"
      placement="right"
      hasArrow
    >
      <Box w="100%">
        <Box border="3px solid gray" _hover={{border:"3px solid white"}} role='group' position="relative" borderRadius="8px">
          <VStack p={2} >
            <HStack justify="space-between" w="100%">

              <HStack>
                <Text color="gray" fontSize={20}>CNAE:
                </Text>
                <Text fontSize={22} color="white">05465432</Text>
              </HStack>

              <Box>
                <Box border="1px solid gray" p={2} bgColor="hermesBlue.400" borderRadius="8px" 
                _groupHover={{border:"1px solid white",bgColor:"white",color:"hermesBlue.400",boxShadow:"inset 2px 2px 4px rgba(255,255,255,0.5),inset -2px -2px 4px rgba(0,0,0,0.5)" }}>
                  <Text>ANEXO IV</Text>
                </Box>
              </Box>
            </HStack>
          </VStack>


        </Box>

      </Box>
    </Tooltip>
  )
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
            <Button variant="hermes" onClick={handleClick}><Text><GradientText>Buscar</GradientText></Text></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Center>
  );
}

