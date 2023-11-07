import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:riveo_page_curl/projects/project.dart';
import 'package:riveo_page_curl/projects/card/project_card.dart';

class ProjectsListItem extends StatelessWidget {
  const ProjectsListItem({
    Key? key,
    required this.project,
    required this.onDelete,
  }) : super(key: key);

  final Project project;
  final VoidCallback onDelete;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: SizedBox(
        height: 170,
        width: double.infinity,
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Positioned.fill(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: SizedBox(
                  child: Container(
                    decoration: BoxDecoration(
                      color: Colors.red.withOpacity(0.8),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    clipBehavior: Clip.antiAlias,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        IconButton(
                          onPressed: () {},
                          icon: const Icon(
                            CupertinoIcons.delete,
                            color: Colors.white,
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              ).animate(effects: [
                const VisibilityEffect(delay: Duration(milliseconds: 500))
              ]),
            ),
            Positioned.fill(
              child: ProjectCard(
                onDelete: () => onDelete(),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(10),
                  clipBehavior: Clip.hardEdge,
                  child:Container(color: Colors.blue,)
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
