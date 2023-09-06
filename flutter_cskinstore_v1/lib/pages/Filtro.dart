import 'package:flutter/material.dart';

class Filtro extends StatefulWidget {
  const Filtro({Key? key}) : super(key: key);

  @override
  State<Filtro> createState() => _FiltroState();
}

class _FiltroState extends State<Filtro> {
  // Função para mostrar o BottomSheet
  void _mostrarBottomSheet() {
    showModalBottomSheet(context: context, builder: (ctx) {
      return Container(
        // Conteúdo do BottomSheet
        child: Center(
          child: Text('Conteúdo do BottomSheet'),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: _mostrarBottomSheet, // Chama a função ao pressionar o botão
      child: Text('Mostrar BottomSheet'),
    );
  }
}
