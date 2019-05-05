import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "<API Key>",
  authDomain: "<Auth Domain>",
  databaseURL: "<DB URL>",
  projectId: "<Project ID>",
  storageBucket: "<Storage Bucket>",
  messagingSenderId: "<FCM Sender ID>"
};

export const firebaseApp = firebase.initializeApp(config);
