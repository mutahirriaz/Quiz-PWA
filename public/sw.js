let cashData = "appV1";

const urlsToCache = [
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "index.html",
  "/",
  "/manifest.json",
  "/images/applogo.jpg",
];

this.addEventListener("activate", function (e) {
  console.log("[servicworker] Activate")
})


this.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cashData)
      .then(function (cache) {
        cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request)
    }
    )
  );
});


