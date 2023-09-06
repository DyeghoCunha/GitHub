import 'package:flutter/material.dart';
import 'package:primeira_aula/components/task.dart';
import 'package:primeira_aula/data/task_dao.dart';
import 'package:primeira_aula/data/task_inherited.dart';
import 'package:primeira_aula/screens/form_screen.dart';

class InitialScreen extends StatefulWidget {
  const InitialScreen({super.key});

  @override
  State<InitialScreen> createState() => _InitialScreenState();
}

class _InitialScreenState extends State<InitialScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Container(),
        actions: [
          IconButton(onPressed: (){ setState(() {

          });}, icon: Icon(Icons.refresh))
        ],
        title: const Text("Tarefas"),
      ),
      body: Padding(
        padding: EdgeInsets.only(top: 8, bottom: 70),
        child: FutureBuilder<List<Tasks>>(
            future: TaskDao().findAll(),
            builder: (context, snapshot) {
              List<Tasks>? items = snapshot.data;
              switch (snapshot.connectionState) {
                case ConnectionState.none:
                  return const Center(
                    child: Column(
                      children: [
                        CircularProgressIndicator(),
                        Text("Carregando")
                      ],
                    ),
                  );
                  break;
                case ConnectionState.waiting:
                  return const Center(
                    child: Column(
                      children: [
                        CircularProgressIndicator(),
                        Text("Carregando")
                      ],
                    ),
                  );
                  break;
                case ConnectionState.active:
                  return const Center(
                    child: Column(
                      children: [
                        CircularProgressIndicator(),
                        Text("Carregando")
                      ],
                    ),
                  );
                  break;
                case ConnectionState.done:
                  if (snapshot.hasData && items != null) {
                    if (items.isNotEmpty) {
                      return ListView.builder(
                          itemCount: items.length,
                          itemBuilder: (BuildContext context, int index) {
                            final Tasks tarefa = items[index];
                            return tarefa;
                          });
                    }
                    return const Center(
                      child: Column(
                        children: [
                          Icon(Icons.error_outline, size: 128),
                          Text(
                            "Não há nenhuma Tarefa",
                            style: TextStyle(fontSize: 32),
                          ),
                        ],
                      ),
                    );
                  }
                  return const Text("Erro ao carregar Tarefas");
                  break;
              }
              return const Text("Erro desconhecido");
            }),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (contextNew) => FormScreen(
                taskContext: context,
              ),
            ),
          ).then((value) => setState(() {
                print("Recarregando a tela inicial");
              }));
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
