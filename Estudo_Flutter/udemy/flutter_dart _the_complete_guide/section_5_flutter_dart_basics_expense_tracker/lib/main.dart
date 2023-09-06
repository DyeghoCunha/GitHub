import 'package:flutter/material.dart';
import 'package:section_5_flutter_dart_basics_expense_tracker/widgets/expenses.dart';
// import 'package:flutter/services.dart';
var kColorScheme = ColorScheme.fromSeed(seedColor: Colors.teal.shade900);
var kDarkColorScheme = ColorScheme.fromSeed(
  brightness: Brightness.dark,
  seedColor: const Color.fromARGB(255, 5, 99, 125),
);

void main() {
  // WidgetsFlutterBinding.ensureInitialized();
  // SystemChrome.setPreferredOrientations([
  //  DeviceOrientation.portraitUp,
  // ]).then((fn){
    runApp(
      MaterialApp(
        darkTheme: ThemeData.dark().copyWith(
          useMaterial3: true,
          colorScheme: kDarkColorScheme,
          elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
              backgroundColor: kDarkColorScheme.primaryContainer,
            ),
          ),
        ),
        theme: ThemeData().copyWith(
            useMaterial3: true,
            colorScheme: kColorScheme,
            appBarTheme: AppBarTheme().copyWith(
                backgroundColor: kColorScheme.onPrimaryContainer,
                foregroundColor: kColorScheme.primaryContainer),
            cardTheme: CardTheme().copyWith(
              color: kColorScheme.secondaryContainer,
              margin: EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            ),
            elevatedButtonTheme: ElevatedButtonThemeData(
              style: ElevatedButton.styleFrom(
                backgroundColor: kColorScheme.primaryContainer,
              ),
            ),
            textTheme: ThemeData().textTheme.copyWith(
              titleLarge: TextStyle(
                fontWeight: FontWeight.bold,
                color: kColorScheme.onSecondaryContainer,
                fontSize: 16,
              ),
            )),
        themeMode: ThemeMode.dark,
        home: const Expenses(),
      ),
    );
  // });
}
