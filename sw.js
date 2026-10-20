// Keeps the guide on the phone so it opens offline. Answers come from the cache
// straight away and are refreshed in the background, so an update shows up on
// the next launch after it's published.
const CACHE = "ensc251-v1";
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const fresh = fetch(e.request).then(async (res) => {
    if (res.ok || res.type === "opaque") await (await caches.open(CACHE)).put(e.request, res.clone());
    return res;
  });
  e.waitUntil(fresh.catch(() => {}));
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fresh));
});
