import 'package:flutter/material.dart';
import 'package:flutter_cskinstore_v1/widget/floatCardPage.dart';
import 'package:flutter_cskinstore_v1/widget/labelCustomRow.dart';
import 'package:flutter_cskinstore_v1/widget/nameCardPage.dart';
import 'package:flutter_cskinstore_v1/widget/stickerCard.dart';

import '../widget/labelCustomTag.dart';

class CardPage extends StatefulWidget {
  const CardPage({super.key});

  @override
  State<CardPage> createState() => _CardPageState();
}

class _CardPageState extends State<CardPage> {
  @override
  Widget build(BuildContext context) {
    List<LabelCustomTag> labelTag = [
      LabelCustomTag(texto: "1 day", tradeLock: true),
      LabelCustomTag(texto: "User item", userItem: true),
      LabelCustomTag(texto: "Rare Sticker", rare: true),
      LabelCustomTag(texto: "Rare Float", rare: true),
      LabelCustomTag(texto: "Disponível"),
    ];

    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        shadowColor: Colors.transparent,
        actions: [
          IconButton(
              onPressed: () {
                showModalBottomSheet(
                  context: context,
                  elevation: 10,
                  shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.only(
                      topRight: Radius.circular(10),
                      topLeft: Radius.circular(10),
                    ),
                  ),
                  backgroundColor: Theme.of(context).colorScheme.secondary.withOpacity(1),
                  clipBehavior: Clip.antiAlias,
                  barrierColor: Theme.of(context).colorScheme.secondary.withOpacity(0.5),
                  useSafeArea: true,
                  showDragHandle: true,
                  enableDrag: true,
                  builder: (ctx) => Container(),
                );
              },
              icon: Image.asset("assets/images/logo2.png"))
        ],
      ),
      body: Material(
        color: Theme.of(context).colorScheme.primary,
        child: Container(
          width: double.infinity,
          child: ListView(
            children: [
              Padding(
                padding: const EdgeInsets.all(4.0),
                child: Card(
                  child: Padding(
                    padding: const EdgeInsets.all(2.0),
                    child: Image.asset("assets/images/arma1.png", fit: BoxFit.fill),
                  ),
                ),
              ),
              NameCardPage(),
              const SizedBox(
                height: 10,
              ),
              LabelCustomRow(labelTag: labelTag),
              const SizedBox(
                height: 10,
              ),
              const FloatCardPage(),
              const SizedBox(
                height: 10,
              ),
              StickerCard(),
            ],
          ),
        ),
      ),
    );
  }
}
