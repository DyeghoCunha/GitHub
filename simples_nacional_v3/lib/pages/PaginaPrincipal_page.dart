import 'package:flutter/material.dart';
import 'package:simples_nacional_v3/components/sections/account_actions.dart';

import '../themes/images.dart';

class PaginaPrincipalPage extends StatelessWidget {
  const PaginaPrincipalPage({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> fundoLista = Theme.of(context).brightness == Brightness.light
        ? Imagens.cardFuncoesLight
        : Imagens.cardFuncoesLight;

    return Container(

      child: GridView.custom(
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 1,
        ),
        childrenDelegate: SliverChildListDelegate(
          [
             const _cardFuncoesRow(),
          ],
        ),
      ),
    );
  }
}

class _cardFuncoesRow extends StatelessWidget {
  const _cardFuncoesRow({super.key});

  @override
  Widget build(BuildContext context) {
    List<String> fundoLista = Theme.of(context).brightness == Brightness.light
        ? Imagens.cardFuncoesLight
        : Imagens.cardFuncoesLight;
    return CustomScrollView(
      scrollDirection: Axis.horizontal,
      slivers: [
        SliverList(
            delegate: SliverChildListDelegate([
          for (var fundo in fundoLista)
            _cardFuncoes(
              fundo: fundo,
            )
        ]))
      ],
    );
  }
}

class _cardFuncoes extends StatelessWidget {
  _cardFuncoes({super.key, required this.fundo});

  String fundo;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      children: [
        Card(
          child: Container(
            height: 100,
            width: 150,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(6),
              image: DecorationImage(
                image: AssetImage(fundo),
                fit: BoxFit.fill,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
