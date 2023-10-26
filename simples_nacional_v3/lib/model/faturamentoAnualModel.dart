class FaturamentoAnual {
  final Map<int, Map<String, double>> anos;

  FaturamentoAnual({required this.anos});

  void adicionarFaturamento(int ano, String mes, double faturamento) {
    if (anos.containsKey(ano)) {
      final anoData = anos[ano]!;
      if (anoData.containsKey(mes)) {
        anoData[mes] = faturamento;
      } else {
        anoData[mes] = faturamento;
      }
    } else {
      anos[ano] = {mes: faturamento};
    }
  }
}