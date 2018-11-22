const version = "0.6.11";
const cacheName = `app-${version}`;
self.addEventListener('install', e => e.waitUntil(caches.open(cacheName).then(cache => cache.addAll([
	"./",
	"index.html",
	"pwa.json",
	"pwa/128x128.png",
	"pwa/144x144.png",
	"pwa/152x152.png",
	"pwa/192x192.png",
	"pwa/384x384.png",
	"pwa/512x512.png",
	"pwa/72x72.png",
	"pwa/96x96.png",
	"style.css",
	"0.png",
	"0-1.png",
	"1.png",
	"2.png",
	"3.png",
	"4.png",
	"5.png",
	"6.png",
	"7.png",
	"8-2.png",
	"8.png",
	"9.png",
	"10.png",
	"11.png",
	"12.png",
	"13.label.png",
	"13.png",
	"14.png",
	"15.png",
	"16.png",
	"17.1.png",
	"17.2.png",
	"18.png",
	"19.png",
	"20.png",
	"all.png",
	"designer_versionning.png",
	"logo.png",
	"newRepo.png",
	"pushforce.jpg",
	"rebase.conflict2.jpg",
	"rebase.ok.jpg",
	"resume.png",
	"signup.png",
	"use.git.jpg",
	"https://unpkg.com/normalize.css@8.0.0/normalize.css",
	"https://cdnjs.cloudflare.com/ajax/libs/remark/0.14.0/remark.min.js",
	"https://cdn.jsdelivr.net/npm/pwacompat@2.0.7/pwacompat.min.js"
]).then(() => self.skipWaiting()))));

self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => event.respondWith(
	caches.open(cacheName)
		.then(cache => cache.match(event.request, {ignoreSearch: true}))
		.then(response => response || fetch(event.request))
));