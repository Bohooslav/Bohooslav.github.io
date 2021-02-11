var APP_PREFIX = "SongBook_v"; // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = "2.0"; // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION;
var URLS = [
  // Add URL you want to cache in this list.
  "/", // If you have separate JS/CSS files,
  "/index.html", // add path to those files here
  "/static/app/client.OSX5SVMF.js",
  "/static/app/client.OSX5SVMF.js.map",
  "/static/app/client.VAWENGFN.css",
  "/static/app/images/green-leaves-plants.jpeg",
  "/static/chords/A.png",
  "/static/chords/A5.png",
  "/static/chords/A6.png",
  "/static/chords/A7.png",
  "/static/chords/A9.png",
  "/static/chords/Ab.png",
  "/static/chords/Ab6.png",
  "/static/chords/Ab7.png",
  "/static/chords/Abm.png",
  "/static/chords/Abm7.png",
  "/static/chords/Adim.png",
  "/static/chords/Am.png",
  "/static/chords/Am6.png",
  "/static/chords/Am7.png",
  "/static/chords/Am9.png",
  "/static/chords/Am11.png",
  "/static/chords/Amaj7.png",
  "/static/chords/Asus.png",
  "/static/chords/Asus2.png",
  "/static/chords/Ax.png",
  "/static/chords/Ax7.png",
  "/static/chords/Axm.png",
  "/static/chords/Axm7.png",
  "/static/chords/Bb.png",
  "/static/chords/Bb7.png",
  "/static/chords/Bb9.png",
  "/static/chords/Bbm.png",
  "/static/chords/Bbm7.png",
  "/static/chords/C.png",
  "/static/chords/C5.png",
  "/static/chords/C6.png",
  "/static/chords/C7.png",
  "/static/chords/C9.png",
  "/static/chords/Cadd9.png",
  "/static/chords/Cdim.png",
  "/static/chords/Cm.png",
  "/static/chords/Cm6.png",
  "/static/chords/Cm7.png",
  "/static/chords/Cm9.png",
  "/static/chords/Cm11.png",
  "/static/chords/Cmaj7.png",
  "/static/chords/Cmaj9.png",
  "/static/chords/Csus.png",
  "/static/chords/Csus2.png",
  "/static/chords/Cx.png",
  "/static/chords/Cx7.png",
  "/static/chords/Cxm.png",
  "/static/chords/Cxm7.png",
  "/static/chords/D.png",
  "/static/chords/D5.png",
  "/static/chords/D6.png",
  "/static/chords/D7.png",
  "/static/chords/D9.png",
  "/static/chords/D11.png",
  "/static/chords/Dadd9.png",
  "/static/chords/Db.png",
  "/static/chords/Db7.png",
  "/static/chords/Dbm.png",
  "/static/chords/Dbm7.png",
  "/static/chords/Ddim.png",
  "/static/chords/Ddim7.png",
  "/static/chords/Dm.png",
  "/static/chords/Dm7.png",
  "/static/chords/Dm9.png",
  "/static/chords/Dm11.png",
  "/static/chords/Dmaj7.png",
  "/static/chords/Dsus.png",
  "/static/chords/Dsus2.png",
  "/static/chords/Dx.png",
  "/static/chords/Dx7.png",
  "/static/chords/Dxm.png",
  "/static/chords/Dxm7.png",
  "/static/chords/E.png",
  "/static/chords/E5.png",
  "/static/chords/E6.png",
  "/static/chords/E7.png",
  "/static/chords/E9.png",
  "/static/chords/Eb.png",
  "/static/chords/Eb6.png",
  "/static/chords/Eb7.png",
  "/static/chords/Ebm.png",
  "/static/chords/Ebm6.png",
  "/static/chords/Ebm7.png",
  "/static/chords/Edim.png",
  "/static/chords/Edim7.png",
  "/static/chords/Em.png",
  "/static/chords/Em6.png",
  "/static/chords/Em7.png",
  "/static/chords/Em9.png",
  "/static/chords/Em11.png",
  "/static/chords/Emaj7.png",
  "/static/chords/Esus.png",
  "/static/chords/Esus2.png",
  "/static/chords/F.png",
  "/static/chords/F5.png",
  "/static/chords/F6.png",
  "/static/chords/F7.png",
  "/static/chords/F9.png",
  "/static/chords/Fdim.png",
  "/static/chords/Fdim7.png",
  "/static/chords/Fm.png",
  "/static/chords/Fm6.png",
  "/static/chords/Fm7.png",
  "/static/chords/Fm11.png",
  "/static/chords/Fmaj7.png",
  "/static/chords/Fmaj9.png",
  "/static/chords/Fsus.png",
  "/static/chords/Fsus2.png",
  "/static/chords/Fx.png",
  "/static/chords/Fx7.png",
  "/static/chords/Fxm.png",
  "/static/chords/Fxm7.png",
  "/static/chords/G.png",
  "/static/chords/G5.png",
  "/static/chords/G6.png",
  "/static/chords/G7.png",
  "/static/chords/G9.png",
  "/static/chords/Gb.png",
  "/static/chords/Gb7.png",
  "/static/chords/Gbm.png",
  "/static/chords/Gbm7.png",
  "/static/chords/Gdim.png",
  "/static/chords/Gm.png",
  "/static/chords/Gm6.png",
  "/static/chords/Gm7.png",
  "/static/chords/Gm9.png",
  "/static/chords/Gm11.png",
  "/static/chords/Gmaj7.png",
  "/static/chords/Gsus.png",
  "/static/chords/Gsus2.png",
  "/static/chords/Gx.png",
  "/static/chords/Gx7.png",
  "/static/chords/Gxm.png",
  "/static/chords/Gxm7.png",
  "/static/chords/H.png",
  "/static/chords/H5.png",
  "/static/chords/H6.png",
  "/static/chords/H7.png",
  "/static/chords/H9.png",
  "/static/chords/Hdim.png",
  "/static/chords/Hm.png",
  "/static/chords/Hm6.png",
  "/static/chords/Hm7.png",
  "/static/chords/Hm7b5.png",
  "/static/chords/Hm11.png",
  "/static/chords/Hmaj7.png",
  "/static/chords/Hsus.png",
  "/static/chords/Hsus2.png",
];

// Respond with cached resources
self.addEventListener("fetch", function (e) {
  console.log("fetch request : " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        // if cache is available, respond with cache
        console.log("responding with cache : " + e.request.url);
        return request;
      } else {
        // if there are no cache, try fetching request
        console.log("file is not cached, fetching : " + e.request.url);
        return fetch(e.request);
      }

      // You can omit if/else for console.log & put one line below like this too.
      // return request || fetch(e.request)
    })
  );
});

// Cache resources
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log("installing cache : " + CACHE_NAME);
        return cache.addAll(URLS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Delete outdated caches
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create white list
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      // add current cache name to white list
      cacheWhitelist.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            console.log("deleting cache : " + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
  return self.clients.claim();
});
