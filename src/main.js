import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index"; // 追加
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "bootstrap/dist/css/bootstrap.min.css"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP1kPmdkmbYAXWg0cSOYqLKq4DpuvRAuc",
  authDomain: "cake-project-ddf01.firebaseapp.com",
  projectId: "cake-project-ddf01",
  storageBucket: "cake-project-ddf01.appspot.com",
  messagingSenderId: "570734961851",
  appId: "1:570734961851:web:cc7c4c101e41d151d3f59e",
  measurementId: "G-0KPZVS23Q0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app"); // 変更