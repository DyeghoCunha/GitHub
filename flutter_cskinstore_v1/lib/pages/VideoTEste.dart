import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';


class VideoTest extends StatefulWidget {
  @override
  State<VideoTest> createState() => _MyAppState();
}

class _MyAppState extends State<VideoTest> {
  late VideoPlayerController _controller;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.asset("assets/videos/CsSkinTesteArma_tiro.mp4")
      ..initialize().then((_) {
        // Pausa o vídeo após inicializar
        _controller.pause();
      });
  }

  @override
  Widget build(BuildContext context) {
    return  Column(
            children: [
              Container(
                height: 200,
               width: double.infinity,
                color: Colors.redAccent,
                child: VideoPlayer(_controller),
              ),
              ElevatedButton(
                onPressed: () {
                  // Inicia o vídeo apenas uma vez
                  if (!_controller.value.isPlaying) {
                    _controller.play();
                  }
                },
                child: Text("Play"),
              ),
            ],
          );


  }
}