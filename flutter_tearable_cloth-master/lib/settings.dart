import 'package:flutter/material.dart';

const double canvasWidth = 900;
const double canvasHeight = 500;
const double clothWidth = 100;
const double clothHeight = 60;

const double gravity = 1200;
const int physicsAccuracy = 3;
const double friction = 0.98;

const double spacing = 3;
const double tearDistance = 50;

const Offset start =
    Offset(canvasWidth * 0.5 - (clothWidth * spacing) * 0.5, 20);

const double mouseInfluence = 40;
const double mouseCut = 7;
