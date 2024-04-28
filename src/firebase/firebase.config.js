// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBLKDB1FARlqh8vGu1G9t8btOx7UeYwzqE',
  authDomain: 'easy-shop-e2c4f.firebaseapp.com',
  projectId: 'easy-shop-e2c4f',
  storageBucket: 'easy-shop-e2c4f.appspot.com',
  messagingSenderId: '944314547869',
  appId: '1:944314547869:web:4ac14e33c116f0598d1e74',
  measurementId: 'G-B9HB29NK1W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;