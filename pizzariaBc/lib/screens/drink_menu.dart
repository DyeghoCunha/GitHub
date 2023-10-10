import 'package:flutter/material.dart';
import 'package:pizzariabc/components/drink_item.dart';

import '../cardapio.dart';

class DrinkMenu extends StatelessWidget {
  const DrinkMenu({super.key});

  final List drink = drinks;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 0),
      child: CustomScrollView(
        slivers: <Widget>[
          const SliverToBoxAdapter(
            child: Padding(
              padding: EdgeInsets.only(bottom: 16),
              child: Text(
                "Bebidas",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontFamily: "Caveat",
                  fontSize: 32,
                ),
              ),
            ),
          ),
          SliverGrid(
            delegate: SliverChildBuilderDelegate((context, index) {
              return DrinkItem(
                  imageURI: drink[index]["image"],
                  itemTitle: drink[index]["name"],
                  itemPrice: drink[index]["price"]);
            }, childCount: drink.length),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,
              crossAxisSpacing: 8,
              mainAxisSpacing: 8,
              childAspectRatio: 158/194
            ),
          ),
        ],
      ),
    );
  }
}
