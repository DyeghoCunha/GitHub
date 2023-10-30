import 'package:cskin_sheet/api/sheets/user_sheets_api.dart';
import 'package:cskin_sheet/modify_sheets_page.dart';
import 'package:cskin_sheet/user.dart';
import 'package:cskin_sheet/user_form_widget.dart';
import 'package:flutter/material.dart';

class CreatesheetsPage extends StatelessWidget {
  const CreatesheetsPage({super.key});

  @override
  Widget build(BuildContext context) {
    // Future insertUsers() async{
    //   final users =
    //     User(name: "teste", email:"teste" , isBeginner: true)
    //   ;
    //   final jsonUsers= users.toJson();
    //
    //   await UserSheetsApi.insert(jsonUsers);
    // }

    Widget _bottomSheet = Container(
      child: ElevatedButton(
        child: Text("Modify"),
        onPressed: () {
          Navigator.push(context, MaterialPageRoute(builder: (_) => ModifySheetsPage()));
        },
      ),
    );

    return Scaffold(
      appBar: AppBar(
        title: Text("Titulo"),
        centerTitle: true,
      ),
      bottomSheet: _bottomSheet,
      body: Container(
        alignment: Alignment.center,
        padding: EdgeInsets.all(32),
        child: SingleChildScrollView(
          child: UserFormWidget(
            onSavedUser: (user) async {
              final id = await UserSheetsApi.getRowCount() + 1;
              final newUser = user.copy(id: id);
              await UserSheetsApi.insert(newUser.toJson());
            },
          ),
        ),
      ),
    );
  }
}
