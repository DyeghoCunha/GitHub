import 'package:flutter/material.dart';
import 'package:pizzariabc/cardapio.dart';
import 'package:pizzariabc/components/main_drawer.dart';
import 'package:pizzariabc/components/order_item.dart';
import 'package:pizzariabc/components/payment_method.dart';
import 'package:pizzariabc/components/payment_total.dart';

class CheckOut extends StatelessWidget {
  const CheckOut({super.key});

  @override
  Widget build(BuildContext context) {
    final List items = pedido;

    return Scaffold(
        appBar: AppBar(
          title: const Text("Ristorante Panucci"),
          backgroundColor: Theme.of(context).colorScheme.surfaceVariant,
          actions: const <Widget>[
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 16.0),
              child: Icon(
                Icons.account_circle,
                size: 32,
              ),
            )
          ],
          centerTitle: true,
        ),
        drawer: const MainDrawer(),
        body:  Padding(
          padding: const EdgeInsets.all(16),
          child: CustomScrollView(
            slivers: <Widget>[
              const SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.only(bottom: 8),
                  child: Text(
                    "Pedido",
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
              SliverList(
                delegate: SliverChildBuilderDelegate((context, index) {
                  return OrderItem(
                    imageURI: items[index]["image"],
                    itemTitle: items[index]["name"],
                    itemPrice: items[index]["price"],
                  );
                },childCount: items.length),
              ),
              const SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.only(bottom: 8),
                  child: Text(
                    "Pagamento",
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
              const SliverToBoxAdapter(child: PaymentMethod(),),
              const SliverToBoxAdapter(
                child: Padding(
                  padding: EdgeInsets.only(bottom: 8),
                  child: Text(
                    "Confirmar",
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
              const SliverToBoxAdapter(child: PaymentTotal(),)
            ],
          ),
        )

        //pages.elementAt(_currentPage),
        );
  }
}
