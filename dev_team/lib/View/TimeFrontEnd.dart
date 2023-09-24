import 'package:dev_team/widget/cardCustom.dart';
import 'package:flutter/material.dart';
import '../Controller/controller.dart';
import '../Model/model.dart';


class TimeFrontEnd extends StatefulWidget {
  @override
  _TimeFrontEndState createState() => _TimeFrontEndState();
}

class _TimeFrontEndState extends State<TimeFrontEnd> {
  final PersonController _controller = PersonController();
  Map<String, List<Person>> _peopleByTeamFrontEnd = {};
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

    _controller.getPeopleByTeam("FrontEnd").then((peopleByTeamFrontEnd) {
      setState(() {
        _peopleByTeamFrontEnd = peopleByTeamFrontEnd;
      });
    });
    _delay();
  }

  @override
  Widget build(BuildContext context) {

    return  ListView.builder(
      shrinkWrap: true,
        itemCount: _peopleByTeamFrontEnd.length,
        itemBuilder: (context, index) {
          final team = _peopleByTeamFrontEnd.keys.toList()[index];
          final people = _peopleByTeamFrontEnd[team] ?? [];

          return Container(
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Card(
                child: Column(
                  children: [
                   Container(
                     width: double.infinity,
                   decoration: const BoxDecoration(
                     borderRadius: BorderRadius.only(topLeft: Radius.circular(8),topRight: Radius.circular(8)),
                     color: Colors.green
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
