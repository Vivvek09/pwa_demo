// Define a unique cache name for this version of the service worker cache
// This helps manage different versions of the cache and clear old ones as needed
const staticDevCoffee = 'dev-coffee-site-v1'

// List of assets to be cached
// These are the essential files required for the site to load and function offline
// This includes the root path, HTML file, CSS, JavaScript, and images used on the site
const assets = [
  '/', // Root path of the site
  '/index.html', // Main HTML file
  '/css/style.css', // CSS styling file
  '/js/app.js', // Main JavaScript file
  '/images/coffee1.jpg', // Image assets for the site
  '/images/coffee2.jpg',
  '/images/coffee3.jpg',
  '/images/coffee4.jpg',
  '/images/coffee5.jpg',
  '/images/coffee6.jpg',
  '/images/coffee7.jpg',
  '/images/coffee8.jpg',
  '/images/coffee9.jpg',
]

// Here, we are setting up two main event listeners in the service worker: 'install' and 'fetch'.

// 'install' event:
// - This listener activates when the service worker is installed.
// - We call `waitUntil()` to delay the completion of the 'install' event until our caching is finished.
// - Inside `waitUntil()`, we open a cache (using a unique cache name, `staticDevCoffee` in this case) and then add an array of assets to it.
// - This ensures that specified assets (like HTML, CSS, JavaScript, and image files) are cached for offline use immediately upon installation.
self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets)
    }),
  )
})

// 'fetch' event:
// - This listener intercepts network requests made by the app.
// - `respondWith()` allows us to provide a custom response for these requests.
// - Inside `respondWith()`, we attempt to match the request with an item in the cache using `caches.match()`.
// - If a cached response is found, it's returned. If not, we proceed with `fetch()` to retrieve the resource from the network.
// - This approach allows the app to load from the cache when offline and fall back to the network when online.
self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request)
    }),
  )
})
