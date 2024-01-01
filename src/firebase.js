import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyDLq2g7UUiDi9k1dp8eMiZ-2ngSKoSHkjM",
    authDomain: "auth-react-9b6b1.firebaseapp.com",
    projectId: "auth-react-9b6b1",
    storageBucket: "auth-react-9b6b1.appspot.com",
    messagingSenderId: "48809262110",
    appId: "1:48809262110:web:804622e7f1d6d0749f420f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app