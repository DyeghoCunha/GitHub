import { Box, Button, Card, Checkbox, CheckboxGroup, FormControl, FormErrorMessage, Grid, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal } from "@chakra-ui/react";
import { Field, FieldArray } from "formik";
import { useState } from "react";

export function CheckForm({ name, validate, formLabel, isRequired, helperText, placeHolder, propStack }: CheckFormLangType) {
  const languageChoices = Object.values(propStack)

  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const [value, setValue] = useState([]);

  return (
    <Card m="10px 5px 5px 5px" bg="gray.600" w="300px" p="10px" zIndex={0} >
      <Field name={name} validate={validate} >
        {({ field, form }: any) => (
          <FormControl isInvalid={form.errors.name && form.touched.name} >
            <Popover placement='auto' isOpen={isOpen} onClose={close} >
              <PopoverTrigger>
                <Button w="100%" letterSpacing={1} variant="primary" onClick={open}>{formLabel}</Button>
              </PopoverTrigger>
              <Portal >
                <PopoverContent w={500} alignItems="start" border="1px solid orange"  >
                  <PopoverArrow bgColor="orange" />
                  <PopoverHeader w="100%" textAlign="center" borderColor="orange" fontWeight="bold" bgGradient="linear(to-r, orange, red)" bgClip="text">{helperText}</PopoverHeader>
                  <PopoverCloseButton border="1px solid orange" />
                  <PopoverBody w="400px"  >
                    <Box w={500} p={4}>

                      <FieldArray name={name}>
                        {({ push, remove }) => (
                          <CheckboxGroup value={field.value} onChange={(value) => {

                            languageChoices.forEach((language:any) => {
                              if (value.includes(language)) {

                                if (!field.value.includes(language)) {
                                  push(language);
                                }
                              } else {

                                if (field.value.includes(language)) {
                                  const index = field.value.indexOf(language);
                                  remove(index);
                                }
                              }
                            });
                          }}>
                            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                              {languageChoices.map((language) => (
                                <Checkbox key={language} value={language} colorScheme="orange">
                                  {language}
                                </Checkbox>
                              ))}
                            </Grid>
                          </CheckboxGroup>
                        )}
                      </FieldArray>

                    </Box>
                  </PopoverBody>
                  <PopoverFooter borderColor="orange" w="100%" minH={50} 
                  bgGradient="linear(to-r, gray,orange, red)" bgClip="text"
                  >{field.value.join(", ")}

                  </PopoverFooter>

                  {field.value.length > 0 ? (<Button variant="primary" width="100%" onClick={close}>Validar</Button>) : (<Button variant="secondary" isDisabled width="100%" onClick={close}>Validar</Button>)}

                </PopoverContent>
              </Portal>
            </Popover>
            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </Card>
  );
}