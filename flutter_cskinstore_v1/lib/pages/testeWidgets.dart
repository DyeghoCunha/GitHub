import 'package:flutter/material.dart';

class TesteWidgets extends StatefulWidget {
  const TesteWidgets({Key? key}) : super(key: key);

  @override
  State<TesteWidgets> createState() => _TesteWidgetsState();
}

class _TesteWidgetsState extends State<TesteWidgets> {
  double preco = 0.0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // Use Scaffold para estruturar a página
      appBar: AppBar(
        title: Text('Seu Título'), // Adicione um título se desejar
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: double.infinity,
            color: Colors.green,
            child: Column(
              children: [
                Text("R\$ ${preco.round()}"),
                Slider(
                  min: 0,
                  max: 10000,
                  divisions: 100,
                  value: preco,
                  onChanged: (value) {
                    setState(() {
                      preco = value;
                    });
                  },
                ),
                Row(
                  children: [
                    const SizedBox(width: 4,),
                    const Expanded(
                      flex: 2,
                      child: TextField(
                        decoration: InputDecoration(
                          labelText: 'Mínimo',
                        ),
                      ),
                    ),
                    const Expanded(
                        flex: 1,
                        child: Text(
                          "-",
                          style: TextStyle(fontSize: 50, color: Colors.white),
                          textAlign: TextAlign.center,
                        )),
                     Expanded(
                      flex: 2,
                      child: TextField(
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          focusedBorder: OutlineInputBorder(),
                          labelText: 'Máximo',
                          labelStyle: TextStyle(),
                        ),
                      ),
                    ),
                    Expanded(
                      flex: 1,
                        child: ElevatedButton(
                            onPressed: (){}, child: const Text("Ok") )),
                    const SizedBox(width: 4,),
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
