"use client"
import { Box, Button, Card, Center, FormControl, FormErrorMessage, FormHelperText, Image, FormLabel, HStack, Heading, Input, Stack, Textarea, Toast, VStack, Select, Text, useStyleConfig, Grid, GridItem, CheckboxGroup, Checkbox, Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, PopoverAnchor, CardHeader, Avatar, AvatarBadge, CardBody, SimpleGrid, Flex, CardFooter, Link, Spacer, css } from '@chakra-ui/react';
import { Field, FieldArray, Form, Formik } from 'formik';
import { useState } from 'react';
import { LuCheckCircle2 } from 'react-icons/lu';
import SamucaForm from "@/assets/image/samucaForm2.png"
import ImagePicker from '../ImagePicker';
import { BslinkedIn } from "react-icons/bs";
import WhatsappLogo from "@/assets/image/whatsapp.png"
import linkedInLogo from "@/assets/image/linkedIn.png"
import GitHubLogo from "@/assets/image/github.png"
import PersonLogo from "@/assets/image/person.png"
import EmailLogo from "@/assets/image/email.png"
import Developer, { DeveloperStack, framework, Language, stylingFramework } from '@/types/types';
import { StepperForm } from '@/components/atoms/Stepper_form';
import { CardFormProps, CardMediaProps, CheckFormLangProps, CheckframeworkProps, CheckStylingFWProps, SelectFormPrimaryLangProps, SeleftFormStackProps } from './formprops';
import InputForm from './InputForm';
import { SelectForm } from './SelectForm';
import { CheckForm } from './CheckForm';
import InputSocialMedia from './InputSocialMedia/InputSocialMedia';
import DeveloperCard from '../DeveloperCard';


export default function FormDeveloper() {


  const [devState, setDevState] = useState<Developer>();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  }

  const ScrollbarCSS = css({
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: "linear-gradient(180deg, rgba(254, 119, 0, 0.5), rgba(255,0,0,0.0))",
      borderRadius: '0px 10px 10px 0px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: "linear-gradient(180deg, rgba(254, 119, 0, 0.1), rgba(254, 119, 0, 0.8))",
      borderRadius: '0px 10px 10px 0px',

    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'red',
    },
  });

  function CardInputs() {
    return (
      <Box w="450px" h="600px" border="1px solid orange" borderRadius="10px" m={2} p={2} >
        <VStack>
          <VStack boxShadow="inset 0px 10px 10px rgba(0,0,0,0.5), inset 0px -10px 10px rgba(0,0,0,0.5)" borderRadius="10px">
            <VStack justifyContent="start" pt="15px" pb="30px" alignItems="start" overflow="auto" h="533px" borderRadius="10px" m={0} css={ScrollbarCSS} >
              {CardFormProps.map((item) => <InputForm
                key={item.name}
                name={item.name}
                formLabel={item.formLabel}
                helperText={item.helperText}
                placeHolder={item.placeHolder}
                validate={item.validate}
                isRequired={item.isRequired}
                logo={item.logo}
                text=""
              />)}
              {CardMediaProps.map((item) => <InputSocialMedia
                key={item.name}
                name={item.name}
                formLabel={item.formLabel}
                helperText={item.helperText}
                placeHolder={item.placeHolder}
                validate={item.validate}
                isRequired={item.isRequired}
                logo={item.logo}
                text={item.text}
              />)}

              <Box m={0} position="absolute" bottom="66px" right="17px" left="17px" borderRadius="0px 0px 10px 10px" zIndex="10000" p={0} h="30px"
                bgColor="rgba(254, 119, 0, 0.1)"
                boxShadow="inset 0px 2px 10px rgba(254, 119, 0, 0.5), inset 0px -2px 2px rgba(254, 119, 0, 0.5)"
                backdropFilter="blur(5px)"
              >

              </Box>
            </VStack>

          </VStack>
          <Button onClick={handleNext} mb={2} w="100%" variant="primary">Próximo</Button>
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
              key={CheckframeworkProps[0].name}
              formLabel={CheckframeworkProps[0].formLabel}
              helperText={CheckframeworkProps[0].helperText}
              isRequired={CheckframeworkProps[0].isRequired}
              name={CheckframeworkProps[0].name}
              placeHolder={CheckframeworkProps[0].placeHolder}
              propStack={CheckframeworkProps[0].propStack}
              validate={CheckframeworkProps[0].validate} />
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

  function CardFinal({ name, primaryLanguage, programmingLanguages, stylingFramework, primaryStack, framework, whatsapp, github, linkedIn, email }: Developer) {
    return (
      <Card bgColor="gray.500" w="450px" h="600px" border="1px solid orange" borderRadius="10px" m={2} px={2} >

        <CardHeader borderBottom="1px solid red" m={0} py={2} px={0}>
          <Card p={1} w="100%" bgColor="gray.700" m={0}>
            <Stack direction='row' spacing={4} justifyContent="start" alignItems="center">
              <Avatar src={`https://github.com/${github}.png`}>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
              </Avatar>
              <Text>{name}</Text>
            </Stack>
          </Card>
        </CardHeader>
        <CardBody m={0} px={0} py={2}>
          <VStack justifyContent="start" alignItems="start" w="100%">

            <Card bgColor="gray.700" p={2} w="100%">
              <HStack>
                <Text bgGradient="linear(to-r, orange, red)" bgClip="text">Stack: </Text><Text textAlign="end">{primaryStack}</Text>
              </HStack>
              <HStack>
                <Text bgGradient="linear(to-r, orange, red)" bgClip="text">Linguagem Principal: </Text><Text textAlign="end">{primaryLanguage}</Text>
              </HStack>
            </Card>

            <Card bgColor="gray.700" w="100%" p={2}>
              <VStack w="100%" gap={0}>
                <Text w="100%" bgGradient="linear(to-r, orange, red)" bgClip="text" textAlign="start" >Linguages de Estudo: </Text>
                <Text w="100%" textAlign="start">{programmingLanguages?.join(", ")}</Text>
              </VStack>

              <VStack w="100%" gap={0}>
                <Text w="100%" bgGradient="linear(to-r, orange, red)" bgClip="text" >Frameworks: </Text>
                <Text w="100%" textAlign="start">{framework?.join(", ")}</Text>
              </VStack>
              <VStack w="100%" gap={0}>
                <Text w="100%" bgGradient="linear(to-r, orange, red)" bgClip="text" >Styles framework: </Text>
                <Text w="100%" textAlign="start">{stylingFramework?.join(", ")}</Text>
              </VStack>

            </Card>
          </VStack>
        </CardBody>
        <CardFooter w="100%" justifyContent="center" alignItems="center" m={0} p={0}>
          <VStack w="100%">
            <Card bgColor="gray.700" p={2} w="100%">
              <VStack >
                <HStack w="100%"><Link><Image src={WhatsappLogo.src} w="40px" h="40px" m={0}></Image></Link> <Text>{whatsapp}</Text></HStack>
                <HStack w="100%"><Link> <Image src={GitHubLogo.src} w="40px" h="40px" m={0}></Image></Link><Text>https://github.com/{github}</Text></HStack>
                <HStack w="100%"> <Link><Image src={linkedInLogo.src} w="40px" h="40px" m={0}></Image></Link><Text>https://www.linkedIn.com/in/{linkedIn}</Text></HStack>
                <HStack w="100%"> <Link><Image src={EmailLogo.src} w="40px" h="40px" m={0}></Image></Link><Text>{email}</Text></HStack>
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
    <Center>
      <VStack>
      <Heading bgGradient="linear(to-r, orange, red)" bgClip="text" my="10px">Formulário de Cadastro de Desenvolvedor</Heading>
    <HStack>
      <Formik
        initialValues={{
          id: '', // valor inicial para o campo 'id'
          name: '', // valor inicial para o campo 'name'
          availability: true, // valor inicial para o campo 'availability'
          linkedIn: '', // valor inicial para o campo 'linkedIn'
          github: '', // valor inicial para o campo 'github'
          whatsapp: '', // valor inicial para o campo 'whatsapp'
          primaryStack: "", // valor inicial para o campo 'primaryStack'
          secondaryStack: "", // valor inicial para o campo 'secondaryStack'
          primaryLanguage: "", // valor inicial para o campo 'primarylanguage'
          programmingLanguages: [], // valor inicial para o campo 'programmingLanguages'
          stylingFramework: [], // valor inicial para o campo 'stylingFramework'
          framework: [], // valor inicial para o campo 'framework'
          slug: '', // valor inicial para o campo 'slug'
          summary: '', // valor inicial para o campo 'summary'
          image: '', // valor inicial para o campo 'image'
          email: '', // valor inicial para o campo 'email'
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const developer = new Developer({
              id: values.id,
              name: values.name,
              availability: values.availability,
              linkedIn: values.linkedIn,
              github: values.github,
              whatsapp: values.whatsapp,
              primaryStack: values.primaryStack as DeveloperStack,
              secondaryStack: values.secondaryStack as DeveloperStack,
              primaryLanguage: values.primaryLanguage as Language,
              programmingLanguages: values.programmingLanguages,
              stylingFramework: values.stylingFramework,
              framework: values.framework,
              slug: values.slug,
              summary: values.summary,
              image: values.image,
              email: values.email,
            });

            setDevState(developer)
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
                 
                  <Card bg="gray.500" border="1px solid orange ">
                    <Card bgColor="gray.500" p={2}>
                      <StepperForm activeStep={activeStep} onNext={handleNext} onPrevious={handlePrevious} />
                    </Card>
                    <HStack justifyContent="center" alignItems="center">
                      {activeStep <= 0 ? <CardInputs /> : ""}
                      {activeStep === 1 ? <CardSkills /> : ""}
                      {activeStep === 2 ? <CardFinal
                        name={props.values.name}
                        email={props.values.email}
                        framework={props.values.framework}
                        github={props.values.github}
                        linkedIn={props.values.linkedIn}
                        primaryLanguage={props.values.primaryLanguage as Language}
                        primaryStack={props.values.primaryStack as DeveloperStack}
                        availability={false}
                        id='1'
                        image='/'
                        stylingFramework={props.values.stylingFramework}
                        programmingLanguages={props.values.programmingLanguages}
                        slug=''
                        summary=''
                        whatsapp={props.values.whatsapp}
                      /> : ""}
                      {activeStep >= 3 ? <Center w="100%" h="600px" border="1px solid orange" borderRadius="10px" m={2} px={2}>
                        <VStack  h="100%" w="100%" justifyContent="end" alignItems="center">
                          <DeveloperCard
                            slug='dyeghocunha'
                            availability={true}
                            email={props.values.email}
                            framework={props.values.framework}
                            github={props.values.github}
                            id='1'
                            image={`https://github.com/${props.values.github}.png`}
                            linkedIn={props.values.linkedIn}
                            name={props.values.name}
                            primaryLanguage={props.values.primaryLanguage as Language}
                            primaryStack={props.values.primaryStack as DeveloperStack}
                            summary={props.values.summary}
                            programmingLanguages={props.values.programmingLanguages}
                            stylingFramework={props.values.stylingFramework}
                            whatsapp={props.values.whatsapp}
                          />
                          <Box h="180px" />
                          <HStack  w="100%" mb={2} >
                            <Button onClick={handlePrevious} my={2} w="30%" variant="secondary">Voltar</Button>
                            <Button isLoading={props.isSubmitting} type='submit' my={2} w="70%" variant="primary">Enviar</Button>
                          </HStack>
                        </VStack>
                      </Center> : ""}
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
      <Image  h="700px" src={SamucaForm.src} />
    </HStack>
    </VStack>
    </Center>

  );
}



