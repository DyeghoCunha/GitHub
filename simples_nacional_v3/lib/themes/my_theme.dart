import 'package:flutter/material.dart';
import 'package:simples_nacional_v3/themes/theme_colors.dart';

ThemeData MyTheme = ThemeData(
  brightness: Brightness.light,
  primarySwatch: ThemeColors.primaryColor,
  primaryColor: ThemeColors.primaryColor,
  textTheme: const TextTheme(
    bodyMedium: TextStyle(fontSize: 16),
    bodyLarge: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
    titleMedium: TextStyle(fontSize: 20, fontWeight: FontWeight.normal)
  ),
appBarTheme: const AppBarTheme(
  backgroundColor: Colors.transparent),
  splashColor: Colors.yellowAccent,

);
