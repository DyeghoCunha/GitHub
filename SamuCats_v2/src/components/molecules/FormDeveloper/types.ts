import { Language, StylingFramework } from "@/types/types";


export type BaseFormType = {
  name: string;
  validate: Function;
  formLabel: string;
  placeHolder: string;
  isRequired: boolean;
  helperText: string;
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
  propStack: typeof StylingFramework
  
  ;
}

export type CheckFrameWorkType = BaseFormType & {
  propStack: any;
}

export type CardFormType = BaseFormType & {
  logo: string;
}
