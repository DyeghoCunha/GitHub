import 'package:flutter/material.dart';

import '../../model/configuracoes_model.dart';

class ConfiguracoesPage extends StatefulWidget {
  const ConfiguracoesPage({super.key});

  @override
  State<ConfiguracoesPage> createState() => _ConfiguracoesPageState();
}

class _ConfiguracoesPageState extends State<ConfiguracoesPage> {

  late ConfiguracoesRepository configuracoesRepository;
  ConfiguracoesModel configuracoesModel = ConfiguracoesModel.vazio();

  TextEditingController nomeUsuarioController = TextEditingController();
  TextEditingController nomeEscritorioController = TextEditingController();

  @override
  void initState() {
    super.initState();
  }


  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      appBar: AppBar(
        title: const Text("Configurações"),
      ),
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(image: Theme.of(context).brightness == Brightness.light
              ? const AssetImage("assets/images/fundo0.png")
              : const AssetImage("assets/images/fundo0d.png"),
          fit: BoxFit.cover)
        ),
        child: ListView(
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                decoration: const InputDecoration(
                  hintText: "Nome usuário",
                  border: OutlineInputBorder(),
                  label: Text("Nome Usuário"),
                ),
                controller: nomeUsuarioController,
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                keyboardType: TextInputType.name,
                decoration: const InputDecoration(
                  hintText: "Nome do Escritorio",
                  border: OutlineInputBorder(),
                  label: Text("Nome do Escritório"),
                ),
                controller: nomeEscritorioController,
              ),
            ),
            SwitchListTile(
              title: const Text("Receber Notificações"),
              onChanged: (bool value) {
                setState(() {
                  configuracoesModel.isNotificacao = value;
                });
              },
              value: configuracoesModel.isNotificacao,
            ),
            SwitchListTile(
              value: configuracoesModel.isTemaEscuro,
              title: const Text("Tema Escuro"),
              onChanged: (bool value) {
                setState(() {
                  configuracoesModel.isTemaEscuro = value;
                });
              },
            ),
            Row(
              children: [
                Expanded(child: Container()),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: ElevatedButton(
                    onPressed: () async {
                      try {} catch (erro) {
                        showDialog(
                            context: context,
                            builder: (_) {
                              return AlertDialog(
                                title: const Text("Meu App"),
                                content: const Text("Favor informar um faturamento válido"),
                                actions: [
                                  TextButton(
                                    onPressed: () {
                                      FocusManager.instance.primaryFocus?.unfocus();
                                      Navigator.pop(context);
                                    },
                                    child: const Text("OK"),
                                  ),
                                ],
                              );
                            });
                        return;
                      }
                      configuracoesModel.nomeUsuario = nomeUsuarioController.text;
                      configuracoesModel.nomeEscritorio = nomeEscritorioController.text;
                      setState(() {
                      });
                      Navigator.pop(context);
                    },
                    child: const Text("Salvar"),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    ));
  }
}

class ConfiguracoesRepository {
}
