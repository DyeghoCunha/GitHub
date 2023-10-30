import 'dart:convert';

class UserFields {
  static final String id = "id";
  static final String name = "name";
  static final String email = "email";
  static final String isBeginner = "isBeginner";

  static List<String> getFields() => [id, name, email, isBeginner];
}

class User {
  final int? id;
  final String name;
  final String email;
  final bool isBeginner;

  const User({this.id, required this.name, required this.email, required this.isBeginner});

  Map<String, dynamic> toJson() => {
        UserFields.id: id,
        UserFields.name: name,
        UserFields.email: email,
        UserFields.isBeginner: isBeginner,
      };

  User copy({
    int? id,
    String? name,
    String? email,
    bool? isBeginner,
  }) =>
      User(
        id: id ?? this.id,
        name: name ?? this.name,
        email: email ?? this.email,
        isBeginner: isBeginner ?? this.isBeginner,
      );

  static User fromJson(Map<String, dynamic> json) => User(
        id: jsonDecode(json[UserFields.id]),
        name: json[UserFields.name],
        email: json[UserFields.email],
        isBeginner: jsonDecode(json[UserFields.isBeginner]),
      );
}

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
  final double valor;
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
    double? valor,
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
