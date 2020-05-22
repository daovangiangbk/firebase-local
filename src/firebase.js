import * as firebase from 'firebase/app';

import 'firebase/messaging';

let firebaseApp = null;
export function getFirebaseApp() {
  if (firebaseApp) {
    return firebaseApp;
  }

  firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyC3NVlIHRQ7KZJgPpNgCm2o_sFRM0r3vL8',
    authDomain: 'test-wap-sendo.firebaseapp.com',
    databaseURL: 'https://test-wap-sendo.firebaseio.com',
    projectId: 'test-wap-sendo',
    storageBucket: 'sendo-center-87203.appspot.com',
    messagingSenderId: 1015743761074,
    appId: '1:1015743761074:web:111cda5e07b360e513d7ab',
    measurementId: 'G-N328JCXCZE',
  });

  return firebaseApp;
}

let messaging = null;
export function initMessaging(sw) {
  if (messaging) {
    messaging.useServiceWorker(sw);

    return messaging;
  }

  messaging = getFirebaseApp().messaging();
  messaging.useServiceWorker(sw);
  return messaging;
}
