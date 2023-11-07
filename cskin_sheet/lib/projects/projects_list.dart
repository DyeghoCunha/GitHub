import 'package:cskin_sheet/projects/project.dart';
import 'package:cskin_sheet/projects/projects_list_item.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../Model/despesa.dart';
import '../api/despesas_sheets_api.dart';

class ProjectsList extends StatefulWidget {
  const ProjectsList({super.key});

  @override
  State<ProjectsList> createState() => _ProjectsListState();
}

class _ProjectsListState extends State<ProjectsList> {
  final GlobalKey<AnimatedListState> _listKey = GlobalKey();
  late List<Project> projects;
  late List<Despesa> despesas =[];
  final List<Project> defaultProjects = [
    Project(
      'https://i.imgur.com/H6jMWDJ.png',
      "Interstellar",
    ),
    Project(
      'https://i.imgur.com/F3ETQZs.png',
      "Dunkirk",
    ),
    Project(
      'https://i.imgur.com/s7EqXi6.png',
      "Oppenheimer",
    ),
    Project(
      'https://i.imgur.com/cf2daHF.png',
      "Tenet",
    ),
  ];

  Future getDespesas({int index = 0}) async {
    final despesas = await DespesasSheetsApi.getAll();
    setState(() {
      this.despesas = despesas;
    });
  }


  @override
  void initState() {
    super.initState();
    getDespesas();
    projects = List.from(despesas);

  }

  void _removeProject(int index) async {
    final removed = projects.removeAt(index);
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
    Project removed,
  ) {
    return SizeTransition(
      sizeFactor: CurvedAnimation(
        parent: animation,
        curve: Curves.elasticOut,
      ).drive(Tween(begin: 0, end: 0)),
      child: ProjectsListItem(
        project: removed,
        onDelete: () {},
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedList(
      key: _listKey,
      initialItemCount: projects.length,
      itemBuilder: (context, index, animation) {
        return ProjectsListItem(
          key: ValueKey(index),
          onDelete: () => _removeProject(index),
          project: projects[index],
        );
      },
    );
  }
}
