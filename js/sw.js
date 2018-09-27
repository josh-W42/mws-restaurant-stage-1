self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restReview-v1').then(function(cache) {
      return cache.addAll([
        '../',
        'main.js',
        'restaurant_info.js',
        'dbhelper.js',
        '../css/styles.css',
        '../data/restaurants.json',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
