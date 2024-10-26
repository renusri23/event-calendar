// src/components/HomePage.js
import React from 'react';
import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext
// import firebase from 'firebase/app';
// import 'firebase/auth';
import './home.css'; // Create a CSS file for styles

// Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

function HomePage() {
//   const { user } = useAuth(); // Assuming you have user state in AuthContext

//   const handleGoogleLogin = async () => {
//     // const provider = new firebase.auth.GoogleAuthProvider();
//     try {
//       await firebase.auth().signInWithPopup(provider);
//     } catch (error) {
//       console.error("Error during Google login:", error);
//     }
//   };

  return (
    <div className="home-page">
      <div className="overlay">
      <div class="marquee"><span>IIT Dharwad</span></div>
        <h1 className="heading">Event Calendar</h1>
        <button className="login-button"  >
          Login with Google
        </button>
        {/* <div className="college-name"><marquee>IIT Dharwad</marquee></div> */}
      </div>
    </div>
  );
}

export default HomePage;