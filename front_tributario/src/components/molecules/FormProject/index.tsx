"use client"
import ImagePicker from '../ImagePicker';
import { Button, FormControl, FormLabel, Input, FormHelperText, Textarea, Card, Stack, Box, Center, Heading, VStack, HStack, Image } from '@chakra-ui/react';
import { LuAlarmClock, LuCheckCircle2 } from "react-icons/lu";
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { saveProjectForm } from '@/lib/actions';


export default function FormProject() {

const [state, formAction] = useFormState(saveProjectForm,{message:null})

const {pending} = useFormStatus();

  function CardForm({ children }:any) {
    return (
      <Card m="10px" bg="gray.600" p="10px" >{children}</Card>
    )
  }

  return (
    <Center mb="20px">
      <HStack alignItems="start">
      <HStack alignItems="end">
        <VStack>
          <Heading my="10px">Formulário de Cadastro de Projeto</Heading>
          <Card w={{ base: "800px", sm: "300px", md: "800px" }} bg="gray.500">
            <form action={formAction}>
              <CardForm>
                <FormControl >
                  <FormLabel bgGradient="linear(to-r, orange, red)" bgClip="text" >Nome do Projeto</FormLabel>
                  <Input variant="outline" type='text' id="projectName" name="projectName" isRequired />
                  <FormHelperText color="gray">Escolha um nome Comercial bacana.</FormHelperText>
                </FormControl>
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
                   
                    <FormHelperText color="gray">Imagem do Figma ou do Conceito do Projeto</FormHelperText>
                  </FormControl>
                </CardForm>
              </Stack>
            </form >

          </Card >
        </VStack>

        <Card bg="gray.500" borderRadius="20px">
          <Card m="10px" bg="gray.600" p="10px" borderRadius="full">

            <Button disabled={pending}  borderRadius="full" variant="primary" w="150px" h="150px">
              {pending ? <LuAlarmClock size="350px" opacity="0.5"/> : <LuCheckCircle2 size="350px" opacity="0.5" /> }
            </Button>

          </Card>
        </Card>
      </HStack>
      </HStack>
    </Center >
  );
}
