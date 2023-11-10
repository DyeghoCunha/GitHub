import 'package:flutter/material.dart';
import 'package:pizzariabc/screens/checkOut.dart';
import 'package:pizzariabc/screens/drink_menu.dart';
import 'package:pizzariabc/screens/highlight.dart';

import '../components/main_drawer.dart';
import '../themes/app_colors.dart';
import 'food_menu.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int _currentPage = 0;
  late PageController _pageIndex = PageController();

  @override
  Widget build(BuildContext context) {

    final List<Widget> pages=[
      const Highlights(),
      const FoodMenu(),
      const DrinkMenu(),
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text("Ristorante Panucci"),
        backgroundColor: Theme.of(context).colorScheme.surfaceVariant,
        elevation: 4,
        shadowColor: Colors.black,
        actions: const <Widget>[
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 16.0),
            child: Icon(
              Icons.account_circle,
              size: 32,
            ),
          )
        ],
        centerTitle: true,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          Navigator.push(context, MaterialPageRoute(builder: (context) {
            return const CheckOut();
          }));
        },
        child: const Icon(Icons.point_of_sale),
      ),
      drawer: const MainDrawer(),
      bottomNavigationBar: BottomNavigationBar(
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.star_rounded),
              label: 'Destaques',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.restaurant_menu),
              label: 'Menu',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.local_bar),
              label: 'Bebidas',
            ),
          ],
        selectedItemColor: AppColors.bottomNavigationBarIconColor,
        currentIndex: _currentPage,
        onTap: (index) {
          setState(() {
            _currentPage = index;

          });
        },
      ),
      body:PageView.builder(
        itemCount: pages.length,
        controller: _pageIndex,
        onPageChanged: (value) {
          setState(() {
            _currentPage = value;
          });
        },
        itemBuilder: (context, index) {
        return pages[index];
      },)


      //pages.elementAt(_currentPage),
    );
  }
}
