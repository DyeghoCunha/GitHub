import 'package:flutter/material.dart';
import 'package:simples_nacional_v3/themes/my_theme.dart';
import 'pages/Login_page/login_page.dart';
import 'package:path_provider/path_provider.dart' as path_provider;
import 'package:hive/hive.dart';
import 'package:intl/intl.dart';



void main() async {
  //Hive
  WidgetsFlutterBinding.ensureInitialized();
  Intl.defaultLocale = 'en_US';

  runApp(
      MaterialApp(
    debugShowCheckedModeBanner: false,
    theme:MyTheme,
    home: const MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const LoginPage();
  }
}
