import 'package:cskin_sheet/Despesa_curl/despesa_curl_page.dart';
import 'package:cskin_sheet/Page/cria_despesa_page/cria_despesa_page.dart';
import 'package:flutter/material.dart';

class CreatesheetsPage extends StatelessWidget {
  const CreatesheetsPage({super.key});

  @override
  Widget build(BuildContext context) {


    Widget _bottomSheet = Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        ElevatedButton(
          child: Text("Teste"),
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => Container(color: Colors.blue,child:
            Center(child: Text("Pagina Teste")),)));
          },
        ),
        ElevatedButton(
          child: Text("Incluir"),
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => CriaDespesaPage()));
          },
        ),
        ElevatedButton(
          child: Text("Despesas"),
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(builder: (_) => DespesaCurlPage()));
          },
        ),
      ],
    );

    return Scaffold(
      appBar: AppBar(
        title: const Text("Pagina Principal"),
        centerTitle: true,
      ),
      bottomSheet: _bottomSheet,
      body: Container(color: Colors.teal,),
    );
  }
}
