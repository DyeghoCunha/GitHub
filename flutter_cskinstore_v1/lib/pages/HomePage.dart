import 'package:flutter/material.dart';
import 'package:flutter_cskinstore_v1/pages/TradePage.dart';
import 'package:flutter_cskinstore_v1/widget/CustomDrawer.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  PageController pageController = PageController(initialPage: 1);
  int posicaoPagina = 0;

  void _openDrawer() {
    _scaffoldKey.currentState?.openDrawer();
  }

  void _mostrarBottomSheet() {
    showModalBottomSheet(context: context,
        elevation: 8,
        backgroundColor: Color.fromRGBO(36, 38, 47, 1),
        showDragHandle: true,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.only(topLeft:Radius.circular(50),
            topRight: Radius.circular(50))),
        builder: (ctx) {
      return Container(
        // Conteúdo do BottomSheet
        child: Center(
          child: Text('Conteúdo do BottomSheet'),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      // Adicione a chave global aqui
      appBar: AppBar(
        backgroundColor: const Color.fromRGBO(36, 38, 47, 1),
        leading: Padding(
          padding: const EdgeInsets.only(left: 10),
          child: Image.asset("assets/images/logo.png"),
        ),
        leadingWidth: 150,
        actions: [
          // IconButton(
          //   icon: Icon(Icons.filter_alt),
          //   onPressed: () => print("Pesquisar"),
          // ),

          IconButton(
            icon: const Icon(Icons.menu, color: const Color.fromRGBO(153, 153, 153, 1)),
            onPressed: _openDrawer,
          ),
        ],
      ),
      floatingActionButton: posicaoPagina == 1
          ? FloatingActionButton(
              onPressed: () {
                _mostrarBottomSheet();
              },
              elevation: 10,
              mini: true,
              child: const Icon(
                Icons.filter_alt,
              ),
            )
          : null,
      body: Column(
        children: [
          Expanded(
              child: PageView(
            controller: pageController,
            onPageChanged: (value) {
              setState(() {
                posicaoPagina = value;
              });
            },
            children: [
              Container(
                color: Colors.red,
              ),
             TradePage(),
              Container(
                color: Colors.green,
              ),
              Container(
                color: Colors.teal,
              ),
            ],
          ))
        ],
      ),
      drawer: const CustomDrawer(),
      // Adicione o Drawer diretamente no Scaffold
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: const Color.fromRGBO(245, 132, 1, 1),
        elevation: 8,
        unselectedItemColor: const Color.fromRGBO(153, 153, 153, 1),
        backgroundColor: const Color.fromRGBO(36, 38, 47, 1),
        currentIndex: posicaoPagina,
        type: BottomNavigationBarType.fixed,
        onTap: (value) {
          pageController.jumpToPage(value);
        },
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.local_fire_department_sharp), label: "Para Você"),
          BottomNavigationBarItem(icon: Icon(Icons.swap_horiz_sharp), label: "Trade"),
          BottomNavigationBarItem(icon: Icon(Icons.notifications), label: "Ofertas"),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "Account")
        ],
      ),
    );
  }
}
