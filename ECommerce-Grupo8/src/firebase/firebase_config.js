// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCN4DwJ_5NCLNhslef4F4YBL_IhaMoxpX4",
    authDomain: "image-cloud-f2cc1.firebaseapp.com",
    projectId: "image-cloud-f2cc1",
    storageBucket: "image-cloud-f2cc1.appspot.com",
    messagingSenderId: "550472895069",
    appId: "1:550472895069:web:507ac9d349aa8d73965bb4",
    measurementId: "G-SQQB51F4NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);