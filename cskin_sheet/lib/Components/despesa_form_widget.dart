import 'package:cskin_sheet/Model/despesa.dart';
import 'package:flutter/material.dart';

class DespesaFormWidget extends StatefulWidget {
  final Despesa? despesa;
  final ValueChanged<Despesa> onSavedUser;

  const DespesaFormWidget({super.key, required this.onSavedUser, this.despesa});

  @override
  State<DespesaFormWidget> createState() => _DespesaFormWidgetState();
}

class _DespesaFormWidgetState extends State<DespesaFormWidget> {
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
  void didUpdateWidget(covariant DespesaFormWidget oldWidget) {
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


    Widget buildSocio() => TextFormField(
          controller: controllerSocio,
          decoration: const InputDecoration(
            labelText: "Socio",
            border: OutlineInputBorder(),
          ),
          validator: (value) => value != null && value.isEmpty ? "Digite o Nome do Sócio" : null,
        );


    Widget buildData() => TextFormField(
          controller: controllerData,
          decoration: const InputDecoration(
            labelText: "Data",
            border: OutlineInputBorder(),
          ),
          validator: (value) => value != null && value.isEmpty ? "Digite a Data" : null,
        );




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
          buildSocio(),
          const SizedBox(
            height: 16,
          ),
          buildData(),
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
