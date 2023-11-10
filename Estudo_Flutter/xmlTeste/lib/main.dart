import 'dart:io';
import 'package:xml/xml.dart';

void main() {
  final directory = Directory('C:\\Users\\We\\Desktop\\Estrela\\teste'); // Replace with the path to your XML files.

  if (directory.existsSync()) {
    directory.listSync().forEach((entity) {
      if (entity is File && entity.path.endsWith('.xml')) {
        final file = File(entity.path);
        final contents = file.readAsStringSync();

        final xmlDoc = XmlDocument.parse(contents);

        // Find the first <ICMSSN102> element.
        final icmssn102Element = xmlDoc.rootElement
            .findAllElements('ICMS')
            .firstWhere((element) =>
        element.findElements('ICMSSN102').isNotEmpty,
            orElse: () => null);

        if (icmssn102Element != null) {
          // Update the values inside the <orig> and <CSOSN> elements.
          final origElement = icmssn102Element
              .findElements('orig')
              .first;

          final csosnElement = icmssn102Element
              .findElements('CSOSN')
              .first;

          origElement.setElementValue('orig', 'NOVO_VALOR_ORIG');
          csosnElement.setElementValue('CSOSN', 'NOVO_VALOR_CSOSN');

          // Save the updated XML to the same file.
          final newContents = xmlDoc.toXmlString(pretty: true);
          file.writeAsStringSync(newContents);

          print('File ${entity.path} updated successfully.');
        } else {
          print('No <ICMSSN102> element found in ${entity.path}.');
        }
      }
    });
  } else {
    print('The directory does not exist.');
  }
}
