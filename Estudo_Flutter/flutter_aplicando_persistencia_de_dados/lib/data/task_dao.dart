import 'package:primeira_aula/components/task.dart';
import 'package:primeira_aula/data/database.dart';
import 'package:sqflite/sqflite.dart';

class TaskDao {
  static const String tableSql = "CREATE TABLE $_tablename("
      "$_name TEXT, "
      "$_difficulty INTEGER, "
      "$_image TEXT)";

  static const String _tablename = "taskTable";
  static const String _name = "nome";
  static const String _difficulty = "difficulty";
  static const String _image = "image";

  save(Tasks tarefa) async {
    print("Iniciando o save: ");
    final Database bancoDeDados = await getDatabase();
    var itemExists = await find(tarefa.nome);
    Map<String, dynamic> taskMap = toMap(tarefa);
    if (itemExists.isEmpty) {
      print("A tarefa não Existia.");
      return await bancoDeDados.insert(_tablename, taskMap);
    } else {
      print("A Tarefa já existia!");
      return await bancoDeDados.update(
        _tablename,
        taskMap,
        where: "$_name = ?",
        whereArgs: [tarefa.nome],
      );
    }
  }

  Map<String, dynamic> toMap(Tasks tarefa) {
    print("Convertendo Tarefa em map:");
    final Map<String, dynamic> mapaDeTarefas = Map();
    mapaDeTarefas[_name] = tarefa.nome;
    mapaDeTarefas[_difficulty] = tarefa.dificuldade;
    mapaDeTarefas[_image] = tarefa.foto;
    print("Mapa de Tarefas: $mapaDeTarefas");
    return mapaDeTarefas;
  }

  Future<List<Tasks>> findAll() async {
    print("Acessando o findAll: ");
    final Database bancoDeDados = await getDatabase();
    final List<Map<String, dynamic>> result =
        await bancoDeDados.query(_tablename);
    print("Procurando dados no bando de dados... encontrado: $result");
    return toList(result);
  }

  List<Tasks> toList(List<Map<String, dynamic>> mapaDeTarefas) {
    print("convertendo to List: ");
    final List<Tasks> tarefas = [];
    for (Map<String, dynamic> linha in mapaDeTarefas) {
      final Tasks tarefa =
          Tasks(linha[_name], linha[_image], linha[_difficulty]);
      tarefas.add(tarefa);
    }
    print("Lista de Tarefas $tarefas");
    return tarefas;
  }

  Future<List<Tasks>> find(String nomeDaTarefa) async {
    print("Acessando find: ");
    final Database bancoDeDados = await getDatabase();
    final List<Map<String, dynamic>> result = await bancoDeDados.query(
      _tablename,
      where: "$_name = ?",
      whereArgs: [nomeDaTarefa],
    );
    print("Tarefa encontrada: ${toList(result)}");
    return toList(result);
  }

  delete(String nomeDaTarefa) async {
    print("Deletando tarefa: $nomeDaTarefa");

    final Database bancoDeDados = await getDatabase();
    return bancoDeDados.delete(
      _tablename,
      where: "$_name = ?",
      whereArgs: [nomeDaTarefa],
    );
  }
}
