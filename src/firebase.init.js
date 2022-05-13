// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8BsAURL3w8jaljsu6gamdsHy2vzOx1wI",
  authDomain: "private-tutor-8928c.firebaseapp.com",
  projectId: "private-tutor-8928c",
  storageBucket: "private-tutor-8928c.appspot.com",
  messagingSenderId: "717984051383",
  appId: "1:717984051383:web:fe8e0fc2a0c628d928dd32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;