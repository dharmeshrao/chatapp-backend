import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyB7MlurZDLj_rYvqfJGfXj-UGse7axJhRE',
  authDomain: 'chat-app-e3a9e.firebaseapp.com',
  projectId: 'chat-app-e3a9e',
  storageBucket: 'chat-app-e3a9e.appspot.com',
  messagingSenderId: '580118307224',
  appId: '1:580118307224:web:77a1f153fa49b6380f4bed',
  measurementId: 'G-4Y2CWMPYHX',
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

getToken(messaging, {
  vapidKey:
    'BDrzRvngMiB7Ezy7rjGr5kllr7L6UoMsnV7habNqfc4rC0IYchJX2queyyA8GAxZXRBzr-KVq3wtKVoFjOxBv88',
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log(
        'No registration token available. Request permission to generate one.'
      );
      // ...
    }
  })
  .catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
