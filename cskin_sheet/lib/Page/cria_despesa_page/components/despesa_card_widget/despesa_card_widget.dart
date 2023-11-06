import 'package:cskin_sheet/Model/categoria.dart';
import 'package:cskin_sheet/Page/cria_despesa_page/components/despesa_card_widget/despesa_card_widget_fundo.dart';
import 'package:cskin_sheet/Page/cria_despesa_page/components/despesa_confirmacao_modal_widget/despesa_confirmacao_modal_widget.dart';
import 'package:cskin_sheet/themes/theme.dart';
import 'package:flutter/material.dart';
import '../../../../Model/despesa.dart';
import 'package:intl/intl.dart';

class DespesaCardWidget extends StatefulWidget {
  DespesaCardWidget({super.key, this.despesa, required this.onSavedUser});

  final Despesa? despesa;
  final ValueChanged<Despesa> onSavedUser;

  @override
  State<DespesaCardWidget> createState() => _DespesaCardWidgetState();
}

class _DespesaCardWidgetState extends State<DespesaCardWidget> {
  final formKey = GlobalKey<FormState>();
  TextEditingController controllerSocio = TextEditingController();
  TextEditingController controllerData = TextEditingController();
  TextEditingController controllerValor = TextEditingController();
  TextEditingController controllerDescricao = TextEditingController();
  TextEditingController controllerCategoria = TextEditingController();
  TextEditingController controllerOperacao = TextEditingController();

   bool isSocio = false ;
  late bool isData;
  late bool isOperacao;
  late bool isCategoria;

  @override
  Widget build(BuildContext context) {
    Icon retornaIconOperacao(String operacao) {
      if (operacao.length < 3)
        return Icon(
          Icons.auto_graph,
          color: Theme.of(context).colorScheme.primary,
        );
      if (operacao == "Entrada") {
        return const Icon(
          Icons.arrow_upward,
          color: Colors.greenAccent,
        );
      } else if (operacao == "Saída") {
        return const Icon(
          Icons.arrow_downward_rounded,
          color: Colors.redAccent,
        );
      }
      return Icon(Icons.bubble_chart, color: Theme.of(context).colorScheme.primary);
    }

    Icon retornaIconeCategoria(String categoria) {
      IconData icone;

      if (categoria.length < 2) {
        return const Icon(
          Icons.list,
          size: 30,
        );
      }
      if (categoria == "Outros") {
        return const Icon(
          Icons.linear_scale_sharp,
          size: 30,
        );
      } else if (categoria == "Produto") {
        return const Icon(
          Icons.production_quantity_limits,
          size: 30,
        );
      } else if (categoria == "Site") {
        return const Icon(
          Icons.wordpress,
          size: 30,
        );
      } else if (categoria == "Folha") {
        return const Icon(
          Icons.person,
          size: 30,
        );
      } else if (categoria == "Influencer") {
        return const Icon(
          Icons.account_circle,
          size: 30,
        );
      } else if (categoria == "Registro e Abertura") {
        return const Icon(
          Icons.branding_watermark,
          size: 30,
        );
      } else if (categoria == "Marketing") {
        return const Icon(
          Icons.chat_rounded,
          size: 30,
        );
      } else if (categoria == "Designer") {
        return const Icon(
          Icons.draw,
          size: 30,
        );
      } else if (categoria == "Imobilizado") {
        return const Icon(
          Icons.house,
          size: 30,
        );
      } else {
        return const Icon(
          Icons.interests,
          size: 30,
        );
      }
    }

    Widget buildSocio() => DespesaCardWidgetFundo(
          child: Padding(
            padding: const EdgeInsets.all(4.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Expanded(child: Container()),
                Text(
                  controllerSocio.text.length > 2 ? controllerSocio.text : "Sócio",
                  style: const TextStyle(fontSize: 25),
                  textAlign: TextAlign.center,
                ),
                Expanded(child: Container()),
                Card(
                  elevation: 5,
                  child: PopupMenuButton<String>(
                    icon: Icon(
                      Icons.pages,
                      size: 30,
                      color: isSocio==false?Colors.redAccent.withOpacity(0.2):Theme.of(context).colorScheme.primary,
                    ),
                    elevation: 10,
                    onSelected: (menu) {
                      setState(() {
                        controllerSocio.text = menu;
                      });
                      print(menu);
                    },
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    itemBuilder: (BuildContext ctx) {
                      return <PopupMenuEntry<String>>[
                        PopupMenuItem<String>(
                          value: "Iuri",
                          child: Card(
                              elevation: 5,
                              color: ThemeColors.socios["Iuri"],
                              child: const SizedBox(
                                width: double.infinity,
                                child: Padding(
                                  padding: EdgeInsets.all(4.0),
                                  child: Text(
                                    "Iuri",
                                    style: TextStyle(fontSize: 25),
                                    textAlign: TextAlign.center,
                                  ),
                                ),
                              )),
                        ),
                        const PopupMenuDivider(),
                        PopupMenuItem<String>(
                          value: "Lucas",
                          child: Card(
                              elevation: 5,
                              color: ThemeColors.socios["Lucas"],
                              child: const SizedBox(
                                width: double.infinity,
                                child: Padding(
                                  padding: EdgeInsets.all(4.0),
                                  child: Text(
                                    "Lucas",
                                    style: TextStyle(fontSize: 25),
                                    textAlign: TextAlign.center,
                                  ),
                                ),
                              )),
                        ),
                      ];
                    },
                  ),
                ),
              ],
            ),
          ),
        );

    Widget buildData() {
      return DespesaCardWidgetFundo(
        child: Padding(
          padding: const EdgeInsets.all(4.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10),
                child: Text(controllerData.text),
              ),
              Card(
                elevation: 5,
                child: InkWell(
                  onTap: () async {
                    final DateTime? date = await showDatePicker(
                      context: context,
                      initialDate: DateTime.now(),
                      firstDate: DateTime(1900),
                      lastDate: DateTime(2100),
                    );
                    if (date != null) {
                      controllerData.text = DateFormat("dd/MM/yyyy").format(date);
                      setState(() {});
                    }
                  },
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Icon(
                      Icons.calendar_month,
                      size: 30,
                      color: Theme.of(context).colorScheme.primary,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      );
    }

    Future _modalConfirmacao(Despesa despesa, bool isValid, ValueChanged<Despesa> onSavedUser) =>
        showModalBottomSheet(
            showDragHandle: true,
            context: context,
            builder: (_) => DespesaConfirmacaoModalWidget(
                  despesa: despesa,
                  isValid: isValid,
                ));

    Widget buildValor() => DespesaCardWidgetFundo(
            child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: TextFormField(
            controller: controllerValor,
            decoration: const InputDecoration(
              contentPadding: EdgeInsets.fromLTRB(10, 0, 0, 0),
              labelText: "Valor",
              border: OutlineInputBorder(),
            ),
            validator: (value) => value != null && value.isEmpty ? "Digite o Valor" : null,
          ),
        ));

    Widget buildDescricao() => DespesaCardWidgetFundo(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              controller: controllerDescricao,
              decoration: const InputDecoration(
                contentPadding: EdgeInsets.fromLTRB(10, 0, 0, 0),
                labelText: "Descrição",
                border: OutlineInputBorder(),
              ),
              validator: (value) => value != null && value.isEmpty ? "Digite uma Descrição" : null,
            ),
          ),
        );

    Widget buildOperacao() => DespesaCardWidgetFundo(
          child: Padding(
            padding: const EdgeInsets.all(4.0),
            child: Card(
              elevation: 5,
              child: PopupMenuButton<String>(
                icon: retornaIconOperacao(controllerOperacao.text),
                elevation: 10,
                onSelected: (menu) {
                  setState(() {
                    controllerOperacao.text = menu;
                  });
                  print(menu);
                },
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                itemBuilder: (BuildContext ctx) {
                  return <PopupMenuEntry<String>>[
                    const PopupMenuItem<String>(
                      value: "Entrada",
                      child: Card(
                          elevation: 5,
                          color: Colors.green,
                          child: SizedBox(
                            width: double.infinity,
                            child: Padding(
                              padding: EdgeInsets.all(4.0),
                              child: Text(
                                "Entrada",
                                style: TextStyle(fontSize: 25),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          )),
                    ),
                    const PopupMenuDivider(),
                    const PopupMenuItem<String>(
                      value: "Saída",
                      child: Card(
                          elevation: 5,
                          color: Colors.redAccent,
                          child: SizedBox(
                            width: double.infinity,
                            child: Padding(
                              padding: EdgeInsets.all(4.0),
                              child: Text(
                                "Saída",
                                style: TextStyle(fontSize: 25),
                                textAlign: TextAlign.center,
                              ),
                            ),
                          )),
                    ),
                  ];
                },
              ),
            ),
          ),
        );
    Widget buildCategoria() => DespesaCardWidgetFundo(
          child: Padding(
            padding: const EdgeInsets.all(4.0),
            child: Card(
              elevation: 5,
              child: PopupMenuButton<String>(
                icon: retornaIconeCategoria(controllerCategoria.text),
                elevation: 10,
                onSelected: (menu) {
                  setState(() {
                    controllerCategoria.text = menu;
                  });
                  print(menu);
                },
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                itemBuilder: (BuildContext ctx) {
                  return <PopupMenuEntry<String>>[
                    for (var categoria in Categoria.categoria)
                      PopupMenuItem<String>(
                        height: 2,
                        value: categoria,
                        child: Card(
                            elevation: 5,
                            color: Colors.white,
                            child: Container(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12),
                                gradient: LinearGradient(colors: [
                                  Theme.of(context).colorScheme.primary.withOpacity(0.2),
                                  Theme.of(context).colorScheme.primary.withOpacity(0.4),
                                ], begin: Alignment.topLeft, end: Alignment.bottomRight),
                              ),
                              width: double.infinity,
                              child: Padding(
                                padding: const EdgeInsets.all(4.0),
                                child: Text(
                                  categoria,
                                  style: const TextStyle(fontSize: 15),
                                  textAlign: TextAlign.center,
                                ),
                              ),
                            )),
                      ),
                  ];
                },
              ),
            ),
          ),
        );

    Widget buildSubmit() => ElevatedButton(
          onPressed: () {
            final id = widget.despesa == null ? null : widget.despesa!.id;
            final form = formKey.currentState!;
            final isValid = form.validate();
            if (isValid) {
              _modalConfirmacao(
                  Despesa(
                    id: id,
                    socio: controllerSocio.text,
                    data: controllerData.text,
                    valor: controllerValor.text,
                    descricao: controllerDescricao.text,
                    categoria: controllerCategoria.text,
                    operacao: controllerOperacao.text,
                  ),
                  isValid,
                  widget.onSavedUser);
            }
          },
          child: const Text("Save"),
        );

    return SingleChildScrollView(
      child: Form(
        key: formKey,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Expanded(flex: 8, child: buildSocio()),
                  const SizedBox(
                    width: 5,
                  ),
                  Expanded(flex: 8, child: buildData()),
                ],
              ),
            ),
            const SizedBox(
              height: 5,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Row(
                children: [
                  Expanded(flex: 8, child: buildValor()),
                  const SizedBox(
                    width: 5,
                  ),
                  Expanded(flex: 2, child: buildOperacao()),
                ],
              ),
            ),
            const SizedBox(
              height: 5,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Row(
                children: [
                  Expanded(flex: 8, child: buildDescricao()),
                  const SizedBox(
                    width: 5,
                  ),
                  Expanded(flex: 2, child: buildCategoria()),
                ],
              ),
            ),
            const SizedBox(
              height: 16,
            ),
            Row(
              children: [
                Expanded(child: Container()),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 8.0),
                  child: buildSubmit(),
                ),
              ],
            ),
            const SizedBox(
              height: 10,
            ),
          ],
        ),
      ),
    );
  }
}
