import GradientBox from '@/components/atoms/GradientBox/GradientBox'
import GradientText from '@/components/atoms/GradientText/GradientText'
import ImputNumber from '@/components/atoms/InputNumber/ImputNumber'
import { atividadesFatorR, calculaFatorR, verificaAnexoFatorR } from '@/utils/fatorR'
import { formatarParaReal, limparNumero, removerEspacos } from '@/utils/manipulaNumeros'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, HStack, Input, Menu, MenuButton, MenuItem, MenuList, Select, Spacer, Text, Tooltip, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import bgImage from "@/assets/image/marcaDagua.png"

export default function CalculaFatorR() {

  const [faturamento, setFaturamento] = useState<number>(0)
  const [isFaturamento, setIsFaturamento] = useState(false)
  const [faturamentoString, setFaturamentoString] = useState("R$ 0,00")
  const [salario, setSalario] = useState<number>(0)
  const [isSalario, setIsSalario] = useState(false)
  const [salarioString, setSalarioString] = useState("R$ 0,00")
  const [isDisabled, setIsDisabled] = useState(true)
  const [fatorR, setFatorR] = useState<string | undefined>()
  const [anexo, setAnexo] = useState<string | undefined>(" ");
  const [selectAtividadeString, setSelectAtividadeString] = useState<string>("")
  const [isAtividade, setIsAtividade] = useState(false);

  const handleInputFaturamento = (e: any) => {
    let value = e.target.value
    let valorFormatado = formatarParaReal(value)
    setFaturamentoString(valorFormatado)
    let double = value / 100
    setFaturamento(Number(value))
  }
  function validateFaturamento(value: any) {

    if (value && value > 0) {
      setIsFaturamento(false)
    } else {
      setIsFaturamento(true)
    }
  }
  const handleInputSalario = (e: any) => {
    let value = e.target.value
    let valorFormatado = formatarParaReal(value)
    setSalarioString(valorFormatado)
    let double = value / 100
    setSalario(Number(value))
  }
  function validateSalario(value: any) {

    if (value && value > 0) {
      setIsSalario(false)
    } else {
      setIsSalario(true)
    }
  }

  useEffect(() => {
    //console.log(isSalario)
    //console.log(isFaturamento)
    if (!isSalario && !isFaturamento) {
      setIsDisabled(false)
      //console.log(isDisabled)
    } else {
      setIsDisabled(true)
    }
  }, [isFaturamento, isSalario])



  const handleClick = () => setFatorR(`${calculaFatorR({ folha: salario, receita: faturamento }).toFixed(0)}`)

  const handleSelect = (value: string) => {
    setSelectAtividadeString(value)
    if (value.length > 0) setIsAtividade(true)
  }

  useEffect(() => {
    if (Number(fatorR) && Number(fatorR) > 0) {
      setAnexo(verificaAnexoFatorR(Number(fatorR)))
    }
  }, [fatorR])

  return (
    <Card color="hermesBlue.500" bgColor="hermesBlue.400"
      boxShadow="4px 4px 8px rgba(0,0,0,0.8)"
      bgImg={bgImage.src}
      bgPos="center"
      bgSize="contain"
      bgRepeat="no-repeat"
      mt={{ base: "50px", md: "10px", xxl: "50px" }}
    >
      <CardHeader>
        <Heading w="100%" textAlign="center" ><GradientText style={""}>Calculadora de Fator R</GradientText></Heading>
      </CardHeader>
      <CardBody w="100%">
        <Tooltip label={selectAtividadeString} >
          <Box p={2} display={isAtividade ? "flex" : "none"} border="3px solid gray" borderRadius="8px" mb={2}>
            <Text w="100%" h="30px" textAlign="start" noOfLines={1} color="white" fontSize="20px" display={isAtividade ? "block" : "none"}>{selectAtividadeString}</Text>
          </Box>
        </Tooltip>
        <Menu >
          <MenuButton w="100%" as={Button} boxShadow="inset 4px 4px 8px rgba(0,0,0,0.5),inset -4px -4px 8px rgba(0,0,0,0.5)" outline="1px solid rgba(0,0,0,0.3)" variant={isAtividade ? "outlined" : "hermes"} fontSize="20px">
            <GradientText style={""}>Selecione a Atividade</GradientText>
          </MenuButton>
          <MenuList zIndex={12} m={0} bgColor="rgba(255,255,255,0.4)" border=" 2px solid rgba(255,255,255,0.6)"
            backdropFilter="blur(5px)"
            boxShadow="inset 4px 4px 8px rgba(0,0,0,0.5),inset -4px -4px 8px rgba(0,0,0,0.5), 4px 4px 8px rgba(0,0,0,1), -4px -4px 8px rgba(0,0,0,1)"
            outline="5px solid rgba(40, 40, 60,1)"
          >
            <Card overflowY="auto" bgColor="hermesBlue.400" h="500px" w="600px" m={5}
              sx={{
                '::-webkit-scrollbar': {
                  width: '6px',
                  height: '6px',
                },
                '::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
                '::-webkit-scrollbar-thumb': {
                  background: 'hermesGold.300',
                  borderRadius: "0px 8px 8px 0px",
                  '&:hover': {
                    background: 'hermesGold.400',
                  },
                },
              }}
              boxShadow="4px 4px 8px rgba(0,0,0,0.5), inset 4px 4px 8px rgba(0,0,0,0.5), -4px -4px 8px rgba(255,255,255,0.5),inset -4px -4px 8px rgba(0,0,0,0.5)"
            >
              {atividadesFatorR.map((atividade, index) => (
                <MenuItem _hover={{ color: "#f7d526" }} color="gray" fontSize="20px" key={index} value={atividade.value} onClick={() => handleSelect(atividade.label)}>
                  {atividade.label}
                </MenuItem>
              ))}
            </Card>
          </MenuList>
        </Menu>
        <Spacer h="20px" />
        <VStack w="100%" display={isAtividade ? "flex" : "none"}>
          <ImputNumber
            isInvalid={isFaturamento}
            valueNumber={faturamento}
            onBlurValidate={validateFaturamento}
            valueString={faturamentoString}
            onChange={handleInputFaturamento}
            isValue={isFaturamento}
            label='Receita Bruta'
            helper='Faturamento acumulado dos últimos 12 meses '
            error='Valor de Receita Bruta inválido !'
          />
          <Spacer h="20px" />
          <ImputNumber
            isInvalid={isSalario}
            valueNumber={salario}
            onBlurValidate={validateSalario}
            valueString={salarioString}
            onChange={handleInputSalario}
            isValue={isSalario}
            label='Massa Salarial'
            helper='Massa Salarial dos últimos 12 meses '
            error='Massa Salarial inválida ! '
          />

          <Button zIndex={110} isDisabled={salario > 0 && faturamento > 0 ? false : true} onClick={handleClick} w="100%" mt="20px" variant="hermes"><Text><GradientText style={""}>Calcular</GradientText></Text></Button>
        </VStack>
      </CardBody>

      <CardFooter display={anexo && anexo.length > 2 ? "flex" : "none"} zIndex={110} >
        <VStack w="100%" color="white" >
          <Divider />
          <Text w="100%" textAlign="start" fontSize="20px">Seu <strong>Fator R</strong> atual é <GradientText style={{ fontSize: "30px" }}>{fatorR} %</GradientText></Text>
          <HStack w="100%" >
            <Text textAlign="start" fontSize="20px">Você está enquadrado no </Text>
            <Link href={`/SimplesNacional/TabelaSimplesNacionalCompleta/${removerEspacos(anexo)}`} ><Text><GradientText style={{ fontSize: "25px" }}>{anexo}</GradientText></Text></Link>
          </HStack>
          <Link href="/SimplesNacional/CalculadoraSimples"><Text mt="20px"><GradientText style={""}>Calcule o Simples Nacional para o {anexo}</GradientText></Text></Link>
        </VStack>


      </CardFooter>
    </Card>
  )
}
