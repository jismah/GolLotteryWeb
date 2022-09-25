import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVzWbRBoqUS57O5a2_WHZ58b5ogNOefno",
  authDomain: "gollottery.firebaseapp.com",
  projectId: "gollottery",
  storageBucket: "gollottery.appspot.com",
  messagingSenderId: "776047002872",
  appId: "1:776047002872:web:291149e5c88da7bfaa270d",
  measurementId: "G-FGW9ZJQPRQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
