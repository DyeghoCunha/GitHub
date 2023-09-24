import 'package:dev_team/widget/cardCustom.dart';
import 'package:flutter/material.dart';

import '../Controller/controller.dart';
import '../Model/model.dart';
import '../widget/loadingScreen.dart';


class TimeMobile extends StatefulWidget {
  @override
  _TimeMobileState createState() => _TimeMobileState();
}

class _TimeMobileState extends State<TimeMobile> {
  final PersonController _controller = PersonController();
  Map<String, List<Person>> _peopleByTeamMobile = {};
  Map<String, List<Person>> _peopleByTeamFullStack = {};
  Map<String, List<Person>> _peopleByTeamFrontEnd = {};
  Map<String, List<Person>> _peopleByTeamBackEnd = {};
  Map<String, List<Person>> _peopleByTeamUiUx = {};
  Map<String, List<Person>> _peopleByTeamDevOps = {};
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
    _controller.getPeopleByTeam("FullStack").then((peopleByTeamFullStack) {
      setState(() {
        _peopleByTeamFullStack = peopleByTeamFullStack;
      });
    });
    _controller.getPeopleByTeam("FrontEnd").then((peopleByTeamFrontEnd) {
      setState(() {
        _peopleByTeamFrontEnd = peopleByTeamFrontEnd;
      });
    });
    _controller.getPeopleByTeam("BackEnd").then((peopleByTeamBackEnd) {
      setState(() {
        _peopleByTeamBackEnd = peopleByTeamBackEnd;
      });
    });
    _controller.getPeopleByTeam("UiUx").then((peopleByTeamUiUx) {
      setState(() {
        _peopleByTeamUiUx = peopleByTeamUiUx;
      });
    });
    _controller.getPeopleByTeam("DevOps").then((peopleByTeamDevOps) {
      setState(() {
        _peopleByTeamDevOps = peopleByTeamDevOps;
      });
    });
    _delay();
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
