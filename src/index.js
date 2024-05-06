import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import './css/index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyA9g5qOHM9G8vTKqcwjY4GDIfOueJuCDuo",
  authDomain: "hestus-943dc.firebaseapp.com",
  projectId: "hestus-943dc",
  storageBucket: "hestus-943dc.appspot.com",
  messagingSenderId: "986610836419",
  appId: "1:986610836419:web:51cf088c10488b23eed376",
  measurementId: "G-4L2DLWN5NB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
