import { Language, stylingFramework } from "@/types/types";


export type BaseFormType = {
  name: string;
  validate: Function;
  formLabel: string;
  placeHolder: string;
  isRequired: boolean;
  helperText: string;
  text?:string;
}

export type SelectFormStackType = BaseFormType & {
  propStack: any;
}

export type SelectFormPrimaryLangType = BaseFormType & {
  propStack: any;
}

export type CheckFormLangType = BaseFormType & {
  propStack: typeof Language;
}

export type CheckStylingFWType = BaseFormType & {
  propStack: typeof stylingFramework

  ;
}

export type CheckframeworkType = BaseFormType & {
  propStack: any;
}

export type CardFormType = BaseFormType & {
  logo: string;
}
