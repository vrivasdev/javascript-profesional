const VERSION = "v1"

self.addEventListener('install', event => {
    event.waitUntil(precache()) // wait until cache is preloaded
})

self.addEventListener('fetch', event => {
    const request = event.request
    if (request.method != 'GET') {
        return;
    }
    // cache search
    event.respondWith(cachedResponse(request))
    // update cache
    event.waitUntil(updateCache(request))
    // Note: It allows local cache update with internet data
})

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        './index.html',
        './assets/index.js',
        './assets/MediaPlayer.js',
        './assets/plugins/AutoPlay.js',
        './assets/plugins/AutoPause.js',
        './assets/index.css',
        './assets/BigBuckBunny.mp4'
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request) // if cache doesn't exist on cache respond with internet data
}
// update data from internet with local cache
async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    cache.put(request, response)
}