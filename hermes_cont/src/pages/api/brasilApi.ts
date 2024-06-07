import { IEmpresa, INcm } from "@/types/types";

export interface IBrApiSearch {
  prop: string;
}


export async function buscarNcm({ prop }: any): Promise<INcm> {
  const response = await fetch(`https://brasilapi.com.br/api/ncm/v1?search=${prop}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar dados da empresa");
  }
  const data: INcm = await response.json();
  //console.log(data)
  return data;
}
export async function buscarEmpresa({ prop }: IBrApiSearch): Promise<IEmpresa> {
  const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${prop}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar dados da empresa");
  }
  const data: IEmpresa = await response.json();
  return data;
}