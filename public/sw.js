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
