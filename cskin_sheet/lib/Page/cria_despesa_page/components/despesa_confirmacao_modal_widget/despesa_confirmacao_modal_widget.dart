import 'package:cskin_sheet/Model/despesa.dart';
import 'package:cskin_sheet/Page/cria_despesa_page/components/despesa_card_widget/despesa_card_widget_fundo.dart';
import 'package:flutter/material.dart';

class DespesaConfirmacaoModalWidget extends StatelessWidget {
  DespesaConfirmacaoModalWidget({
    super.key,
  });

  //Despesa despesa;

  @override
  Widget build(BuildContext context) {
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

    return Container(
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
                        textSpan("Sócio: ", "Lucas"),
                        textSpan("Data: ", "31/12/2023"),
                        textSpan("Valor: ", "R\$ 140.230,50"),
                        textSpan("Operação: ", "Entrada"),
                        textSpan("Categoria: ", "Registro e Abertura"),
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
                            onPressed: () {},
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
                              onPressed: () {},
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
                  "Descrição: ",
                  "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla "
                      "blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),
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
                  onPressed: () {},
                  label: Text(
                    "Excluir",
                    style: TextStyle(color: Colors.redAccent),
                  ),
                  icon: Icon(
                    Icons.delete,
                    color: Colors.redAccent,
                  ),
                ))
          ],
        ),
      ),
    );
  }
}
