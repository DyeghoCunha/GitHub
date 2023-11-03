import 'package:cskin_sheet/Page/cria_despesa_page/components/despesa_card_widget/despesa_card_widget.dart';
import 'package:cskin_sheet/Page/cria_despesa_page/components/despesa_confirmacao_modal_widget/despesa_confirmacao_modal_widget.dart';
import 'package:flutter/material.dart';

class CriaDespesaPage extends StatelessWidget {
  const CriaDespesaPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Incluir Despesa"),
      ),
      body: Column(
        children: [
          Card(child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 8.0),
            child: DespesaCardWidget(onSavedUser: (despesa){},),
          )),

         Card(child: DespesaConfirmacaoModalWidget()),
        ],
      ) ,
    );






  }
}
