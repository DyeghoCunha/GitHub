import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AnswerButton extends StatelessWidget {
  const AnswerButton(
      {required this.onTap, required this.answerText, super.key});

  final String answerText;
  final void Function() onTap;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onTap,
      style: ElevatedButton.styleFrom(
        padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 40),
        backgroundColor: Colors.yellow.shade200,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10),
        ),
      ),
      child: Text(answerText, textAlign: TextAlign.center,style: GoogleFonts
          .rubik(color: Colors.purple.shade900, fontWeight: FontWeight.bold),),
    );
  }
}
