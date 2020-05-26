import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getFirebaseApp, initMessaging } from './firebase';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const aaaa = async () => {
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  const registration = await serviceWorker.register();

  const messaging = initMessaging(registration);

  // messaging.onMessage((payload) => {
  //   console.log('Message received. ', payload);
  //   // ...
  // });

  try {
    const permission = Notification.permission;
    if (permission !== 'granted') {
      await Notification.requestPermission();
    }

    if (!registration) {
      return;
    }

    messaging.getToken().then((token) => {
      console.log(token);
    });
  } catch (error) {
    console.log(error);
  }
};

aaaa();
