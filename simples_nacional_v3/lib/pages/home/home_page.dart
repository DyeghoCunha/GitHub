import 'package:flutter/material.dart';
import 'package:liquid_swipe/liquid_swipe.dart';
import 'package:simples_nacional_v3/pages/PaginaPrincipal_page.dart';
import 'package:simples_nacional_v3/widgets/CustomDrawer_widget/CustomDrawer_widget.dart';
import '../../themes/theme_colors.dart';
import '../Blog_page/blog_page.dart';
import '../dashBoardSimplesNacional.dart';
import '../SimplesNacional_page/Faturamento_page/faturamentoDoze_page.dart';
import '../ListaDeEmpresa_page/ListaDeEmpresa_page.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late LiquidController _liquidController;
  late PageController _pageController;

  @override
  void initState() {
    super.initState();
    _liquidController = LiquidController();
    _pageController = PageController(initialPage: 0);
  }
  int posicaoPagina = 0;

  final pages = [
    DashBoardSimplesNacional(rbt12: 0.00, faturamento: 0.00, dasSimplesNacional: 0.00,
        impostosDetalhados: const {"":0.00}, alqFutura: 0.00, alqEfetiva: 0.00),
    ListaDeEmpresaPage(),
    PaginaPrincipalPage(),
    const BlogPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          elevation: 3,
          backgroundColor: Colors.transparent,
        flexibleSpace: Container(
        decoration:const BoxDecoration(
        gradient: LinearGradient(
        colors: ThemeColors.appBarGradient, // Cores do gradiente
        begin: Alignment.topLeft, // Início do gradiente
        end: Alignment.bottomRight, )),),// Fim do gradiente
          title: const Text("Simples Nacional"),
        ),
        drawer: const CustomDrawerWidget(),
        body: Column(
          children: [
            Expanded(
              child: LiquidSwipe.builder(
                initialPage: posicaoPagina,
                fullTransitionValue: 1000,
                enableLoop: true,
                itemCount: 4,
                itemBuilder: (context, index) => pages[index],
                preferDragFromRevealedArea: true,
                waveType: WaveType.liquidReveal,
                liquidController: _liquidController,
                ignoreUserGestureWhileAnimating: true,
                onPageChangeCallback: (value){
                  print(value);
                  setState(() {
                    posicaoPagina = value;
                  });
                },
              ),
            ),
            BottomNavigationBar(
              selectedItemColor: Colors.green,
            currentIndex: posicaoPagina,
              onTap: (value) {
                setState(() {
                  posicaoPagina = value;
                });
                _liquidController.jumpToPage(
                  page: posicaoPagina,
                );
              },
              type: BottomNavigationBarType.fixed,
              items: const [
                BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
                BottomNavigationBarItem(icon: Icon(Icons.factory_outlined), label: "Empresas"),
                BottomNavigationBarItem(icon: Icon(Icons.linear_scale_sharp), label: "Simule"),
                BottomNavigationBarItem(icon: Icon(Icons.leaderboard_rounded), label: "Entenda"),
              ],
            )
          ],
        ),
      ),
    );
  }
}

