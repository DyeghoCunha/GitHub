import 'package:flutter/material.dart';

class PaginaPrincipalPage extends StatelessWidget {
  const PaginaPrincipalPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Card(
        child: Container(
          width: 300,
          height: 200,
          decoration:  BoxDecoration(
            borderRadius: BorderRadius.circular(6),
              image: const DecorationImage(
            image: AssetImage("assets/images/cardPadrao.png"),
            fit: BoxFit.cover,
          )),
        ),
      ),
    );
  }
}
