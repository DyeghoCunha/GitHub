import 'package:circular_menu/circular_menu.dart';
import 'package:expandable_menu/expandable_menu.dart';
import 'package:flutter/material.dart';

class CircularMenuCustom extends StatefulWidget {
  const CircularMenuCustom({super.key});

  @override
  State<CircularMenuCustom> createState() => _CircularMenuCustomState();
}

class _CircularMenuCustomState extends State<CircularMenuCustom> {
  @override
  Widget build(BuildContext context) {
    return
              Positioned(
                  top: 0.0,
                  left: 0.0,
                  right: 0.0,
                  child: ExpandableMenu(
                    width: 40.0,
                    height: 40.0,
                    backgroundColor: Colors.black,
                    iconColor: Colors.amber,
                    itemContainerColor: Colors.amber,
                    items: [
                      Container(
                        decoration: BoxDecoration(image:DecorationImage(image:AssetImage("assets/images/go.png"))),
                      ),
                      ElevatedButton(onPressed: (){}, child: Text("")) ,
                      ElevatedButton(onPressed: (){}, child: Text("")) ,
                      ElevatedButton(onPressed: (){}, child: Text("")) ,
                      ElevatedButton(onPressed: (){}, child: Text("")) ,
                      ElevatedButton(onPressed: (){}, child: Text("")) ,
                      ElevatedButton(onPressed: (){}, child: Text("")) ,
                      ElevatedButton(onPressed: (){}, child: Text("")) ,
                      ElevatedButton(onPressed: (){}, child: Text("")) ,
                      ElevatedButton(onPressed: (){}, child: Text("")) ,
                    ],
                  ));

  }
}
