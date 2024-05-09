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


  const handleShowBody = () => setIsShowBody(true)

  useEffect(() => {
    setEmpresa(null)
  }, [isOpen])


  return (

    <Center >
      <Button variant="hermes" justifyContent="end" pr={0} pt={2} pl="100px"
        alignItems="end" borderRadius="100% 0px 8px 0px"
        onClick={onOpen}><Text><GradientText>Consulta Anexo</GradientText></Text></Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />

        <ModalContent bgColor="hermesBlue.400" mt="5%">
          <ModalHeader>
            <Heading><GradientText>Consulta de Anexo</GradientText></Heading>
            <Flex w="100%" mt={5} justifyContent="center">
              <InputValue setCnpjProp={setCnpj} setEmpresaProp={setEmpresa} setIsValidated={setIsValidated} />
            </Flex>
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
            <Button isDisabled={!isValidated} display={isShowBody ? "none" : "flex"} variant="hermes" onClick={handleShowBody}><Text><GradientText>Buscar</GradientText></Text></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Center>
  );
}

