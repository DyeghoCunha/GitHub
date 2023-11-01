// import 'package:cskin_sheet/despesa.dart';
// import 'package:flutter/material.dart';
//
// class UserFormWidget extends StatefulWidget {
//   final User? user;
//
//   const UserFormWidget({super.key, required this.onSavedUser, this.user});
//
//   final ValueChanged<User> onSavedUser;
//
//   @override
//   State<UserFormWidget> createState() => _UserFormWidgetState();
// }
//
// class _UserFormWidgetState extends State<UserFormWidget> {
//   final formKey = GlobalKey<FormState>();
//   late TextEditingController controllerName;
//   late TextEditingController controllerEmail;
//   late bool isBeginner;
//
//   @override
//   void initState() {
//     super.initState();
//     initUser();
//   }
//
//   @override
//   void didUpdateWidget(covariant UserFormWidget oldWidget) {
//     super.didUpdateWidget(oldWidget);
//     initUser();
//   }
//
//   void initUser() {
//     final name = widget.user == null ? "" : widget.user!.name;
//     final email = widget.user == null ? "" : widget.user!.email;
//     final isBeginner = widget.user == null ? true : widget.user!.isBeginner;
//
//     setState(() {
//       controllerName = TextEditingController(text: name);
//       controllerEmail = TextEditingController(text: email);
//       this.isBeginner = isBeginner;
//     });
//   }
//
//   @override
//   Widget build(BuildContext context) {
//     Widget buildName() => TextFormField(
//           controller: controllerName,
//           decoration: const InputDecoration(
//             labelText: "Nome",
//             border: OutlineInputBorder(),
//           ),
//           validator: (value) => value != null && value.isEmpty ? "Enter Name" : null,
//         );
//     Widget buildEmail() => TextFormField(
//           controller: controllerEmail,
//           decoration: const InputDecoration(
//             labelText: "Email",
//             border: OutlineInputBorder(),
//           ),
//           validator: (value) => value != null && !value.contains("@") ? "Enter Email" : null,
//         );
//     Widget buildSubmit() => ElevatedButton(
//           onPressed: () {
//             final form = formKey.currentState!;
//             final isValid = form.validate();
//             if (isValid) {
//               final id = widget.user == null ? null : widget.user!.id;
//               final user =
//                   User(id: id,name: controllerName.text, email: controllerEmail.text, isBeginner: isBeginner);
//               widget.onSavedUser(user);
//             }
//           },
//           child: const Text("Save"),
//         );
//     Widget buildFlutterBeginner() => SwitchListTile(
//           value: isBeginner,
//           onChanged: (value) {
//             setState(() {
//               isBeginner = value;
//             });
//           },
//           title: const Text("Is Flutter"
//               " Beginner?"),
//         );
//
//     return Form(
//       key: formKey,
//       child: Column(
//         mainAxisAlignment: MainAxisAlignment.center,
//         children: [
//           buildName(),
//           const SizedBox(
//             height: 16,
//           ),
//           buildEmail(),
//           const SizedBox(
//             height: 16,
//           ),
//           buildFlutterBeginner(),
//           const SizedBox(
//             height: 16,
//           ),
//           buildSubmit(),
//         ],
//       ),
//     );
//   }
// }
