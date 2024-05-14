import { funcCalculaAliqEfetiva } from "./calculo";

export const atividadesFatorR = [
  { value: 0, label: 'Fisioterapia' },
  { value: 0, label: 'Medicina, inclusive laboratorial' },
  { value: 0, label: 'Enfermagem' },
  { value: 0, label: 'Odontologia e prótese dentária' },
  { value: 0, label: 'Psicologia, psicanálise, terapia ocupacional' },
  { value: 0, label: 'Acupuntura' },
  { value: 0, label: 'Podologia' },
  { value: 0, label: 'Fonoaudiologia' },
  { value: 0, label: 'Serviços de prótese em geral' },
  { value: 0, label: 'Clínicas de nutrição, de vacinação e bancos de leite' },
  { value: 0, label: 'Laboratórios de análises clínicas ou de patologia clínica' },
  { value: 0, label: 'Serviços de tomografia, diagnósticos médicos por imagem' },
  { value: 0, label: 'Registros gráficos e métodos óticos, bem como ressonância magnética' },
  { value: 0, label: 'Medicina veterinária' },
  { value: 0, label: 'Academias de dança, de capoeira, de ioga e de artes marciais' },
  { value: 0, label: 'Academias de atividades físicas, desportivas, de natação e escolas de esportes' },
  { value: 0, label: 'Arquitetura e urbanismo' },
  { value: 0, label: 'Administração e locação de imóveis de terceiros' },
  { value: 0, label: 'Representação comercial e demais atividades de intermediação de negócios e serviços de terceiros' },
  { value: 0, label: 'Perícia, leilão e avaliação' },
  { value: 0, label: 'Auditoria, economia, consultoria, gestão, organização, controle e administração' },
  { value: 0, label: 'Engenharia, medição, cartografia, topografia, geologia, geodésia, testes, suporte e análises técnicas e tecnológicas, pesquisa, design, desenho e agronomia' },
  { value: 0, label: 'Elaboração de programas de computadores, inclusive jogos eletrônicos, licenciamento ou cessão de direito de uso de programas de computação' },
  { value: 0, label: 'Planejamento, confecção, manutenção e atualização de páginas eletrônicas' },
  { value: 0, label: 'Empresas montadoras de estandes para feiras' },
  { value: 0, label: 'Serviços de comissária, de tradução e de interpretação' },
  { value: 0, label: 'Serviços de despachantes' },
  { value: 0, label: 'Jornalismo e publicidade' },
  { value: 0, label: 'Agenciamento' },
  { value: 1, label: 'Outros serviços decorrentes do exercício de atividade intelectual, de natureza técnica, desportiva, científica, artística ou cultural, desde que não estejam sujeitas à tributação na forma dos Anexos III ou IV da Lei Complementar 123/2006' },
  { value: 2, label: "Meu Serviço não está na Lista !" },
];

interface ICalculaFatorR {
  receita: number;
  folha: number
}
export function calculaFatorR({ receita, folha }: ICalculaFatorR): number {
  var fatorR = (folha / receita) * 100
  return fatorR
}

export function verificaAnexoFatorR(fatorR: number): string {
  return fatorR >= 28 ? "Anexo III" : "Anexo IV"
}