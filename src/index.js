import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import './css/index.css';
import App from './App';


const REACT_APP_FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID
const REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
// const REACT_APP_FIREBASE_DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: "hestus-943dc.firebaseapp.com",
  projectId: "hestus-943dc",
  storageBucket: "hestus-943dc.appspot.com",
  messagingSenderId: "986610836419",
  appId: REACT_APP_FIREBASE_APP_ID,
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
