import 'package:flutter/material.dart';
import '../Controller/controller.dart';
import '../Model/model.dart';
import '../widget/cardCustom.dart';


class TimeMobile extends StatefulWidget {
  @override
  _TimeMobileState createState() => _TimeMobileState();
}

class _TimeMobileState extends State<TimeMobile> {
  final PersonController _controller = PersonController();
  Map<String, List<Person>> _peopleByTeamMobile = {};

  bool _loading = true;

  Future<void> _delay() async {
    await Future.delayed(Duration(seconds: 2));
    setState(() {
      _loading = false;
    });
  }

  @override
  void initState() {
    super.initState();

    _controller.getPeopleByTeam("Mobile").then((peopleByTeamMobile) {
      setState(() {
        _peopleByTeamMobile = peopleByTeamMobile;
      });
    });

  }

  @override
  Widget build(BuildContext context) {

    return  ListView.builder(
      shrinkWrap: true,
        itemCount: _peopleByTeamMobile.length,
        itemBuilder: (context, index) {
          final team = _peopleByTeamMobile.keys.toList()[index];
          final people = _peopleByTeamMobile[team] ?? [];

          return Padding(
            padding: const EdgeInsets.all(10.0),
            child: Container(
              width: double.infinity,
              child: Card(
                child: Column(
                  children: [
                   Container(
                     width: double.infinity,
                   decoration: const BoxDecoration(
                     borderRadius: BorderRadius.only(topLeft: Radius.circular(8),topRight: Radius.circular(8)),
                     color: Colors.amber
                   ),
                    child: Text(team,style: TextStyle(fontSize: 30,fontWeight: FontWeight.bold),textAlign:
                    TextAlign.center,),
                   ),
                    const SizedBox(height: 20,),
                    Wrap(
                      spacing: 50,
                      runSpacing: 16,
                      children: people.map((person) {
                        return CardCustom(nome: person.name,gitHub: person.github,linguagem: person
                            .programmingLanguage, linkedIn: person.linkedin, time: person.team, whatsApp:
                        person.whatsapp, foto: person.foto,);
                      }).toList(),
                    ),
                  ],
                ),
              ),
            ),
          );
        },
    );
  }
}
