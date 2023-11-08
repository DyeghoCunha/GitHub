import 'package:cskin_sheet/Components/despesa_listtile_widget.dart';
import 'package:cskin_sheet/Model/despesa.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

import 'despesa_curl_card.dart';

class DespesaListCurlItem extends StatelessWidget {
  const DespesaListCurlItem ({
    Key? key,
    required this.despesa,
    required this.onDelete,
  }) : super(key: key);
  final Despesa despesa;
  //final Project project;
  final VoidCallback onDelete;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 1),
      child: SizedBox(
        height: 90,
        width: double.infinity,
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Positioned.fill(
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 1.0),
                child: SizedBox(
                  child: Container(
                    decoration: BoxDecoration(
                      color: Colors.red.withOpacity(0.8),
                       // borderRadius: BorderRadius.circular(10),
                    ),
                    clipBehavior: Clip.antiAlias,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        IconButton(
                          onPressed: () {},
                          icon: const Icon(
                            CupertinoIcons.delete,
                            color: Colors.white,
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              ).animate(effects: [
                const VisibilityEffect(delay: Duration(milliseconds: 500))
              ]),
            ),
            SizedBox(
              width: double.infinity,
              height: 120,
              child: Positioned.fill(
                child: DespesaCurlCard(
                    onDelete: () => onDelete(),
                    child: ClipRRect(
                     // borderRadius: BorderRadius.circular(10),
                      clipBehavior: Clip.hardEdge,
                      child:DespesaListTileWidget(despesa: despesa),)
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
