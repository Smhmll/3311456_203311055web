'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "39e3d19ef689220eb7e9df3e2d744fab",
"assets/assets/bulutlu.png": "304d5413ebba4eae9516e37a0f0383e3",
"assets/assets/gece.png": "2b4bdce325ac90f30a233fe85122f8c7",
"assets/assets/gunesli.png": "612a621e4d664136a7b64b2375f42c09",
"assets/assets/topImage.png": "1bb9f8b587df8f3d716fb5c3325a6879",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4be5b17d6b528b8fb027537027efcd75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/resimler/abant.png": "de9e24e7ba1aa14bbe5e811ddba5c5f2",
"assets/resimler/abant_k%25C4%25B1s.png": "30f612b9f4eab30a47b1fa7fd80a42f0",
"assets/resimler/abant_ust.png": "5c3f7fe2fc93439f996da8a24e235b10",
"assets/resimler/agr%25C4%25B1%25C4%25B1.png": "6718afa74f2ec387cf51f79ac50871d2",
"assets/resimler/akdeniz.png": "44dd9a3b6131b379ddd1ba536970a470",
"assets/resimler/alanya_kalesi.png": "5f833e2e0032e5566988325eea4b2781",
"assets/resimler/an%25C4%25B1tkabir.png": "2f78f9aca62d320b88212aae93d4773e",
"assets/resimler/apollon.png": "118b4c81b5ee80b5d7771b3ff9b9935f",
"assets/resimler/apollon_heykel.png": "e25a9247bd16a0def1be07125f7e4758",
"assets/resimler/apollon_tapinak.png": "7919ba6b706e160e4afebd1bb688b20c",
"assets/resimler/asas.png": "0f45abd650eb2d6941dbaf360df7e72b",
"assets/resimler/aspendos.png": "1338ba52f18784999b5c1a9bf8af2639",
"assets/resimler/aspendos_%25C3%25BCst.png": "06288158cadf7589cb130ecfc1fa95e9",
"assets/resimler/aspendos_yan.png": "547007b8c180996f8beb60da7fd111d2",
"assets/resimler/ayasofya.png": "e22faf2b85cf0fe8174ebeb76fa8d389",
"assets/resimler/ayasofya_camii.png": "f4a39d58a12720f76457a7d5681758e9",
"assets/resimler/ayasofya_ic.png": "b94d2d91dca3a3aac86b80791dd4b842",
"assets/resimler/balikligol.png": "8f888ef534ecbb1b4354f0cdaa40aef0",
"assets/resimler/balikligol_dis.png": "07748939b1bb3aeb73022b29e3fcd658",
"assets/resimler/balikligol_gece.png": "d79ffaa03af33fc03428af7310ce0a0c",
"assets/resimler/balon.png": "a3672e1f9be2bcb512365a9b693b265a",
"assets/resimler/bandirma.png": "c5d4e5143e7a3f1736ac456ca1649b57",
"assets/resimler/bandirma_dis.png": "d14917d23df726ecf63bd2a0ba52cbc0",
"assets/resimler/bandirma_ic.png": "1eed98e0dd3682d6ccf1329f63e512de",
"assets/resimler/belcekiz.png": "a0d906aa21af81b25158675f0c108082",
"assets/resimler/bodrum_kalesi.png": "23bed9ce76d3704954793765305949bd",
"assets/resimler/bodrum_kalesi_uzak.png": "fe7ffb39acb8ba56f4c5658aedcabce4",
"assets/resimler/bodrum_kalesi_yan.png": "4e1e9bba2cc75a01ae7f9e5dfe40069c",
"assets/resimler/bolge.png": "b73e1e0fa0d06b7e378ec62d81461ab3",
"assets/resimler/celsus.png": "b457401b475db881b76a3b2228a3ded0",
"assets/resimler/celsus_eski.png": "c9d33f7a69c39c42b7f2711e948644c4",
"assets/resimler/celsus_yan.png": "e188021fa015c382b7420166578f6dd7",
"assets/resimler/cifte_minare.png": "963b4ebab458059f61563ea699cc40a8",
"assets/resimler/cifte_minare_gece.png": "c7425b15583fe81fc4737384d352eb8f",
"assets/resimler/cifte_minare_ic.png": "ccbc82c79dd09aa1ef2f3d9d51f8944a",
"assets/resimler/dara.png": "58ae43b59a2105c9ff6871ba4ed96f9f",
"assets/resimler/dara_antik_kent.png": "cea843730e3c75961ca61d3f194da79d",
"assets/resimler/dara_ic.png": "2746c428a2483ab53ace11d62f1fad93",
"assets/resimler/efes.png": "9549012a90acc4eedf1302ce9b05bd9e",
"assets/resimler/efes_giris.png": "88bf30cc5fd9012f9bacb2dbaa0c7252",
"assets/resimler/efes_tiyatro.png": "5f88480bd1c9c8b57d7e751b61f2219e",
"assets/resimler/efes_ust.png": "d581dd9f987ec32f9fa865cab61463c7",
"assets/resimler/gabriel_dis.png": "e5bcc9798c29de8e9cdbfb7e04c3b03b",
"assets/resimler/gabriel_ic.png": "28f60e0c58123a3668e91082c065be7d",
"assets/resimler/gabriel_ust.png": "a45bd8ab9f47d14eb58b97d98689489c",
"assets/resimler/galata.png": "93acee0efedb21712a653df2a5bbf1b5",
"assets/resimler/galata_kulesi.png": "8bf7dee054dfe637a4610b25bdfd801b",
"assets/resimler/galata_muze.png": "568a5d956f620a6425a963eaaa9526d2",
"assets/resimler/gezi.png": "f27347c8ae9027e84f39dbde391c7458",
"assets/resimler/guney.png": "ca2c6d67a7e99464533078b4e22553dc",
"assets/resimler/harput_kale.png": "e75ad5a7fd0574a9ab4fc1ac9c94323d",
"assets/resimler/harput_kale_dis.png": "099cf67f6c5a25886a1c8eac9b115e6a",
"assets/resimler/harput_kale_uzak.png": "7f8fe854004970e87690f137cf2aaa80",
"assets/resimler/ihlara.png": "4bc0ab2d33cecaff24b64310a8125493",
"assets/resimler/ihlara_dere.png": "a6fcc9986bb67c2f7252ba49094a2470",
"assets/resimler/ihlara_kilise.png": "acdf070aea85a11261aeed041e59bd6c",
"assets/resimler/img.png": "99ee2950598f61ee2f095a6b8510c4f6",
"assets/resimler/ishak_pasa_dis.png": "7945d51aeedeb8ba0b519fab41e4e020",
"assets/resimler/ishak_pasa_ic.png": "fc7e6f4764e40931ba0054100e1bb8c9",
"assets/resimler/ishak_pasa_minare.png": "2814d606fcdf599798b153f93e31288e",
"assets/resimler/islahiye.png": "f2537de3ea48fbad226d01f63a447969",
"assets/resimler/islahiye_bayrakl%25C4%25B1.png": "3a03a364caa48a4f60734e0eb672d2ec",
"assets/resimler/islahiye_dis.png": "fc2cbffdaadbf5fd425fdfcf5b4616d6",
"assets/resimler/kaleici.png": "6c286b1faad5f14a5b15d7e73bb1a9d5",
"assets/resimler/kaleici_marina.png": "ea4b006a79a359e7ef3004d9d4233453",
"assets/resimler/kaleici_yan.png": "c94f06d85761759c7fc195f02aba806b",
"assets/resimler/kapadokya.png": "1ad9073f958d837ec3fe4ef102fb347f",
"assets/resimler/karadeniz.png": "2b42bd2b2c566ab9253edb04ab6e4190",
"assets/resimler/kayak.png": "13c6d06cb9f4b8e7eb6f1bb2e43291dd",
"assets/resimler/kopru.png": "21b461bdfb1bb65f317858d7498983d8",
"assets/resimler/malabadi.png": "90f4e396b571a13095ac70a18c830cc0",
"assets/resimler/malabadi_ust.png": "e500c61bbb17bb7df020d1318aea4905",
"assets/resimler/manzara.png": "d8d7a8470bfeb18b56e34b8bc3a7a736",
"assets/resimler/mevlana_gece.png": "fcd6041a185bb440b04b35e1092abc1e",
"assets/resimler/mevlana_ic.png": "d4e91492b84c0c6685653454c9d6129d",
"assets/resimler/mevlana_ust.png": "37477fad8f3af9dc71dc3ffe8b5f1443",
"assets/resimler/munzur.png": "7726aadd4b252c0f1af54b3362770952",
"assets/resimler/munzur_bir.png": "3085113cea6a3d794e8e6e57d1c7d1fa",
"assets/resimler/munzur_iki.png": "b7941e3e60b56aeda09034647d8c0583",
"assets/resimler/muze.png": "8f703962de34b6891a5b12765294a9c0",
"assets/resimler/muze_ici.png": "ca709b0c6d5ee60949d90e498ffcb36a",
"assets/resimler/muze_mezar.png": "e30ed8857c69b71c7674c40e0acbdd80",
"assets/resimler/odunpazari_evler.png": "b02b0dd2f9552052caac127dd8d477b2",
"assets/resimler/odunpazari_mavi.png": "bce4f409a4fa8bd3f16829988b956d44",
"assets/resimler/odunpazari_sokak.png": "b72a6ad0908b0c3d8dfce94c719bc54b",
"assets/resimler/oludeniz.png": "e8f1bb30ccab2475c29b561224436020",
"assets/resimler/parasut.png": "0081fd0056e785c45fc385f9811e8969",
"assets/resimler/peri_bacalari.png": "f4a16ab3a3ad7c3e7d17437e1f578fa6",
"assets/resimler/peri_bacalari_manzara.png": "dc99730af77e7f2475587a2ec7c8b65d",
"assets/resimler/saklikent_bir.png": "97d0dc3f5a1cd7b34ea527b3ce03e216",
"assets/resimler/saklikent_iki.png": "700f07a820282bf2965b147aef42b37c",
"assets/resimler/saklikent_uc.png": "a509a1d95a9204d0b2e1f09e0049e8e1",
"assets/resimler/selimiye.png": "51978eff899e922d7014d72a4f09db86",
"assets/resimler/selimiye_d%25C4%25B1s.png": "078d76b103a6a9a4f190519495d95735",
"assets/resimler/selimiye_ic.png": "86060b636dfc40e727fbdc3be4e9f14c",
"assets/resimler/side.png": "e61d1f3e46c37df4e5ffe47991b994dc",
"assets/resimler/side_tiyatro.png": "90c3b99b3a14f48d9703c7382df4872b",
"assets/resimler/sumele.png": "db4a9a3ca4c146a983ba49bac8946c92",
"assets/resimler/sumele_d%25C4%25B1s.png": "1aea6060415af1c89f062e185e517c6a",
"assets/resimler/sumele_ic.png": "d408c842c50ef1b7b77e5d53f2470ed8",
"assets/resimler/taht.png": "532223bea617d2d2848b8b7996ce2f91",
"assets/resimler/topkapi.png": "3a4b5de8c3651b3364255c53325c0b94",
"assets/resimler/topkapi_ic.png": "333edffacfaf8b802a5c6065ccb11cef",
"assets/resimler/trabzon_ayasofya.png": "64f60dc70304f0f8854909a3c831ebbf",
"assets/resimler/trabzon_ayasofya_ic.png": "012c50b3c92e453b9be3615ac7975bdd",
"assets/resimler/trabzon_ayasofya_ust.png": "13b2c62e969a532746a42cc92562750a",
"assets/resimler/uludag.png": "32cf2469cce5a856773109656f80e651",
"assets/resimler/zilkale.png": "10919973596400f10f3502a03f03bbf2",
"assets/resimler/zilkale_ic.png": "8ae02caab0b5710158e68b08e2c23169",
"assets/resimler/zilkale_ust.png": "328da9578a0f920172df185a59499c2b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c8f13c761ea46fa4dfbb0b494293a6b",
"/": "8c8f13c761ea46fa4dfbb0b494293a6b",
"main.dart.js": "c3fe54410ade3aaafe93eb5eeb5816be",
"manifest.json": "ad5e09d17a08dae4bb92ffdf52647348",
"version.json": "c189a8c259298280e5525c836ac2d277"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
