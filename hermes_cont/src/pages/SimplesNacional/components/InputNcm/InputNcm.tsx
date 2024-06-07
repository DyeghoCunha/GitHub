"use client"
import GradientText from '@/components/atoms/GradientText/GradientText';
import { buscarNcm, IBrApiSearch } from '@/pages/api/brasilApi';
import { INcm } from '@/types/types';
import { contemCaractereInvalido, formatarNumero, limparNumero, removerCaracteresEspeciais, substituirAcentos } from '@/utils/manipulaNumeros';
import { Box, Button, CircularProgress, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, Text, useTab } from '@chakra-ui/react'
import React, { useState } from 'react'

interface IInputNcm {
  setResultProp: React.Dispatch<React.SetStateAction<INcm>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>,
  isLoading: boolean;
}

export default function InputNcm({ setResultProp, setIsLoading, isLoading, setIsSearching }: IInputNcm) {

  const [ncm, setNcm] = useState("");
  // const [ncmFormatado, setNcmFormatado] = useState("");
  const [isValidar, setIsValidar] = useState(false);
  //const [isValidarString, setIsValidarString] = useState(false);
  // const [isValidarNumber, setIsValidarNumber] = useState(false);


  const onChangeInput = (e: any) => {
    let value = e.target.value
    setNcm(value)
  }

  const consultaNcmApi = async (prop: any) => {

    try {
      setIsSearching(false)
      setIsLoading(true)
      const data = await buscarNcm({ prop });
      //console.log("Buscando na API")
      //console.log(data)
      setResultProp(data);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error);
    }
  };

  return (
    <Box w="320px" >
      <Box>
        <FormControl isInvalid={isValidar} >
          <FormLabel color="white">Pesquisar NCM</FormLabel>
          <Box position="relative" w="320px" h="70px" >
            <Input
              type='text'
              value={ncm}
              onChange={onChangeInput}
              bgColor="trasparent"
              border="3px solid gray"
              fontSize="25px"
              color="white"
              zIndex={11}
              position="absolute"
              w="270px"
              _hover={{ outline: "1px solid #F1AC19", border: "1px solid #F1AC19" }}
              _focus={{ border: "1px solid #F1AC19", outline: "1px solid #F1AC19" }}
              focusBorderColor='white'
            />
            <Box mt={9} position="absolute">

              <FormHelperText color="gray"><Text >Digite um Código ou Descrição</Text></FormHelperText>

              {/**!isValidar ? (
                <FormHelperText color="gray" >
                  <Text display={isValidarNumber ? "flex" : "none"} color="green">Você Digitou um Código de Ncm Válido</Text>
                  <Text display={isValidarString ? "flex" : "none"} color="red">Você Digitou uma Descrição Válida</Text>
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  <Text display={!isValidarNumber ? "flex" : "none"} color="red">Você Digitou o Código do Ncm Errado</Text>
                  <Text display={!isValidarString ? "flex" : "none"} color="red">Você Digitou uma Descrição inválida</Text>
                </FormErrorMessage>
              )*/}

            </Box>

          </Box>
          {!isLoading ?
            <Button onClick={() => consultaNcmApi(ncm)} isDisabled={isValidar} position="absolute" w="40px" h="40px" right="1px" top="33px" variant="hermes">
              <Text><GradientText style={""}>☑︎</GradientText></Text>
            </Button> :
            (<CircularProgress isIndeterminate color="hermesGold.500" thickness={6} trackColor='transparent' position="absolute" w="40px" h="40px" right="1px" top="29px" />)}

        </FormControl>
      </Box>
    </Box>
  )
}
