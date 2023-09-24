import 'package:dev_team/View/Times.dart';
import 'package:dev_team/View/homePage.dart';
import 'package:flutter/material.dart';

import 'package:firebase_core/firebase_core.dart';

import 'View/TimeMobile.dart';

// Configuração do Firebase
Future<void> initializeFirebase() async {
  final FirebaseApp app = await Firebase.initializeApp(
    options: const FirebaseOptions(
      apiKey: "AIzaSyAZm_n5baF9PKzmYsl1vZmgBjhP57vWUhk",
      authDomain: "projetogruposamuca.firebaseapp.com",
      projectId: "projetogruposamuca",
      storageBucket: "projetogruposamuca.appspot.com",
      messagingSenderId: "150804297018",
      appId: "1:150804297018:web:9641c2df63aee48c240c03",
    ),
  );
  // Você pode usar a variável 'app' para acessar o FirebaseApp se necessário.
}

void main() async{
  await initializeFirebase();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Dev Team SamuCats',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.red),
        useMaterial3: true,
      ),
      home:  HomePage(),
    );
  }
}
