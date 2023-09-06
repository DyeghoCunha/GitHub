
import 'package:flutter/material.dart';
import 'package:primeira_aula/components/task.dart';

class TaskInherited extends InheritedWidget {
  TaskInherited({
    super.key,
    required Widget child,
  }) : super(child: child);

  final List<Tasks> taskList = [
    Tasks('Aprender Flutter', 'assets/images/dash.png', 3),
    Tasks('Andar de Bike', 'assets/images/bike.webp', 2),
    Tasks('Meditar', 'assets/images/meditar.jpeg', 5),
    Tasks('Ler', 'assets/images/livro.jpg', 4),
    Tasks('Jogar', 'assets/images/jogar.jpg', 1),
  ];

  void newTask(String name, String photo, int difficulty) {
    taskList.add(Tasks(name, photo, difficulty));
  }

  static TaskInherited of(BuildContext context) {
    final TaskInherited? result =
        context.dependOnInheritedWidgetOfExactType<TaskInherited>();
    assert(result != null, 'No TaskInherited found in context');
    return result!;
  }

  @override
  bool updateShouldNotify(TaskInherited oldWidget) {
    return oldWidget.taskList.length != taskList.length;
  }
}
