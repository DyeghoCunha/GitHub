import 'package:xml/xml.dart';

void main(){


  void main() {
    final xmlString = '''
    [seu XML aqui]
  ''';

    // Analisa o XML
    final document = XmlDocument.parse(xmlString);

    // Função para extrair e formatar informações de um elemento XML
    void extractAndPrintInfo(XmlElement element, [String prefix = '']) {
      for (var child in element.children) {
        if (child is XmlElement) {
          final tag = child.name.local;
          final text = child.text;
          print('$prefix$tag: $text');
          extractAndPrintInfo(child, '$prefix  ');
        }
      }
    }

    // Chama a função para extrair e formatar informações da NFe
    final nfe = document.rootElement;
    extractAndPrintInfo(nfe, 'Informações Gerais:');
  }

}