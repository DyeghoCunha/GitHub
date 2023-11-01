import 'package:cskin_sheet/themes/theme.dart';
import 'package:flutter/material.dart';
import '../Model/despesa.dart';
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
  late TextEditingController controllerSocio;
  late TextEditingController controllerData;
  late TextEditingController controllerValor;
  late TextEditingController controllerDescricao;
  late TextEditingController controllerCategoria;
  late TextEditingController controllerOperacao;

  @override
  void initState() {
    super.initState();
    initDespesa();
  }

  @override
  void didUpdateWidget(covariant DespesaCardWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    initDespesa();
  }

  void initDespesa() {
    final socio = widget.despesa == null ? "" : widget.despesa!.socio;
    final data = widget.despesa == null ? "" : widget.despesa!.data;
    final valor = widget.despesa == null ? "" : widget.despesa!.valor;
    final descricao = widget.despesa == null ? "" : widget.despesa!.descricao;
    final categoria = widget.despesa == null ? "" : widget.despesa!.categoria;
    final operacao = widget.despesa == null ? "" : widget.despesa!.operacao;

    setState(() {
      controllerSocio = TextEditingController(text: socio);
      controllerData = TextEditingController(text: data);
      controllerValor = TextEditingController(text: valor);
      controllerDescricao = TextEditingController(text: descricao);
      controllerCategoria = TextEditingController(text: categoria);
      controllerOperacao = TextEditingController(text: operacao);
    });
  }

  @override
  Widget build(BuildContext context) {



    Widget buildSocio() => Container(
      width: 160,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        color: Theme.of(context).colorScheme.primary.withOpacity(0.1),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 10.0),
            child: Text(controllerSocio.text.length>2?controllerSocio.text:"Sócio",style: TextStyle(fontSize: 25),
                textAlign: TextAlign.center,),
          ),
          Card(
            elevation: 5,
            child: PopupMenuButton<String>(
                  icon: Icon(Icons.pages,color: Theme.of(context).colorScheme.primary,),
                  elevation: 10,
                  onSelected: (menu) {
                    setState(() {
                      controllerSocio.text=menu;

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
    );

    Widget buildData() {
      return Container(
        width: 160,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Theme.of(context).colorScheme.primary.withOpacity(0.1),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10),
                child: Text(controllerData.text),
              ),
              InkWell(
                borderRadius: BorderRadius.circular(10),
                child: Ink(
                  decoration: BoxDecoration(
                    boxShadow: kElevationToShadow[3],
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Icon(
                      Icons.calendar_month,
                      size: 30,
                      color: Theme.of(context).colorScheme.primary,
                    ),
                  ),
                ),
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
              ),
            ],
          ),
        ),
      );
    }

    Widget buildValor() => TextFormField(
          controller: controllerValor,
          decoration: const InputDecoration(
            labelText: "Valor",
            border: OutlineInputBorder(),
          ),
          validator: (value) => value != null && value.isEmpty ? "Digite o Valor" : null,
        );
    Widget buildDescricao() => TextFormField(
          controller: controllerDescricao,
          decoration: const InputDecoration(
            labelText: "Descrição",
            border: OutlineInputBorder(),
          ),
          validator: (value) => value != null && value.isEmpty ? "Digite uma Descrição" : null,
        );
    Widget buildCategoria() => TextFormField(
          controller: controllerCategoria,
          decoration: const InputDecoration(
            labelText: "Categoria",
            border: OutlineInputBorder(),
          ),
          validator: (value) => value != null && value.isEmpty ? "Digite uma Categoria" : null,
        );
    Widget buildOperacao() => TextFormField(
          controller: controllerOperacao,
          decoration: const InputDecoration(
            labelText: "Operação",
            border: OutlineInputBorder(),
          ),
          validator: (value) => value != null && value.isEmpty ? "Digite uma Operação" : null,
        );
    Widget buildSubmit() => ElevatedButton(
          onPressed: () {
            final form = formKey.currentState!;
            final isValid = form.validate();
            if (isValid) {
              final id = widget.despesa == null ? null : widget.despesa!.id;
              final despesa = Despesa(
                id: id,
                socio: controllerSocio.text,
                data: controllerData.text,
                valor: controllerValor.text,
                descricao: controllerDescricao.text,
                categoria: controllerCategoria.text,
                operacao: controllerOperacao.text,
              );
              widget.onSavedUser(despesa);
            }
          },
          child: const Text("Save"),
        );

    return Form(
      key: formKey,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              buildSocio(),

              buildData(),
            ],
          ),



          const SizedBox(
            height: 16,
          ),
          buildValor(),
          const SizedBox(
            height: 16,
          ),
          buildDescricao(),
          const SizedBox(
            height: 16,
          ),
          buildCategoria(),
          const SizedBox(
            height: 16,
          ),
          buildOperacao(),
          const SizedBox(
            height: 16,
          ),
          buildSubmit(),
        ],
      ),
    );
  }
}
