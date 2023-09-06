
import 'package:excecoes/models/Aluno.dart';
import 'package:excecoes/models/Utils.dart';

void execute() {
  // print("Bem vindo ao sistema de notas!");
  // String nome = ConsoleUtils.lerStringComTexto("Digite o nome do Aluno:");
  // Aluno aluno = Aluno(nome);
  // double? nota;
  // do {
  //   nota = ConsoleUtils.lerDoubleComTextoComSaida("Digite a nota ou S para sair", "s");
  //   if (nota != null) {
  //     aluno.adicionarNota(nota);
  //   }
  // } while (nota != null);
  // print("Suas notas foram ${aluno.notas}");
  // print("A média do aluno ${aluno.nome} foi : ${aluno.retornaMedia()}");
  // if (aluno.aprovado(7)) {
  //   print("O aluno ${aluno.nome.toUpperCase()}; foi aprovado");
  // } else {
  //   print("O aluno ${aluno.nome.toUpperCase()} é um imbecil");
  // }

    int n = 10; // Altere este valor para obter mais ou menos números de Fibonacci



  int fibonacci(int n) {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

    for (int i = 0; i < n; i++) {
      String spaces = " " * (n - i);
      String row = "";

      for (int j = 0; j <= i; j++) {
        row += "${fibonacci(j)} ";
      }
      print("$spaces$row");
    }

}
