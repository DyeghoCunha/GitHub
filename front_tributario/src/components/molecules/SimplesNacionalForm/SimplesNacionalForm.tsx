"use client"
import { saveSimplesNacionalForm } from "@/lib/actions";
import { AnexoSimplesNacional, IFormImput, TaxType } from "@/types/types";
import { Center, Checkbox, CheckboxGroup, Divider, FormErrorMessage, GridItem, Link, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { FormHelperText } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from 'react-dom';
import { LuAlarmClock, LuCheckCircle2 } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { TbRuler } from "react-icons/tb";
import Select_TaxesReplaced from "./Select_TaxesReplaced/Select_TaxesReplaced";
import Input_Value from "./Input_Value/Input_Value";
import Select_AnnexOption from "./Select_AnnexOption/Select_AnnexOption";
import { validateRbt12 } from "./utils/validation";
import { motion, AnimatePresence } from "framer-motion";
import SkeletonDefault from "@/components/atoms/SkeletonDefault/SkeletonDefault";
import { CleanedValue } from "./utils/convertions";



export default function SimplesNacionalForm() {

  const [state, formAction] = useFormState(saveSimplesNacionalForm, { message: null })
  const { pending } = useFormStatus();

  const [salesValue, setSalesValue] = useState<string>("");
  const [isValidSalesValue, setIsValidSalesValue] = useState<boolean>(true);
  const [isValidSalesValueForm, setIsValidSalesValueForm] = useState<boolean>(false);
  const [annexOption, setAnnexOption] = useState<string>("");
  const [isValidAnnexOption, setIsValidAnnexOption] = useState<boolean>(true);
  const [isValidAnnexOptionForm, setIsValidAnnexOptionForm] = useState<boolean>(false);
  const [salesValueToExterior, setSalesValueToExterior] = useState<string>("");
  const [isValidSalesValueToExterior, setIsValidSalesValueToExterior] = useState<boolean>(true);
  const [isValidSalesValueToExteriorForm, setIsValidSalesValueToExteriorForm] = useState<boolean>(false);
  const [taxesReplaced, setTaxesReplaced] = useState<TaxType[]>([]);
  const [isValidTaxesReplaced, setIsValidTaxesReplaced] = useState<boolean>(true);
  const [isValidTaxesReplacedForm, setIsValidTaxesReplacedForm] = useState<boolean>(false);
  const [valueIcmsReplacement, setValueIcmsReplacement] = useState<string>("");
  const [isValidValueIcmsReplacement, setIsValidValueIcmsReplacement] = useState<boolean>(true);
  const [isValidValueIcmsReplacementForm, setIsValidValueIcmsReplacementForm] = useState<boolean>(false);
  const [valueIssReplacement, setValueIssReplacement] = useState<string>("");
  const [isValidValueIssReplacement, setIsValidValueIssReplacement] = useState<boolean>(true);
  const [isValidValueIssReplacementForm, setIsValidValueIssReplacementForm] = useState<boolean>(false);
  const [valuePisCofinsReplacement, setValuePisCofinsReplacement] = useState<string>("");
  const [isValidValuePisCofinsReplacement, setIsValidValuePisCofinsReplacement] = useState<boolean>(true);
  const [isValidValuePisCofinsReplacementForm, setIsValidValuePisCofinsReplacementForm] = useState<boolean>(false);
  const [isValidRbt12, setIsValidRbt12] = useState<boolean>(true);
  const [isValidRbt12Form, setIsValidRbt12Form] = useState<boolean>(true);
  const [rbt12, setRbt12] = useState<string>("");
  const [isIcmsSt, setIsIcmsSt] = useState(false);
  const [isPisCofinsSt, setIsPisCofinsSt] = useState(false);
  const [isIssSt, setIsIssSt] = useState(false);
  const [checkedValues, setCheckedValues] = useState<TaxType[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  };
  const skeletonOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  const MotionCard = motion(Card)

  useEffect(() => {
    setIsIcmsSt(checkedValues.includes("ICMS"))
    setIsPisCofinsSt(checkedValues.includes("PIS COFINS"))
    setIsIssSt(checkedValues.includes("ISS"))
  }, [checkedValues])



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
      label: "RBT12",
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
      label: "Faturamento Internacional",
      placeHolder: "R$ 0,00",
      helperText: "O Faturamento não pode ser nulo",
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
      errorText: "Valor Maior que o Faturamento",
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
      errorText: "Valor Maior que o Faturamento",
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
      errorText: "Valor Maior que o Faturamento",
      state: valuePisCofinsReplacement,
      setState: setValuePisCofinsReplacement,
      isValid: isValidValuePisCofinsReplacement, // Adicione esta linha
      setIsValid: setIsValidValuePisCofinsReplacement // Adicione esta linha
    },
  ]


  function validateAnnexOption(value: string) {

    if (value.length > 0) {
      setIsValidAnnexOptionForm(true)
      return true
    } else {
      setIsValidAnnexOptionForm(false)
      return false
    }
  }

  function validateSalesValue(value: string) {
    const cleanedValue = CleanedValue(value)
    const input = Number(cleanedValue);
    if (input > 0) {
      setSalesValue(value)
      setIsValidSalesValueForm(true)
      return true
    } else {
      setIsValidSalesValueForm(false)
      return false
    }
  }
  function validateSalesValueToExterior(value: string) {
    const cleanedValue = CleanedValue(value)
    const input = Number(cleanedValue);
    if (input >= 0) {
      setIsValidSalesValueToExteriorForm(true)
      return true
    } else {
      setIsValidSalesValueToExteriorForm(false)
      return false
    }
  }
  function validateTaxesReplaced(value: string) {
    const cleanedValue = CleanedValue(value)
    const input = Number(cleanedValue);
    const sales = Number(salesValue)
    if (input > 0 && input < sales) {
      setIsValidTaxesReplacedForm(true)
      return true
    } else {
      setIsValidTaxesReplacedForm(false)
      return false
    }
  }
  function validateIcmsReplacement(value: string) {
    const cleanedValue = CleanedValue(value)
    const input = Number(cleanedValue);
    const sales = Number(salesValue)
    if (input > 0 && input < sales) {
      setIsValidValueIcmsReplacementForm(true)
      return true
    } else {
      setIsValidValueIcmsReplacementForm(false)
      return false
    }
  }
  function validateIssReplacement(value: string) {
    const cleanedValue = CleanedValue(value)
    const input = Number(cleanedValue);
    const sales = Number(salesValue)
    if (input > 0 && input < sales) {
      setIsValidValueIssReplacementForm(true)
      return true
    } else {
      setIsValidValueIssReplacementForm(false)
      return false
    }
  }
  function validatePisCofinsReplacement(value: string) {
    const cleanedValue = CleanedValue(value)
    const input = Number(cleanedValue);
    const sales = Number(salesValue)
    if (input > 0 && input < sales) {
      setIsValidValuePisCofinsReplacementForm(true)
      return true
    } else {
      setIsValidValuePisCofinsReplacementForm(false)
      return false
    }
  }

  function validateCalc() {
    const isFirstConditionValid = isValidRbt12Form && isValidSalesValueForm && isValidSalesValueToExteriorForm && checkedValues.length === 0;
    const isSecondConditionValid = isValidRbt12Form && isValidSalesValueForm && isValidSalesValueToExteriorForm && checkedValues.length > 0 && (isValidValueIcmsReplacementForm || isValidValuePisCofinsReplacementForm || isValidValueIssReplacementForm);
    return isFirstConditionValid || isSecondConditionValid;
  }

  useEffect(() => {
    setIsFormValid(validateCalc());
  }, [rbt12, salesValue, salesValueToExterior, checkedValues, valueIcmsReplacement, valuePisCofinsReplacement, valueIssReplacement]);

  return (
    <Center>
      <Card transition="height 0.5s cubic-bezier(0.61,-0.19, 0.7,-0.11)" bg="gray.700" p="5px" >
        <form action={formAction}>
          <VStack >
            <HStack w="100%" justifyContent="start" alignItems="start">

              <Select_AnnexOption
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

              {annexOption.length > 1 ?
                <Box as={motion.div} variants={skeletonOut} initial="hidden" animate="visible" exit="exit">
                  <Input_Value
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
                  /></Box> :
                <SkeletonDefault width="250px" height="118px" />}
            </HStack>

            {Number(rbt12) > 0 ?
              <Box as={motion.div} variants={skeletonOut} initial="hidden" animate="visible" exit="exit">
                <Divider borderColor="rgba(183, 249, 168, 0.8)" mb="5px" />
                <HStack w="100%" justifyContent="center" alignItems="center">
                  <Input_Value
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
                  <Input_Value
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
                </HStack></Box>
              : <Box></Box>}
            {Number(salesValue) > 0 || Number(salesValueToExterior) > 0 ?
              <Box w="100%">
                <Divider borderColor="rgba(183, 249, 168, 0.8)" mb="5px" />
                <VStack w="100%" justifyContent="center" alignItems="center">
                  <Select_TaxesReplaced
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
                    checkedValues={checkedValues}
                    setCheckedValues={setCheckedValues}
                  />
                  <SimpleGrid gap="5px" w="100%" columns={2} row={2}>
                    <AnimatePresence>
                      {isIcmsSt && (
                        <GridItem as={motion.div} variants={variants} initial="hidden" animate="visible" exit="exit">
                          <Input_Value
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
                        </GridItem>)}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isIssSt && (
                        <GridItem as={motion.div} variants={variants} initial="hidden" animate="visible" exit="exit">
                          <Input_Value
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
                          /></GridItem>)}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isPisCofinsSt && (
                        <GridItem as={motion.div} variants={variants} initial="hidden" animate="visible" exit="exit">
                          <Input_Value
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
                          /></GridItem>
                      )}
                    </AnimatePresence>
                  </SimpleGrid>
                </VStack>

              </Box> : <Box></Box>}

          </VStack>
          {isFormValid ?
            <Card mt="10px" bg="gray.400" borderRadius="10px">
              <Card m="10px" bg="gray.600" p="10px" borderRadius="full">
                <Button type="submit" disabled={true} borderRadius="full" variant={!pending ? "primary" : "secondary"}  >
                  <Text fontWeight="bold" fontSize="20px">Calcular</Text>
                </Button>
              </Card>
            </Card> : <SkeletonDefault width="100%" height="60px"></SkeletonDefault>}
        </form >
      </ Card>
    </Center >
  );
}
