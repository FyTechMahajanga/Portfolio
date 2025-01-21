import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAeOfwDEKwl_MbMlmWNeQV_JjnYtCWziig",
    authDomain: "portfolio-fytech.firebaseapp.com",
    projectId: "portfolio-fytech",
    storageBucket: "portfolio-fytech.firebasestorage.app",
    messagingSenderId: "121157268163",
    appId: "1:121157268163:web:2a77ad140d5a4299cce876",
    measurementId: "G-ZS907GR9WD"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); 
const analytics = getAnalytics(app);