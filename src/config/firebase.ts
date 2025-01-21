import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "default-api-key",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "default-auth-domain",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "default-project-id",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "default-storage-bucket",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "default-messaging-sender-id",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "default-app-id",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "default-measurement-id"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); 
const analytics = getAnalytics(app);