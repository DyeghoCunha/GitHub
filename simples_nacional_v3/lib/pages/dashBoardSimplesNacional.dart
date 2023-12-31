import 'package:flutter/material.dart';
import 'package:simples_nacional_v3/pages/PaginaPrincipal_page.dart';
import '../components/sections/account_actions.dart';
import '../components/sections/header.dart';
import '../components/sections/recent_activity.dart';
import '../components/sections/tax_detail.dart';
import '../service/utilidades.dart';

class DashBoardSimplesNacional extends StatefulWidget {
  DashBoardSimplesNacional({super.key, required this.rbt12, required this.faturamento, required this
      .dasSimplesNacional, required this.impostosDetalhados, required this.alqFutura, required this.alqEfetiva});

  double rbt12;
  double faturamento;
  double dasSimplesNacional;
  double alqEfetiva;
  double alqFutura;
  Map<String,double> impostosDetalhados;

  @override
  State<DashBoardSimplesNacional> createState() => _DashBoardSimplesNacionalState();
}

class _DashBoardSimplesNacionalState extends State<DashBoardSimplesNacional> {

  @override
  Widget build(BuildContext context) {
    String rbt12 = Utilidades.formatarNumeroComPontoVirgula(widget.rbt12??0.00);
    String faturamento = Utilidades.formatarNumeroComPontoVirgula(widget.faturamento??0.00);
    String dasSimplesNacional = Utilidades.formatarNumeroComPontoVirgula(widget.dasSimplesNacional??0.00);


    return Scaffold(
      body: CustomScrollView(
        slivers: <Widget>[
          SliverAppBar(
            expandedHeight: 113.0,
            floating: true,
            pinned: false,
            flexibleSpace: FlexibleSpaceBar(
              collapseMode: CollapseMode.parallax,
              background: Column(
                children: [
                  Container(
                      decoration: BoxDecoration(
                        borderRadius: const BorderRadius.only(bottomRight: Radius.circular(10),bottomLeft:
                        Radius.circular(10)),
                        boxShadow: kElevationToShadow[3],
                      ),
                      child: Header(rbt12: rbt12,)),
                  const SizedBox(height: 5,),
                ],
              ),
            ),
          ),
          SliverList(
            delegate: SliverChildListDelegate(
              [
                RecentActivity(faturamento: faturamento,dasSimplesNacional: dasSimplesNacional,rbt12:
                widget.rbt12,alqEfetiva: widget.alqEfetiva, alqFutura: widget.alqFutura),
                const AccountActions(),
                 TaxDetail(dasSimplesNacional: widget.dasSimplesNacional,impostoDetalhado: widget
                     .impostosDetalhados),
              ],
            ),
          ),
        ],
      ),
    );
  }
}