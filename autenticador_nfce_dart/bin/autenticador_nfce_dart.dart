import 'dart:io';

import 'package:autenticador_nfce_dart/autenticador_nfce_dart.dart' as autenticador_nfce_dart;

void main(List<String> arguments) {
  var um = 'C:\\Users\\We\\Desktop\\Estrela\\negado';
  var dois = 'C:\\Users\\We\\Desktop\\Estrela\\autorizada';
  final List<String> nomesArquivos = [];

  void autentica(String setOrigem, String setDestino) {
    String origem = setOrigem;
    String destino = setDestino;
    origem = origem.replaceAll('\\', '\\\\');
    destino = destino.replaceAll('\\', '\\\\');

    final List<File> arquivos = Directory(origem).listSync().whereType<File>().toList();

    for (final File arquivo in arquivos) {
      final String conteudo = arquivo.readAsStringSync();
      final String conteudoModificado = conteudo.replaceAll(
          '<cStat>301</cStat><xMotivo>Uso Denegado : Irregularidade fiscal do emitente</xMotivo></infProt></protNFe></nfeProc>',
          '<cStat>100</cStat><xMotivo>Autorizado o uso da NF-e</xMotivo></infProt></protNFe></nfeProc>');
      nomesArquivos.add(arquivo.path
          .split('\\')
          .last);
      File('${destino}\\${arquivo.path
          .split('\\')
          .last}').writeAsStringSync(conteudoModificado);
    }
  }
}
