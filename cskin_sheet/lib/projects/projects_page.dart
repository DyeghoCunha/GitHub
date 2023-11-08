import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'projects_list.dart';

class RiveoProjectsPage extends StatefulWidget {
  const RiveoProjectsPage({super.key});

  @override
  State<RiveoProjectsPage> createState() => _RiveoProjectsPageState();
}

class _RiveoProjectsPageState extends State<RiveoProjectsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      backgroundColor: Colors.black,
      body: const Stack(
        clipBehavior: Clip.none,
        children: [
          ProjectsList(),
        ],
      ),
    );
  }

  Widget _buildTab(String icon, String text) {
    final isSelected = text == "Projects";
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.all(16) + const EdgeInsets.only(bottom: 16),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(
              height: 28,
              width: 22,
              child: SvgPicture.string(
                icon,
                colorFilter: isSelected
                    ? null
                    : const ColorFilter.mode(
                        Color(0xFF696969),
                        BlendMode.srcATop,
                      ),
              ),
            ),
            const SizedBox(width: 4),
            Text(
              text,
              style: TextStyle(
                color: isSelected ? Colors.white : const Color(0xFF696969),
              ),
            )
          ],
        ),
      ),
    );
  }
}
