

//CNPJ
export function contemCaractereInvalido(str: string): boolean {
    const regex = /[^0-9\.\-\/]/;
    return regex.test(str);
}

export function limparNumero(numero: string): string {
    return numero.replace(/\D/g, "");
}
export function formatarNumero(numero: string): string {
    const partes = [
        numero.slice(0, 2),
        numero.slice(2, 5),
        numero.slice(5, 8),
        numero.slice(8, 12),
        numero.slice(12, 14)
    ];
    return `${partes[0]}.${partes[1]}.${partes[2]}/${partes[3]}-${partes[4]}`;
}