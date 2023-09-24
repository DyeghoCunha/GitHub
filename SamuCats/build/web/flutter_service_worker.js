'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b5736813560966d3ec5c7c17c6f42e49",
"assets/AssetManifest.json": "b07356f2a0ba6b5453a8b0de36a2d995",
"assets/assets/images/BackEnd.png": "736695825e2e1cd1e297b4a8f99c3513",
"assets/assets/images/background.png": "c473c96d928f2920fb1f3967faf6eb93",
"assets/assets/images/C%2523.png": "fdd1d1deec05af3b318db10fef9bef91",
"assets/assets/images/C++.png": "a822448ff5606636b3af2b86a9e2a0c0",
"assets/assets/images/C.png": "37a0afcd53172bbcfdcc428739764880",
"assets/assets/images/cardBase.png": "f611b841c29cb3f4b1195fa27b8637da",
"assets/assets/images/Dart.png": "fed6f27c0809d3263324a6d12835f551",
"assets/assets/images/dash.png": "8ef1948cfbc50d7ea13ba70c59bf712c",
"assets/assets/images/DevOps.png": "cd9121c5f1eeae9aa5190fb64517312e",
"assets/assets/images/DuchessCheers.png": "e9ef0bb7883da1a199c84bbbd0535dda",
"assets/assets/images/duke.gif": "f141538ccb54600f323ee1f7b91bd1ac",
"assets/assets/images/DukeCheers.png": "37aaca0cc4cd398b66df428d076ab260",
"assets/assets/images/escudo.png": "41aab60b00cf584d40930bb8dd73b33e",
"assets/assets/images/face.gif": "ada87b3922abf9db571d1b324b5b1dc7",
"assets/assets/images/FrontEnd.png": "bc035a534c69050dcd537703d8d68542",
"assets/assets/images/FullStack.png": "e0fe57e97cf1c8a8a4d61bd959197a42",
"assets/assets/images/github.png": "877c2ecd5c8e6d9baa7218e29749145a",
"assets/assets/images/Go.png": "25595941476e31a89f2a67ee310c20f7",
"assets/assets/images/Java.png": "22e318b0dc4a635686aac8047ccea893",
"assets/assets/images/JavaScript.png": "e2203f4c7e621ee83b800e307ffa96bf",
"assets/assets/images/Kotlin.png": "7f5682848527b9b6e9825238c7044fdc",
"assets/assets/images/linkeding.png": "f4782374b424b9ad3dbf4babf3b6b35b",
"assets/assets/images/loading.gif": "748ece8d35317f32a1f107f32114a52e",
"assets/assets/images/Mobile.png": "35318ef3308fb2cbb4f459a89fd63c35",
"assets/assets/images/Php.png": "b70e17f147f5f9f7d59a9fee80e21e18",
"assets/assets/images/Python.png": "ddd3aa9f6035568f95aa07507ce8070e",
"assets/assets/images/Ruby.png": "d2d53fcb3eef9c3b1f56e3a788e0c026",
"assets/assets/images/Rust.png": "ac543a58cea9990c75fbc9f0c07657c2",
"assets/assets/images/Sap.png": "cb3460c1f1886728fe1eb2976215e44d",
"assets/assets/images/Swift.png": "281cec4efca56eccb1ff72607296004d",
"assets/assets/images/TypeScript.png": "8d96bb50e1901a9f6c4494fbb23c02ea",
"assets/assets/images/UiUx.png": "8ea9178fd81284c5592d179fbf4772e4",
"assets/assets/images/whats.png": "62e878a3b5d05c5072641fcc96cfe487",
"assets/assets/images/youtube.png": "055bbbd906354863427f58929530a2a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "91497dcee5254ccdeee75691744588cd",
"assets/NOTICES": "b198a632353f81fb4e447b565eeffd91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "848f801c1cbcd3eb70fc60a36d68c164",
"/": "848f801c1cbcd3eb70fc60a36d68c164",
"main.dart.js": "e95dd88c814a48a7ff33deb2777033cd",
"manifest.json": "650637eac34a4b3390b6017cdc60660d",
"version.json": "ae100a779e9fda2a7b9b1052b0d881d7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
