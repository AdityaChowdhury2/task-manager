// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjfXVgEWJ-7dt5rgz15de-dfTcT7oLty8",
    authDomain: "task-manager-aditya.firebaseapp.com",
    projectId: "task-manager-aditya",
    storageBucket: "task-manager-aditya.appspot.com",
    messagingSenderId: "953484905820",
    appId: "1:953484905820:web:5a0cc20dd5ce3f8ee6c599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;