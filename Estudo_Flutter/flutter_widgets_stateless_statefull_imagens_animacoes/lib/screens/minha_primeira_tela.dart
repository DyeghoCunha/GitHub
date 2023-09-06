import 'package:flutter/material.dart';

class MyFirstWidget extends StatelessWidget {
  const MyFirstWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return
    Container(
      color: Colors.white,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Stack(
            alignment: AlignmentDirectional.center,
            children: [
              Container(
                color: Colors.red,
                width: 100,
                height: 100,
              ),
              Container(
                color: const Color.fromARGB(60, 24, 117, 232),
                width: 50,
                height: 50,
              )
            ],
          ),
          Stack(
            alignment: AlignmentDirectional.center,
            children: [
              Container(
                color: Colors.yellow,
                width: 100,
                height: 100,
              ),
              Container(
                color: Colors.purple,
                width: 50,
                height: 50,
              )
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                color: Colors.cyan,
                width: 50,
                height: 50,
              ),
              Container(
                color: Colors.pink,
                width: 50,
                height: 50,
              ),
              Container(
                color: Colors.orange,
                width: 50,
                height: 50,
              ),
            ],
          ),
          Container(
            color: Colors.amber,
            height: 30,
            width: 300,
            child: const Text('Diamante Amarelo',
                style: TextStyle(color: Colors.black, fontSize: 28),
                textAlign: TextAlign.center),
          ),
          ElevatedButton(
            onPressed: () {
            },
            child: const Text("Aperte o Botão"),
          )
        ],
      ),
    );
  }
}
