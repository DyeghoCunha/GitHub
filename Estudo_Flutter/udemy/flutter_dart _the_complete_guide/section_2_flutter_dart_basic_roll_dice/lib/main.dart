import 'package:flutter/material.dart';
import 'package:section_2_flutter_dart_basic_roll_dice/gradient_container.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContainer(
          gradientColors: [Colors.blue, Colors.cyan],
        ),
      ),
    ),
  );
}

@override
Widget build(BuildContext context) {
  return const Placeholder();
}
