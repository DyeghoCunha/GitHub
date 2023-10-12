import 'dart:async';
import 'dart:ui';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import 'package:flutter_tearable_cloth/cloth.dart';
import 'package:flutter_tearable_cloth/cloth_painter.dart';
import 'package:flutter_tearable_cloth/settings.dart';
import 'package:flutter_tearable_cloth/mouse.dart';

Mouse mouse = Mouse();

void main() => runApp(const App());

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  Cloth cloth = Cloth();

  @override
  void initState() {
    super.initState();

    Timer.periodic(
      const Duration(milliseconds: 16),
      (Timer timer) => setState(() => cloth.update()),
    );
  }


  bool _forca = false;
  bool _corta = false;
  bool _calor = true;

  @override
  Widget build(BuildContext context) {



    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData.dark(useMaterial3: true),
        home: Scaffold(
          appBar: AppBar(
            title: Text("Um Projeto Experimental"),

          ),
          drawer: const Drawer(

            child: Center(child: Column(
              children: [
                Text("Feito totalmente em Flutter ! "),
                const SizedBox(height: 20,),
                Text("Se os eventos do mouse não funcionarem, clique no tecido")
              ],
            )),
          ),
          body: Center(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                // const Text(
                //   '- Clique ou Clique e arraste com o Botão direito para cortar.\n- Clique e arraste com o '
                // 'Botão esquerdo para mover o tecido',
                //   style: TextStyle(fontSize: 16),
                // ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const SizedBox(height: 5,),
                    const Text("Após Escolher a ferramenta, clique no tecido"),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Ink(
                            width: 350,
                            decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), border:Border
                                .all(color: Colors.teal)),
                            child: ListTile(
                              splashColor: Colors.teal,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                              onTap: () {
                                setState(() {
                                  _corta = false;
                                  _forca = true;
                                });
                              },
                              trailing:const Icon(Icons.back_hand_rounded),
                              title:const Text("Aplicar Força"),
                              subtitle:const  Text("Aplique força sobre o tecido"),
                            ),
                          ),
                          const SizedBox( width:  10,),
                          Ink(
                            width: 350,
                            decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), border:Border
                                .all(color: Colors.teal)),
                            child: ListTile(
                              splashColor: Colors.teal,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                              onTap: () {
                                setState(() {
                                  _corta = true;
                                  _forca = false;
                                });
                              },
                              trailing:const Icon(Icons.cut),
                              title:const Text("Aplicar Cisalhamento"),
                              subtitle:const Text("Aplique cisalhamento sobre o tecido"),
                            ),
                          ),
                          const SizedBox( width:  10,),
                          Ink(
                            width: 350,
                            decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), border:Border
                                .all(color: Colors.teal)),
                            child: ListTile(
                              splashColor: Colors.teal,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                              onTap: () {
                                 setState(() {
                                   _calor = !_calor;
                                 });
                              },
                              trailing:const Icon(Icons.local_fire_department_rounded),
                              title:const Text("Mapa de Calor"),
                              subtitle:const Text("Aplicar Critério von Mises"),
                            ),
                          ),
                          const SizedBox(width: 30,),
                          Ink(
                            width: 180,
                            decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), border:Border
                                .all(color: Colors.red)),
                            child: ListTile(
                              splashColor: Colors.teal,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                              onTap: () {
                                setState(() {
                                  _forca = false;
                                  _corta = false;
                                });
                              },
                              trailing:const Icon(Icons.keyboard_return),
                              title:const Text("Reseta Click"),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Container(
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        border: Border.all(color: Colors.tealAccent),
                        borderRadius: BorderRadius.circular(10),
                        boxShadow: kElevationToShadow[3],


                      ),
                      child: Listener(
                        onPointerDown: _handlePointerDown,
                        onPointerUp:_corta ? _cutActive : _forca ? _strenghActive : _handlePointerUp,
                        onPointerMove: _handlePointerMove,
                        onPointerHover: _handlePointerHover,
                        child: CustomPaint(
                          size: const Size(canvasWidth, canvasHeight),
                          painter: ClothPainter(
                            cloth: cloth,
                            showHeatmap: _calor,
                            pointMode: PointMode.polygon,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),


              ],
            ),
          ),
        ),
      );}

  void _handlePointerDown(PointerDownEvent event) {
    mouse.mouseDown = true;
    mouse.isLeftButton = event.buttons == kPrimaryMouseButton;
  }

  void _handlePointerUp(PointerUpEvent event) {
    mouse.mouseDown = false;
    mouse.isLeftButton = true;
  }


  void _cutActive(PointerUpEvent event) {
    mouse.mouseDown = true;
    mouse.isLeftButton = false;
  }

  void _strenghActive(PointerUpEvent event) {
    mouse.mouseDown = true;
    mouse.isLeftButton = true;
  }



  void _handlePointerMove(PointerMoveEvent event) {
    mouse.previousPosition = mouse.position;
    mouse.position = event.localPosition;
  }

  void _handlePointerHover(PointerHoverEvent event) {
    mouse.previousPosition = mouse.position;
    mouse.position = event.localPosition;
  }
}
