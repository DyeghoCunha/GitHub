import 'package:flutter/material.dart';
import 'package:primeiro_app_dio_2023/pages/dados_cadastrais.dart';

import 'Pagina1.dart';
import 'Pagina2.dart';
import 'Pagina3.dart';

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  PageController pageController = PageController(initialPage: 0);
  int posicaoPagina = 0;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Simples Nacional"),
        ),
        drawer: Drawer(
          shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.only(
              topRight: Radius.circular(50),
              bottomRight: Radius.circular(50),
            ),
          ),
          child: Container(
            decoration: const BoxDecoration(
                image:
                    DecorationImage(image: AssetImage("assets/images/fundoDrawer.png"), fit: BoxFit.cover)),
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 10),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                SizedBox(
                    width: double.infinity,
                    child: InkWell(
                        onTap: () {
                          Navigator.pop(context);
                          Navigator.push(
                              context, MaterialPageRoute(builder: (ctx) => const DadosCadastrais()));
                        },
                        child: const Text("Dados Cadastrais"))),
                const SizedBox(
                  height: 10,
                ),
                const Text("Termo de uso e privacidade"),
                const SizedBox(
                  height: 10,
                ),
                const Text("Configurações"),
                const SizedBox(
                  height: 10,
                ),
                const Divider(),
                ElevatedButton(onPressed: () {}, child: const Text("LogOff"))
              ]),
            ),
          ),
        ),
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
                      decoration: const BoxDecoration(
                          image: DecorationImage(
                              image: AssetImage(
                                "assets/images/fundo4.png",
                              ),
                              fit: BoxFit.cover)),
                    ),
                    const Pagina1(),
                    const Pagina2(),
                  ]),
            ),
            BottomNavigationBar(

              currentIndex: posicaoPagina,
              onTap: (value) {
                pageController.jumpToPage(value);
              },
              type: BottomNavigationBarType.fixed,
              items: const [
                BottomNavigationBarItem(icon: Icon(Icons.home), label: "Pag1"),
                BottomNavigationBarItem(icon: Icon(Icons.pedal_bike_rounded), label: "Pag2"),
                BottomNavigationBarItem(icon: Icon(Icons.person), label: "Pag3"),
                BottomNavigationBarItem(icon: Icon(Icons.person), label: "Pag4"),
              ],
            )
          ],
        ),
      ),
    );
  }
}
