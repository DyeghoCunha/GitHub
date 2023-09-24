import 'package:flutter/material.dart';
import '../View/Manutencao.dart';
import '../View/Times.dart';
import 'formCadastro.dart';

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
        const Divider(thickness: 0.3,height: 0),
        ListTile(
          onTap: (){
            Navigator.pop(context);
            Navigator.push(context, MaterialPageRoute(builder: (ctx)=> const FormCadastro()));},
          trailing: const Icon(Icons.arrow_forward_ios),
          title: const Text("Cadastro"),
          leading:  const Icon(Icons.format_align_justify),
          subtitle: const Text("Faça parte do nosso time"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        const Divider(thickness: 0.3,height: 0),
        ListTile(
          onTap: (){
            Navigator.pop(context);
            Navigator.push(context, MaterialPageRoute(builder: (ctx)=> const Times()));},
          trailing: const Icon(Icons.arrow_forward_ios),
          title: const Text("Time SamuCats"),
          leading:  const Icon(Icons.group),
          subtitle: const Text("Conheça o time"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        const Divider(thickness: 0.3,height: 0),
        ListTile(
          onTap: (){
            Navigator.pop(context);
            Navigator.push(context, MaterialPageRoute(builder: (ctx)=> const Manutencao()));},
          trailing: const Icon(Icons.arrow_forward_ios),
          title: const Text("Projetos"),
          leading:  const Icon(Icons.format_paint),
          subtitle: const Text("Veja nossos Projetos!"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        const Divider(thickness: 0.3,height: 0),
        Expanded(child: Container()),
        const Text("Canais do Samuca"),
        ListTile(
          onTap: (){

            },
          trailing: const Icon(Icons.arrow_forward_ios),
          title: const Text("Curso de Tecnologia"),
          leading:  Image.asset("assets/images/youtube.png"),
          subtitle: const Text("O seu SamucaFlix diário"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        const Divider(thickness: 0.3,height: 0),
        ListTile(
          onTap: (){

          },
          trailing: const Icon(Icons.arrow_forward_ios),
          title: const Text("Samuca do Java"),
          leading:  Image.asset("assets/images/youtube.png"),
          subtitle: const Text("SamucaShorts para o dia a dia"),
          titleAlignment: ListTileTitleAlignment.center,
        ),
        const Divider(thickness: 0.3,height: 0),

      ],
    );
  }
}
