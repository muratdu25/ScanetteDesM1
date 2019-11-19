self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(contentToCache);
      })
    );
  });

  self.addEventListener('activate', (e) => {
    e.waitUntil(
      caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
          if(cacheName.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });

var cacheName = 'scanette-v1';
var appShellFiles = [
  './index.html',
  './js/app.js',
  './style.css',
  './produit.csv',
  './favicon.ico',
  './js/DecoderWorker.js',
  './js/exif.js',
  './js/manifest.json',
  './icons/icon-32.png',
  './icons/icon-64.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-168.png',
  './icons/icon-192.png',
  './icons/icon-256.png',
  './icons/icon-512.png',
  './images/barcode-scanner.png',
  './images/icon-cart.png',
  './images/icon-setup.png',
  './images/icon-transmit.png',
  './images/logo.png'
];