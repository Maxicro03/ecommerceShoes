import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVPrNJG7h5-Z89ymsUJgnrdLQ7ayrY90Q",
  authDomain: "ecomerecommerce-shoes.firebaseapp.com",
  projectId: "ecomerecommerce-shoes",
  storageBucket: "ecomerecommerce-shoes.appspot.com",
  messagingSenderId: "75306847751",
  appId: "1:75306847751:web:ccb461993c168bfdc724a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app