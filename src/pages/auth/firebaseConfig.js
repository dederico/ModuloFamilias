import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBn6swQCI6WXkTWBy3XNhth4vEOBxnGIP8",
  authDomain: "adopciones-db12b.firebaseapp.com",
  databaseURL: "https://adopciones-db12b.firebaseio.com",
  projectId: "adopciones-db12b",
  storageBucket: "adopciones-db12b.appspot.com",
  messagingSenderId: "1024177094471",
  appId: "1:1024177094471:web:3621c64d10455676275662",
});

export default app;
