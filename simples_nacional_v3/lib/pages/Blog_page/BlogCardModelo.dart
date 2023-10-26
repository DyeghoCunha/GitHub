import 'package:flutter/material.dart';

import 'BlogCardDetail_model.dart';
import 'BlogCardDetail_page.dart';


class BlogCardModelo extends StatelessWidget {
  const BlogCardModelo({super.key, required this.blogCardDetail});

  final BlogCardDetail blogCardDetail;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (ctx) => BlogCardDetailPage(blogCardDetail: blogCardDetail),
          ),
        );
      },
      child: Container(
        width: double.infinity,
        margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        child: Hero(
          tag: blogCardDetail.id,
          child: Card(
            elevation: 20,
            surfaceTintColor: Colors.blue,
            child: Row(
              children: [
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: CircleAvatar(
                      radius: 50,
                      backgroundColor: Colors.transparent,
                      backgroundImage: const AssetImage("assets/images/fundo3.png"),
                      child: Image.asset(blogCardDetail.url)),
                ),
                Expanded(
                  child: Text(
                    blogCardDetail.title,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      color: Colors.blue,
                      fontSize: 23,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
