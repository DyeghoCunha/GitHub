import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../Controller/controller.dart';
import '../Model/model.dart';
import '../View/Times.dart';


class FormCadastro extends StatefulWidget {
  const FormCadastro({super.key});

  @override
  State<FormCadastro> createState() => _FormCadastroState();
}

class _FormCadastroState extends State<FormCadastro> {
  final PersonController _controller = PersonController();



  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Wrap(
          children: [
            Container(
              width: 300,
              child: Card(
                elevation: 20,
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 10,
                        ),
                        TextFormField(
                          decoration: const InputDecoration(
                            labelText: 'Nome',
                            border: OutlineInputBorder(),
                            hintText: "Seu Nome e Sobrenome",
                          ),
                          onChanged: (value) {
                            _person.name = value;
                          },
                          autovalidateMode: AutovalidateMode.onUserInteraction,

                          validator: (value) {
                            final invalidCharacters = RegExp(r'[0-9#\$*&!?+-]');
                            if (invalidCharacters.hasMatch(value!)) {
                              return "Nome não pode conter caracteres inválidos.";
                            }
                            return null;
                          },
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        TextFormField(
                          decoration: const InputDecoration(
                              labelText: 'GitHub',
                              border: OutlineInputBorder(),
                              hintText: "https://github.com/SeuGitHub"),
                          onChanged: (value) {
                            _person.github = value;
                          },
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          validator: (value) {
                            if (!value!.startsWith('https://github.com/')) {
                              return 'Deve começar com https://github.com/';
                            }
                            return null;
                          },
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        TextFormField(
                          decoration: const InputDecoration(
                              labelText: 'LinkedIn',
                              border: OutlineInputBorder(),
                              hintText: "https://www.linkedin.com/"),
                          onChanged: (value) {
                            _person.linkedin = value;
                          },
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          validator: (value) {
                            if (!value!.startsWith('https://www.linkedin.com/')) {
                              return 'Deve começar com https://www.linkedin.com/';
                            }
                            return null;
                          },
                        ),

                        const SizedBox(
                          height: 10,
                        ),
                        TextFormField(
                          decoration: const InputDecoration(labelText: 'WhatsApp',border: OutlineInputBorder
                            (),hintText: "(DDD) 99999-9999"),
                          onChanged: (value) {
                            _person.whatsapp = value;
                          },
                          keyboardType: TextInputType.phone,
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          inputFormatters: [
                            FilteringTextInputFormatter.allow(RegExp(r'[0-9]')),
                            FilteringTextInputFormatter.digitsOnly,
                            LengthLimitingTextInputFormatter(11),
                          ],
                        ),

                        const SizedBox(
                          height: 10,
                        ),
                        DropdownButton<String>(
                          elevation: 10,
                          value: _person.programmingLanguage,
                          borderRadius: BorderRadius.circular(8),
                          padding: EdgeInsets.symmetric(horizontal: 5),
                          hint: Text("Escolha sua Linguagem Principal"),
                          items:  [
                          DropdownMenuItem(
                          value: 'Java',
                          child: Row(
                            children: [
                              SizedBox(
                                width: 30,
                                height: 30,
                                child: Image.asset("assets/images/java.png"),
                              ),
                              SizedBox(width: 10),
                              Text(
                                'Java',
                                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                              ),
                            ],
                          ),
                        ),
                    DropdownMenuItem(
                      value: 'Dart',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/Dart.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'Dart',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'Go',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/go.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'Go',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'JavaScript',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/JavaScript.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'JS',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'TypeScript',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/TypeScript.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'TypeScript',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'Python',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/Python.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'Python',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'Ruby',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/Ruby.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'Ruby',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'Rust',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/Rust.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'Rust',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'Kotlin',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/Kotlin.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'Kotlin',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'Swift',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/Swift.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'Swift',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'C',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/C.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'C',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'C++',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/C++.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'C++',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'C#',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/C#.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'C#',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'Php',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/Php.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'Php',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'Sap',
                      child: Row(
                        children: [
                          SizedBox(
                            width: 30,
                            height: 30,
                            child: Image.asset("assets/images/Sap.png"),
                          ),
                          SizedBox(width: 10),
                          Text(
                            'Sap',
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                          ),
                        ],
                      ),
                    ),

                          ],
                          onChanged: (value) {
                            setState(() {
                              _person.programmingLanguage = value!;
                            });
                          },
                        ),
                        DropdownButton<String>(
                          value: _person.team,
                          elevation: 10,
                          borderRadius: BorderRadius.circular(8),
                          padding: EdgeInsets.symmetric(horizontal: 5),
                          isExpanded: true,
                          hint: Text("Escolha o seu Time"),
                          items: const [
                            DropdownMenuItem(
                              value: 'FrontEnd',
                              child: Text(
                                'FrontEnd',
                                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                              ),
                            ),
                            DropdownMenuItem(
                              value: 'BackEnd',
                              child: Text(
                                'BackEnd',
                                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                              ),
                            ),
                            DropdownMenuItem(
                              value: 'DevOps',
                              child: Text(
                                'DevOps',
                                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                              ),
                            ),
                            DropdownMenuItem(
                              value: 'UiUx',
                              child: Text(
                                'Ui/Ux',
                                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                              ),
                            ),
                            DropdownMenuItem(
                              value: 'Mobile',
                              child: Text(
                                'Mobile',
                                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                              ),
                            ),
                            DropdownMenuItem(
                              value: 'Dados',
                              child: Text(
                                'Dados',
                                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300),
                              ),
                            ),

                          ],
                          onChanged: (value) {
                            setState(() {
                              _person.team = value!;
                            });
                          },
                        ),

                        const SizedBox(
                          height: 20,
                        ),
                        ElevatedButton(
                          onPressed: () {
                            _controller.createPerson(_person);
                            Navigator.push(context, MaterialPageRoute(builder: (ctx) => Times()));
                          },
                          child: Text('Cadastrar'),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        //   ElevatedButton(onPressed: (){ Navigator.push(context, MaterialPageRoute(builder: (ctx)=>
                        //       PersonPageTeam()));}, child: Text("teste"))
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Person _person = Person();

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
}
