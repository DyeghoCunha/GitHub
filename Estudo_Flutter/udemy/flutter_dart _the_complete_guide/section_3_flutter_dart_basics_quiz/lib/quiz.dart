import 'package:flutter/material.dart';
import 'package:section_3_flutter_dart_basics_quiz/data/questions.dart';
import 'package:section_3_flutter_dart_basics_quiz/question_screen.dart';
import 'package:section_3_flutter_dart_basics_quiz/result_screen.dart';
import 'package:section_3_flutter_dart_basics_quiz/start_screen.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() => _QuizState();
}

class _QuizState extends State<Quiz> {
   List<String> _selectedAnswers = [];
  var activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      activeScreen = 'question-screen';
    });
  }

  void restartQuiz(){
    setState(() {
      activeScreen = "question-screen";
      _selectedAnswers =[];
    });
  }

  void chooseAnswer(String answer) {
    _selectedAnswers.add(answer);
    if (_selectedAnswers.length == questions.length) {
      setState(() {
        activeScreen = 'results-screen';

      });
    }
  }

  @override
  Widget build(BuildContext context) {
    Widget screenWidget = StartScreen(switchScreen);

    if(activeScreen== "question-screen"){
      screenWidget = QuestionScreen(onSelectAnswer: chooseAnswer,);
    } else if( activeScreen=="results-screen"){
      screenWidget =  ResultScreen(chosenAnswers: _selectedAnswers,
        switchScreen: restartQuiz,);
    }

    return MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
                colors: [Colors.cyan, Colors.blue],
                end: Alignment.topRight,
                begin: Alignment.bottomLeft),
          ),
          child: screenWidget,
        ),
      ),
    );
  }
}
