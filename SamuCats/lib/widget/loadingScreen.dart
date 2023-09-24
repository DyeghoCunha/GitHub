import 'package:flutter/material.dart';

class LoadingScreen extends StatelessWidget {
  const LoadingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Wrap(
        children: [
          Card(
            surfaceTintColor: Colors.white,
            child: Stack(
              alignment: Alignment.center,
              children: [

                Container(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Image.asset("assets/images/duke.gif",fit: BoxFit.contain,),
                    )),
                SizedBox(
                    width: 150,
                    height: 150,
                    child: CircularProgressIndicator()),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
