import { Box, Button, Card, Center, FormControl, FormErrorMessage, FormHelperText, Image, FormLabel, HStack, Heading, Input, Stack, Textarea, Toast, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { LuCheckCircle2 } from 'react-icons/lu';
import SamucaForm from "@/assets/image/samucaForm2.png"
import ImagePicker from '../ImagePicker';
import Developer, { IDeveloper } from '@/types/types';

export default function FormDeveloper() {

  const [name, setName] = useState("");



  function validateName(value: string) {
    let error;
    if (!value&&value.length===0) {
      error = "Coloque o seu Nome Completo";
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  function validateLinkedIn(value: string) {
    let error;
    if (!value) {
      error = 'Escreva o Seu Nome Completo';
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  const component = (props) => <>
    <Field name='name' validate={validateName}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.name && form.touched.name}>
          <FormLabel>Seu Nome</FormLabel>
          <Input {...field} placeholder='name' />
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>

    <Button
      variant="primary"
      mt={4}
      colorScheme='teal'
      isLoading={props.isSubmitting}
      type='submit'
    >
      Submit
    </Button></>

  function CardForm({ children }: any) {
    return (
      <Card m="10px" bg="gray.600" p="10px" >{children}</Card>
    )
  }

  return (
    <>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >

        {(props) => (


          <Form>
            <Center mb="20px">
              <HStack alignItems="start">
                <HStack alignItems="end">
                  <VStack>
                    <Heading my="10px">Formulário de Cadastro de Projeto</Heading>
                    <Card w={{ base: "800px", sm: "300px", md: "800px" }} bg="gray.500">
                      <CardForm>

                        <Field name='name' validate={validateName}>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                              <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text">Nome do Projeto</FormLabel>
                              <Input {...field} placeholder='' variant="outline" type='text' id="name" name="name" isRequired />
                              {form.errors.name ? (
                                <Box></Box>
                              ) : (
                                <FormHelperText color="gray">Coloque o seu Nome Completo.</FormHelperText>
                              )}
                              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                     

                    </CardForm>

                    <CardForm>
                      <FormControl>
                        <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text">Nome do Autor</FormLabel>
                        <Input type='text' id="authorName" name="authorName" isRequired />
                        <FormHelperText color="gray">Nome do criador do Projeto</FormHelperText>
                      </FormControl>
                    </CardForm>

                    <CardForm>
                      <FormControl>
                        <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text">Resumo do Projeto</FormLabel>
                        <Input type='text' id="summary" name="summary" isRequired />
                        <FormHelperText color="gray">Descreva a funcionalidade em poucas palavras </FormHelperText>
                      </FormControl>
                    </CardForm>

                    <Stack direction={{ base: "row", sm: "column", md: "row" }} alignItems="end">
                      <Box w="75%" h="100%">
                        <CardForm>
                          <FormControl>
                            <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text">Descrição</FormLabel>
                            <Textarea
                              id="instructions"
                              name="instructions"
                              rows={10}
                              required
                            ></Textarea>
                            <FormHelperText color="gray">Descreva de forma Objetiva o Projeto</FormHelperText>
                          </FormControl>
                        </CardForm>
                      </Box>

                      <CardForm>
                        <FormControl>
                          <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text">Imagem do Projeto</FormLabel>
                          <ImagePicker name="image" />
                          <FormHelperText color="gray">Imagem do Figma ou do Conceito do Projeto</FormHelperText>
                        </FormControl>
                      </CardForm>
                    </Stack>

                  </Card >
                </VStack>

                <Card bg="gray.500" borderRadius="20px">
                  <Card m="10px" bg="gray.600" p="10px" borderRadius="full">
                    <Button borderRadius="full" variant="primary" w="150px" h="150px" isLoading={props.isSubmitting}
      type='submit'>
                      <LuCheckCircle2 size="350px" opacity="0.5" />
                    </Button>
                  </Card>
                </Card>
              </HStack>
              <Image src={SamucaForm.src} />
            </HStack>
          </Center >
          </Form>
        )}
    </Formik >
    </>
  );
}
