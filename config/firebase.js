import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};

const initializeFirebase = () => {
  if (!getApps().length) {
    // Initialize Firebase with the config above
    const app = initializeApp(firebaseConfig);

    // Creating auth for autentication
    const auth = getAuth(app);

    console.log("Firebase initialized");
  } else {
    console.log("Firebase already initialized");
  }
};

export default initializeFirebase;
