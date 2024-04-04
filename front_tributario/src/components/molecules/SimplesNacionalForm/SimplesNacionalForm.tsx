"use client"
import { saveSimplesNacionalForm } from "@/lib/actions";
import { Center } from "@chakra-ui/react";
import { FormHelperText } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from 'react-dom';
import { LuAlarmClock, LuCheckCircle2 } from "react-icons/lu";




export default function SimplesNacionalForm() {

  const [state, formAction] = useFormState(saveSimplesNacionalForm, { message: null })
  const { pending } = useFormStatus();
  const [salesValue, setSalesValue] = useState<number>();
  const [annexOption, setAnnexOption] = useState<string>();
  const [salesValueToExterior, setSalesValueToExterior] = useState<number>();
  const [taxesReplaced, setTaxesReplaced] = useState<number>();
  const [valueIcmsReplacement, setValueIcmsReplacement] = useState<number>();
  const [valueIssReplacement, setValueIssReplacement] = useState<number>();
  const [valuePisCofinsReplacement, setValuePisCofinsReplacement] = useState<number>();

  const formProps = [
    {
      id: "annexOption",
      label: "Informe o Anexo do Simples Nacional",
      placeHolder: "Anexo I",
      helperText: "Se tiver dúvidas clique Aqui",
      validate: validateAnnexOption,
      errorText: "Você precisa selecionar um Anexo",
      state: annexOption,
      setState: setAnnexOption
    },
    {
      id: "rbt12",
      label: "Faturamento Acumulado dos últimos 12 meses",
      placeHolder: "R$ 0,00",
      helperText: "O Faturamento não pode ser Zero",
      validate: validateRbt12,
      errorText: "O Valor precisa ser maior do que Zero",
      // state: rbt12,
      // setState: setRbt12
    },
    {
      id: "salesValue",
      label: "Faturamento do mês atual",
      placeHolder: "R$ 0,00",
      helperText: "O Faturamento não pode ser Zero",
      validate: validateSalesValue,
      errorText: "O Valor precisa ser maior do que Zero",
      state: salesValue,
      setState: setSalesValue
    },
    {
      id: "salesValueToExterior",
      label: "Faturamento Para o Exterior",
      placeHolder: "R$ 0,00",
      helperText: "O Faturamento não pode ser Zero",
      validate: validateSalesValueToExterior,
      errorText: "O Valor precisa ser maior do que Zero",
      state: salesValueToExterior,
      setState: setSalesValueToExterior
    },
    {
      id: "taxesReplaced",
      label: "taxesReplaced",
      placeHolder: "R$ 0,00",
      helperText: "O Faturamento não pode ser Zero",
      validate: validateTaxesReplaced,
      errorText: "O Valor precisa ser maior do que Zero",
      state: taxesReplaced,
      setState: setTaxesReplaced
    },
    {
      id: "valueIcmsReplacement",
      label: "valueIcmsReplacement",
      placeHolder: "R$ 0,00",
      helperText: ".",
      validate: validateIcmsReplacement,
      errorText: "O Valor precisa ser maior do que Zero",
      state: valueIcmsReplacement,
      setState: setValueIcmsReplacement
    },
    {
      id: "valueIssReplacement",
      label: "valueIssReplacemen",
      placeHolder: "R$ 0,00",
      helperText: ". ",
      validate: validateIssReplacement,
      errorText: "O Valor precisa ser maior do que Zero",
      state: valueIssReplacement,
      setState: setValueIssReplacement
    },
    {
      id: "valuePisCofinsReplacement",
      label: "valuePisCofinsReplacement",
      placeHolder: "R$ 0,00",
      helperText: ". ",
      validate: validatePisCofinsReplacement,
      errorText: "O Valor precisa ser maior do que Zero",
      state: valuePisCofinsReplacement,
      setState: setValuePisCofinsReplacement
    },
  ]


  function validateAnnexOption(value: string) {
    return true
  }

  function validateRbt12(value: string) {
    const input = Number(value)
    if (input > 0) {
      return true
    } else {
      return false
    }
  }
  function validateSalesValue(value: string) {
    const input = Number(value)
    if (input > 0) {
      setSalesValue(input)
      return true
    } else { return false }
  }
  function validateSalesValueToExterior(value: string) {
    const input = Number(value)
    if (input > 0) {
      return true
    } else { return false }
  }

  function validateTaxesReplaced(value: string) {
    const input = Number(value)
    if (input > 0 && input < salesValue) {
      return true
    } else { return false }
  }

  function validateIcmsReplacement(value: string) {
    const input = Number(value)
    if (input > 0 && input < salesValue) {
      return true
    } else { return false }
  }
  function validateIssReplacement(value: string) {
    const input = Number(value)
    if (input > 0 && input < salesValue) {
      return true
    } else { return false }
  }
  function validatePisCofinsReplacement(value: string) {
    const input = Number(value)
    if (input > 0 && input < salesValue) {
      return true
    } else { return false }
  }


  function CardForm({ children }: any) {
    return (
      <Card m="10px" bg="gray.600" p="10px" >{children}</Card>
    )
  }


  interface IFormImput {
    id: string,
    label: string,
    placeHolder: string,
    helperText: string,
    validate: (value: string) => boolean, // Adicione esta linha
    errorText: string,
    state: string | number | undefined,
    setState: React.Dispatch<React.SetStateAction<string | number | undefined>> | undefined
  }

  function FormImput({ id, label, placeHolder, helperText, validate, errorText, state, setState }: IFormImput) {

    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (setState) {
        setState(event.target.value)
      }
    };
    const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsValid(validate(event.target.value));
    };

    return (
      <CardForm>
        <FormControl isInvalid={!isValid} >
          <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" >{label}</FormLabel>
          <Input placeholder={placeHolder} variant="outline" type="text" id={id} name={id} isRequired onBlur={handleInputChange} />
          {isValid ? <FormHelperText color="gray">{helperText}</FormHelperText> : <FormHelperText color="red">{errorText}</FormHelperText>}
        </FormControl>
      </CardForm>
    )
  }


  const [isValidRbt12, setIsValidRbt12] = useState(true);
  const [rbt12, setRbt12] = useState<string>("");


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRbt12(event.target.value)
  };
  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setIsValidRbt12(validateRbt12(event.target.value))
  };



  return (
    <Center mt="40px" mb="20px">
      <HStack alignItems="start">
        <HStack alignItems="end">
          <VStack>
            <Heading my="10px">Formulário de Cadastro de Projeto</Heading>
            <Card w={{ base: "800px", sm: "300px", md: "800px" }} bg="gray.500">
              <form action={formAction}>
                {/*formProps.map((prop, index) => (
                  <FormImput
                    id={prop.id}
                    helperText={prop.helperText}
                    label={prop.label}
                    placeHolder={prop.placeHolder}
                    key={index}
                    validate={prop.validate}
                    errorText={prop.errorText}
                    state={prop.state}
                    setState={prop.setState}
                  />
                ))*/}
                <CardForm>
                  <FormControl isInvalid={!isValidRbt12} >
                    <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" >{formProps[1].label}</FormLabel>
                    <Input placeholder={formProps[1].placeHolder} variant="outline" type="text" id={formProps[1].id} name={formProps[1].id} isRequired onBlur={handleInputBlur} />
                    {isValidRbt12 ? <FormHelperText color="gray">{formProps[1].helperText}</FormHelperText> : <FormHelperText color="red">{formProps[1].errorText}</FormHelperText>}
                  </FormControl>
                </CardForm>
                <CardForm>
                  <FormControl isInvalid={!isValidRbt12} >
                    <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" >{formProps[2].label}</FormLabel>
                    <Input placeholder={formProps[2].placeHolder} variant="outline" type="text" id={formProps[2].id} name={formProps[2].id} isRequired onBlur={handleInputBlur} />
                    {isValidRbt12 ? <FormHelperText color="gray">{formProps[2].helperText}</FormHelperText> : <FormHelperText color="red">{formProps[2].errorText}</FormHelperText>}
                  </FormControl>
                </CardForm>
                <Card bg="gray.400" w="190px" borderRadius="20px">
                  <Card m="10px" bg="gray.600" p="10px" borderRadius="full">
                    <Button type="submit" disabled={pending} borderRadius="full" variant="primary" w="150px" h="150px">
                      {pending ? <LuAlarmClock size="350px" opacity="0.5" /> : <LuCheckCircle2 size="350px" opacity="0.5" />}
                    </Button>
                  </Card>
                </Card>

              </form >
            </Card >
          </VStack>

        </HStack>
      </HStack>
    </Center >
  );
}
