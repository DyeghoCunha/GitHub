import 'package:flutter/material.dart';
import 'despesa_list_curl.dart';


class DespesaCurlPage extends StatefulWidget {
  const DespesaCurlPage({super.key});

  @override
  State<DespesaCurlPage> createState() => _DespesaCurlPage();
}

class _DespesaCurlPage extends State<DespesaCurlPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: const DespesaListCurl(),
    );
  }}