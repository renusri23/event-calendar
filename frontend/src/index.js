import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWgdJDFeHsolec2Pp3GlfFakoaSLWFsY0",
  authDomain: "event-calendar-eb45c.firebaseapp.com",
  projectId: "event-calendar-eb45c",
  storageBucket: "event-calendar-eb45c.appspot.com",
  messagingSenderId: "103297468943",
  appId: "1:103297468943:web:e2b4b9b0704c21a694f17a",
};

// Initialize Firebase
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
