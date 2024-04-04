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



