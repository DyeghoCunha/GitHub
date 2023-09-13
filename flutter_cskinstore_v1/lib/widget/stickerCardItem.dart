import 'package:flutter/material.dart';
import 'package:flutter_cskinstore_v1/widget/stickerCardCustomBottomSheet.dart';

class StickerCardItem extends StatelessWidget {
  const StickerCardItem({super.key});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: (){
        showModalBottomSheet(
          context: context,
          elevation: 10,
          shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.only(
              topRight: Radius.circular(10),
              topLeft: Radius.circular(10),
            ),
          ),
          backgroundColor: Theme.of(context).colorScheme.secondary.withOpacity(1),
          clipBehavior: Clip.antiAlias,
          barrierColor: Theme.of(context).colorScheme.secondary.withOpacity(0.5),
          useSafeArea: true,
          showDragHandle: true,
          enableDrag: true,
          builder: (ctx) => StickerCardCustomBottomSheet(),
        );
      },
      child: Padding(
        padding: const EdgeInsets.all(5.0),
        child: Card(
         elevation: 10,
          shadowColor: Colors.black,
          margin: const EdgeInsets.all(10),
          child: Expanded(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                Image.asset("assets/sticker/1.png", fit: BoxFit.fill,),
                const SizedBox(height: 4,),
               Text("+ R\$ 314,23", style: TextStyle(color: Colors.deepPurple.shade300,fontWeight: FontWeight
                       .w500,fontSize: 15),),
              ],),
            ),
          ),
        ),
      ),
    );
  }
}
