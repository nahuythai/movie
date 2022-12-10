// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj8WlxR3frZrD9bTFVh8jmoQijVhfmeLI",
  authDomain: "vuedemo-19f74.firebaseapp.com",
  databaseURL: "https://vuedemo-19f74-default-rtdb.firebaseio.com",
  projectId: "vuedemo-19f74",
  storageBucket: "vuedemo-19f74.appspot.com",
  messagingSenderId: "993066895149",
  appId: "1:993066895149:web:fca19b56f0b73ca60735a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
