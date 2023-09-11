import 'package:flutter/material.dart';
import 'package:flutter_cskinstore_v1/utils/skin3dtest.dart';
import 'package:flutter_cskinstore_v1/widget/labelTag.dart';

class CardPage extends StatefulWidget {
  const CardPage({super.key});

  @override
  State<CardPage> createState() => _CardPageState();
}

class _CardPageState extends State<CardPage> {
  @override
  Widget build(BuildContext context) {
    List<LabelTag> labelTag = [
      LabelTag(
        valor: 26,
        isPositivo: true,
      ),
      LabelTag(
        valor: 15,
        isNegativo: true,
      ),
      LabelTag(
        valor: 10,
        isEntrega: true,
      ),
    ];

    return Material(
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
            InkWell(
              onTap: () {},
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.only(left: 10, top: 5),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        Text(
                          "AK-47",
                          style: TextStyle(
                            fontSize: 20,
                            color: Theme.of(context).colorScheme.secondary,
                            decoration: TextDecoration.none,
                          ),
                        ),
                        Text(
                          "/ Field-Tested",
                          style: TextStyle(
                            fontSize: 20,
                            color: Theme.of(context).colorScheme.onPrimary,
                            decoration: TextDecoration.none,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(left: 10, top: 5),
                    child: Row(
                      children: [
                        const Text(
                          "Fuel Injector",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 35,
                            fontWeight: FontWeight.bold,
                            decoration: TextDecoration.none,
                          ),
                        ),
                        const SizedBox(width: 10),
                        Icon(
                          Icons.copy,
                          color: Theme.of(context).colorScheme.onPrimary,
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 10),
              child: SizedBox(
                width: double.infinity,
                height: 40,
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: 3, // Número de elementos
                  itemBuilder: (BuildContext context, int index) {
                    // Substitua pelo conteúdo do LabelTag
                    return labelTag[index];
                  },
                ),
              ),
            ),
            Card(
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(left: 10),
                        child: Text(
                          "Float",
                          style: TextStyle(
                            fontSize: 20,
                            color: Theme.of(context).colorScheme.onPrimary,
                            decoration: TextDecoration.none,
                          ),
                        ),
                      ),
                      Wrap(
                        crossAxisAlignment: WrapCrossAlignment.center,
                        children: [
                          Text(
                            "0.1512",
                            style: TextStyle(
                              fontSize: 20,
                              color: Theme.of(context).colorScheme.onPrimary,
                              decoration: TextDecoration.none,
                            ),
                          ),
                          ElevatedButton(
                            onPressed: () {
                              showModalBottomSheet(
                                context: context,
                                isScrollControlled: true,
                                showDragHandle: true,
                                enableDrag: true,
                                builder: (ctx) => Container(
                                  child: Text("TESTE"),
                                ),
                              );
                            },
                            style: ElevatedButton.styleFrom(
                              shape: CircleBorder(), // Torna o botão redondo
                            ),
                            child: Ink(
                              decoration: ShapeDecoration(
                                color: Theme.of(context).colorScheme.primary, // Cor de fundo do botão
                                shape: CircleBorder(), // Torna o fundo do botão redondo
                              ),
                              child: Padding(
                                padding: const EdgeInsets.all(0.5), // Ajusta o tamanho do ícone
                                child: Icon(
                                  Icons.question_mark,
                                  color: Theme.of(context).colorScheme.onPrimary,
                                  size: 20,
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                    ],
                  ),
             Column(
              mainAxisAlignment: MainAxisAlignment.start,
               crossAxisAlignment: CrossAxisAlignment.start,
               children: [
                 Row(children: [
                   SizedBox(width: 20,),
                   Transform.rotate(angle: 90 * 3.141592653589793 / 180,child: Icon(Icons.label_important ,
                     color: Colors.white,)),
                 ],),

               GradientContainer(),
             ],),

                  SizedBox(height: 10,)
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
