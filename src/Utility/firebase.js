// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ9KIJ39tPH5ahXfNcH4Px3e31cjSu_DM",
  authDomain: "netflix-gpt-aniket.firebaseapp.com",
  projectId: "netflix-gpt-aniket",
  storageBucket: "netflix-gpt-aniket.appspot.com",
  messagingSenderId: "637442489923",
  appId: "1:637442489923:web:9daf45ee54f92673fa5ef6",
  measurementId: "G-5Q28S0KYSY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
