import 'package:cskin_sheet/Model/despesa.dart';
import 'package:cskin_sheet/Page/cria_despesa_page/components/despesa_card_widget/despesa_card_widget_fundo.dart';
import 'package:flutter/material.dart';

import '../../../../api/despesas_sheets_api.dart';

class DespesaConfirmacaoModalWidget extends StatelessWidget {
  DespesaConfirmacaoModalWidget({
    super.key,
    required this.despesa,
    required this.isValid,
  });

  bool isValid;
  Despesa despesa;

  //Despesa despesa;

  @override
  Widget build(BuildContext context) {

    Future enviaDespesa(despesa) async {
      print("Funcionou");
      final id = await DespesasSheetsApi.getRowCount() + 1;
      final newDespesa = despesa.copy(id: id);
      await DespesasSheetsApi.insert(
        newDespesa.toJson(),
      );
    }

      Widget text(String string) => Text(
          string,
          textAlign: TextAlign.start,
        );

    Widget textSpan(String title, String subtitle) => Text.rich(
          TextSpan(
            text: title,
            style: TextStyle(
                fontSize: 12, color: Theme.of(context).textTheme.bodySmall!.color!.withOpacity(0.5)),
            children: [
              TextSpan(
                text: subtitle,
                style: TextStyle(fontSize: 16, color: Theme.of(context).textTheme.bodySmall!.color!),
              ),
            ],
          ),
        );

    return isValid ?
      Container(
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        textSpan("Sócio: ", despesa.socio??""),
                        textSpan("Data: ", despesa.data??""),
                        textSpan("Valor: ", despesa.valor??""),
                        textSpan("Operação: ", despesa.operacao??""),
                        textSpan("Categoria: ", despesa.categoria??""),
                      ],
                    ),
                  ),
                  DespesaCardWidgetFundo(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          ElevatedButton(
                            onPressed: () {
                              enviaDespesa(despesa);
                            },
                            style: const ButtonStyle(
                              surfaceTintColor: MaterialStatePropertyAll<Color>(Colors.green),
                              side: MaterialStatePropertyAll<BorderSide>(BorderSide(color: Colors.green,
                                  width: 1))
                            ),
                            child: const Icon(
                              Icons.send,
                              color: Colors.green,
                            ),
                          ),
                          TextButton(
                              style: ButtonStyle(
                                side: MaterialStatePropertyAll<BorderSide>(
                                  BorderSide(
                                      style: BorderStyle.solid,
                                      width: 0.8,
                                      color: Theme.of(context).colorScheme.primary.withOpacity(0.4)),
                                ),
                              ),
                              onPressed: () {
                                print("Editar");
                                Navigator.pop(context);
                              },
                              child: Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 12.0),
                                child: Icon(
                                  Icons.edit,
                                  color: Theme.of(context).colorScheme.primary.withOpacity(0.5),
                                ),
                              )),
                        ],
                      ),
                    ),
                  )
                ],
              ),
            ),
            const Divider(),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: textSpan(
                  "Descrição: ", despesa.descricao??""),
            ),
            const Divider(),
            Container(
                width: double.infinity,
                child: ElevatedButton.icon(
                  style: ButtonStyle(
                      surfaceTintColor: MaterialStatePropertyAll<MaterialColor>(Colors.red),
                      side: MaterialStatePropertyAll<BorderSide>(BorderSide(
                        color: Colors.redAccent.withOpacity(0.5),
                        width: 1,
                      ))),
                  onPressed: () {
                    print("deletar");
                    print(despesa.toJson());
                   // Navigator.pop(context);
                  },
                  label: const Text(
                    "Excluir",
                    style: TextStyle(color: Colors.redAccent),
                  ),
                  icon: const Icon(
                    Icons.delete,
                    color: Colors.redAccent,
                  ),
                ))
          ],
        ),
      ),
    ):Container(child: Text("Dados Invalidos"),);
  }
}
