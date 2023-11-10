import 'package:flutter/material.dart';
import 'package:pizzariabc/screens/home.dart';

void main() {
  runApp(const PanucciRistorante());
}

class PanucciRistorante extends StatelessWidget {
const PanucciRistorante({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: "Panucci Ristorante",
      debugShowCheckedModeBanner: false,
      theme: ThemeData(colorSchemeSeed: Colors.teal, useMaterial3: true),
      home: const Home()
    );
  }
}
