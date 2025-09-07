const CACHE = 'minutrenn-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/img/icon-192.png',
  '/img/icon-512.png',
  '/img/hero.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (/\/assets\/.*\.(js|css)$/.test(request.url)) {
    event.respondWith(
      caches.open(CACHE).then(cache =>
        fetch(request).then(response => {
          cache.put(request, response.clone());
          return response;
        })
      )
    );
    return;
  }
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request))
  );
});
