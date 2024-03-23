"use client"
import { Box, Button, Card, Center, FormControl, FormErrorMessage, FormHelperText, Image, FormLabel, HStack, Heading, Input, Stack, Textarea, Toast, VStack, Select, Text, useStyleConfig, Grid, GridItem, CheckboxGroup, Checkbox, Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, PopoverAnchor, CardHeader, Avatar, AvatarBadge, CardBody, SimpleGrid, Flex, CardFooter, Link, Spacer } from '@chakra-ui/react';
import { Field, FieldArray, Form, Formik } from 'formik';
import { useState } from 'react';
import { LuCheckCircle2 } from 'react-icons/lu';
import SamucaForm from "@/assets/image/samucaForm2.png"
import ImagePicker from '../ImagePicker';
import { BsLinkedin } from "react-icons/bs";
import WhatsappLogo from "@/assets/image/whatsapp.png"
import LinkedInLogo from "@/assets/image/linkedin.png"
import GitHubLogo from "@/assets/image/github.png"
import PersonLogo from "@/assets/image/person.png"
import Developer, { DeveloperStack, Framework, Language, StylingFramework } from '@/types/types';
import { StepperForm } from '@/components/atoms/Stepper_form';
import { CardFormProps, CheckFormLangProps, CheckFrameWorkProps, CheckStylingFWProps, SelectFormPrimaryLangProps, SeleftFormStackProps } from './formprops';
import InputForm from './InputForm';
import { SelectForm } from './SelectForm';
import { CheckForm } from './CheckForm';

export default function FormDeveloper() {


  const [devState, setDevState] = useState<Developer>();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  }

  function CardInputs() {
    return (
      <Box w="450px" h="600px" border="1px solid orange" borderRadius="10px" m={2} p={2} >
        <VStack justifyContent="start" alignItems="start">
          {CardFormProps.map((item) => <InputForm
            key={item.name}
            name={item.name}
            formLabel={item.formLabel}
            helperText={item.helperText}
            placeHolder={item.placeHolder}
            validate={item.validate}
            isRequired={item.isRequired}
            logo={item.logo}
          />)}


          <Button onClick={handleNext} my={2} w="100%" variant="primary">Próximo</Button>
        </VStack>
      </Box>
    )
  }

  function CardSkills() {
    return (
      <Box border="1px solid orange" borderRadius="10px" m={2} p={2} w="450px" h="600px">
        <VStack >
          <VStack>

            <SelectForm
              key={SeleftFormStackProps[0].name}
              formLabel={SeleftFormStackProps[0].formLabel}
              helperText={SeleftFormStackProps[0].helperText}
              isRequired={SeleftFormStackProps[0].isRequired}
              placeHolder={SeleftFormStackProps[0].placeHolder}
              name={SeleftFormStackProps[0].name}
              propStack={SeleftFormStackProps[0].propStack}
              validate={SeleftFormStackProps[0].validate}
            />

            <SelectForm
              key={SelectFormPrimaryLangProps[0].name}
              formLabel={SelectFormPrimaryLangProps[0].formLabel}
              helperText={SelectFormPrimaryLangProps[0].helperText}
              isRequired={SelectFormPrimaryLangProps[0].isRequired}
              name={SelectFormPrimaryLangProps[0].name}
              placeHolder={SelectFormPrimaryLangProps[0].placeHolder}
              propStack={SelectFormPrimaryLangProps[0].propStack}
              validate={SelectFormPrimaryLangProps[0].validate}
            />
            <CheckForm
              key={CheckFormLangProps[0].name}
              formLabel={CheckFormLangProps[0].formLabel}
              helperText={CheckFormLangProps[0].helperText}
              isRequired={CheckFormLangProps[0].isRequired}
              name={CheckFormLangProps[0].name}
              placeHolder={CheckFormLangProps[0].placeHolder}
              propStack={CheckFormLangProps[0].propStack}
              validate={CheckFormLangProps[0].validate} />
            <CheckForm
              key={CheckFrameWorkProps[0].name}
              formLabel={CheckFrameWorkProps[0].formLabel}
              helperText={CheckFrameWorkProps[0].helperText}
              isRequired={CheckFrameWorkProps[0].isRequired}
              name={CheckFrameWorkProps[0].name}
              placeHolder={CheckFrameWorkProps[0].placeHolder}
              propStack={CheckFrameWorkProps[0].propStack}
              validate={CheckFrameWorkProps[0].validate} />
            <CheckForm
              key={CheckStylingFWProps[0].name}
              formLabel={CheckStylingFWProps[0].formLabel}
              helperText={CheckStylingFWProps[0].helperText}
              isRequired={CheckStylingFWProps[0].isRequired}
              name={CheckStylingFWProps[0].name}
              placeHolder={CheckStylingFWProps[0].placeHolder}
              propStack={CheckStylingFWProps[0].propStack}
              validate={CheckStylingFWProps[0].validate} />
            <Spacer />
          </VStack>
          <HStack w="100%" mt={6}>
            <Button onClick={handlePrevious} my={2} w="30%" variant="secondary">Voltar</Button>
            <Button onClick={handleNext} my={2} w="70%" variant="primary">Próximo</Button>
          </HStack>
        </VStack>
      </Box>
    )
  }

  function CardFinal() {
    return (
      <Card bgColor="gray.500" w="450px" h="600px" border="1px solid orange" borderRadius="10px" m={2} px={2} >

        <CardHeader borderBottom="1px solid red" m={0} py={2} px={0}>
          <Card p={1} w="100%" bgColor="gray.700" m={0}>
            <Stack direction='row' spacing={4} justifyContent="start" alignItems="center">
              <Avatar src='https://github.com/DyeghoCunha.png'>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
              </Avatar>
              <Text>Dyegho Moraes Costa Gama Cunha</Text>
              {/* You can also change the borderColor and bg of the badge */}
            </Stack>
          </Card>
        </CardHeader>
        <CardBody m={0} px={0} py={2}>

          <VStack justifyContent="start" alignItems="start" w="100%">

            <Card bgColor="gray.700" p={2} w="100%">
              <HStack>
                <Text bgGradient="linear(to-r, orange, red)" bgClip="text">Stack: </Text><Text textAlign="end">FrontEnd</Text>
              </HStack>
              <HStack>
                <Text bgGradient="linear(to-r, orange, red)" bgClip="text">Linguagem Principal: </Text><Text textAlign="end">TypeScript</Text>
              </HStack>
            </Card>

            <Card bgColor="gray.700" w="100%" p={2}>
              <VStack w="100%" gap={0}>
                <Text w="100%" bgGradient="linear(to-r, orange, red)" bgClip="text" textAlign="start" >Linguages de Estudo: </Text>
                <Text w="100%" textAlign="start">Dart, Javascript, Go</Text>
              </VStack>

              <VStack w="100%" gap={0}>
                <Text w="100%" bgGradient="linear(to-r, orange, red)" bgClip="text" >FrameWorks: </Text>
                <Text w="100%" textAlign="start">Next, React, Flutter</Text>
              </VStack>
              <VStack w="100%" gap={0}>
                <Text w="100%" bgGradient="linear(to-r, orange, red)" bgClip="text" >Styles FrameWork: </Text>
                <Text w="100%" textAlign="start">Sass, Chakra Ui</Text>
              </VStack>

            </Card>
          </VStack>
        </CardBody>
        <CardFooter w="100%" justifyContent="center" alignItems="center" m={0} p={0}>
          <VStack w="100%">
            <Card bgColor="gray.700" p={2} w="100%">
              <VStack >
                <HStack w="100%"><Link><Image src={WhatsappLogo.src} w="40px" h="40px" m={0}></Image></Link> <Text>(47)99911-0554</Text></HStack>
                <HStack w="100%"><Link> <Image src={GitHubLogo.src} w="40px" h="40px" m={0}></Image></Link><Text>https://github.com/DyeghoCunha</Text></HStack>
                <HStack w="100%"> <Link><Image src={LinkedInLogo.src} w="40px" h="40px" m={0}></Image></Link><Text>https://www.linkedin.com/in/dyegho-cunha</Text></HStack>
              </VStack>
            </Card>
            <HStack w="100%" mb={2} >
              <Button onClick={handlePrevious} my={2} w="30%" variant="secondary">Voltar</Button>
              <Button onClick={handleNext} my={2} w="70%" variant="primary">Confirmar</Button>
            </HStack>
          </VStack>
        </CardFooter>
      </Card>
    )
  }


  return (
    <Center><HStack>

      <Formik
        initialValues={{
          name: '', // valor inicial para o campo 'name'
          linkedin: '', // valor inicial para o campo 'linkedin'
          github: '', // valor inicial para o campo 'github'
          whatsapp: '', // valor inicial para o campo 'whatsapp'
          primaryStack: "", // valor inicial para o campo 'primaryStack'
          secondaryStack: typeof DeveloperStack, // valor inicial para o campo 'secondaryStack'
          primaryLanguage: typeof Language, // valor inicial para o campo 'primaryLanguage'
          programmingLanguages: [], // valor inicial para o campo 'programmingLanguages'
          stylingFrameWork: [], // valor inicial para o campo 'stylingFrameWork'
          frameWork: [], // valor inicial para o campo 'frameWork'
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // Crie uma nova instância de Developer com os valores do formulário
            const developer = new Developer({
              id: 'id', // Substitua por um ID real
              name: values.name,
              availability: true, // Substitua por um valor real
              linkedIn: values.linkedin,
              github: values.github,
              whatsapp: values.whatsapp,
              primaryStack: values.primaryStack as DeveloperStack,
              secondaryStack: values.secondaryStack[0] as DeveloperStack,
              primaryLanguage: values.primaryLanguage as Language,
              programmingLanguages: values.programmingLanguages,
              stylingFrameWork: values.stylingFrameWork,
              frameWork: values.frameWork,
            });

            setDevState(developer)

            // Agora você pode usar o objeto developer
            console.log(developer);

            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Center mb="20px">
              <HStack alignItems="start">
                <VStack>
                  <Heading my="10px">Formulário de Cadastro de Projeto</Heading>
                  <Card bg="gray.500" border="1px solid orange ">
                    <Card bgColor="gray.500" p={2}>
                      <StepperForm activeStep={activeStep} onNext={handleNext} onPrevious={handlePrevious} />
                    </Card>
                    <HStack justifyContent="center" alignItems="center">
                      {activeStep <= 0 ? <CardInputs /> : ""}
                      {activeStep === 1 ? <CardSkills /> : ""}
                      {activeStep === 2 ? <CardFinal /> : ""}
                      {activeStep >= 3 ? <Box w="450px" h="600px" border="1px solid orange" borderRadius="10px" m={2} px={2}></Box> : ""}
                    </HStack>
                  </Card>
                </VStack>
              </HStack>
              {/*<Button type="submit" colorScheme="teal" isLoading={props.isSubmitting}>
                Enviar
        </Button>*/}
            </Center >
          </Form >
        )
        }
      </Formik >
      <Image h="700px" src={SamucaForm.src} />
    </HStack>
    </Center>

  );
}



