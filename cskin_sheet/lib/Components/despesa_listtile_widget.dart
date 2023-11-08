import 'package:cskin_sheet/themes/theme.dart';
import 'package:flutter/material.dart';
import '../Model/despesa.dart';

class DespesaListTileWidget extends StatefulWidget {
  DespesaListTileWidget({super.key, required this.despesa});

  Despesa? despesa;

  @override
  State<DespesaListTileWidget> createState() => _DespesaListTileWidgetState();
}

class _DespesaListTileWidgetState extends State<DespesaListTileWidget> {
  @override
  Widget build(BuildContext context) {
    Despesa despesa = widget.despesa ??
        const Despesa(socio: "", data: "", valor: "", descricao: "", categoria: "", operacao: "");
    Widget _subtitulo(Despesa despesa) {
      return Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text("R\$ ${despesa.valor}"),
          Row(
            children: [
              const Icon(Icons.calendar_month),
              const SizedBox(
                width: 10,
              ),
              Text(despesa.data),
            ],
          )
        ],
      );
    }

    Widget _leading(Despesa? despesa) {
      return despesa != null
          ? Card(
              color: Colors.white,
              elevation: 5,
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: ThemeColors.socios[despesa.socio],
                ),
                width: 60,
                height: 50,
                alignment: Alignment.center,
                child: Text(
                  despesa.socio,
                  style: TextStyle(fontSize: 18),
                ),
              ),
            )
          : const Icon(Icons.person);
    }

    Widget _trailing(Despesa? despesa) {
      if (despesa == null) return Container();
      if (despesa.operacao == "Entrada") {
        return const Icon(
          Icons.arrow_upward,
          size: 35,
          color: Colors.green,
        );
      } else {
        return const Icon(
          Icons.arrow_downward,
          size: 35,
          color: Colors.red,
        );
      }
    }

    return Material(
      elevation: 5,
      child: Padding(
        padding: const EdgeInsets.all(4.0),
        child: ListTile(
          contentPadding: EdgeInsets.all(0),
          leading: _leading(despesa),
          title: Text(despesa.descricao),
          subtitle: _subtitulo(despesa),
          trailing: _trailing(despesa),
        ),
      ),
    );
  }
}
