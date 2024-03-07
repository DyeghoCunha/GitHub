import { DeveloperStack, Framework, Language, StylingFramework } from "@/types/types"
import { validateGithub, validateLinkedIn, validateName, validateStackSelect, validateTest, validateWhatsapp } from "./validation"
import WhatsappLogo from "@/assets/image/whatsapp.png"
import LinkedInLogo from "@/assets/image/linkedin.png"
import GitHubLogo from "@/assets/image/github.png"
import PersonLogo from "@/assets/image/person.png"

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
    name: "stylingFrameWork",
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
    name: "frameWork",
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
    logo: PersonLogo.src

  },
  {
    name: "linkedin",
    validate: validateLinkedIn,
    formLabel: "LinkedIn",
    isRequired: true,
    helperText: "Copie e cole a url, vai ser mais fácil 😅",
    placeHolder: "https://www.linkedin.com/in/<seu_usuario>/",
    logo: LinkedInLogo.src
  },
  {
    name: "github",
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
    logo: WhatsappLogo.src
  },
]
