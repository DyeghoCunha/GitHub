import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:section_3_flutter_dart_basics_quiz/data/questions.dart';
import 'package:section_3_flutter_dart_basics_quiz/questions_summary.dart';

class ResultScreen extends StatelessWidget {
  ResultScreen({
    super.key,
    required this.chosenAnswers,
    required this.switchScreen,
  });

  final List<String> chosenAnswers;
  void Function() switchScreen;

  List<Map<String, Object>> getSummaryDate() {
    final List<Map<String, Object>> summary = [];

    for (var i = 0; i < chosenAnswers.length; i++) {
      summary.add({
        "question_index": i,
        "question": questions[i].text,
        "correct_answer": questions[i].answers[0],
        "user_answer": chosenAnswers[i],
      });
    }

    return summary;
  }

  @override
  Widget build(BuildContext context) {
    final summaryData = getSummaryDate();
    final numTotalQuestions = questions.length;
    final numCorrectQuestions = summaryData.where((data) {
      return data["user_answer"] == data["correct_answer"];
    }).length;

    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              " Você acertou $numCorrectQuestions de "
              "$numTotalQuestions perguntas",
              style: GoogleFonts.lato(
                  color: Colors.yellow.shade200,
                  fontWeight: FontWeight.bold,
                  fontSize: 20),
              textAlign: TextAlign.center,
            ),
            const SizedBox(
              height: 30,
            ),
            QuestionsSummary(summaryData: summaryData),
            const SizedBox(
              height: 30,
            ),
            //  TextButton(onPressed: () {}, child: const Text("Restart Quiz!!")),
            TextButton.icon(
              onPressed: switchScreen,
              icon: const Icon(Icons.refresh, color: Colors.white),
              label: const Text(
                "Restart Quiz!!",
                style: TextStyle(color: Colors.white),
              ),
            ),

          ],
        ),
      ),
    );
  }
}
