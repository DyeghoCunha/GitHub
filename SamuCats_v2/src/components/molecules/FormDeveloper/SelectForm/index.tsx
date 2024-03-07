import { Card, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Select } from "@chakra-ui/react";
import { Field } from "formik";
import { SelectFormStackType } from "../types";

export function SelectForm({ name, validate, formLabel, isRequired, helperText, placeHolder, propStack }: SelectFormStackType) {
  return (
    <Card m="10px 5px 5px 5px" bg="gray.600" w="300px" p="10px" zIndex={0} >
      <Field name={name} validate={validate} >
        {({ field, form }: any) => (
          <FormControl isInvalid={form.errors.name && form.touched.name} >
            <HStack justifyContent="start" alignItems="center">
              <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" m="0px">{formLabel}</FormLabel>
            </HStack>

            <Select {...field} border="1px solid gray" placeholder={placeHolder} _hover={{ borderColor: "orange" }} _focus={{ border: " 0px solid ", bgColor: "rgba(255,150,0,0.2)" }} isRequired={isRequired} >
              {Object.entries(propStack).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </Select>
            <FormHelperText color="gray">{helperText}</FormHelperText>
            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </Card>
  )
}