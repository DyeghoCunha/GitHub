import 'package:flutter/material.dart';
import 'package:liquid_pull_to_refresh/liquid_pull_to_refresh.dart';
import 'BlogCardDetail_model.dart';
import 'BlogCardDetail_repository.dart';
import 'BlogCardModelo.dart';

class BlogPage extends StatefulWidget {
  const BlogPage({Key? key}) : super(key: key);

  @override
  State<BlogPage> createState() => _BlogPageState();
}

class _BlogPageState extends State<BlogPage> {
  final GlobalKey<LiquidPullToRefreshState> _refreshIndicatorKey =
  GlobalKey<LiquidPullToRefreshState>();

  Future<List<BlogCardDetail>>? listCard;

  @override
  void initState() {
    super.initState();
    listCard = BlogCardDetailRepository.get();
  }

  Future<void> _handleRefresh() async {
    listCard = BlogCardDetailRepository.get();
    await listCard;
    await Future.delayed(const Duration(seconds: 2));
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<BlogCardDetail>>(
      future: listCard,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        } else if (snapshot.hasError) {
          return Text('Erro: ${snapshot.error}');
        } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
          return const Text('Nenhum dado disponível');
        } else {
          return Container(
            decoration:  BoxDecoration(
              image: DecorationImage(
                  image: Theme.of(context).brightness == Brightness.light
                      ? const AssetImage("assets/images/fundo1.png")
                      : const AssetImage("assets/images/fundo1d.png"),
                  fit: BoxFit.cover
              ),
            ),
            child: LiquidPullToRefresh(
              backgroundColor: Theme.of(context).colorScheme.background,
              showChildOpacityTransition: false,
              springAnimationDurationInMilliseconds: 3000,
              borderWidth: 2,
              animSpeedFactor: 100,
              height: 100,
              color: Colors.green,
              key: _refreshIndicatorKey,
              onRefresh: _handleRefresh,
              child: ListView(
                addRepaintBoundaries: true,
                children: snapshot.data!.map((card) {
                  return BlogCardModelo(blogCardDetail: card);
                }).toList(),
              ),
            ),
          );
        }
      },
    );
  }
}
