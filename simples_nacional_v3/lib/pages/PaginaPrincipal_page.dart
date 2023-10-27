import 'package:flutter/material.dart';
import 'package:simples_nacional_v3/components/sections/recent_activity.dart';
import 'package:simples_nacional_v3/widgets/CustomDrawer_widget/CustomDrawer_widget.dart';

import '../components/sections/header.dart';
import '../themes/images.dart';

class PaginaPrincipalPage extends StatelessWidget {
  const PaginaPrincipalPage({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> fundoLista = Theme.of(context).brightness == Brightness.light
        ? Imagens.cardFuncoesLight
        : Imagens.cardFuncoesLight;
    return Scaffold(
      drawer:const CustomDrawerWidget(),

      body:Container(
          decoration: const BoxDecoration(
            image: DecorationImage(
              image: AssetImage("assets/images/fundo0.png"),
              fit: BoxFit.cover,
            ),
          ),
          child: CustomScrollView(
            shrinkWrap: true,
            slivers: [
              SliverAppBar(
                expandedHeight: 90.0,
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
              SliverToBoxAdapter(
                child: Material(
                  color: Colors.transparent,
                  child: RecentActivity(
                      faturamento: "", dasSimplesNacional: "", rbt12: 0, alqEfetiva: 0, alqFutura: 0),
                ),
              ),
              SliverToBoxAdapter(child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text("Mais acessados",style: Theme.of(context).textTheme.titleMedium,
                ),
              ),),
              SliverGrid(
                delegate: SliverChildListDelegate(

                  [const cardFuncoesRow()],
                ),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 1,
                    mainAxisExtent: 115),
              ),
              SliverToBoxAdapter(child: Container(width: 100,height: 100,child: Card(),),)
            ]
          ))
    );

  }
}

class cardFuncoesRow extends StatelessWidget {
  const cardFuncoesRow({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> fundoLista = Theme.of(context).brightness == Brightness.light
        ? Imagens.cardFuncoesLight
        : Imagens.cardFuncoesLight;

    return SizedBox(
      child: CustomScrollView(
        scrollDirection: Axis.horizontal,
        shrinkWrap: true,
        slivers: [
          for (var fundo in fundoLista)
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
  _cardFuncoes({super.key, required this.fundo,this.width = 150, this.height = 100});

  final String fundo;
  double width;
  double height ;

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
