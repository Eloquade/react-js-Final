import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyB_xxHnvd_hM1SeKgl8gCZMTKWBFl3scvA",
  authDomain: "netflix-lite-cbce5.firebaseapp.com",
  projectId: "netflix-lite-cbce5",
  storageBucket: "netflix-lite-cbce5.appspot.com",
  messagingSenderId: "556361329082",
  appId: "1:556361329082:web:63d7b7260b0e0b4aa01583"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
