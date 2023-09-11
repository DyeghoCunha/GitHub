import 'package:flutter/material.dart';
import 'package:flutter_cskinstore_v1/widget/CardPadraoStickers.dart';

class CardPage extends StatefulWidget {
  const CardPage({super.key});

  @override
  State<CardPage> createState() => _CardPageState();
}

class _CardPageState extends State<CardPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Nome da Arma"),
      ),
      body: Container(
        color: Theme.of(context).colorScheme.background,
        child: Column(
          children: [
            Container(
              color: Colors.red,
              child: Text("Alguma coisa escrita"),
            ),
            Expanded(
              child: Container(
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Image.asset("assets/images/arma1.png", fit: BoxFit.contain),
                ),
              ),
            ),
            Expanded(
              child: Row(
                children: [
                  SizedBox(width: 5,),
                  CardPadraoStickers(stickerNumber: "3"),
                  SizedBox(width: 5,),
                  CardPadraoStickers(stickerNumber: "3"),
                  SizedBox(width: 5,),
                  CardPadraoStickers(stickerNumber: "3"),
                  SizedBox(width: 5,),
                  CardPadraoStickers(stickerNumber: "3"),
                  SizedBox(width: 5,),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
