import 'package:dev_team/widget/cardCustom.dart';
import 'package:flutter/material.dart';
import '../Controller/controller.dart';
import '../Model/model.dart';


class TimeBackEnd extends StatefulWidget {
  @override
  _TimeBackEndState createState() => _TimeBackEndState();
}

class _TimeBackEndState extends State<TimeBackEnd> {
  final PersonController _controller = PersonController();
  Map<String, List<Person>> _peopleByTeamBackEnd = {};


  @override
  void initState() {
    super.initState();

    _controller.getPeopleByTeam("BackEnd").then((peopleByTeamBackEnd) {
      setState(() {
        _peopleByTeamBackEnd = peopleByTeamBackEnd;
      });
    });
  }

  @override
  Widget build(BuildContext context) {

    return  ListView.builder(
      shrinkWrap: true,
        itemCount: _peopleByTeamBackEnd.length,
        itemBuilder: (context, index) {
          final team = _peopleByTeamBackEnd.keys.toList()[index];
          final people = _peopleByTeamBackEnd[team] ?? [];

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
                     color: Colors.blue
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
