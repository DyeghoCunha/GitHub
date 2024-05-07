import { Card, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Image, Input } from "@chakra-ui/react";
import { Field } from "formik";
import { CardFormType } from "../types";






export default function InputForm({ name, validate, formLabel, isRequired, helperText, placeHolder, logo }: CardFormType) {
  return (

    <HStack w="100%" zIndex={0}>
      <Card m="0px 5px 0px 5px" bg="gray.600" w="100%" p="10px" zIndex={0} >
        <Field name={name} validate={validate}>
          {({ field, form }: any) => (
            <FormControl
              isInvalid={form.errors.name && form.touched.name} >
              <HStack mb="5px" justifyContent="start" alignItems="center"> <Image src={logo} w="20px" /> <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" m="0px">{formLabel}</FormLabel> </HStack>
              <Input
                boxShadow="5px -5px 20px inset rgba(0,0,0,0.5),5px -5px 5px inset rgba(0,0,0,0.2),-5px 5px 20px inset rgba(255,255,255,0.5),-5px 5px 5px inset rgba(255,255,255,0.2)"
                {...field} placeholder={placeHolder}
                borderColor="transparent"
                variant="outline"
                type='text' id={name}
                name={name}
                isRequired={isRequired}

                />
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
