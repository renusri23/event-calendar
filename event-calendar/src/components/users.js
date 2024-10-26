import React, { useState } from 'react';
// src/components/Event.js
// import React from 'react';
import './Event.css';

const Event = ({ date, title, details }) => {
    const backgroundImageStyle = {
        backgroundImage: 'url("./components/$REYNF97.jpeg")',
        backgroundSize: 'cover', // Optional: Ensure the image covers the whole div
        backgroundPosition: 'center', // Optional: Center the image
        height: '100%', // Optional: Set the height of the div
        width: '100%', // Optional: Set the width of the div
      };
  return (
    <div className="event" style={backgroundImageStyles}>
      <div className="event-date">
        <h3>{date}</h3>
      </div>
      <div className="event-details">
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Event;
