import 'package:flutter/material.dart';
import 'package:simples_nacional_v3/widgets/CustomDrawer_widget/CustomDrawer_widget.dart';

import '../../themes/theme_colors.dart';
import 'component/ListaDeEmpresaCard_widget.dart';
import '../../database/empresas.dart';
import '../../model/EmpresaModel.dart';

class ListaDeEmpresaPage extends StatefulWidget {
  ListaDeEmpresaPage({super.key});

  @override
  State<ListaDeEmpresaPage> createState() => _ListaDeEmpresaPageState();
}


class _ListaDeEmpresaPageState extends State<ListaDeEmpresaPage> {

  late List<Empresa> empresa;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
   _getEmpresa();
   setState(() {
   });
  }
 void _getEmpresa(){
    List<Empresa>? empresaList = EmpresaDb().empresaListDb;
    empresa = empresaList!;
 }

  @override
  Widget build(BuildContext context) {


    return Scaffold(
      appBar: AppBar(
        elevation: 3,
        backgroundColor: Colors.transparent,
      flexibleSpace: Container(
      decoration:const BoxDecoration(
      gradient: LinearGradient(
      colors: ThemeColors.appBarGradient, // Cores do gradiente
      begin: Alignment.topLeft, // Início do gradiente
      end: Alignment.bottomRight, )),),// Fim do gradiente
        title: const Text("Empresas"),
      ),
      body: Container(
          decoration: BoxDecoration(
            image: DecorationImage(
                image: Theme.of(context).brightness == Brightness.light
                    ? const AssetImage("assets/images/fundo3.png")
                    : const AssetImage("assets/images/fundo3d.png"),
                fit: BoxFit.cover),
          ),
          child: CustomScrollView(
            slivers: <Widget>[
              SliverList(
                delegate: SliverChildBuilderDelegate(
                      (context, index) => ListaDeEmpresaCard(empresa: empresa[index]),
                  childCount: empresa.length,
                ),
              ),
              SliverToBoxAdapter(
                child: ElevatedButton(
                  onPressed: (){
                    print(empresa.length);
                  },
                  child: Text("teste"),
                ),
              )
            ],
          )),
    );
  }
}
