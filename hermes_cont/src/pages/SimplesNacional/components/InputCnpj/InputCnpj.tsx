import GradientText from '@/components/atoms/GradientText/GradientText';
import { buscarEmpresa } from '@/pages/api/brasilApi';
import { contemCaractereInvalido, formatarNumero, limparNumero } from '@/utils/manipulaNumeros';
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

interface IInputValue {
  setCnpjProp: React.Dispatch<React.SetStateAction<string>>,
  setEmpresaProp: React.Dispatch<React.SetStateAction<null>>,
  setIsValidated: React.Dispatch<React.SetStateAction<boolean>>
}

export default function InputCnpj({ setCnpjProp, setEmpresaProp, setIsValidated }: IInputValue) {

  const [cnpj, setCnpj] = useState("");
  const [cnpjFormated, setCnpjFormated] = useState("")
  const [isCnpj, setIsCnpj] = useState(false)
  const [isValidar, setIsValidar] = useState(false)
  const [cnpjExists, setCnpjExists] = useState(0)

  const onChangeInput = (e: any) => {
    let value = e.target.value
    let valorLimpo = limparNumero(value)

    if (valorLimpo.length > 14) {
      return
    }
    if (valorLimpo.length === 14) {

      setIsValidar(true)
    } else {
      setIsValidar(false)
    }

    setCnpj(valorLimpo)
    setCnpjFormated(value)
  }

  const consultaCNPJApi = async (prop: any) => {

    try {
      const data = await buscarEmpresa({ prop });
      console.log("Buscando na API")
      setEmpresaProp(data);
      setIsValidated(true);
      setCnpjExists(1)
    } catch (error) {
      console.error(error);
      setCnpjExists(2)
    }
  };

  const validateCnpj = async (cnpjProp: any) => {

    let isValid = contemCaractereInvalido(cnpjProp)

    if (isValid) {
      setIsCnpj(true)
    } else {
      setIsCnpj(false)
      await consultaCNPJApi(cnpj)
    }
    setCnpjProp(cnpjProp)
    let valorFormatado = formatarNumero(cnpj)
    setCnpjFormated(valorFormatado)
  }

  return (
    <Box w="320px" >
      <Box>
        <FormControl isInvalid={isCnpj} >
          <FormLabel color="white">CNPJ</FormLabel>
          <Box position="relative" w="320px" h="70px" >
            <Input
              type='text'
              value={cnpj}
              onChange={onChangeInput}
              bgColor="trasparent"
              border="3px solid gray"
              fontSize="25px"
              color="transparent"
              zIndex={11}
              position="absolute"
              role='group'
              w="270px"
              _hover={{ outline: "1px solid #F1AC19", border: "1px solid #F1AC19" }}
              _focus={{ border: "1px solid #F1AC19", outline: "1px solid #F1AC19" }}
              focusBorderColor='white'
            />
            <Input
              type='text'
              bgColor="hermesBlue.400"
              border="3px solid gray"
              color="white"
              fontSize="25px"
              _groupHover={{ outline: "1px solid #F1AC19", border: "1px solid #F1AC19" }}
              _groupFocus={{ border: "1px solid #F1AC19", outline: "1px solid #F1AC19" }}
              value={cnpjFormated}
              readOnly
              zIndex={10}
              left={0}
              position="absolute"
              style={{ pointerEvents: "none" }}
              w="270px"
              focusBorderColor='white'
            />
            <Box mt={9} position="absolute">
              {!isCnpj ? (
                <FormHelperText color="gray" >
                  <Text display={cnpjExists === 0 ? "flex" : "none"}>Digite um CNPJ válido</Text>
                  <Text display={cnpjExists === 2 ? "flex" : "none"} color="red">Este CNPJ não existe</Text>
                  <Text display={cnpjExists === 1 ? "flex" : "none"} color="green">CNPJ Válido !</Text>
                </FormHelperText>
              ) : (
                <FormErrorMessage><Text color="red">Não é um CNPJ válido </Text> </FormErrorMessage>
              )}

            </Box>

          </Box>
          <Button onClick={() => validateCnpj(cnpj)} isDisabled={!isValidar} position="absolute" w="40px" h="40px" right="1px" top="33px" variant="hermes">

            <Text><GradientText>☑︎</GradientText></Text>
            <Text display="none"><GradientText>☒︎</GradientText></Text>
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}
