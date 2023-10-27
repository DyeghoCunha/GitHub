import 'package:flutter/material.dart';
import 'package:simples_nacional_v3/components/sections/recent_activity.dart';
import 'package:simples_nacional_v3/pages/ListaDeEmpresa_page/ListaDeEmpresa_page.dart';
import 'package:simples_nacional_v3/widgets/CustomDrawer_widget/CustomDrawer_widget.dart';

import '../components/sections/header.dart';
import '../themes/images.dart';

class PaginaPrincipalPage extends StatelessWidget {
  const PaginaPrincipalPage({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> listaCardFuncoes = Theme.of(context).brightness == Brightness.light
        ? Imagens.cardFuncoesLight
        : Imagens.cardFuncoesLight;

    List<String> listaCardBeneficios = Theme.of(context).brightness == Brightness.light
        ? Imagens.cardBeneficioLight
        : Imagens.cardBeneficioDark;

    return Scaffold(
        drawer: const CustomDrawerWidget(),
        body: Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage("assets/images/fundo0.png"),
                fit: BoxFit.cover,
              ),
            ),
            child: CustomScrollView(shrinkWrap: true, slivers: [
              SliverAppBar(
                expandedHeight: 120.0,
                floating: true,
                pinned: false,
                flexibleSpace: FlexibleSpaceBar(
                  collapseMode: CollapseMode.parallax,
                  background: Column(
                    children: [
                      Container(
                        decoration: BoxDecoration(
                          borderRadius: const BorderRadius.only(
                            bottomRight: Radius.circular(10),
                            bottomLeft: Radius.circular(10),
                          ),
                          boxShadow: kElevationToShadow[3],
                        ),
                        child: Header(
                          rbt12: "2.231.323,23",
                        ),
                      ),
                      const SizedBox(
                        height: 5,
                      ),
                    ],
                  ),
                ),
              ),
              const SliverToBoxAdapter(
                child: Card(
                  child: ListTile(
                    title: Text("Empresa Teste"),
                    subtitle: Text("CNPJ:00.000.000/0001-01"),
                    trailing: _PopupMenuButtonCustom(),
                  ),
                ),
              ),
              SliverToBoxAdapter(
                child: Material(
                  color: Colors.transparent,
                  child: RecentActivity(
                      faturamento: "", dasSimplesNacional: "", rbt12: 0, alqEfetiva: 0, alqFutura: 0),
                ),
              ),
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    "Mais acessados",
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                ),
              ),
              SliverGrid(
                delegate: SliverChildListDelegate(
                  [
                    cardFuncoesRow(
                      cardList: listaCardFuncoes,
                    )
                  ],
                ),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 1,
                  mainAxisExtent: 115,
                ),
              ),
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    "Benefícios Fiscais",
                    style: Theme.of(context).textTheme.titleMedium,
                  ),
                ),
              ),
              SliverGrid(
                delegate: SliverChildListDelegate(
                  [
                    cardFuncoesRow(
                      cardList: listaCardBeneficios,
                    )
                  ],
                ),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 1,
                  mainAxisExtent: 115,
                ),
              ),
            ])));
  }
}

class _PopupMenuButtonCustom extends StatelessWidget {
  const _PopupMenuButtonCustom({super.key});

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton<String>(
      elevation: 10,
      onSelected: (menu) {
        print(menu);
        if(menu == "Alterar"){
          Navigator.push(context, MaterialPageRoute(builder: (ctx)=>ListaDeEmpresaPage()));
        }
      },

      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
        side: const BorderSide(
          color: Colors.green,
          width: 1,
        ),
      ),
      itemBuilder: (BuildContext ctx) {
        return <PopupMenuEntry<String>>[
          PopupMenuItem<String>(
            value: "Alterar",
            child: Row(
              children: [
                Icon(
                  Icons.swap_horiz,
                  color: Theme.of(context).colorScheme.primary,
                ),
                const SizedBox(
                  width: 10,
                ),
                const Text("Alterar")
              ],
            ),
          ),
          PopupMenuItem<String>(
            value: "Editar",
            child: Row(
              children: [
                Icon(
                  Icons.edit,
                  color: Theme.of(context).colorScheme.primary,
                ),
                const SizedBox(
                  width: 10,
                ),
                const Text("Editar")
              ],
            ),
          ),
          PopupMenuItem<String>(
            value: "Deletar",
            child: Row(
              children: [
                Icon(
                  Icons.delete,
                  color: Theme.of(context).colorScheme.primary,
                ),
                const SizedBox(
                  width: 10,
                ),
                const Text("Lixo")
              ],
            ),
          ),
        ];
      },
    );
  }
}

class cardFuncoesRow extends StatelessWidget {
  cardFuncoesRow({super.key, required this.cardList});

  List<String> cardList;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: CustomScrollView(
        scrollDirection: Axis.horizontal,
        shrinkWrap: true,
        slivers: [
          for (var fundo in cardList)
            SliverToBoxAdapter(
              child: _cardFuncoes(
                fundo: fundo,
              ),
            )
        ],
      ),
    );
  }
}

class _cardFuncoes extends StatelessWidget {
  _cardFuncoes({super.key, required this.fundo, this.width = 150, this.height = 100});

  final String fundo;
  double width;
  double height;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      children: [
        Card(
          elevation: 5,
          child: InkWell(
            onTap: () {},
            splashColor: Colors.yellow.withOpacity(0.8),
            child: Ink(
              height: height,
              width: width,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(4),
                image: DecorationImage(
                  image: AssetImage(fundo),
                  fit: BoxFit.fill,
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
