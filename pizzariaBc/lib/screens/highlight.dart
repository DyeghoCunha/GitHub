import 'package:flutter/material.dart';
import 'package:pizzariabc/components/highlight_item.dart';

import '../cardapio.dart';

class Highlights extends StatelessWidget {
  const Highlights({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 0),
      child: CustomScrollView(
        slivers: <Widget>[
          const SliverToBoxAdapter(
            child: Padding(
              padding: EdgeInsets.only(bottom: 16),
              child: Text(
                "Destaques",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontFamily: "Caveat",
                  fontSize: 32,
                ),
              ),
            ),
          ),
          MediaQuery.of(context).orientation == Orientation.landscape ? const _landscapeList() :const _portraitList(),
        ],
      ),
    );
  }
}

class _portraitList extends StatelessWidget {
  const _portraitList({super.key});

  @override
  Widget build(BuildContext context) {
    const List items = destaques;
    return SliverList(
      delegate: SliverChildBuilderDelegate(
        childCount: items.length,
        (context, index) {
          return HighlightItem(
              imageURI: items[index]["image"],
              itemTitle: items[index]["name"],
              itemPrice: items[index]["price"],
              itemDescription: items[index]["description"]);
        },
      ),
    );
  }
}

class _landscapeList extends StatelessWidget {
  const _landscapeList({super.key});

  @override
  Widget build(BuildContext context) {
    const List items = destaques;
    return SliverGrid(
      delegate: SliverChildBuilderDelegate(
        (context, index) {
          return HighlightItem(
              imageURI: items[index]["image"],
              itemTitle: items[index]["name"],
              itemPrice: items[index]["price"],
              itemDescription: items[index]["description"]);
        },
        childCount: items.length,
      ),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 8,
        mainAxisSpacing: 8,
        childAspectRatio: 0.90
      ),
    );
  }
}
