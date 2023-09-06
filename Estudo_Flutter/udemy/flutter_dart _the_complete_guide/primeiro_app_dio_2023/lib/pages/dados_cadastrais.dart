import 'package:flutter/material.dart';

class DadosCadastrais extends StatelessWidget {
  const DadosCadastrais({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          shape: BeveledRectangleBorder(
            borderRadius: BorderRadius.only(
              // bottomLeft: Radius.circular(50),
              bottomRight: Radius.circular(150),
            ),
          ),
          title: Text("Dados Cadastrais")),
      body: Container(
        decoration: const BoxDecoration(
            image: DecorationImage(
          image: AssetImage("assets/images/fundo3.png"),
              fit:BoxFit.cover,
        )),
      ),
    );
  }
}
