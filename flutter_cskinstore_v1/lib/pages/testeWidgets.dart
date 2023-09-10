import 'package:flutter/material.dart';
import 'package:flutter_cskinstore_v1/widget/filtroCorItem.dart';
import 'package:flutter_cskinstore_v1/widget/filtroDesgaste.dart';

class TesteWidgets extends StatefulWidget {
  const TesteWidgets({Key? key}) : super(key: key);

  @override
  State<TesteWidgets> createState() => _TesteWidgetsState();
}

class _TesteWidgetsState extends State<TesteWidgets> {
  bool isVermelho = false;

  final Map<String, Color> colors = {
    'Branco': Colors.white,
    'Preto': Colors.black,
    'Vermelho': Colors.red,
    'Amarelo': Colors.yellow,
    'Azul': Colors.blue,
    'Verde': Colors.green,
    'Roxo': Colors.purple,
    'Rosa': Colors.pink,
    'Laranja': Colors.orange,
    'Cinza': Colors.grey,
  };
  Map<String, bool> selectedColors = {};

  @override
  void initState() {
    super.initState();
    // Inicialize o mapa de valores booleanos com todas as cores desselecionadas
    for (var color in colors.keys) {
      selectedColors[color] = false;
    }
  }

  @override
  Widget build(BuildContext context) {
    return FiltroDesgaste();

}}
