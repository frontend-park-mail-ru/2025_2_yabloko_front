// sw.ts
/// <reference lib="webworker" />
// @ts-nocheck

const CACHE_NAME = 'appleclub-v1'
const urlsToCache = [
	'/',
	'/static/icons/logo.png',
	'/static/icons/cart.png',
	'/static/icons/bell.png',
	'/static/icons/checklist.png',
	'/static/icons/user.png',
	'/static/icons/search.png',
	'/static/icons/address.png',
]

self.addEventListener('install', (event: ExtendableEvent) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((caches) => caches.addAll(urlsToCache)).then(() => self.skipWaiting())
    )

})
self.addEventListener('activate', (event: ExtendableEvent) => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					if (cacheName !== CACHE_NAME) {
						return caches.delete(cacheName)
					}
				}),
			)
		}),
	)
})

self.addEventListener('fetch', (event: FetchEvent) => {
	if (event.request.url.includes('/api/')) {
		return
	}

	if (event.request.method !== 'GET') {
		return
	}

	event.respondWith(
		caches.match(event.request).then(response => {
			if (response) {
				return response
			}

			return fetch(event.request.clone()).then(response => {
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response
				}

				const responseToCache = response.clone()
				caches
					.open(CACHE_NAME)
					.then(cache => cache.put(event.request, responseToCache))

				return response
			})
		}),
	)
})
