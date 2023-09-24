import 'package:dev_team/View/TimeBackEnd.dart';
import 'package:dev_team/View/TimeDevOps.dart';
import 'package:dev_team/View/TimeFrontEnd.dart';
import 'package:dev_team/View/TimeFullStack.dart';
import 'package:dev_team/View/TimeMobile.dart';
import 'package:dev_team/View/TimeUiUx.dart';
import 'package:flutter/material.dart';

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
