import 'package:flutter/material.dart';
import 'package:pizzariabc/components/food_item.dart';

import '../cardapio.dart';

class FoodMenu extends StatelessWidget {
  const FoodMenu({super.key});

  final List foodMenu = comidas;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 0),
      child: CustomScrollView(
        slivers: [
          const SliverToBoxAdapter(
            child: Padding(
              padding: EdgeInsets.only(bottom: 16.0,top: 8),
              child: Text(
                "Menu",
                style: TextStyle(fontFamily: "Caveat", fontSize: 32),
                textAlign: TextAlign.center,
              ),
            ),
          ),
          SliverList(
              delegate: SliverChildBuilderDelegate(
            childCount: foodMenu.length,
            (context, index) {
              return FoodItem(
                itemTitle: foodMenu[index]["name"],
                itemPrice: foodMenu[index]["price"],
                imageURI: foodMenu[index]["image"],
              );
            },
          ))
        ],
      ),
    );
  }
}
