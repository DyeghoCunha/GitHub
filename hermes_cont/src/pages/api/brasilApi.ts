import { Empresa } from "@/types/types";

interface ICnpj{
  cnpj:string;
}

export async function buscarEmpresa({cnpj}:ICnpj): Promise<Empresa> {
  const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar dados da empresa");
  }
  const data: Empresa = await response.json();
  return data;
}