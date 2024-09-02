import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBMyu_tr5AbJqJCqcym54bDvQwhtKFRA1A",
  authDomain: "cabeasy-interview.firebaseapp.com",
  projectId: "cabeasy-interview",
  storageBucket: "cabeasy-interview.appspot.com",
  messagingSenderId: "756284044459",
  appId: "1:756284044459:web:8403167f68c6168713f3ee",
  measurementId: "G-6J1ZPZ1J8G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);