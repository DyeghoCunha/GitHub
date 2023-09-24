import 'package:dev_team/View/Manutencao.dart';
import 'package:dev_team/View/homePage.dart';
import 'package:dev_team/widget/formCadastro.dart';
import 'package:flutter/material.dart';

import '../View/TimeMobile.dart';
import '../View/Times.dart';

class CustomDrawer extends StatelessWidget {
  const CustomDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return  Column(
      children: [
        const SizedBox(height: 10,),
        CircleAvatar(
          radius: 80,
          child: ClipOval(
              clipBehavior: Clip.antiAlias,
            child: Image.asset("assets/images/face.gif",fit: BoxFit.contain),

          ),
        ),
        const SizedBox(height: 10,),
        Divider(thickness: 0.3,height: 0),
        ListTile(
          onTap: (){
            Navigator.pop(context);
            Navigator.push(context, MaterialPageRoute(builder: (ctx)=> FormCadastro()));},
          trailing: Icon(Icons.arrow_forward_ios),
          title: Text("Cadastro"),
          leading:  Icon(Icons.format_align_justify),
          subtitle: Text("Faça parte do nosso time"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        Divider(thickness: 0.3,height: 0),
        ListTile(
          onTap: (){
            Navigator.pop(context);
            Navigator.push(context, MaterialPageRoute(builder: (ctx)=> Times()));},
          trailing: Icon(Icons.arrow_forward_ios),
          title: Text("Time SamuCats"),
          leading:  Icon(Icons.group),
          subtitle: Text("Conheça o time"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        Divider(thickness: 0.3,height: 0),
        ListTile(
          onTap: (){
            Navigator.pop(context);
            Navigator.push(context, MaterialPageRoute(builder: (ctx)=> Manutencao()));},
          trailing: Icon(Icons.arrow_forward_ios),
          title: Text("Projetos"),
          leading:  Icon(Icons.format_paint),
          subtitle: Text("Veja nossos Projetos!"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        Divider(thickness: 0.3,height: 0),
        Expanded(child: Container()),
        const Text("Canais do Samuca"),
        ListTile(
          onTap: (){

            },
          trailing: Icon(Icons.arrow_forward_ios),
          title: Text("Curso de Tecnologia"),
          leading:  Image.asset("assets/images/youtube.png"),
          subtitle: Text("O seu SamucaFlix diário"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        Divider(thickness: 0.3,height: 0),
        ListTile(
          onTap: (){

          },
          trailing: Icon(Icons.arrow_forward_ios),
          title: Text("Samuca do Java"),
          leading:  Image.asset("assets/images/youtube.png"),
          subtitle: Text("SamucaShorts para o dia a dia"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        Divider(thickness: 0.3,height: 0),

      ],
    );
  }
}
