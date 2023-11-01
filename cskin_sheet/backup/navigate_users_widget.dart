import 'package:flutter/material.dart';

class NavigateUsersWidget extends StatelessWidget {
  final String text;
  final VoidCallback onClickedPrevious;
  final VoidCallback onClickedNext;

  const NavigateUsersWidget({
    super.key,
    required this.text,
    required this.onClickedNext,
    required this.onClickedPrevious,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
     mainAxisAlignment: MainAxisAlignment.center,
     children: [
      IconButton(onPressed: onClickedPrevious, icon: const Icon(Icons.navigate_before),iconSize: 48,),
      Text(text, style: const TextStyle(fontSize:24, fontWeight: FontWeight.bold),),
      IconButton(onPressed: onClickedNext, icon: const Icon(Icons.navigate_next),iconSize: 48,)
     ],
    );
  }
}
