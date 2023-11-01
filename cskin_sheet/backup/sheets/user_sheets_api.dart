// import 'package:cskin_sheet/despesa.dart';
// import 'package:gsheets/gsheets.dart';
//
// class UserSheetsApi {
//   static final _spreadsheetId = "1FPyRV6cD_9EPT91OlWtgdvgaIoq-8O6ZF-PTEa0aoZs";
//   static const _credential = r'''
//   {
//   "type": "service_account",
//   "project_id": "cskinsheet",
//   "private_key_id": "df5c3fa610b95bd69ef31367f05e29d318dca384",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPKWGJXX9dCzNb\neXLFmb5TSm/JRubPBBlrT1nxgc53v2qct3/Q6m6xzsJtsinagLz0MHmDNv3JYFVe\nBUA7nwABojtxIO2JVQiDqnHpeB67EUKFO9KO75rcTyAASh9GhP2t9F9ISr6/j3uv\nVivRrIVlUlQiZSwEnj7/Li1yJzh3Y7dRC7DPHZF6jO7HiY/GeS6sLwM/i3hBjGN8\nCWBaSuSK2w9huBpC6y5hjDIU/eDhwtd2sRXiXsD+2cSrxvksYNhvWWVxrXDfdwNr\nPEtYmzg2vn4V3PIe9a+KyQN+UPQr0WLNfXDPEWdIzIdluW/PbQ686ZEiYkA6hBWN\niRNn8IYfAgMBAAECggEAHSXAYHh0RB4gUr2KxXy1R7jQc6xzKytzfCLFD/Lonvai\nxHwZEsb5XjEuMAsCUokMjPsJDco9+QiB2mG4wOrFMHWoEWnFoi4BrazcrDHHeSCb\nkG1zWcMisd68LO5A6kYp/0DD60MBBajliS0Bq1WvyyrDRbegcuHlEThpEoesLTfs\noTUigTVdCxLq7DygiXaqGOVjNMUxgw2r5YHY7Lec4QKJSnc4pjLv4Q7987tP0+Li\nol8MbeVx9buTmRotQrKLW8u+oBbo4n4dy+bm60n71kwK/stEzxZOiOdFxpoonIIa\n/6GOsRR+Y7hybG4XY2QzBRcbD6dw5YYy7FhVqGSHyQKBgQDxkvMtsCpl2xbd8jdd\nlfbOcPqt9AGW3qXs8ZuErQHSZ0xMmLne5R/GBdwzjiHXdoG+IRePpHfFJx/2dueT\n5drFMqrsAlvx/TrVgScWnk8x2tf2HTMoYU6mpEJxBrnOsoJ3um98FpDNXQrrLdTr\nYJV9SCtJLFj96uAkXwSM1N+pVQKBgQDbiFqKN/e+h/J/kxBgfsRL+ggo7QXxtDZP\nXNJ1TNKldVXIj0m3LSpv7//eBjo/d6wU/wtbZ8y5ZszJN9l42ghO+ROTEH5qmxRG\nu9apWoSvXt/cJwUHANXFGR1cQALjNqhpQ2bX24ijr/zaE7s2IPOKpWhoJQ1hYOf5\n4lRikuThowKBgHREG5IjtWQsXAcaKpd6M70MFzpds94e7pDpf8YNVlEjsk8zOlIS\nyIYQD/koMRV4Td1qI+LYb2SN/g4rEC3YdMBwMF9Ci2oeTJCxhlSWgNsnzsT/LL4E\nh0wgxnGLoSXgOHbTXhDE85BDdZvXBSD77TbM4zhmhbY/sv0OVixJ0BO5AoGAKuTA\ndAMtd9/OJNkSORhruECZOY3ePHSuq+ECCgNBoSyE31QH3i+H/CkTgEkNNntmdw/C\nI1DrskoAt0wfRLqtJukJxxFQ8fltA8kNzzctd6p86OIC3HRwUDtw/iZPqh9y1mZi\nAMkXMIxhRibWzGOx0iQxey/KJn2ttahgPoZfDCsCgYEAufm9QErYoBsNi5jW3oG3\naPidW1AMMHJ+W0bQivM23xpFPdXNAO7RkHdh9V2l/+Pn34aUhHhqFhU1qGUQkpOv\nGP7v9gJ5hHaHJgjo+7cz62ne/yWgzIP2rqDJzjmJ/aJBGHVtOOHM1sL7MWJrvwdb\nvgbaITYzGt7vb9e4OvFjhr0=\n-----END PRIVATE KEY-----\n",
//   "client_email": "cskinsheet@cskinsheet.iam.gserviceaccount.com",
//   "client_id": "104934653000800812406",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cskinsheet%40cskinsheet.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// }
//   ''';
//   static final _gsheets = GSheets(_credential);
//
//   static Worksheet? _userSheet;
//
//   static Future init() async {
//     try {
//       final spreadsheet = await _gsheets.spreadsheet(_spreadsheetId);
//       _userSheet = await _getWorkSheet(spreadsheet, title: "Aba1");
//       final firstRow = UserFields.getFields();
//       _userSheet!.values.insertRow(1, firstRow);
//     } catch (e) {
//       print("Init Error: $e");
//     }
//   }
//
//   static Future<Worksheet> _getWorkSheet(
//     Spreadsheet spreadsheet, {
//     required String title,
//   }) async {
//     try {
//       return await spreadsheet.addWorksheet(title);
//     } catch (e) {
//       return spreadsheet.worksheetByTitle(title)!;
//     }
//   }
//
//   static Future insert(Map<String, dynamic> rowList) async {
//     if (_userSheet == null) return;
//
//     _userSheet!.values.map.appendRow(rowList);
//   }
//
//   static Future<int> getRowCount() async {
//     if (_userSheet == null) return 0;
//     final lastRow = await _userSheet!.values.lastRow();
//     return lastRow == null ? 0 : int.tryParse(lastRow.first) ?? 0;
//   }
//
//   static Future<List<User>> getAll() async {
//     if (_userSheet == null) return <User>[];
//     final users = await _userSheet!.values.map.allRows();
//     return users == null ? <User>[] : users.map(User.fromJson).toList();
//   }
//
//   static Future<User?> getById(int id) async {
//     if (_userSheet == null) return null;
//     final json = await _userSheet!.values.map.rowByKey(id, fromColumn: 1);
//     return json == null ? null : User.fromJson(json);
//   }
//
//   static Future<bool> update(
//     int id,
//     Map<String, dynamic> user,
//   ) async {
//     if (_userSheet == null) return false;
//     return _userSheet!.values.map.insertRowByKey(id, user);
//   }
//
//   static Future<bool> updateCell({
//     required int id,
//     required String key,
//     required dynamic value,
//   }) async {
//     if(_userSheet == null) return false;
//     return _userSheet!.values.insertValueByKeys(value, columnKey:key, rowKey: id);
//   }
//
//   static Future<bool> deleteById(int id)async{
//     if(_userSheet == null) return false;
//     final index = await _userSheet!.values.rowIndexOf(id);
//     if(index ==-1) return false;
//     return _userSheet!.deleteRow(index);
//   }
// }
