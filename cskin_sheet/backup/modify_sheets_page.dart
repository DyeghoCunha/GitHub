// import 'package:cskin_sheet/api/sheets/user_sheets_api.dart';
// import 'package:cskin_sheet/despesa.dart';
// import 'package:flutter/material.dart';
//
// import 'navigate_despesas_widget.dart';
//
// class ModifySheetsPage extends StatefulWidget {
//   const ModifySheetsPage({super.key});
//
//   @override
//   State<ModifySheetsPage> createState() => _ModifySheetsPageState();
// }
//
// class _ModifySheetsPageState extends State<ModifySheetsPage> {
//   List<User> users = [];
//   int index = 0;
//
//   @override
//   void initState() {
//     // TODO: implement initState
//     super.initState();
//     getUsers();
//   }
//
//   Future getUsers({int index = 0}) async {
//     final users = await UserSheetsApi.getAll();
//     setState(() {
//       this.users = users;
//     });
//   }
//
//   Future deleteUser() async{
//     final user = users[index];
//     await UserSheetsApi.deleteById(user.id!);
//     final newIndex = index >0?index-1:0;
//     await getUsers(index:newIndex);
//   }
//
//   Widget buildUserControls() => Column(
//     children: [
//       ElevatedButton(onPressed: deleteUser, child: Text("Delete"),),
//       NavigateUsersWidget(
//             text: "${index + 1}/${users.length} Users",
//             onClickedNext: () {
//               final nextIndex = index >= users.length - 1 ? 0 : index + 1;
//               setState(() {
//                 index = nextIndex;
//               });
//             },
//             onClickedPrevious: () {
//               final previousIndex = index <= 0 ? users.length - 1 : index - 1;
//
//               setState(() {
//                 index = previousIndex;
//               });
//             },
//           ),
//     ],
//   );
//
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text("Modify"),
//       ),
//       body: Center(
//         child: ListView(
//           shrinkWrap: true,
//           padding: EdgeInsets.all(16),
//           children: [
//             UserFormWidget(
//               user: users.isEmpty ? null : users[index],
//               onSavedUser: (user) async {
//                await UserSheetsApi.update(user.id!, user.toJson());
//                // UserSheetsApi.updateCell(id: 4, key: "name", value: "Dean Flutter");
//                 print(user.toJson());
//               },
//             ),
//             const SizedBox(
//               height: 16,
//             ),
//             if (users.isNotEmpty) buildUserControls(),
//           ],
//         ),
//       ),
//     );
//   }
// }
