import 'dart:convert';

class DespesaFields {
  static final String id = "id";
  static final String socio = "Sócio";
  static final String data = "Data";
  static final String valor = "Valor";
  static final String descricao = "Descrição";
  static final String categoria = "Categoria";
  static final String operacao = "Operação";

  static List<String> getFields() => [id, socio, data, valor, descricao, categoria, operacao];
}

class Despesa {
  final int? id;
  final String socio;
  final String data;
  final String valor;
  final String descricao;
  final String categoria;
  final String operacao;

  const Despesa({
    this.id,
    required this.socio,
    required this.data,
    required this.valor,
    required this.descricao,
    required this.categoria,
    required this.operacao,
  });

  Map<String, dynamic> toJson() => {
        DespesaFields.id: id,
        DespesaFields.socio: socio,
        DespesaFields.data: data,
        DespesaFields.valor: valor,
        DespesaFields.descricao: descricao,
        DespesaFields.categoria: categoria,
        DespesaFields.operacao: operacao,
      };

  Despesa copy({
    int? id,
    String? socio,
    String? data,
    String? valor,
    String? descricao,
    String? categoria,
    String? operacao,
  }) =>
      Despesa(
        id: id ?? this.id,
        socio: socio ?? this.socio,
        data: data ?? this.data,
        valor: valor ?? this.valor,
        descricao: descricao ?? this.descricao,
        categoria: categoria ?? this.categoria,
        operacao: operacao ?? this.operacao,
      );

  static Despesa fromJson(Map<String, dynamic> json) => Despesa(
        id: jsonDecode(json[DespesaFields.id]),
        socio: json[DespesaFields.socio],
        data: json[DespesaFields.data],
        valor: json[DespesaFields.valor],
        descricao: json[DespesaFields.descricao],
        categoria: json[DespesaFields.categoria],
        operacao: json[DespesaFields.operacao],
      );
}
