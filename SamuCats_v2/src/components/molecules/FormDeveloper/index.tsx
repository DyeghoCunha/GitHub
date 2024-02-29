import { Box, Button, Card, Center, FormControl, FormErrorMessage, FormHelperText, Image, FormLabel, HStack, Heading, Input, Stack, Textarea, Toast, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { LuCheckCircle2 } from 'react-icons/lu';
import SamucaForm from "@/assets/image/samucaForm2.png"
import ImagePicker from '../ImagePicker';
import Developer, { IDeveloper } from '@/types/types';
import { BsLinkedin } from "react-icons/bs";
import WhatsappLogo from "@/assets/image/whatsapp.png"
import LinkedInLogo from "@/assets/image/linkedin.png"
import GitHubLogo from "@/assets/image/github.png"
import PersonLogo from "@/assets/image/person.png"

export default function FormDeveloper() {

  const [name, setName] = useState("");



  function validateName(value: string) {
    let error;
    if (!value && value.length === 0) {
      error = "Coloque o seu Nome Completo";
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }
  function validateLinkedIn(value: string) {
    let error;
    if (!value && value.length === 0) {
      error = "Coloque o seu Nome Completo";
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }
  function validateGithub(value: string) {
    let error;
    if (!value && value.length === 0) {
      error = "Coloque o seu Nome Completo";
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }
  function validateWhatsapp(value: string) {
    let error;
    if (!value && value.length === 0) {
      error = "Coloque o seu Nome Completo";
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }



  type CardFormType = {
    name: string;
    validate: Function;
    formLabel: string;
    placeHolder: string;
    isRequired: boolean;
    helperText: string;
    logo: string
  }


  const CardFormProps = [
    {
      name: "name",
      validate: validateName,
      formLabel: "Nome Completo",
      isRequired: true,
      helperText: "Digite o nome de verdade, sem frescura",
      placeHolder: "",
      logo: PersonLogo.src

    },
    {
      name: "linkedIn",
      validate: validateLinkedIn,
      formLabel: "LinkedIn",
      isRequired: true,
      helperText: "Copie e cole a url, vai ser mais fácil 😅",
      placeHolder: "https://www.linkedin.com/in/<seu_usuario>/",
      logo: LinkedInLogo.src
    },
    {
      name: "gitHub",
      validate: validateGithub,
      formLabel: "GitHub",
      isRequired: true,
      helperText: "Copia e cola a Url do GitHub também, pra não ter erro",
      placeHolder: "https://github.com/<seu_usuario>",
      logo: GitHubLogo.src
    },
    {
      name: "whatsapp",
      validate: validateWhatsapp,
      formLabel: "WhatsApp",
      isRequired: false,
      helperText: "Se não tiver afim, tranquilo, não vou levar para o coração ❤️‍🩹",
      placeHolder: "",
      logo:WhatsappLogo.src
    },
  ]

  function CardForm({ name, validate, formLabel, isRequired, helperText, placeHolder, logo }: CardFormType) {
    return (
      <HStack>
        

        <Card m="10px 5px 5px 5px" bg="gray.600" w="100%" p="10px" >

          <Field name={name} validate={validate}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name} >
                <HStack justifyContent="start" alignItems="center"> <Image src={logo} w="20px"  /> <FormLabel  bgGradient="linear(to-r, orange, red)" bgClip="text" m="0px">{formLabel}</FormLabel> </HStack>
                <Input {...field} placeholder={placeHolder}  variant="outline" type='text' id={name} name={name} isRequired={isRequired} />
                {form.errors.name ? (
                  <Box></Box>
                ) : (
                  <FormHelperText color="gray">{helperText}</FormHelperText>
                )}
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

        </Card>
      </HStack>
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

                      {CardFormProps.map((item) => <CardForm
                        key={item.name}
                        name={item.name}
                        formLabel={item.formLabel}
                        helperText={item.helperText}
                        placeHolder={item.placeHolder}
                        validate={item.validate}
                        isRequired={item.isRequired}
                        logo={item.logo}
                      />)}


                    </Card >
                  </VStack>

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
