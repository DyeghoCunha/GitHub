class Aluno {
  String _nome = "";
  final List<double> _notas = [];

  Aluno(String nome) {
    _nome = nome;
  }

  String get nome => _nome;

  set nome(String value) {
    _nome = value;
  }

  List<double> get notas => _notas;

  void adicionarNota(double nota) {
    _notas.add(nota);
  }

  double retornaMedia() {
    var totalNotas = 0.0;

    for (var nota in _notas) {
      totalNotas = totalNotas + nota;
    }
    var media = totalNotas / _notas.length;
    return media.isNaN ? 0 : media;
  }

  bool aprovado(double notaCorte){
    return retornaMedia() >= notaCorte ;
  }
}
