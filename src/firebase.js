import firebase from 'firebase'

const Config = {
  apiKey: "AIzaSyANq-S6ZM-PXgFn04m8jTqwjIRclCoczXQ",
  authDomain: "quiz-pwa-mutahir.firebaseapp.com",
  databaseURL: "https://quiz-pwa-mutahir.firebaseio.com",
  projectId: "quiz-pwa-mutahir",
  storageBucket: "quiz-pwa-mutahir.appspot.com",
  messagingSenderId: "289547659580",
  appId: "1:289547659580:web:d910f87a8fb8f6fe015639",
  measurementId: "G-RDXKDYXPLX"
};

  firebase.initializeApp(Config);

  export default firebase