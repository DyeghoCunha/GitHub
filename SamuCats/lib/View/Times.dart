
import 'package:flutter/material.dart';

import 'TimeBackEnd.dart';
import 'TimeDevOps.dart';
import 'TimeFrontEnd.dart';
import 'TimeFullStack.dart';
import 'TimeMobile.dart';
import 'TimeUiUx.dart';

class Times extends StatefulWidget {
  const Times({super.key});

  @override
  State<Times> createState() => _TimesState();
}

class _TimesState extends State<Times> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Nosso Time'),
      ),
      body: Container(
        color: Colors.red.shade100,
        child:ListView(
          children: [
            TimeMobile(),
            TimeFrontEnd(),
            TimeBackEnd(),
            TimeFullStack(),
            TimeUiUx(),
            TimeDevOps(),
          ],
        )

      ),
    );
  }
}
