import 'package:flutter/material.dart';
import 'package:flutter_cskinstore_v1/widget/FiltroCor.dart';
import 'package:flutter_cskinstore_v1/widget/filtroCustom.dart';
import 'package:flutter_cskinstore_v1/widget/filtroEntrega.dart';
import 'package:flutter_cskinstore_v1/widget/filtroPreco.dart';

class Filtro extends StatefulWidget {
  const Filtro({Key? key}) : super(key: key);

  @override
  State<Filtro> createState() => _FiltroState();
}

class _FiltroState extends State<Filtro> {
  bool isPreco = false;
  bool isEntrega = false;
  bool isCor = false;


  @override
  Widget build(BuildContext context) {
    return StatefulBuilder(
      builder: (context, setState) {
        return ListView(
          children: [
FiltroCustom(widget: FiltroPreco(), parametro: isPreco, titulo: "Preço"),
FiltroCustom(widget: FiltroEntrega(), parametro: isEntrega, titulo:"TradeLock" ,),
FiltroCustom(widget: FiltroCor(), parametro: isCor, titulo: "Cores")
// Adicione mais opções aqui, se necessário
          ],
        );
      },
    );
  }
}
