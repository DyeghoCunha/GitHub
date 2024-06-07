

export enum AnexoSimplesNacional {
  AnexoI = "Anexo I",
  AnexoII = "Anexo II",
  AnexoIII = "Anexo III",
  AnexoIV = "Anexo IV",
  AnexoV = "Anexo V",
  //ServicosTransporteComunicacao = "Serviços de transporte e comunicação",
  //ServicosLocacaoBensMoveis = "Serviços de locação de bens móveis"
}



export type TaxType = "ICMS" | "PIS COFINS" | "ISS";

export interface ISimplesNacional {
  annexOption: AnexoSimplesNacional;
  rbt12: number;
  salesValue: number; //receita no mercado interno
  salesValueToExterior: number;
  valueIcmsReplacement: number;
  valuePisCofinsReplacement: number;
  valueIssReplacement: number;
  taxesReplaced: TaxType[];
}
export interface ISimplesNacionalForm {

  annexOption:FormDataEntryValue |null;
  rbt12: FormDataEntryValue |null;
  salesValue: FormDataEntryValue |null; //receita no mercado interno
  salesValueToExterior: FormDataEntryValue |null;
  valueIcmsReplacement: FormDataEntryValue |null;
  valuePisCofinsReplacement: FormDataEntryValue |null;
  valueIssReplacement: FormDataEntryValue |null;
  taxesReplaced: FormDataEntryValue[] |null;
}

export class SimplesNacional implements ISimplesNacional {
  annexOption!: AnexoSimplesNacional;
  rbt12!: number;
  salesValue!: number;
  salesValueToExterior!: number;
  taxesReplaced!: TaxType[];
  valueIcmsReplacement!: number;
  valueIssReplacement!: number;
  valuePisCofinsReplacement!: number;

  private constructor(init: Partial<SimplesNacional>) {
    Object.assign(this, init);
  }

  static fromValues(annexOption: AnexoSimplesNacional, rbt12: number, salesValue: number, salesValueToExterior: number, taxesReplaced: TaxType[], valueIcmsReplacement: number, valueIssReplacement: number, valuePisCofinsReplacement: number): SimplesNacional {
    return new SimplesNacional({annexOption, rbt12, salesValue, salesValueToExterior, taxesReplaced, valueIcmsReplacement, valueIssReplacement, valuePisCofinsReplacement});
  }

  // Adicione mais métodos estáticos conforme necessário
}

export interface IFormImput {
    id: string,
    label: string,
    placeHolder: string,
    helperText: string,
    validate: (value: string) => boolean, // Adicione esta linha
    errorText: string,
    state: string | number | TaxType[] | undefined,
    setState: React.Dispatch<React.SetStateAction<string | number | TaxType[]>>,
    isValid: boolean,
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
  }

export interface INcm {
  codigo: string;
  descricao: string;
  data_inicio: string;
  data_fim: string;
  tipo_ato: string;
  numero_ato: string;
  ano: string;
}


  export interface IEmpresa {
  cnpj: string;
  identificador_matriz_filial: number;
  descricao_matriz_filial: string;
  razao_social: string;
  nome_fantasia: string;
  situacao_cadastral: number;
  descricao_situacao_cadastral: string;
  data_situacao_cadastral: string;
  motivo_situacao_cadastral: number;
  nome_cidade_exterior: string | null;
  codigo_natureza_juridica: number;
  data_inicio_atividade: string;
  cnae_fiscal: number;
  cnae_fiscal_descricao: string;
  descricao_tipo_de_logradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: number;
  uf: string;
  codigo_municipio: number;
  municipio: string;
  ddd_telefone_1: string;
  ddd_telefone_2: string | null;
  ddd_fax: string | null;
  qualificacao_do_responsavel: number;
  capital_social: number;
  porte: number;
  descricao_porte: string;
  opcao_pelo_simples: boolean;
  data_opcao_pelo_simples: string | null;
  data_exclusao_do_simples: string | null;
  opcao_pelo_mei: boolean;
  situacao_especial: string | null;
  data_situacao_especial: string | null;
  cnaes_secundarios: any[];
  qsa: any[];
}