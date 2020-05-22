/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

importScripts('/precache-manifest.75c73f4406d4dd80bf6f754111f9fc0c.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js'
);

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC3NVlIHRQ7KZJgPpNgCm2o_sFRM0r3vL8',
  authDomain: 'test-wap-sendo.firebaseapp.com',
  databaseURL: 'https://test-wap-sendo.firebaseio.com',
  projectId: 'test-wap-sendo',
  storageBucket: 'sendo-center-87203.appspot.com',
  messagingSenderId: 1015743761074,
  appId: '1:1015743761074:web:111cda5e07b360e513d7ab',
  measurementId: 'G-N328JCXCZE',
});
const messaging = firebaseApp.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL('/index.html'),
  {
    blacklist: [/^\/_/, /\/[^\/?]+\.[^\/]+$/],
  }
);
