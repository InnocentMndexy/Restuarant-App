import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTSFIfKe2r1qFGy7QBd6p3itaUrvSlT7E",
  authDomain: "restaurant-biribiri-app.firebaseapp.com",
  projectId: "restaurant-biribiri-app",
  storageBucket: "restaurant-biribiri-app.appspot.com",
  messagingSenderId: "985583849202",
  appId: "1:985583849202:web:04a0365bf61140c37cca6b",
  measurementId: "G-RM5HF0TE2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// initializing Firestore
const db = getFirestore(app);

export {auth, db};