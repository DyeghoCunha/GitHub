import { Card, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Image, Input, Text } from "@chakra-ui/react";
import { Field } from "formik";
import { CardFormType } from "../types";






export default function InputSocialMedia({ name, validate, formLabel, isRequired, helperText, placeHolder, logo ,text}: CardFormType) {
  return (
    
    <HStack w="100%" zIndex={0}>
      <Card m="10px 5px 5px 5px" bg="gray.600" w="100%" p="10px" zIndex={0} >
        <Field name={name} validate={validate}>
          {({ field, form }: any) => (
            <FormControl
             isInvalid={form.errors.name && form.touched.name} >
              <HStack mb="5px" justifyContent="start" alignItems="center"> <Image src={logo} w="20px" /> <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" m="0px">{formLabel}</FormLabel> 
              </HStack>
              <HStack boxShadow="inset 10px -10px 10px rgba(254, 119, 0, 0.8),inset -5px 5px 10px rgba(255, 255, 255, 0.8)" bgColor="rgba(254, 119, 0, 0.5)" pl="5px"  borderRadius="10px">
              <Text>{text}</Text>
              <Input  borderColor="rgba(254, 119, 0, 0.5)" {...field} placeholder={placeHolder} variant="outline" type='text' id={name} name={name} isRequired={isRequired} />
              </HStack>
              <FormHelperText color="gray">{helperText}</FormHelperText>
              <FormErrorMessage
              >{form.errors.name}</FormErrorMessage>
            </FormControl>
          )}
        </Field>

      </Card>
    </HStack>
  )
}
