import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:section_13_flutter_dart_native_device_feat_camera_favorite_places_vs2_app/provider/user_places.dart';
import 'package:section_13_flutter_dart_native_device_feat_camera_favorite_places_vs2_app/screens/add_place.dart';
import 'package:section_13_flutter_dart_native_device_feat_camera_favorite_places_vs2_app/widgets/places_list.dart';


class PlacesScreen extends ConsumerWidget {
  const PlacesScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    
   final userPlaces = ref.watch(userPlacesProvider);
    
    
    return Scaffold(
      appBar: AppBar(
        title: const Text("Your Places"),
        actions: [
          IconButton(
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (ctx) => AddPlaceScreen(),
                ),
              );
            },
            icon: Icon(Icons.add),
          ),
        ],
      ),
      body: PlacesList(
        places: userPlaces,
      ),
    );
  }
}
