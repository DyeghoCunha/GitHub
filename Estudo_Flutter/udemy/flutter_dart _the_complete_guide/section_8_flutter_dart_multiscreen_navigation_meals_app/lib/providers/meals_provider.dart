import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:section_8_flutter_dart_multiscreen_navigation_meals_app/data/dummy_data.dart';


 final mealsProvider= Provider((ref){
   return dummyMeals;
 });