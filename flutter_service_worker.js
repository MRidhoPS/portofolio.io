'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "36b29c249da411b0a54de877f6472bd2",
".git/config": "6cc378890786309ed8f7d70926e4a101",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7872e1c0ad561c527e56e7d93e46787f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f34d7516cec32242a8f0dae81513912",
".git/logs/refs/heads/main": "01cce4251027fdc0617e892e538ae0d5",
".git/logs/refs/remotes/origin/main": "b8225e619a581cf1e8df266ee7ab92ad",
".git/objects/0a/f335f3845c64d583446e5fadb24c1fa47ea4db": "bb49622bd9b34cc4e64c33551875f7e2",
".git/objects/12/c18097b66bca27efb3defe07d243a9c5b00865": "2d2d3a8bcb975190c35eb87d40d1e924",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/9e663a3cc225a6d1548cd84a3e8123cf0dc867": "1c645476ab6f7aa8644fe02d075e9c59",
".git/objects/1b/c06f3c19f450bef44b13f3eedde6dba3f42a74": "43397dbb8716ac8bb9237d68aece17bc",
".git/objects/1b/c0f2364172de2d926d5807e49628660c8ebd61": "26188821d7ef8d5b0b87f105a36c30ef",
".git/objects/1c/29da13af59719bd532713dc115685ecf4fe14d": "43a3d617b36c20876ca48e5b7c770e83",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/e529a7b7bf589e1e49e73635af2faf3dceb632": "978f0643bf7431f455df1c47cd36e941",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/bd2b7150f1b302b8f41a1040529d91b7d812f8": "8c6550c4356ec3e0607385b57b8959b0",
".git/objects/2c/1c9a0242777de23ee2181c9c6808ff5cfefcfd": "39fe3dcf72b0cb25589347b278ab2829",
".git/objects/2c/a344dfa714d557482566b240b09d3c7b0cffb5": "cdf0facf3fffe25897c4b9ba14376d21",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/3d181b4aa977bae3bfba58a0388a7b50e4bde8": "beaefa3877bafbbcaace4296657b47a2",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/45/96f5b8e086b9cc9f5adaa6c28470ffe3cd879e": "1af9fab0649fff976f906b67a495c945",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/36e710c874a7db516510742b6b759827c3070e": "49a7660901b488639ff8cf4b7a578853",
".git/objects/5b/5c97adce3c279c6a470913d7f33292ddf4614f": "5166aa757f6fd2d5f093ada1a0497b0f",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5e/ba35632159a5ec71de4209784afe66efa44abf": "4de5750cd6954008ba9b4896d896e440",
".git/objects/64/0267f20dff66cae06bbad03832ce8561a4353f": "37ab6f72139033ba9512fb65c2fe3efe",
".git/objects/65/ab7e06e47aed37285e8f26c265defdedf1a337": "5fa5ad6296bda87083f44df346f465f6",
".git/objects/66/8e35814a6f202cfe3d64745893e7586d6d7926": "ae41d81e674c93cc9220e912b5a3f8c2",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/f74febd0e7ddbe99e29bd8fe2862773415459b": "1cad929b0ca8a793fd0532de0c819b0d",
".git/objects/75/3a4278c581ea63610cf53cb3aa70eb0dfc1590": "4e0372611505ffd1026eb6cacd943153",
".git/objects/7b/67e291bfc1c58b684bf00ea0ea206a4b465ff8": "9481f95e4cc74beaaf28fc8756f13321",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/32ebdc209ef044e693726f1c27cdf27bca1507": "cb915f232d4f9216b684e0340926509c",
".git/objects/7d/6daa865e4f08c8dc5af30f6989197574a25648": "5637b8873170ea8144de8909a649eda1",
".git/objects/7d/9be65ec02708649527e9fc74632b7aa0e50649": "80647d969dc07b4493b88b9ed6f0106f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a69564cf65696e2da5627c01bdb059eb3a552d": "97a628e23542814b6234551014491e32",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/7a6edbc33f248c5164ddbeebfda3cd3bee5823": "fc32bec66fa2684f1e40da8e36201019",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/4fd14677feaa67e40c1fb903f538fee5d8edb1": "1c8b8a95bf36af58575f3b44db616f48",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a4/7e4fc0c54ded29a0622414a914188adadb42ea": "bc526f98835e8239d318fef4a46baea1",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a7/5cdaf154b2b37b9f7e537fc19752f250aa71c4": "a094c0bbf87f8b82fd5d17542ba425f8",
".git/objects/a8/e7c8a6b3f6a41b032e2f7a7ab807b703750b84": "26b34faf0b9785a21cbcc48de6b0e981",
".git/objects/ab/f3827de2aaee9b16c72e1922c0b9055b3ad4d6": "13a9cbeda3f480871e4e40af3f8c02d8",
".git/objects/b1/12ce1ecc5d9bffadfe63e6f79fe6904971d51f": "c3464474e625388958e245cdce23511c",
".git/objects/b5/3f00f4f9ab1fe3fb1ca3764421920c74e61254": "868a491c7743a87b0ef5bc5c102d1272",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/bc86d60d6ea5004739c79ed67d2d603b9e3d7c": "a8177bca660dee00cf5edbc835b96347",
".git/objects/ce/4069b4484a370d05b19449222492dd09242240": "fa219373416c9333d64fa952268930be",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/6455fc0c8e4b1088aca61b56c8b115057b8fb7": "5c6b1fab405b3a49bb63668aa10b3354",
".git/objects/db/691e4a11f71af84dcbc65b2e7cea74e388668d": "e4a950d47551cffa9f5754c3f39506dd",
".git/objects/e0/00b8ff112467a5a13dac9d692555dec58382ec": "6362a085af427bcb5e542b52190947e4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/fb/35b20bf5765f287861472e1c018b150228d601": "71e9c7130788e3c379368c109b4d652c",
".git/objects/fc/b0614a22fd708c46aefbfccdd43cb5eb1cf913": "e81a1a40a6a7e4b4a566ba4ac798ed91",
".git/objects/fd/1eb608f814622ae4d6e2fd31fc5c921d74cd28": "1fa87fab2d77a8a21059ca1b585e7a34",
".git/refs/heads/main": "e5a73250ad95054ef8ae384d3beeb4ad",
".git/refs/remotes/origin/main": "e5a73250ad95054ef8ae384d3beeb4ad",
"assets/AssetManifest.bin": "98df2f877ae77c15da45618634fa718b",
"assets/AssetManifest.bin.json": "2909a15d08bd101150abe70e3a3e4667",
"assets/AssetManifest.json": "edf5464bedb93eba62aee253ebdbf0be",
"assets/assets/alquran1.png": "f8b5dc0e711703c9a8e09cca87520108",
"assets/assets/alquran2.png": "46629ecd1b8fc0ab237b106d3c6af295",
"assets/assets/alquran3.png": "74b6edbfe3aeaa977b57db2468ff2b5c",
"assets/assets/cv.pdf": "38f8b756caf8128c13fea238bf3207c1",
"assets/assets/developer_male.jpg": "9b788f3ff7fc1f7c5a3aa6f320c88d56",
"assets/assets/mt1.png": "928b3fb080048ed7bcdf76d9f24eb9b8",
"assets/assets/mt2.png": "935299e4177f9d18f39a37a6a0935d9a",
"assets/assets/mt3.png": "e6b8993a92be18927674be06652b1418",
"assets/assets/mt4.png": "96283044285679ed13dad4386a8e0eb4",
"assets/assets/sa1.png": "5a8cc00dd80a5b46af6f6ad0141d3a6c",
"assets/assets/sa2.png": "f7853114b5e88e914ca7eea27eb4d30a",
"assets/assets/sa3.png": "73c49146143d4ca87969c07e595c89c1",
"assets/assets/sa4.png": "72aa57303c676ef563b17d3b3f681197",
"assets/assets/Saly.png": "3818f0eb0a406482ebe54bbd00902e92",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "170170b0b919cde417a4534c1c5c95dc",
"assets/NOTICES": "8c643bae1b9b01e0ca8eb33cb31582cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "f883f2e70df563c4e6cecc95c9bee72a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d547d56129e94ffbfc17a30a08e65320",
"/": "d547d56129e94ffbfc17a30a08e65320",
"main.dart.js": "91428455bef85a006a08585cf1ead1f0",
"manifest.json": "d454795ec90f470ee481df70d1276310",
"version.json": "12a92ef79835b40a6093bcc932b54998"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
