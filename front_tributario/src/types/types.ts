{/*
//Interfaces _________________
interface Iimposto{
  fatMes:number;
}
interface ItributosFederais{
alqIr:number;
alqCsll:number;
alqCpp:number;
alqPis:number;
alqCofins:number;
alqIpi:number;
}
interface ItributosEstaduais{
alqIcms:number;  
}
interface ItributosMunicipais{
 alqIss:number; 
}

interface IsimplesNacional extends ItributosFederais,ItributosEstaduais,ItributosMunicipais{
  fatMes:number;
  rbt12:number;
  anexo: AnexoSN;
  alqEfetiva:number;
  alqReal:number;
  das:number;
}
//Enum______________________________________________________________

enum AnexoSN{
  AnexoI="Anexo I",
  AnexoII="Anexo II",
  AnexoIII="Anexo III",
  AnexoIV= "Anexo IV",
  AnexoV= "Anexo V",
}
//Classes_______________________________________________________________

export class EmpresaSimplesNacional implements IsimplesNacional{
  fatMes: number;
  rbt12: number;
  anexo: AnexoSN;
  alqEfetiva: number;
  alqReal: number;
  das: number;
  alqIr: number;
  alqCsll: number;
  alqCpp: number;
  alqPis: number;
  alqCofins: number;
  alqIpi: number;
  alqIcms: number;
  alqIss: number;

  constructor(fatMes: number, rbt12: number, anexo: AnexoSN, alqEfetiva: number, alqReal: number, das: number, alqIr: number, alqCsll: number, alqCpp: number, alqPis: number, alqCofins: number, alqIpi: number, alqIcms: number, alqIss: number) {
    this.fatMes = fatMes;
    this.rbt12 = rbt12;
    this.anexo = anexo;
    this.alqEfetiva = alqEfetiva;
    this.alqReal = alqReal;
    this.das = das;
    this.alqIr = alqIr;
    this.alqCsll = alqCsll;
    this.alqCpp = alqCpp;
    this.alqPis = alqPis;
    this.alqCofins = alqCofins;
    this.alqIpi = alqIpi;
    this.alqIcms = alqIcms;
    this.alqIss = alqIss;
  }
}
* */}

enum AnexoSimplesNacional{
  "Anexo I" = 1,
  "Anexo II" = 2,
  "Anexo III" = 3,
  "Anexo IV" = 4,
  "Anexo V" = 5,
  "Serviços de transporte e comunicação" = 6,
  "Serviços de locação de bens móveis" = 7
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
  taxesReplaced: FormDataEntryValue |null;
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
