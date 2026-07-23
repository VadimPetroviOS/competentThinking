// Минимальный service worker: офлайн-режим не нужен, кеш не используется.
// Он нужен только чтобы браузер посчитал приложение "устанавливаемым" (PWA).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Просто пропускаем все запросы напрямую в сеть, ничего не кешируем.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
