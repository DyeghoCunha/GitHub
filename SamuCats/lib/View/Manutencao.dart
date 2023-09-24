import 'package:flutter/material.dart';

class Manutencao extends StatelessWidget {
  const Manutencao({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Projetos"),
        elevation: 10,

      ),
      body: Center(
        child: Wrap(
          children: [
            SizedBox(
              width: 300,
              child: Card(
                child: Column(
                  children: [
                    ClipOval(
                      child: Image.asset("assets/images/duke.gif",height: 100,width: 100,),

                    ),
                    Text("Estamos Trabalhando nesta pagina ainda",style: TextStyle(fontSize: 40),textAlign:
                    TextAlign.center,),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    ) ;
  }
}
