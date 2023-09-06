import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:section_8_flutter_dart_multiscreen_navigation_meals_app/providers/favorites_provider.dart';
import 'package:section_8_flutter_dart_multiscreen_navigation_meals_app/providers/filters_provider.dart';
import 'package:section_8_flutter_dart_multiscreen_navigation_meals_app/screens/categories.dart';
import 'package:section_8_flutter_dart_multiscreen_navigation_meals_app/screens/filters.dart';
import 'package:section_8_flutter_dart_multiscreen_navigation_meals_app/screens/meals.dart';
import 'package:section_8_flutter_dart_multiscreen_navigation_meals_app/widgets/main_drawer.dart';

const kInitialFilters = {
  Filter.glutenFree: false,
  Filter.lactoseFree: false,
  Filter.vegetarian: false,
  Filter.vegan: false,
};

class TabScreen extends ConsumerStatefulWidget {
  const TabScreen({super.key});

  @override
  ConsumerState<TabScreen> createState() => _TabScreenState();
}

class _TabScreenState extends ConsumerState<TabScreen> {
  int _selectedPageIndex = 0;




  // Foi transferido para o Provider
  // void _toggleMealFavoriteStatus(Meal meal) {
  //   final isExisting = _favoriteMeals.contains(meal);
  //
  //   if (isExisting) {
  //     setState(() {
  //       _favoriteMeals.remove(meal);
  //     });
  //     _showInfoMessage("${meal.title} is no longer a favorite.");
  //   } else {
  //     setState(() {
  //       _favoriteMeals.add(meal);
  //       _showInfoMessage("${meal.title} marked as favorite!");
  //     });
  //   }
  // }

  void _selectPage(int index) {
    setState(() {
      _selectedPageIndex = index;
    });
  }

  void _setScreen(String identifier) async {
    Navigator.of(context).pop();
    if (identifier == "filter") {
      final result = await Navigator.of(context).push<Map<Filter, bool>>(
        MaterialPageRoute(
          builder: (context) => const FiltersScreen(),
        ),
      );

    }
  }

  @override
  Widget build(BuildContext context) {
 final availableMeals = ref.watch(filteredMealsProvider);

    Widget activePage = CategoriesScreen(
      availableMeals: availableMeals,
    );
    var activePageTitle = "Categories";

    if (_selectedPageIndex == 1) {
      final favoriteMeals = ref.watch(favoriteMealsProvider);
      activePage = MealsScreen(
        meals: favoriteMeals,
      );
      activePageTitle = "Your Favorites";
    }

    return Scaffold(
      appBar: AppBar(
        title: Text(activePageTitle),
      ),
      drawer: MainDrawer(onSelectScreeen: _setScreen),
      body: activePage,
      bottomNavigationBar: BottomNavigationBar(
        onTap: _selectPage,
        currentIndex: _selectedPageIndex,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.set_meal),
            label: "Categories",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.star),
            label: "Favorites",
          ),
        ],
      ),
    );
  }
}
