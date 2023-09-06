import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:section_3_flutter_dart_basics_quiz/answer_button.dart';
import "package:section_3_flutter_dart_basics_quiz/data/questions.dart";

class QuestionScreen extends StatefulWidget {
  const QuestionScreen({required this.onSelectAnswer, super.key});

final void Function(String answer) onSelectAnswer;

  @override
  State<QuestionScreen> createState() => _QuestionScreenState();
}

class _QuestionScreenState extends State<QuestionScreen> {
  var currentQuestionIndex = 0;

  void answerQuestion(String selectetedAnswer) {
    widget.onSelectAnswer(selectetedAnswer);
    setState(() {
      currentQuestionIndex++;
    });
  }

  @override
  Widget build(BuildContext context) {
    final currentQuestion = questions[currentQuestionIndex];
    return Center(
      child: Container(
        margin: const EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              currentQuestion.text,
              style: GoogleFonts.lato(
                  color: Colors.white,
                  fontSize: 24,
                  fontWeight: FontWeight.bold),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 30),
            ...currentQuestion.getShuffledAnswers().map(
                  (answer) =>
                      AnswerButton(onTap: (){answerQuestion(answer);}, answerText: answer),
                ),
          ],
        ),
      ),
    );
  }
}
