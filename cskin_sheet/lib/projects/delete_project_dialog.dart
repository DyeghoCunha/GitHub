import 'package:flutter/cupertino.dart';

class DeleteProjectDialog extends StatelessWidget {
  const DeleteProjectDialog({
    Key? key,
    required this.onCancel,
    required this.onDelete,
  }) : super(key: key);

  final Future<void> Function() onCancel;
  final Future<void> Function() onDelete;

  @override
  Widget build(BuildContext context) {
    return CupertinoAlertDialog(
      title: const Text('Excluir Despesa?'),
      content: const Text('Você tem certeza que gostaria de excluir esta despesa?'),
      actions: <Widget>[
        CupertinoDialogAction(
          onPressed: onCancel,
          child: const Text('Cancelar'),
        ),
        CupertinoDialogAction(
          isDestructiveAction: true,
          onPressed: onDelete,
          child: const Text('Excluir'),
        ),
      ],
    );
  }
}
