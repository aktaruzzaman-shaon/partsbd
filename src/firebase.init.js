// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMKSn4Y0UnCGvU1UATm1Qklw864kMeAHc",
  authDomain: "partsbd-726e2.firebaseapp.com",
  projectId: "partsbd-726e2",
  storageBucket: "partsbd-726e2.appspot.com",
  messagingSenderId: "981609595749",
  appId: "1:981609595749:web:c771a1f0e5ec83baa9d78c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;