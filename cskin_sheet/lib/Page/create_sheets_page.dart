import 'package:cskin_sheet/Components/despesa_form_widget.dart';
import 'package:cskin_sheet/Page/cria_despesa_page/cria_despesa_page.dart';
import 'package:cskin_sheet/Page/despesas_page.dart';
import 'package:cskin_sheet/projects/projects_page.dart';
import 'package:flutter/material.dart';
import '../api/despesas_sheets_api.dart';

class CreatesheetsPage extends StatelessWidget {
  const CreatesheetsPage({super.key});

  @override
  Widget build(BuildContext context) {


    Widget _bottomSheet = Row(
      children: [
        ElevatedButton(
          child: Text("Despesas"),
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => DespesasPage()));
          },
        ),
        ElevatedButton(
          child: Text("Teste"),
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => CriaDespesaPage()));
          },
        ),
        ElevatedButton(
          child: Text("CURL"),
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => RiveoProjectsPage()));
          },
        ),
      ],
    );

    return Scaffold(
      appBar: AppBar(
        title: const Text("Titulo"),
        centerTitle: true,
      ),
      bottomSheet: _bottomSheet,
      body: Container(
        alignment: Alignment.center,
        padding: const EdgeInsets.all(32),
        child: SingleChildScrollView(
          child: DespesaFormWidget(
            onSavedUser: (despesa) async {
              print("Funcionou");
              final id = await DespesasSheetsApi.getRowCount() + 1;
              final newDespesa = despesa.copy(id: id);
              await DespesasSheetsApi.insert(
                newDespesa.toJson(),
              );
            },
          ),
        ),
      ),
    );
  }
}
