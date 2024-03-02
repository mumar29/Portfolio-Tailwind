import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBciaBWHJqnTPC7H7ueDmv0l3pjImAYJVQ",
  authDomain: "webassignment3-db5e2.firebaseapp.com",
  databaseURL: "https://webassignment3-db5e2-default-rtdb.firebaseio.com",
  projectId: "webassignment3-db5e2",
  storageBucket: "webassignment3-db5e2.appspot.com",
  messagingSenderId: "703140823136",
  appId: "1:703140823136:web:683d54266c7df6c9468305",
  measurementId: "G-DV3G9MDYFT",
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

export { firebaseApp, database };
