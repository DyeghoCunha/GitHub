import 'package:cskin_sheet/Model/despesa.dart';
import 'package:flutter/material.dart';

class DespesaConfirmacaoModalWidget extends StatelessWidget {
  DespesaConfirmacaoModalWidget({
    super.key,
  });

  //Despesa despesa;

  @override
  Widget build(BuildContext context) {
    return Container(
      child:const  Column(
        children: [
          ListTile(
            title: Text(
              "Registro e Abertura",
              style: TextStyle(),
            ),
            subtitle: Text("Valor Paga para a abertura da empresa e eu estou enrolando para fazer um texto "
                "bem grande que provavelmente eu nunca vo uescrever tanto assim",textAlign: TextAlign.start,
                ),
            leading: Text("Socio"),
            trailing: Column(
              children: [
                Card(child: Padding(
                  padding: EdgeInsets.fromLTRB(10, 4, 10, 4),
                  child: Text("R\$ 140.230,20",style: TextStyle(fontSize: 15),textAlign: TextAlign.center,),
                )),
                Text("10/21/2023",style: TextStyle(fontSize: 13),),
              ],
            ),
          )
        ],
      ),
    );
  }
}
