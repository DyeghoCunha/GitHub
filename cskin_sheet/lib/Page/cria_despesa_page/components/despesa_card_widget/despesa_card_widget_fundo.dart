import 'package:flutter/material.dart';

class DespesaCardWidgetFundo extends StatelessWidget {
  DespesaCardWidgetFundo({super.key, required this.child});

  Widget child;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Theme.of(context).colorScheme.primary.withOpacity(0.1),
          boxShadow: [
            BoxShadow(
              color: Theme.of(context).colorScheme.primary.withOpacity(0.2),
              blurRadius: 1,
              spreadRadius: -3,
              offset: const Offset(0, 1),
            ),
            BoxShadow(
              color: Theme.of(context).colorScheme.primary.withOpacity(0.2),
              blurRadius: 1,
              spreadRadius: -6,
              offset: const Offset(0, 1),
            ),
          ],
          border: Border.all(color: Theme.of(context).colorScheme.primary.withOpacity(0.1))),
      child: child,
    );
  }
}
