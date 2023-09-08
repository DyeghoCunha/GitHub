import 'package:flutter/material.dart';

class Filtro extends StatefulWidget {
  const Filtro({Key? key}) : super(key: key);

  @override
  State<Filtro> createState() => _FiltroState();
}

class _FiltroState extends State<Filtro> {
  bool isPreco = false;
  double preco = 0.0;

  @override
  Widget build(BuildContext context) {
    return StatefulBuilder(
      builder: (context, setState) {
        return ListView(
          children: [
            InkWell(
              onTap: () {
                setState(() {
                  isPreco = !isPreco;
                });
              },
              child: ListTile(
                title: Text(
                  "Preço",
                  style:
                      TextStyle(fontWeight: FontWeight.bold, color: Theme.of(context).colorScheme.onPrimary),
                ),
                trailing: Icon(
                  isPreco ? Icons.arrow_downward_rounded : Icons.arrow_upward_rounded,
                  color: Theme.of(context).colorScheme.onPrimary,
                ),
              ),
            ),
            Container(
              width: double.infinity,
              child: isPreco? Column(
                children: [
                  Text("R\$ $preco "),
                  Slider(
                    value: preco,
                    min: 0,
                    max: 10000,
                    onChanged: (value) {
                      preco = value;
                    },
                  )
                ],
              ):Container(),
            ),
            Divider(thickness: 2, color: Colors.teal),
// Adicione mais opções aqui, se necessário
          ],
        );
      },
    );
  }
}
