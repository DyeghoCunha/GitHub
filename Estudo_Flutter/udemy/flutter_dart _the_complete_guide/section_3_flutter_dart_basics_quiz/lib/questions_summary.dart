import 'package:flutter/material.dart';

class QuestionsSummary extends StatelessWidget {
  const QuestionsSummary({super.key, required this.summaryData});

  final List<Map<String, Object>> summaryData;

  @override
  Widget build(BuildContext context) {



    return SizedBox(
      height: 300,
      child: SingleChildScrollView(
        child: Column(
          children: summaryData.map((data) {
            return Padding(
              padding: const EdgeInsets.fromLTRB(0, 0, 0, 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                      width: 25,
                      height: 25,
                      margin: const EdgeInsetsDirectional.fromSTEB(0, 0, 10, 0),
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                          color: data['user_answer'] == data["correct_answer"] ? Colors.amberAccent : Colors.purple),
                      child: Center(
                          child: Text(
                        ((data["question_index"] as int) + 1).toString(),
                        style: const TextStyle(fontWeight: FontWeight.bold),
                      ))),
                  Expanded(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text((data["question"] as String), style: const TextStyle
                          (color: Colors.white, fontWeight: FontWeight.bold ),),
                        const SizedBox(
                          height: 5,
                        ),
                        Padding(
                          padding: const EdgeInsets.only(bottom: 5),
                          child: Text((data["user_answer"] as String),style:
                          const TextStyle(color: Colors.deepPurple,
                              fontWeight: FontWeight.bold,fontSize: 17)),
                        ),
                        Text((data["correct_answer"] as String), style:
                        const TextStyle(
                            color:  Colors.greenAccent,
                            fontWeight: FontWeight.bold, fontSize: 17),)
                      ],
                    ),
                  )
                ],
              ),
            );
          }).toList(),
        ),
      ),
    );
  }
}
