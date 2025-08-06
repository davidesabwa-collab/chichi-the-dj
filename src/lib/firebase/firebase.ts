// This file initializes the Firebase app, connecting it to your Firebase project.
// It exports the necessary Firebase services like Auth and Firestore for use in your application.

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
