export function CleanedValue(value:any){
  const cleanedValue = value.replace('R$', '').replace(' ', '').replace(',', '.');
  return cleanedValue
}