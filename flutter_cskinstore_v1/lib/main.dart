import 'package:flutter/material.dart';

import 'pages/HomePage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CSkin Store',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor:const Color.fromRGBO( 36, 38, 47,1)),
        //useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}
