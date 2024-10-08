export interface IItemType {

  id: string;
  name: string;
  name_original: string;
  description: string;
  weapon: string;
  pattern: string;
  min_float: number;
  max_float: number;
  rarity: string;
  stattrak: boolean;
  image: string;
  constructor(id: string, name: string, name_original: string, description: string, weapon: string, pattern: string, min_float: number, max_float: number, rarity: string,
    stattrak: boolean, image: string,)
}

export interface IItemWithColor {
  id: string;
  name: string;
  image: string;
  color: Array<string>;
  colorHsl: Color[]
}


export interface Color {
  h: number;
  s: number;
  l: number;
};

export interface Pixel  {
  r: number;
  g: number;
  b: number;
};

export type IItemCard = {
  skins: IItemType

}

export type ColorName = "Vermelho" | "Azul" | "Amarelo" | "Rosa" | "Preto" | "Branco" | "Verde" | "Marrom" | "Roxo" | "Cinza" |"Laranja"| "Cor não identificada";

export class ColorList {
  colorList: string[];

  constructor(colorList: string[]) {
    this.colorList = colorList;
  }
}