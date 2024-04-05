"use client"
import { saveSimplesNacionalForm } from "@/lib/actions";
import { AnexoSimplesNacional, TaxType } from "@/types/types";
import { Center, Checkbox, CheckboxGroup, Divider, FormErrorMessage, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { FormHelperText } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from 'react-dom';
import { LuAlarmClock, LuCheckCircle2 } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";




export default function SimplesNacionalForm() {

  const [state, formAction] = useFormState(saveSimplesNacionalForm, { message: null })
  const { pending } = useFormStatus();

  const [salesValue, setSalesValue] = useState<string>("");
  const [isValidSalesValue, setIsValidSalesValue] = useState<boolean>(true);
  const [annexOption, setAnnexOption] = useState<string>("");
  const [isValidAnnexOption, setIsValidAnnexOption] = useState<boolean>(true);
  const [salesValueToExterior, setSalesValueToExterior] = useState<string>("");
  const [isValidSalesValueToExterior, setIsValidSalesValueToExterior] = useState<boolean>(true);
  const [taxesReplaced, setTaxesReplaced] = useState<TaxType[]>([]);
  const [isValidTaxesReplaced, setIsValidTaxesReplaced] = useState<boolean>(true);
  const [valueIcmsReplacement, setValueIcmsReplacement] = useState<string>("");
  const [isValidValueIcmsReplacement, setIsValidValueIcmsReplacement] = useState<boolean>(true);
  const [valueIssReplacement, setValueIssReplacement] = useState<string>("");
  const [isValidValueIssReplacement, setIsValidValueIssReplacement] = useState<boolean>(true);
  const [valuePisCofinsReplacement, setValuePisCofinsReplacement] = useState<string>("");
  const [isValidValuePisCofinsReplacement, setIsValidValuePisCofinsReplacement] = useState<boolean>(true);
  const [isValidRbt12, setIsValidRbt12] = useState<boolean>(true);
  const [rbt12, setRbt12] = useState<string>("");

  const formProps = [
    {
      id: "annexOption",
      label: "Anexo",
      placeHolder: " ",
      helperText: "Selecione o Anexo do Simples Nacional",
      validate: validateAnnexOption,
      errorText: "Você precisa selecionar um Anexo",
      state: annexOption,
      setState: setAnnexOption,
      isValid: isValidAnnexOption, // Adicione esta linha
      setIsValid: setIsValidAnnexOption // Adicione esta linha
    },
    {
      id: "rbt12",
      label: "Rbt12",
      placeHolder: "R$ 0,00",
      helperText: "Faturamento Acumulado dos últimos 12 meses",
      validate: validateRbt12,
      errorText: "O Valor precisa ser maior do que Zero",
      state: rbt12,
      setState: setRbt12,
      isValid: isValidRbt12,
      setIsValid: setIsValidRbt12
    },
    {
      id: "salesValue",
      label: "Faturamento",
      placeHolder: "R$ 0,00",
      helperText: "Faturamento do mês atual",
      validate: validateSalesValue,
      errorText: "O Valor precisa ser maior do que Zero",
      state: salesValue,
      setState: setSalesValue,
      isValid: isValidSalesValue, // Adicione esta linha
      setIsValid: setIsValidSalesValue // Adicione esta linha
    },
    {
      id: "salesValueToExterior",
      label: "Faturamento Para o Exterior",
      placeHolder: "R$ 0,00",
      helperText: "O Faturamento não pode ser Zero",
      validate: validateSalesValueToExterior,
      errorText: "O Valor precisa ser maior do que Zero",
      state: salesValueToExterior,
      setState: setSalesValueToExterior,
      isValid: isValidSalesValueToExterior, // Adicione esta linha
      setIsValid: setIsValidSalesValueToExterior // Adicione esta linha
    },
    {
      id: "taxesReplaced",
      label: "Substituição Tributária",
      placeHolder: "R$ 0,00",
      helperText: "Selecione o Tributo Sujeito a Substituição",
      validate: validateTaxesReplaced,
      errorText: "Seleção Necessária",
      state: taxesReplaced,
      setState: setTaxesReplaced,
      isValid: isValidTaxesReplaced, // Adicione esta linha
      setIsValid: setIsValidTaxesReplaced // Adicione esta linha
    },
    {
      id: "valueIcmsReplacement",
      label: "ICMS-St",
      placeHolder: "R$ 0,00",
      helperText: "ICMS de Substituição Tributária",
      validate: validateIcmsReplacement,
      errorText: "O Valor precisa ser maior do que Zero",
      state: valueIcmsReplacement,
      setState: setValueIcmsReplacement,
      isValid: isValidValueIcmsReplacement, // Adicione esta linha
      setIsValid: setIsValidValueIcmsReplacement // Adicione esta linha
    },
    {
      id: "valueIssReplacement",
      label: "ISSQN-St",
      placeHolder: "R$ 0,00",
      helperText: "ISS de Substituição Tributária",
      validate: validateIssReplacement,
      errorText: "O Valor precisa ser maior do que Zero",
      state: valueIssReplacement,
      setState: setValueIssReplacement,
      isValid: isValidValueIssReplacement, // Adicione esta linha
      setIsValid: setIsValidValueIssReplacement // Adicione esta linha
    },
    {
      id: "valuePisCofinsReplacement",
      label: "Pis e Cofins Monofásicos",
      placeHolder: "R$ 0,00",
      helperText: "Regime Monofásico de Pis e Cofins",
      validate: validatePisCofinsReplacement,
      errorText: "O Valor precisa ser maior do que Zero",
      state: valuePisCofinsReplacement,
      setState: setValuePisCofinsReplacement,
      isValid: isValidValuePisCofinsReplacement, // Adicione esta linha
      setIsValid: setIsValidValuePisCofinsReplacement // Adicione esta linha
    },
  ]

  function validateRbt12(value: string) {
    const input = Number(value)
    if (input > 0) {
      return true
    } else {
      return false
    }
  }
  function validateAnnexOption(value: string) {
    return true
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


  interface IFormImput {
    id: string,
    label: string,
    placeHolder: string,
    helperText: string,
    validate: (value: string) => boolean, // Adicione esta linha
    errorText: string,
    state: string | number | TaxType[] | undefined,
    setState: React.Dispatch<React.SetStateAction<string | number | TaxType[]>>,
    isValid: boolean,
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
  }

  const InputRbt12 = ({ isValid, setIsValid, state, setState, label, placeHolder, id, helperText, errorText, validate, children }: IFormImput) => {
    const [localState, setLocalState] = useState(state);

    useEffect(() => {
      setLocalState(state);
    }, [state]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalState(event.target.value);
    };
    const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value !== '') {
        setIsValid(validate(event.target.value));
        setState(event.target.value);
      }
    };

    return (
      <Card m="10px" bg="gray.600" p="10px" >
        <FormControl isInvalid={!isValid} >
          <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" >{label}</FormLabel>
          <Input
            placeholder={placeHolder}
            variant="outline"
            type="text"
            id={id}
            name={id}
            isRequired
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={localState}
          />
          {isValid ? <FormHelperText color="gray">{helperText}</FormHelperText> : <FormHelperText color="red">{errorText}</FormHelperText>}
        </FormControl>
      </Card>
    )
  }

  const FormImput = ({ isValid, setIsValid, state, setState, label, placeHolder, id, helperText, errorText, validate }: IFormImput) => {
    const [localState, setLocalState] = useState(state);

    useEffect(() => {
      setLocalState(state);
    }, [state]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalState(event.target.value);
    };
    const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value !== '') {
        setIsValid(validate(event.target.value));
        setState(event.target.value);
      }
    };

    return (
      <Card m="10px" bg="gray.600" p="10px" >
        <FormControl isInvalid={!isValid} >
          <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" >{label}</FormLabel>
          <Input
            placeholder={placeHolder}
            variant="outline"
            type="text"
            id={id}
            name={id}
            isRequired
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={localState}
          />
          {isValid ? <FormHelperText color="gray">{helperText}</FormHelperText> : <FormHelperText color="red">{errorText}</FormHelperText>}
        </FormControl>
      </Card>
    )
  }

  const FormImputRbt12 = ({ isValid, setIsValid, state, setState, label, placeHolder, id, helperText, errorText, validate }: IFormImput) => {
    const [localState, setLocalState] = useState(state);

    useEffect(() => {
      setLocalState(state);
    }, [state]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalState(event.target.value);
    };
    const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value !== '') {
        setIsValid(validate(event.target.value));
        setState(event.target.value);
      }
    };

    return (
      <Card bg="gray.600" p="10px" >
        <FormControl isInvalid={!isValid} >
          <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" fontWeight="bold" >{label}</FormLabel>
          <Input
            placeholder={placeHolder}
            variant="outline"
            type="text"
            id={id}
            name={id}
            isRequired
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={localState}
          />
          {isValid ? <FormHelperText color="gray">{helperText}</FormHelperText> : <FormErrorMessage color="red">{errorText}</FormErrorMessage>}
        </FormControl>
      </Card>
    )
  }
  const FormImputSalesValue = ({ isValid, setIsValid, state, setState, label, placeHolder, id, helperText, errorText, validate }: IFormImput) => {
    const [localState, setLocalState] = useState(state);

    useEffect(() => {
      setLocalState(state);
    }, [state]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalState(event.target.value);
    };
    const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value !== '') {
        setIsValid(validate(event.target.value));
        setState(event.target.value);
      }
    };

    return (
      <Card bg="gray.600" p="10px" minW="240px" >
        <FormControl isInvalid={!isValid} >
          <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" fontWeight="bold" >{label}</FormLabel>
          <Input
            placeholder={placeHolder}
            variant="outline"
            type="text"
            id={id}
            name={id}
            isRequired
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={localState}
          />
          {isValid ? <FormHelperText color="gray">{helperText}</FormHelperText> : <FormErrorMessage color="red">{errorText}</FormErrorMessage>}
        </FormControl>
      </Card>
    )
  }

  const FormSelectAnnexOption = ({ isValid, setIsValid, state, setState, label, placeHolder, id, helperText, errorText, validate }: IFormImput) => {
    const [localState, setLocalState] = useState(state);
    useEffect(() => {
      setLocalState(state);
    }, [state]);

    const anexo = AnexoSimplesNacional
    return (
      <Card bg="gray.600" h="116px" p="10px" minW="220px" justifyContent="space-between" alignItems="self-end" >
        <FormControl isInvalid={!isValid} id={id} >
          <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" fontWeight="bold" >{label}</FormLabel>
          <Menu >
            <MenuButton w="100%" as={Button} fontWeight="bold" variant="primary" rightIcon={<MdArrowDropDown />} >
              {localState || label}
            </MenuButton>
            <MenuList bgGradient="linear(to-r, orange, red)" borderRadius="10px">
              {Object.entries(anexo).map(([key, value]) => (
                <MenuItem fontWeight="bold" key={key} onClick={() => { setLocalState(value); setState(value); }}>
                  {value}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <input type="hidden" name={id} value={localState} />
          {isValid ? <FormHelperText color="gray">{helperText}</FormHelperText> : <FormHelperText color="red">{errorText}</FormHelperText>}
        </FormControl>
        <Link><Text fontSize="10px" color="red">Duvidas Sobre o Anexo ?</Text> </Link>
      </Card>
    )
  }






  const [isIcmsSt, setIsIcmsSt] = useState(false);
  const [isPisCofinsSt, setIsPisCofinsSt] = useState(false);
  const [isIssSt, setIsIssSt] = useState(false);
  const [checkedValues, setCheckedValues] = useState<TaxType[]>([]);


  useEffect(() => {
    setIsIcmsSt(checkedValues.includes("ICMS"))
    setIsPisCofinsSt(checkedValues.includes("PIS COFINS"))
    setIsIssSt(checkedValues.includes("ISS"))
  }, [checkedValues])



  const FormSelectTaxesReplaced = ({ isValid, label, id, helperText, errorText }: IFormImput) => {
    const tax: TaxType[] = ["ICMS", "PIS COFINS", "ISS"];
    const handleCheckboxChange = (value: TaxType) => {
      if (checkedValues.includes(value)) {
        setCheckedValues(checkedValues.filter(item => item !== value));
      } else {
        setCheckedValues([...checkedValues, value]);
      }
    };
    return (
      <Card bg="gray.600" h="116px" p="10px" minW="220px" justifyContent="space-between" alignItems="self-end" >
        <FormControl isInvalid={!isValid} id={id} >
          <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" fontWeight="bold" >{label}</FormLabel>
          <HStack >
            {tax.map((tax, index) => (
              <Checkbox
                id={id}
                name={id}
                color="blue"
                value={tax}
                key={index}
                isChecked={checkedValues.includes(tax)}
                onChange={() => handleCheckboxChange(tax)}
              >
                {tax}
              </Checkbox>
            ))}
          </HStack>
          {isValid ? <FormHelperText color="gray">{helperText}</FormHelperText> : <FormHelperText color="red">{errorText}</FormHelperText>}
        </FormControl>
      </Card>
    )
  }

  return (

    <Center mt="40px" mb="20px">
      <HStack alignItems="start">
        <HStack alignItems="end">
          <VStack>

            <Card bg="gray.500">
              <form action={formAction}>
                <FormSelectAnnexOption
                  errorText={formProps[0].errorText}
                  helperText={formProps[0].helperText}
                  id={formProps[0].id}
                  isValid={formProps[0].isValid}
                  label={formProps[0].label}
                  placeHolder={formProps[0].placeHolder}
                  setIsValid={formProps[0].setIsValid}
                  setState={formProps[0].setState}
                  state={formProps[0].state}
                  validate={formProps[0].validate}
                />
                {/** 
                <VStack justifyContent="space-between" alignItems="start">
                  <HStack w="100%" justifyContent="start" alignItems="start">
                    <FormSelectAnnexOption
                      errorText={formProps[0].errorText}
                      helperText={formProps[0].helperText}
                      id={formProps[0].id}
                      isValid={formProps[0].isValid}
                      label={formProps[0].label}
                      placeHolder={formProps[0].placeHolder}
                      setIsValid={formProps[0].setIsValid}
                      setState={formProps[0].setState}
                      state={formProps[0].state}
                      validate={formProps[0].validate}
                    />
                    <FormImputRbt12
                      errorText={formProps[1].errorText}
                      helperText={formProps[1].helperText}
                      id={formProps[1].id}
                      isValid={formProps[1].isValid}
                      label={formProps[1].label}
                      placeHolder={formProps[1].placeHolder}
                      setIsValid={formProps[1].setIsValid}
                      setState={formProps[1].setState}
                      state={formProps[1].state}
                      validate={formProps[1].validate}
                    />
                  </HStack>
                  <VStack p="5px" border="1px solid red" w="100%" justifyContent="space-between" >

                    <HStack justifyContent="space-between" w="100%">


                      <FormImputSalesValue
                        errorText={formProps[2].errorText}
                        helperText={formProps[2].helperText}
                        id={formProps[2].id}
                        isValid={formProps[2].isValid}
                        label={formProps[2].label}
                        placeHolder={formProps[2].placeHolder}
                        setIsValid={formProps[2].setIsValid}
                        setState={formProps[2].setState}
                        state={formProps[2].state}
                        validate={formProps[2].validate}
                      />
                      <FormImputSalesValue
                        errorText={formProps[3].errorText}
                        helperText={formProps[3].helperText}
                        id={formProps[3].id}
                        isValid={formProps[3].isValid}
                        label={formProps[3].label}
                        placeHolder={formProps[3].placeHolder}
                        setIsValid={formProps[3].setIsValid}
                        setState={formProps[3].setState}
                        state={formProps[3].state}
                        validate={formProps[3].validate}
                      />
                    </HStack>
                  </VStack>
                  <Divider />
                  <HStack alignItems="start">
                    <VStack>
                      <FormSelectTaxesReplaced
                        errorText={formProps[4].errorText}
                        helperText={formProps[4].helperText}
                        id={formProps[4].id}
                        isValid={formProps[4].isValid}
                        label={formProps[4].label}
                        placeHolder={formProps[4].placeHolder}
                        setIsValid={formProps[4].setIsValid}
                        setState={formProps[4].setState}
                        state={formProps[4].state}
                        validate={formProps[4].validate}
                      />
                      <HStack>
                        <FormImputSalesValue
                          errorText={formProps[5].errorText}
                          helperText={formProps[5].helperText}
                          id={formProps[5].id}
                          isValid={formProps[5].isValid}
                          label={formProps[5].label}
                          placeHolder={formProps[5].placeHolder}
                          setIsValid={formProps[5].setIsValid}
                          setState={formProps[5].setState}
                          state={formProps[5].state}
                          validate={formProps[5].validate}
                        />
                        <FormImputSalesValue
                          errorText={formProps[6].errorText}
                          helperText={formProps[6].helperText}
                          id={formProps[6].id}
                          isValid={formProps[6].isValid}
                          label={formProps[6].label}
                          placeHolder={formProps[6].placeHolder}
                          setIsValid={formProps[6].setIsValid}
                          setState={formProps[6].setState}
                          state={formProps[6].state}
                          validate={formProps[6].validate}
                        />
                        <FormImputSalesValue
                          errorText={formProps[7].errorText}
                          helperText={formProps[7].helperText}
                          id={formProps[7].id}
                          isValid={formProps[7].isValid}
                          label={formProps[7].label}
                          placeHolder={formProps[7].placeHolder}
                          setIsValid={formProps[7].setIsValid}
                          setState={formProps[7].setState}
                          state={formProps[7].state}
                          validate={formProps[7].validate}
                        />
                      </HStack>
                    </VStack>
                  </HStack>
                </VStack>
                */}
                <Card bg="gray.400" borderRadius="20px">
                  <Card m="10px" bg="gray.600" p="10px" borderRadius="full">
                    <Button type="submit" disabled={pending} borderRadius="full" variant={pending ? "primary" : "secondary"}  >
                      {pending ? <LuAlarmClock size="35px" opacity="0.5" /> : <LuCheckCircle2 size="35px" opacity="0.5" />}
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
