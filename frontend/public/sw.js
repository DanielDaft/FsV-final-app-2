// Deutsche Fahrschul-App Service Worker - GitHub Pages Version
const CACHE_NAME = 'fahrschul-app-v1.1';
const OFFLINE_URL = '/FsV-final-app/frontend/public/offline.html';

// Files zum Cachen für Offline-Nutzung - MIT KORREKTEN GITHUB PAGES PFADEN
const FILES_TO_CACHE = [
  '/FsV-final-app/',
  '/FsV-final-app/index.html',
  '/FsV-final-app/frontend/public/manifest.json',
  OFFLINE_URL
];

// Installation
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Fahrschul-App...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching app shell');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => {
        console.log('[SW] Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Installation failed:', error);
      })
  );
});

// Aktivierung
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Activation complete');
      return self.clients.claim();
    })
  );
});

// Fetch Handler - Cache First Strategy mit GitHub Pages Support
self.addEventListener('fetch', (event) => {
  // Nur GET requests cachen
  if (event.request.method !== 'GET') return;
  
  // Ignoriere chrome-extension und andere spezielle URLs
  if (event.request.url.includes('chrome-extension://')) return;
  if (event.request.url.includes('moz-extension://')) return;
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('[SW] Serving from cache:', event.request.url);
          return cachedResponse;
        }

        // Nicht im Cache, versuche vom Netzwerk zu laden
        return fetch(event.request)
          .then((response) => {
            // Nur erfolgreiche Responses cachen
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone für Cache
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Network failed, zeige Offline-Seite für Navigation requests
            if (event.request.destination === 'document') {
              return caches.match(OFFLINE_URL);
            }
          });
      })
  );
});

// Background Sync für zukünftige Features
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Hier könnte in Zukunft Synchronisation mit Backend erfolgen
  return Promise.resolve();
}