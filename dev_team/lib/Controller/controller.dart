import 'package:cloud_firestore/cloud_firestore.dart';

import '../Model/model.dart';
import 'package:firebase_auth/firebase_auth.dart';

class PersonController {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  Future<void> createPerson(Person person) async {
    try {
      await _auth.signInAnonymously();

      await _firestore.collection('people').add({
        'name': person.name,
        'github': person.github,
        'programmingLanguage': person.programmingLanguage,
        'team': person.team,
        "foto":person.foto,
        "linkedin":person.linkedin,
        "whatsapp":person.whatsapp,

      });
    } catch (e) {
      print(e);
    }
  }

  Future<Map<String, List<Person>>> getPeopleByTeam(String team) async {
    try {
      await _auth.signInAnonymously();

      final snapshot = await _firestore.collection('people').where('team', isEqualTo: team).get();

      final people = snapshot.docs.map((doc) {
        return Person(
          name: doc.data()['name'],
          github: doc.data()['github'],
          programmingLanguage: doc.data()['programmingLanguage'],
          team: doc.data()['team'],
          foto: doc.data()["foto"],
          linkedin: doc.data()["linkedin"],
          whatsapp: doc.data()["whatsapp"],
        );
      }).toList();

      final peopleByTeam = <String, List<Person>>{
        team: people,
      };

      return peopleByTeam;
    } catch (e) {
      print(e);
      return {};
    }
  }


  Future<void> deletePerson(String team, Person person) async {
    try {
      await _auth.signInAnonymously();

      // Recupere a referência do documento a ser excluído
      final docRef = _firestore.collection('people').doc(person.id);

      // Exclua o documento
      await docRef.delete();
    } catch (e) {
      print(e);
    }
  }
}







