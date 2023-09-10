import 'package:flutter/material.dart';
import 'package:flutter_cskinstore_v1/widget/CardPadraoRow.dart';

class TradePage extends StatelessWidget {
  const TradePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      color: const Color.fromRGBO(36, 38, 47, 1),
      child: ListView(
        children: const [
          CardPadraoRow(),
          CardPadraoRow(),
          CardPadraoRow(),
          CardPadraoRow(),
          CardPadraoRow(),
          CardPadraoRow(),
          CardPadraoRow(),

        ],
      ),
    );
  }
}
