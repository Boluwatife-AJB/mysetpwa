const mySetSite = 'my-set-site-v1';
const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/images/ernest.jpg',
  '/images/huswat.jpg',
  '/images/akoni.jpg',
  '/images/jessy.jpg',
  '/images/loki.jpg',
  '/images/odun.jpg',
  '/images/solomon.jpg',
  '/images/steph.jpg',
  '/images/tomi.jpg',
];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(mySetSite).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
