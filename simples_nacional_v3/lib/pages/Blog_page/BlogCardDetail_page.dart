import 'package:flutter/material.dart';

import 'BlogCardDetail_model.dart';

class BlogCardDetailPage extends StatelessWidget {
  const BlogCardDetailPage({super.key, required this.blogCardDetail});

  final BlogCardDetail blogCardDetail;

  @override
  Widget build(BuildContext context) {
    return Hero(
      tag: blogCardDetail.id,
      child: SafeArea(
        child: Scaffold(
          appBar: AppBar(title: Text(blogCardDetail.title)),
          body: Container(
            decoration: BoxDecoration(
              image: DecorationImage(
                  image: Theme.of(context).brightness == Brightness.light
                      ? const AssetImage("assets/images/fundo0.png")
                      : const AssetImage("assets/images/fundo0d.png"),
                  fit: BoxFit.cover),
            ),
            child: ListView(
              children: [
                Column(
                  children: [
                    Container(
                      width: double.infinity,
                      height: 100,
                      decoration: BoxDecoration(
                        image: DecorationImage(
                          image: AssetImage(blogCardDetail.url),
                          fit: BoxFit.fitWidth,
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 20),
                      child: Expanded(
                          child: Text(
                        blogCardDetail.text,
                        style: TextStyle(color: Theme.of(context).colorScheme.onBackground),
                      )),
                    )
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
