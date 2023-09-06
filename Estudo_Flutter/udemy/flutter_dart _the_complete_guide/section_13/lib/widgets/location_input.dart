import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:location/location.dart';
import 'package:http/http.dart' as http;
import 'package:section_13/models/place.dart';

class LocationInput extends StatefulWidget {
  const LocationInput({super.key, required this.onSelectLocation});

  final void Function(PlaceLocation location) onSelectLocation;

  @override
  State<LocationInput> createState() => _LocationInputState();
}

class _LocationInputState extends State<LocationInput> {
  //Location? _pickedLocation;
  PlaceLocation? _pickedLocation;
  var _isGettingLocation = false;

  String get locationImage {
    if(_pickedLocation == null){
      return "";
    }
    final lat = _pickedLocation!.latitude;
    final lng = _pickedLocation!.longitude;
    print("Esta é a lat:$lat, esta é a long:$lng");
    return "https://maps.googleapis.com/maps/api/staticmap?center=$lat,"
        "$lng=&zoom=16&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C$lat,"
        "$lng&key=AIzaSyBMQ0Z7RPwaiYy6u1cZE6IJgbxxuhXt-Ds";

  }

  void _getCurrentLocation() async {
    Location location = Location();

    bool serviceEnabled;
    PermissionStatus permissionGranted;
    LocationData locationData;

    serviceEnabled = await location.serviceEnabled();
    if (!serviceEnabled) {
      serviceEnabled = await location.requestService();
      if (!serviceEnabled) {
        return;
      }
    }

    permissionGranted = await location.hasPermission();
    if (permissionGranted == PermissionStatus.denied) {
      permissionGranted = await location.requestPermission();
      if (permissionGranted != PermissionStatus.granted) {
        return;
      }
    }

    setState(() {
      _isGettingLocation = true;
    });
    locationData = await location.getLocation();
    final lat = locationData.latitude;
    final lng = locationData.longitude;

    if (lat == null || lng == null) {
      return;
    }

    final url = Uri.parse("https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=AIzaSyBMQ0Z7RPwaiYy6u1cZE6IJgbxxuhXt-Ds");
    //print("URL é $url");
    final response = await http.get(url);
    //print("Response é $response");
    final resData = json.decode(response.body);
    //print("resData é $resData");
    final address = resData["results"][0]["formatted_address"];
    //print("address é $resData");


    setState(() {
      _pickedLocation = PlaceLocation(longitude: lng, latitude: lat, address: address);
      _isGettingLocation = false;
    });

    widget.onSelectLocation(_pickedLocation!);
  }

  @override
  Widget build(BuildContext context) {
    Widget previewContent = Text(
      "No Location chosen",
      textAlign: TextAlign.center,
      style:
      Theme
          .of(context)
          .textTheme
          .bodyLarge!
          .copyWith(color: Theme
          .of(context)
          .colorScheme
          .onBackground),
    );

    if (_pickedLocation != null) {
      previewContent =
          Image.network(locationImage, fit: BoxFit.cover, width: double.infinity, height: double.infinity,);
    }

    if (_isGettingLocation) {
      previewContent = const CircularProgressIndicator();
    }

    return Column(
      children: [
        Container(
          height: 170,
          width: double.infinity,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            border: Border.all(
              width: 1,
              color: Theme
                  .of(context)
                  .colorScheme
                  .primary
                  .withOpacity(0.2),
            ),
          ),
          child: previewContent,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            TextButton.icon(
              onPressed: _getCurrentLocation,
              icon: const Icon(Icons.location_on),
              label: const Text("Get "
                  "Current Location"),
            ),
            TextButton.icon(
              onPressed: () {},
              label: const Text("Select on Map"),
              icon: const Icon(Icons.map),
            )
          ],
        )
      ],
    );
  }
}
