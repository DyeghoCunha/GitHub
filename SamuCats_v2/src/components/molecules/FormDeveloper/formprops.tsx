import { DeveloperStack, Framework, Language, StylingFramework } from "@/types/types"
import { validateEmail, validateGithub, validateLinkedIn, validateName, validateStackSelect, validateTest, validateWhatsapp } from "./validation"
import WhatsappLogo from "@/assets/image/whatsapp.png"
import LinkedInLogo from "@/assets/image/linkedin.png"
import GitHubLogo from "@/assets/image/github.png"
import PersonLogo from "@/assets/image/person.png"

export const SelectFormPrimaryLangProps = [
  {
    name: "primarylanguage",
    validate: validateTest,
    formLabel: "Linguagem Principal",
    placeHolder: " ",
    isRequired: true,
    helperText: "A linguagem em que você se garante",
    propStack: Language
  }
]

export const CheckFormLangProps = [
  {
    name: "programminglanguages",
    validate: validateTest,
    formLabel: "Linguagens Estudas",
    placeHolder: "",
    isRequired: true,
    helperText: "As linguagens que estuda ou domina",
    propStack: Language
  }
]

export const CheckStylingFWProps = [
  {
    name: "stylingframework",
    validate: validateTest,
    formLabel: "FrameWorks de Estilo",
    placeHolder: "nenhum",
    isRequired: true,
    helperText: "O que você usa para pintar botão",
    propStack: StylingFramework
  }
]


export const CheckFrameWorkProps = [
  {
    name: "framework",
    validate: validateTest,
    formLabel: "FrameWorks",
    placeHolder: "nenhum",
    isRequired: true,
    helperText: "Os FrameWorks ou Bibliotecas que você usa ",
    propStack: Framework
  }
]

export const SeleftFormStackProps = [
  {
    name: "primarystack",
    validate: validateStackSelect,
    formLabel: "Seleciona sua Stack Primária",
    placeHolder: " ",
    isRequired: true,
    helperText: "A Stack em que você se garante",
    propStack: DeveloperStack
  }
]

export const CardFormProps = [
  {
    name: "name",
    validate: validateName,
    formLabel: "Nome Completo",
    isRequired: true,
    helperText: "Digite o nome de verdade, sem frescura",
    placeHolder: "",
    text:"",
    logo: PersonLogo.src

  },
  {
    name: "whatsapp",
    validate: validateWhatsapp,
    formLabel: "WhatsApp",
    isRequired: false,
    helperText: "Se não tiver afim, tranquilo, não vou levar para o coração ❤️‍🩹",
    placeHolder: "",
    logo: WhatsappLogo.src
  },
    {
    name: "email",
    validate: validateEmail,
    formLabel: "e-Mail",
    isRequired: false,
    helperText: "",
    placeHolder: "exemplo@exemplo.com",
    logo: WhatsappLogo.src
  },
    {
    name: "summary",
    validate: validateEmail,
    formLabel: "Descrição",
    isRequired: false,
    helperText: "Uma breve Descrição sobre você",
    placeHolder: "Uma descrição de uma Linha",
    logo: WhatsappLogo.src
  },
]

export const CardMediaProps=[
   {
    name: "linkedin",
    validate: validateLinkedIn,
    formLabel: "LinkedIn",
    isRequired: true,
    helperText: "",
    placeHolder: "<seu_usuario>",
    text:"https://www.linkedin.com/in/",
    logo: LinkedInLogo.src
  },
  {
    name: "github",
    validate: validateGithub,
    formLabel: "GitHub",
    isRequired: true,
    helperText: "",
    placeHolder: "<seu_usuario>",
    text:"https://github.com/",
    logo: GitHubLogo.src
  },
]
