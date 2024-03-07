import { Card, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Image, Input } from "@chakra-ui/react";
import { Field } from "formik";
import { CardFormType } from "../types";






export default function InputForm({ name, validate, formLabel, isRequired, helperText, placeHolder, logo }: CardFormType) {
  return (
    
    <HStack w="100%" zIndex={0}>
      <Card m="10px 5px 5px 5px" bg="gray.600" w="100%" p="10px" zIndex={0} >
        <Field name={name} validate={validate}>
          {({ field, form }: any) => (
            <FormControl
             isInvalid={form.errors.name && form.touched.name} >
              <HStack justifyContent="start" alignItems="center"> <Image src={logo} w="20px" /> <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" m="0px">{formLabel}</FormLabel> </HStack>
              <Input {...field} placeholder={placeHolder} variant="outline" type='text' id={name} name={name} isRequired={isRequired} />

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
