import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import 'package:url_launcher/url_launcher.dart';

class CardCustom extends StatefulWidget {
  CardCustom({super.key, this.nome, this.linguagem, this.gitHub, this.linkedIn, this.whatsApp, this.time,
    this.foto});

  final String? nome;
  final String? linguagem;
  final String? gitHub;
  final String? linkedIn;
  final String? whatsApp;
  final String? time;
  final String? foto;

  @override
  _CardCustomState createState() => _CardCustomState();
}

class _CardCustomState extends State<CardCustom> {
  String? avatarUrl;

  @override
  void initState() {
    super.initState();
    _fetchGitHubAvatar();
  }

  Future<void> _fetchGitHubAvatar() async {
    final githubUsername = widget.gitHub;
    List<String>? parts = githubUsername?.split("/");
    String? username = parts?.last;

    final url = Uri.parse('https://api.github.com/users/$username');
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final Map<String, dynamic> data = json.decode(response.body);
      final avatarUrl = data['avatar_url'];
      setState(() {
        this.avatarUrl = avatarUrl;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final Image linkedinImage = Image.asset("assets/images/linkeding.png");
    final Image githubImage = Image.asset("assets/images/github.png");
    final Image whatsappImage = Image.asset("assets/images/whats.png");
    const String? emblema = "assets/images/cardBase.png";


     String fundoCor = widget.time != null ? "assets/images/${widget.time}.png" : "assets/images/Mobile.png";

    return Padding(
      padding: const EdgeInsets.only(top: 50, bottom: 50),
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          SizedBox(
            width: 230,
            height: 330,
            child: Card(
              elevation: 10,
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8),
                  image: const DecorationImage(
                    image: AssetImage("assets/images/background.png"),
                    fit: BoxFit.fill,
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            bottom: 4,
            child: Container(
              decoration: const BoxDecoration(
                borderRadius: BorderRadius.only(bottomLeft: Radius.circular(8), bottomRight: Radius.circular(8)),
              ),
              child: ClipRRect(
                borderRadius: const BorderRadius.only(bottomLeft: Radius.circular(8), bottomRight: Radius.circular(8)),
                child: Image.asset(fundoCor, fit: BoxFit.fill),
              ),
            ),
          ),
          Positioned(
            top: -50,
            left: 20,
            child: CircleAvatar(
              radius: 92,
              child: avatarUrl != null
                  ? ClipOval(child: Image.network(avatarUrl!))
                  : CircularProgressIndicator(), // Mostra um indicador de progresso enquanto carrega
            ),
          ),
          Positioned(
            right: 5,
            bottom: 5,
            child: Column(
              children: [
                const SizedBox(
                  height: 24,
                ),
                InkWell(
                  onTap: () {
                    launchUrl(
                      Uri.parse(widget.linkedIn!));
                  },
                  child: SizedBox(
                    width: 40,
                    height: 40,
                    child: linkedinImage,
                  ),
                ),
                const SizedBox(
                  height: 10,
                ),
                InkWell(
                  onTap: () {
                    launchUrl(
                        Uri.parse(widget.gitHub!));
                  },
                  child: SizedBox(
                    width: 40,
                    height: 40,
                    child: githubImage,
                  ),
                ),
                const SizedBox(
                  height: 10,
                ),
                InkWell(
                  onTap: () {
                    String linkWhatsApp = 'https://wa.me/+55${widget.whatsApp}' ;
                    launchUrl(Uri.parse(linkWhatsApp));
                  },
                  child: SizedBox(
                    width: 43,
                    height: 43,
                    child: whatsappImage,
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            left:0,
            top: 133,
            child: Container(
              width: 230,
              child: Text(
                widget.nome!,
                style: TextStyle(fontSize: 22,),
                textAlign: TextAlign.center,
              ),
            ),
          ),
          Positioned(
            bottom: -30,
            left: -20,
            child: Stack(
              alignment: Alignment.center,
              children: [
                Container(
                  height: 170,
                  child: Image(
                    image: AssetImage(emblema!),
                    fit: BoxFit.contain,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(bottom: 20),
                  child: Container(
                      height: 120,
                      child: Image.asset("assets/images/${widget.linguagem}.png")),
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
