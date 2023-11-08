import 'package:audioplayers/audioplayers.dart';
import 'package:cskin_sheet/projects/card/shader_helper.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_shaders/flutter_shaders.dart';
import '../projects/delete_project_dialog.dart';
import 'despesa_curl_card_constantes.dart';

class DespesaCurlCard extends StatefulWidget {
  const DespesaCurlCard({
    Key? key,
    required this.child,
    required this.onDelete,
  }) : super(key: key);

  final Widget child;
  final VoidCallback onDelete;

  @override
  State<DespesaCurlCard> createState() => _DespesaCurlCardState();
}

class _DespesaCurlCardState extends State<DespesaCurlCard>
    with TickerProviderStateMixin {
  final double cornerRadius = 10.0;

  late final AnimationController _animation;
  late final AudioPlayer _audioPlayer;
  late double _width;

  bool _isPlaying = false;
  bool _isDialogShown = false;

  @override
  void initState() {
    super.initState();
    _animation = AnimationController.unbounded(
      vsync: this,
      duration: DespesaCurlCardCosntante.animationDuration,
    );
    _animation.value = 0.0;
    _audioPlayer = AudioPlayer();
  }

  Future<void> _playPauseAudio() async {
    if (!_isPlaying) {
      await _audioPlayer.seek(DespesaCurlCardCosntante.seekAudioDuration);
      await _audioPlayer.play(AssetSource(DespesaCurlCardCosntante.audioAsset));
      setState(() => _isPlaying = true);
    }
  }

  Future<void> _showDialog() async {
    setState(() {
      _isDialogShown = true;
    });
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return DeleteProjectDialog(
          onCancel: _handleCancel,
          onDelete: _handleDelete,
        );
      },
    );
    setState(() {
      _isDialogShown = false;
    });
  }

  Future<void> _handleCancel() async {
    HapticFeedback.mediumImpact();
    Navigator.of(context).pop();
    await _animation.animateTo(
      0,
      duration: DespesaCurlCardCosntante.pauseAnimationDuration,
    );
  }

  Future<void> _handleDelete() async {
    HapticFeedback.heavyImpact();
    Navigator.of(context).pop();
    await _animation.animateTo(
      0,
      duration: DespesaCurlCardCosntante.deleteAnimationDuration,
    );
    widget.onDelete();
  }

  void _onHorizontalDragUpdate(DragUpdateDetails details) {
    _width = context.size!.width;
    final double newPointer =
        _animation.value + details.primaryDelta! * _width / 200;
    _animation.value = newPointer;
    final double value = _animation.value + _width;

    if (value < -DespesaCurlCardCosntante.dialogThreshold && !_isDialogShown) {
      _showDialog();
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onHorizontalDragStart: (_) => _playPauseAudio(),
      onHorizontalDragUpdate: _onHorizontalDragUpdate,
      onHorizontalDragEnd: (_) => _stopAudioAndReset(),
      onHorizontalDragCancel: _resetAnimation,
      child: AnimatedBuilder(
        animation: _animation,
        builder: _buildAnimatedCard,
      ),
    );
  }

  Widget _buildAnimatedCard(BuildContext context, Widget? child) {
    return ShaderBuilder(

          (context, shader, _) {
        return AnimatedSampler(
              (image, size, canvas) {
            ShaderHelper.configureShader(shader, size, image, _animation.value);
            ShaderHelper.drawShaderRect(shader, size, canvas);
          },
          child: widget.child,
        );
      },
      assetKey: DespesaCurlCardCosntante.shaderAssetKey,
    );
  }

  Future<void> _stopAudioAndReset() async {
    await _audioPlayer.stop();
    setState(() => _isPlaying = false);
    if (!_isDialogShown) {
      _resetAnimation();
    }
  }

  void _resetAnimation() {
    HapticFeedback.selectionClick();
    if (!_isDialogShown) {
      _animation.animateTo(0);
    }
  }

  @override
  void dispose() {
    _audioPlayer.dispose();
    _animation.dispose();
    super.dispose();
  }
}
