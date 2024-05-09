

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

export function formatarData(data: string): string {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


export function removerCaracteresEspeciais(data: string) {
    return data.replace(/[^a-zA-Z]/g, '');
}

export function substituirAcentos(data: string): string {
    const mapaAcentos: { [key: string]: string } = {
        'á': 'a', 'ã': 'a', 'à': 'a', 'â': 'a', 'é': 'e', 'ê': 'e', 'í': 'i', 'ó': 'o', 'õ': 'o', 'ô': 'o', 'ú': 'u',
        'Á': 'A', 'Ã': 'A', 'À': 'A', 'Â': 'A', 'É': 'E', 'Ê': 'E', 'Í': 'I', 'Ó': 'O', 'Õ': 'O', 'Ô': 'O', 'Ú': 'U',
        'ç': 'c', 'Ç': 'C'
    };

    return data.split('').map(letra => mapaAcentos[letra] || letra).join('');
}