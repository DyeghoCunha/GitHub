import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../Model/despesa.dart';
import '../api/despesas_sheets_api.dart';
import 'despesa_list_curl_item.dart';

class DespesaListCurl extends StatefulWidget {
  const DespesaListCurl({super.key});

  @override
  State<DespesaListCurl> createState() => _DespesaListCurlState();
}

class _DespesaListCurlState extends State<DespesaListCurl> {
  final GlobalKey<AnimatedListState> _listKey = GlobalKey();

  late Future<List<Despesa>> _despesas;

  @override
  void initState() {
    super.initState();
    _despesas = DespesasSheetsApi.getAll();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: _despesas,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          final despesas = snapshot.data;
          return AnimatedList(
            key: _listKey,
            initialItemCount: despesas!.length,
            itemBuilder: (context, index, animation) {
              return Padding(
                padding: const EdgeInsets.symmetric(vertical: 1.0),
                child: Column(
                  children: [
                    DespesaListCurlItem(
                      key: ValueKey(index),
                      onDelete: () => _removeDespesa(index,despesas),
                      despesa: despesas[index],
                    ),
                    const Divider(height: 0,),
                  ],
                ),
              );
            },
          );
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          return const Center(child: CircularProgressIndicator());
        }
      },
    );
  }

  Future<void> _removeDespesa(int index, List<Despesa> despesas) async {
    final removed = despesas.removeAt(index);
    const duration = Duration(milliseconds: 800);
    _listKey.currentState!.removeItem(
      index,
          (context, animation) => _buildRemovedDespesa(index, animation, removed),
      duration: duration,
    );
  }

  Widget _buildRemovedDespesa(
      int index,
      Animation<double> animation,
      Despesa removed,
      ) {
    return SizeTransition(
      sizeFactor: CurvedAnimation(
        parent: animation,
        curve: Curves.elasticOut,
      ).drive(Tween(begin: 1, end: 0)),
      child: DespesaListCurlItem(
        despesa: removed,
        onDelete: () {},
      ),
    );
  }
}
