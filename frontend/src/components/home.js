
import React from 'react';
import './home.css';


function HomePage() {


  return (
    <div className='home-page'>
      <div className="overlay">
      <h1 className="jubble-text">IIT Dharwad</h1>
        <h1 className="heading">Event Calendar</h1>
        <div className="login-button"   >
          <div class="login-image"></div>
          <div className="login-btn" >login with google</div>
        </div>
      </div>
      </div>
    
  );
}

export default HomePage;