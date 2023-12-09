import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove, set, child, get} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDAH3nHUZteoKySnDpDy7ggdu7go0PagnY",
    authDomain: "assignment6-fde74.firebaseapp.com",
    databaseURL: "https://assignment6-fde74-default-rtdb.firebaseio.com/",
    projectId: "assignment6-fde74",
    storageBucket: "assignment6-fde74.appspot.com",
    messagingSenderId: "223075255573",
    appId: "1:223075255573:web:83d147b24a2bbcbced551c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app, getDatabase, ref, push, onValue, remove, set, child, get};