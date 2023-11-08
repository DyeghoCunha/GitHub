import 'package:cskin_sheet/projects/projects_list_item.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../Model/despesa.dart';

class ProjectsList extends StatefulWidget {
  const ProjectsList({super.key});

  @override
  State<ProjectsList> createState() => _ProjectsListState();
}

class _ProjectsListState extends State<ProjectsList> {
  final GlobalKey<AnimatedListState> _listKey = GlobalKey();
  //late List<Project> projects;
  late List<Despesa> despesas ;

  final List<Despesa> defaultDespesa = [
    Despesa(socio: "João", data: "2023-08-02", valor: "500.0", descricao: "Descrição da despesa da categoria Alimentação", categoria: "Alimentação", operacao: "Débito"),
    Despesa(socio: "Maria", data: "2023-07-29", valor: "200.0", descricao: "Descrição da despesa da categoria Transporte", categoria: "Transporte", operacao: "Crédito"),
    Despesa(socio: "José", data: "2023-08-01", valor: "1000.0", descricao: "Descrição da despesa da categoria Moradia", categoria: "Moradia", operacao: "Débito"),
    Despesa(socio: "Ana", data: "2023-08-03", valor: "300.0", descricao: "Descrição da despesa da categoria Lazer", categoria: "Lazer", operacao: "Crédito"),
    Despesa(socio: "Pedro", data: "2023-08-04", valor: "700.0", descricao: "Descrição da despesa da categoria Outros", categoria: "Outros", operacao: "Débito"),
  ];

  // Future getDespesas({int index = 0}) async {
  //   final despesas = await DespesasSheetsApi.getAll();
  //   setState(() {
  //     this.despesas = despesas;
  //   });
  // }


  @override
  void initState() {
    super.initState();
   // getDespesas();
    despesas = List.from(defaultDespesa);

  }

  void _removeProject(int index) async {
    final removed = despesas.removeAt(index);
    const duration = Duration(milliseconds: 800);
    _listKey.currentState!.removeItem(
      index,
      (context, animation) => _buildRemovedItem(index, animation, removed),
      duration: duration,
    );
  }

  Widget _buildRemovedItem(
    int index,
    Animation<double> animation,
    Despesa removed,
  ) {
    return SizeTransition(
      sizeFactor: CurvedAnimation(
        parent: animation,
        curve: Curves.elasticOut,
      ).drive(Tween(begin: 0, end: 0)),
      child: ProjectsListItem(
        despesa: removed,
        onDelete: () {},
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedList(
      key: _listKey,
      initialItemCount: despesas.length,
      itemBuilder: (context, index, animation) {
        return ProjectsListItem(
          key: ValueKey(index),
          onDelete: () => _removeProject(index),
          despesa: despesas[index],
        );
      },
    );
  }
}
