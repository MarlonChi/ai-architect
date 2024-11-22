import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-architect-196f3.firebaseapp.com",
  projectId: "ai-architect-196f3",
  storageBucket: "ai-architect-196f3.firebasestorage.app",
  messagingSenderId: "825149532908",
  appId: "1:825149532908:web:da72356dcbc5a4f28f53c9",
  measurementId: "G-CPM5NR3S91",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
