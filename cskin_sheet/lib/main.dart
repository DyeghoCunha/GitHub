import 'package:cskin_sheet/Page/create_sheets_page.dart';
import 'package:flutter/material.dart';
import 'api/despesas_sheets_api.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await DespesasSheetsApi.init();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(

        colorScheme: ColorScheme.fromSeed(seedColor: Colors.orange),
        useMaterial3: true,
      ),
      home: const CreatesheetsPage(),
    );
  }
}

