import 'package:cskin_sheet/Components/despesa_form_widget.dart';
import 'package:cskin_sheet/Components/despesa_listtile_widget.dart';
import 'package:cskin_sheet/Model/despesa.dart';
import 'package:flutter/material.dart';
import '../api/despesas_sheets_api.dart';

class DespesasPage extends StatefulWidget {
  const DespesasPage({super.key});

  @override
  State<DespesasPage> createState() => _DespesasPageState();
}

class _DespesasPageState extends State<DespesasPage> {
  List<Despesa> despesas = [];
  int index = 0;

  @override
  void initState() {
    super.initState();
    getDespesas();
  }

  Future getDespesas({int index = 0}) async {
    final despesas = await DespesasSheetsApi.getAll();
    setState(() {
      this.despesas = despesas;
    });
  }


  Future dismissDespesa(Despesa despesa) async {
    await DespesasSheetsApi.deleteById(despesa.id!);
  }

  Future editDespesa(Despesa despesa) async {
    await DespesasSheetsApi.update(despesa.id!, despesa.toJson());
  }



  Widget _editModal(despesa) => Card(
    child: ListView(
          shrinkWrap: true,
          padding: EdgeInsets.all(16),
          children: [
            DespesaFormWidget(
              despesa: despesa,
              onSavedUser: (despesa) async {
                await DespesasSheetsApi.update(despesa.id!, despesa.toJson());
                print(despesa.toJson());
                Navigator.pop(context);
              },
            ),
            const SizedBox(
              height: 16,
            ),
          ],
        ),
  );


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Despesas"),
      ),
      body: Center(
        child: CustomScrollView(
          slivers: [
            SliverList(
              delegate:SliverChildListDelegate([
                for(var despesa in despesas)
                  Dismissible(
                    background:Container(color: Colors.green,child: Icon(Icons.edit),alignment:
                    Alignment.centerLeft,) ,
                    secondaryBackground: Container(color: Colors.red,child: Icon(Icons.delete),alignment:
                    Alignment.centerRight,),
                    onDismissed: (direction) {
                      direction == DismissDirection.endToStart ? dismissDespesa(despesa):
                     showModalBottomSheet(
                         isScrollControlled: true,
                         isDismissible: true,
                         context: context, builder: (ctx)=>_editModal(despesa));
                    },
                    key: UniqueKey(),
                    child: DespesaListTileWidget(despesa: despesa,),
                  )
              ]),
            ),
          ],
        ),
      ),
    );
  }

  bool indexIsInRange(int index, List<Despesa> despesas) {
    return index >= 0 && index < despesas.length;
  }
}
