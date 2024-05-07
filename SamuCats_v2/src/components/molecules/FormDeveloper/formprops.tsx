import { DeveloperStack, framework, Language, stylingFramework } from "@/types/types"
import { validateEmail, validateGithub, validatelinkedIn, validateName, validateStackSelect, validateTest, validateWhatsapp } from "./validation"
import WhatsappLogo from "@/assets/image/whatsapp.png"
import linkedInLogo from "@/assets/image/linkedIn.png"
import GitHubLogo from "@/assets/image/github.png"
import PersonLogo from "@/assets/image/person.png"
import EmailLogo from "@/assets/image/email.png"
import AboutLogo from "@/assets/image/about.png"

export const SelectFormPrimaryLangProps = [
  {
    name: "primaryLanguage",
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
    name: "programmingLanguages",
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
    name: "stylingFramework",
    validate: validateTest,
    formLabel: "frameworks de Estilo",
    placeHolder: "nenhum",
    isRequired: true,
    helperText: "O que você usa para pintar botão",
    propStack: stylingFramework
  }
]


export const CheckframeworkProps = [
  {
    name: "framework",
    validate: validateTest,
    formLabel: "frameworks",
    placeHolder: "nenhum",
    isRequired: true,
    helperText: "Os frameworks ou Bibliotecas que você usa ",
    propStack: framework
  }
]

export const SeleftFormStackProps = [
  {
    name: "primaryStack",
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
    text: "",
    logo: PersonLogo.src

  },
  {
    name: "summary",
    validate: validateEmail,
    formLabel: "Descrição",
    isRequired: false,
    helperText: "Uma breve Descrição sobre você",
    placeHolder: "Uma descrição de uma Linha",
    logo: AboutLogo.src
  },

  {
    name: "whatsapp",
    validate: validateWhatsapp,
    formLabel: "WhatsApp",
    isRequired: false,
    helperText: "Se não tiver afim, não vou levar para o coração ❤️‍🩹",
    placeHolder: "",
    logo: WhatsappLogo.src
  },
  {
    name: "email",
    validate: validateEmail,
    formLabel: "e-Mail",
    isRequired: false,
    helperText: "Eu sei que ninguém lê e-mail, mas coloca",
    placeHolder: "exemplo@exemplo.com",
    logo: EmailLogo.src
  },

]

export const CardMediaProps = [
  {
    name: "linkedIn",
    validate: validatelinkedIn,
    formLabel: "linkedIn",
    isRequired: true,
    helperText: "Coloca só o nome do Usuário",
    placeHolder: "<seu_usuario>",
    text: "https://www.linkedIn.com/in/",
    logo: linkedInLogo.src
  },
  {
    name: "github",
    validate: validateGithub,
    formLabel: "GitHub",
    isRequired: true,
    helperText: "Só o nome do Usuário",
    placeHolder: "<seu_usuario>",
    text: "https://github.com/",
    logo: GitHubLogo.src
  },
]
