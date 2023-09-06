import 'package:flutter/material.dart';
import 'package:primeira_aula/components/task.dart';

class InitialScreen extends StatefulWidget {
  const InitialScreen({super.key});

  @override
  State<InitialScreen> createState() => _InitialScreenState();
}

class _InitialScreenState extends State<InitialScreen> {

  bool opacidade = true;
  @override
  Widget build(BuildContext context) {
    return
      Scaffold(
        appBar: AppBar(
          leading: Container(),
          title: const Text("Tarefas"),
        ),
        body: Container(
          color: Colors.black12,
          child: AnimatedOpacity(
            opacity: (opacidade ? 1 : 0),
            duration: const Duration(milliseconds: 1000),
            child: ListView(
              children: const [
                Tasks(
                    'Aprender Flutter',
                    'assets/images/dash.png',
                    3),
                Tasks(
                    'Andar de Bike',
                    'assets/images/bike.webp',
                    2),
                Tasks(
                    'Meditar',
                    'assets/images/meditar.jpeg',
                    5),
                Tasks(
                    'Ler',
                    'assets/images/livro.jpg',
                    4),
                Tasks(
                    'Jogar',
                    'assets/images/jogar.jpg',
                    1),
                SizedBox(height: 80,)
              ],
            ),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() {
              opacidade = !opacidade;
            });
          },
          child: const Icon(Icons.remove_red_eye),
        ),
      );
  }
}
