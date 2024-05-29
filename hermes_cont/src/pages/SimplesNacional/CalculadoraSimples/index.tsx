import { DefaultLayout } from '@/components/templates/DefaultLayout';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Center,
  Card,
  CardHeader,
  Heading,
  CardBody,
  RadioGroup,
  HStack,
  Radio,
  Input,
  CardFooter,
  Box,
  VStack,
  Text,
  Tooltip,
  SimpleGrid,
  Divider,
  Button,
  Mark,
} from '@chakra-ui/react'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CardImposto from './CardImposto/CardImposto';
import GradientText from '@/components/atoms/GradientText/GradientText';
import { funcCalculaAliqEfetiva, funcCalculaImpostoDetalhado } from '@/utils/calculo';
import { isatty } from 'tty';
import ModalConsultaAnexo from '../components/ModalConsultaAnexo/ModalConsultaAnexo';
import PageContainer from '@/components/atoms/PageContainer/PageContainer';
import BgImg from "@/assets/image/marcaDagua.png"
import PreloaderComponent from '@/components/PreloaderComponent/PreloaderComponent';
import { ForumLayout } from '@/components/templates/ForumLayout';



export default function CalculadoraSimples() {

  const [input, setInput] = useState('')
  const [rbt12, setRbt12] = useState<number>(0)
  const [rbt12String, setRbt12String] = useState("R$ 0,00")
  const [isRbt12, setIsRbt12] = useState(false)
  const [anexo, setAnexo] = useState<string>("")
  const [isAnexo, setIsAnexo] = useState(false)
  const [faturamento, setFaturamento] = useState<number>(0)
  const [isFaturamento, setIsFaturamento] = useState(false)
  const [faturamentoString, setFaturamentoString] = useState("R$ 0,00")
  const [isBtnValid, setIsBtnValid] = useState(false)
  const [isValid1, setIsValid1] = useState(false)
  const [isValid2, setIsValid2] = useState(false)
  const [das, setDas] = useState("")
  const [simplesNacional, setSimplesNacional] = useState<any>({
    "IR": 0,
    "CSLL": 0,
    "PIS": 0,
    "COFINS": 0,
    "CPP": 0,
    "ICMS": 0,
    "ISS": 0,
    "IPI": 0
  })

  const [ir, setIr] = useState("")
  const [csll, setCsll] = useState("")
  const [cpp, setCpp] = useState("")
  const [pis, setPis] = useState("")
  const [icms, setIcms] = useState("")
  const [cofins, setCofins] = useState("")
  const [ipi, setIpi] = useState("")
  const [iss, setIss] = useState("")
  const [isFooter, setIsFooter] = useState(false)

  const [aliquota, setAliquota] = useState(0)

  interface ISimplesNacionalButton {
    rbt12Prop: number | undefined,
    anexoProp: string,
    faturamentoProp: number | undefined;
  }

  function handleButton({ rbt12Prop, anexoProp, faturamentoProp }: ISimplesNacionalButton) {

    let IrProp;
    let CsllProp;
    let CppProp;
    let IssProp;
    let IcmsProp;
    let IpiProp;
    let PisProp;
    let CofinsProp;

    if (rbt12Prop && anexoProp && faturamentoProp) {
      let alqEfetiva = funcCalculaAliqEfetiva({ rbt12: rbt12Prop / 100, anexo: anexoProp })
      if (alqEfetiva) {
        setAliquota(alqEfetiva)
        let dasProp = faturamentoProp * alqEfetiva
        setDas(`${dasProp}`)


      }
      let simplesNacionalProp = funcCalculaImpostoDetalhado({ faturamento: faturamentoProp / 100, anexo: anexoProp, alqEfetiva: alqEfetiva, rbt12: rbt12Prop / 100 })

      if (alqEfetiva) {
        IrProp = Number(simplesNacionalProp["IR"] * 100) / (faturamentoProp * alqEfetiva)
        CsllProp = Number(simplesNacionalProp["CSLL"] * 100) / (faturamentoProp * alqEfetiva)
        CppProp = Number(simplesNacionalProp["CPP"] * 100) / (faturamentoProp * alqEfetiva)
        PisProp = Number(simplesNacionalProp["PIS"] * 100) / (faturamentoProp * alqEfetiva)
        CofinsProp = Number(simplesNacionalProp["COFINS"] * 100) / (faturamentoProp * alqEfetiva)
        IssProp = Number(simplesNacionalProp["ISS"] * 100) / (faturamentoProp * alqEfetiva)
        IcmsProp = Number(simplesNacionalProp["ICMS"] * 100) / (faturamentoProp * alqEfetiva)
        IpiProp = Number(simplesNacionalProp["IPI"] * 100) / (faturamentoProp * alqEfetiva)
      }

      setIr(formatNumberToPercentage2(IrProp))
      setCsll(formatNumberToPercentage2(CsllProp))
      setCpp(formatNumberToPercentage2(CppProp))
      setPis(formatNumberToPercentage2(PisProp))
      setCofins(formatNumberToPercentage2(CofinsProp))
      setIss(formatNumberToPercentage2(IssProp))
      setIcms(formatNumberToPercentage2(IcmsProp))
      setIpi(formatNumberToPercentage2(IpiProp))
      setSimplesNacional(simplesNacionalProp)
      setIsFooter(true)
      //console.log("click")
      //console.log(simplesNacionalProp)
    }
  }


  useEffect(() => {
    //console.log(simplesNacional)
  }, [simplesNacional])

  const isError = false;


  const handleInputRbt12 = (e: any) => {
    let value = e.target.value
    let valorFormatado = formatarParaReal(value)
    setRbt12String(valorFormatado)

    setRbt12(value)
  }

  const handleInputFaturamento = (e: any) => {
    let value = e.target.value
    let valorFormatado = formatarParaReal(value)
    setFaturamentoString(valorFormatado)
    let double = value / 100
    setFaturamento(value)
  }

  function formatarParaReal(valor: string): string {
    let numero = Number(valor);

    if (isNaN(numero)) {
      //console.log(`Valor inválido: ${valor}`);
      return valor;
    }

    let reais = Math.floor(numero / 100);
    let centavos = numero % 100;

    let formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });

    let valorFormatado = formatter.format(reais + centavos / 100);

    // Remove o zero à esquerda, se houver
    if (valorFormatado.startsWith("R$ 0,0")) {
      valorFormatado = "R$" + valorFormatado.substring(3);
    }

    return valorFormatado;
  }

  function formatarParaReal2(valor: string): string {
    let numero = Number(valor);

    if (isNaN(numero)) {
      //console.log(`Valor inválido: ${valor}`);
      return valor;
    }

    let reais = Math.floor(numero);
    let centavos = Math.round((numero - reais) * 100);

    let formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });

    let valorFormatado = formatter.format(reais + centavos / 100);

    // Remove o zero à esquerda, se houver
    if (valorFormatado.startsWith("R$ 0,0")) {
      valorFormatado = "R$" + valorFormatado.substring(3);
    }

    return valorFormatado;
  }
  function formatarParaReal3(valor: string): string {
    let numero = Number(valor) / 10000;

    if (isNaN(numero)) {
      //console.log(`Valor inválido: ${valor}`);
      return valor;
    }

    let reais = Math.floor(numero);
    let centavos = Math.round((numero - reais) * 100);

    let formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });

    let valorFormatado = formatter.format(reais + centavos / 100);

    // Remove o zero à esquerda, se houver
    if (valorFormatado.startsWith("R$ 0,0")) {
      valorFormatado = "R$" + valorFormatado.substring(3);
    }

    return valorFormatado;
  }



  function validateRbt12(value: any) {
    if (value && value > 0) {
      setIsValid1(true)
      setIsRbt12(false)
    } else {
      setIsRbt12(true)
    }
  }

  function validateFaturamento(value: any) {
    if (value && value > 0) {
      setIsValid2(true)
      setIsFaturamento(false)
    } else {
      setIsFaturamento(true)
    }
  }

  function formatNumberToPercentage(num: any) {
    // Arredonda o número para duas casas decimais
    let roundedNum = num.toFixed(2);

    // Converte o número em uma string e adiciona o símbolo de porcentagem
    let percentageString = roundedNum.toString() + '%';

    return percentageString;
  }

  function formatNumberToPercentage2(num: any) {
    // Arredonda o número para duas casas decimais
    let newNum = num * 10000
    let roundedNum = newNum.toFixed(2);

    // Converte o número em uma string e adiciona o símbolo de porcentagem
    let percentageString = roundedNum.toString() + '%';

    return percentageString;
  }

  useEffect(() => {
    //console.log(anexo)
    if (anexo && anexo.length > 1) {
      setIsAnexo(true)
    } else {
      setIsAnexo(false)
    }
  }, [anexo])

  useEffect(() => {
    if (isAnexo && isValid1 && isValid2) {
      setIsBtnValid(true)
    }
  }, [isAnexo, isValid1, isValid2])


  return (
    <>
      <PreloaderComponent />
      <PageContainer>
        <Card bgColor="hermesBlue.400" mt="180px" w="700px" boxShadow="4px 4px 8px rgba(0,0,0,0.8)"
          bgImg={BgImg.src}
          bgPos="center"
          bgSize="contain"
          bgRepeat="no-repeat"
          mb="30px"
        >
          <CardHeader>
            <Heading w="100%" textAlign="center"><GradientText style={""}>Calculadora do Simples Nacional</GradientText></Heading>
          </CardHeader>
          <CardBody>
            <HStack my="10px">
              <FormControl isInvalid={isRbt12} >
                <FormLabel>RBT12</FormLabel>
                <Input
                  type='number'
                  value={rbt12}
                  onChange={handleInputRbt12}
                  bgColor="trasparent"
                  border="3px solid gray"
                  fontSize="26px"
                  color="transparent"
                  zIndex={11}
                  position="relative"
                  role='group'
                  _hover={{ outline: "1px solid #F1AC19", border: "1px solid #F1AC19" }}
                  onBlur={() => validateRbt12(rbt12)}
                />
                <Input
                  type='text'
                  bgColor="hermesBlue.400"
                  border="3px solid gray"
                  color="white"
                  fontSize="26px"
                  _groupHover={{ outline: "1px solid #F1AC19", border: "1px solid #F1AC19" }}
                  _groupFocus={{ outline: "1px solid #F1AC19", border: "1px solid #F1AC19" }}
                  value={rbt12String}
                  readOnly
                  zIndex={10}
                  left={0}
                  position="absolute"
                  style={{ pointerEvents: "none" }}
                />

                {!isRbt12 ? (
                  <FormHelperText>
                    Receita Bruta dos últimos 12 meses
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Você não preencheu o valor da <strong> Receita Bruta</strong> </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isFaturamento}>
                <FormLabel>Faturamento</FormLabel>
                <Input
                  type='number'
                  value={faturamento}
                  onChange={handleInputFaturamento}
                  bgColor="trasparent"
                  border="3px solid gray"
                  fontSize="26px"
                  color="transparent"
                  zIndex={11}
                  position="relative"
                  _hover={{ outline: "1px solid #F1AC19", border: "1px solid #F1AC19" }}
                  role='group'
                  onBlur={() => validateFaturamento(faturamento)}
                />
                <Input
                  type='text'
                  bgColor="hermesBlue.400"
                  border="3px solid gray"
                  color="white"
                  fontSize="26px"
                  _groupHover={{ outline: "1px solid #F1AC19", border: "1px solid #F1AC19" }}
                  _groupFocus={{ outline: "1px solid #F1AC19", border: "1px solid #F1AC19" }}
                  value={faturamentoString}
                  readOnly
                  zIndex={10}
                  left={0}
                  position="absolute"
                  style={{ pointerEvents: "none" }}
                />
                {!isFaturamento ? (
                  <FormHelperText>
                    Faturamento para base de Cálculo
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Você não preencheu o valor do <strong> Faturamento </strong></FormErrorMessage>
                )}
              </FormControl>


            </HStack>

            <FormControl as='fieldset' isInvalid={isError} px={4} borderRadius="8px" my={10} border="3px solid gray">
              <FormLabel as='legend' border="3px solid gray" px={2} borderRadius="8px">Selecione um Anexo</FormLabel>
              <RadioGroup defaultValue=''   onChange={(value) => setAnexo(value)} colorScheme='yellow' mb={8}>
                  <Radio mr={5} size="lg" value='Anexo I' fontSize="20px">Anexo I</Radio>
                  <Radio mr={5} size="lg" value='Anexo II' fontSize="20px" >Anexo II</Radio>
                  <Radio mr={5} size="lg" value='Anexo III' fontSize="20px">Anexo III</Radio>
                  <Radio mr={5} size="lg" value='Anexo IV' fontSize="20px">Anexo IV</Radio>
                  <Radio mr={5} size="lg" value='Anexo V' fontSize="20px">Anexo V</Radio>
              </RadioGroup>
              {!isError ? (
                <FormHelperText>Em caso de dúvida leia o nosso <Link target='_blank' rel="noopener noreferrer" href="/SimplesNacional/TabelaSimplesNacionalCompleta"> <strong>artigo</strong></Link></FormHelperText>
              ) : (
                <FormErrorMessage>É necessário escolher um anexo</FormErrorMessage>
              )}
              <Box position="absolute" right={0} bottom={0}>
                <ModalConsultaAnexo />
              </Box>
            </FormControl>

            <Button
              bgColor="transparent"
              isDisabled={!isBtnValid}
              bgGradient="linear(130deg, rgba(241,226,194,1) 0%, white 40%, rgba(242,242,243,1) 100%)"
              fontSize="26px"
              w="100%"
              onClick={() => handleButton({ rbt12Prop: rbt12, anexoProp: anexo, faturamentoProp: faturamento })}
            >
              <GradientText style={""}>Calcular</GradientText>
            </Button>
          </CardBody>
          <CardFooter gap={2} display={isFooter ? "flex" : "none"}  >

            <VStack w="100%" >
              <HStack w="100%" justify="space-around">
                <Box border="3px solid gray" borderRadius="8px" px={2} mb={10}>
                  <HStack>
                    
                    <Text fontSize="20px" color="gray">Aliquota: </Text>
                    <GradientText style={{ fontSize: "26px" }}>{formatNumberToPercentage(aliquota)}</GradientText>
                   
                  </HStack>
                </Box>
                <Box border="3px solid gray" borderRadius="8px" px={2} mb={10}>
                  <HStack>
                    <Text fontSize="20px" color="gray">DAS:</Text>
                    <GradientText style={{ fontSize: "26px" }}>{formatarParaReal3(das)}</GradientText>
                    </HStack>
                </Box>
              </HStack>

              <SimpleGrid columns={2} spacingY={8} spacingX={4} justifyContent="center" alignItems="center" w="100%">
                <Box display={simplesNacional["IR"] > 0 ? "block" : "none"}><CardImposto name='IR' percent={ir} value={formatarParaReal2(simplesNacional["IR"])} /></Box>
                <Box display={simplesNacional["CSLL"] > 0 ? "block" : "none"}><CardImposto name='CSLL' percent={csll} value={formatarParaReal2(simplesNacional["CSLL"])} /></Box>
                <Box display={simplesNacional["CPP"] > 0 ? "block" : "none"}><CardImposto name='CPP' percent={cpp} value={formatarParaReal2(simplesNacional["CPP"])} /></Box>
                <Box display={simplesNacional["PIS"] > 0 ? "block" : "none"}><CardImposto name='PIS' percent={pis} value={formatarParaReal2(simplesNacional["PIS"])} /></Box>
                <Box display={simplesNacional["COFINS"] > 0 ? "block" : "none"}><CardImposto name='Cofins' percent={cofins} value={formatarParaReal2(simplesNacional["COFINS"])} /></Box>
                <Box display={simplesNacional["ISS"] > 0 ? "block" : "none"}><CardImposto name='ISS' percent={iss} value={formatarParaReal2(simplesNacional["ISS"])} /></Box>
                <Box display={simplesNacional["ICMS"] > 0 ? "block" : "none"}><CardImposto name='ICMS' percent={icms} value={formatarParaReal2(simplesNacional["ICMS"])} /></Box>
                <Box display={simplesNacional["IPI"] > 0 ? "block" : "none"}><CardImposto name='IPI' percent={ipi} value={formatarParaReal2(simplesNacional["IPI"])} /></Box>
              </SimpleGrid>
            </VStack>
          </CardFooter>
        </Card>
      </PageContainer>
    </>
  )
}

CalculadoraSimples.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <ForumLayout>{page}</ForumLayout>
  );
};


