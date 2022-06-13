import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyD-PxaLvkZmjMhn60R87T0HqaxSsGkCDXY",
  authDomain: "movieflix-83a11.firebaseapp.com",
  databaseURL: "https://movieflix-83a11.firebaseio.com",
  projectId: "movieflix-83a11",
  storageBucket: "movieflix-83a11.appspot.com",
  messagingSenderId: "275820990817",
  appId: "1:275820990817:web:0928ba762d6ee725503520",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
