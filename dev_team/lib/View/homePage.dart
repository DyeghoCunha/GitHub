
import 'package:dev_team/View/CadastroPage.dart';
import 'package:dev_team/widget/custorDrawer.dart';
import 'package:flutter/material.dart';
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title:const Text('Bem vindo ao Time SamuCats !'),
          elevation: 10,
        ),
        drawer: const Drawer(child: CustomDrawer(),),
        body:Center(
          child: SizedBox(
            width: 350,
            height: 350,
            child: Card(
              child: Column(
                children: [
                  const SizedBox(height: 20,),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Image.asset("assets/images/DukeCheers.png",height: 150),
                      Image.asset("assets/images/DuchessCheers.png",height: 150,),
                    ],
                  ),
                  const Text("Façam o Cadastro o mais completo possível",style: TextStyle(fontSize: 30),
                    textAlign: TextAlign.center,),
                  const SizedBox(height: 20,),
                  ElevatedButton(onPressed: (){Navigator.push(context, MaterialPageRoute(builder: (ctx)
                  =>const CadastroPage()));}, child: const Text("Cadastro",style: TextStyle(fontSize: 20),))
                ],
              ),
            ),
          ),
        )

    );
  }

}
