import { getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI5wO3TLU9MrN2o-06OsBi_c64UdQdUmY",
  authDomain: "fearless-client.firebaseapp.com",
  projectId: "fearless-client",
  storageBucket: "fearless-client.appspot.com",
  messagingSenderId: "290367043002",
  appId: "1:290367043002:web:8aec2b9e803086bf571983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;