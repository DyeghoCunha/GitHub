import 'package:cskin_sheet/Components/despesa_card_widget.dart';
import 'package:flutter/material.dart';

class CriaDespesaPage extends StatelessWidget {
  const CriaDespesaPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(child:  DespesaCardWidget(onSavedUser: (despesa){},)) ,
    );






  }
}
