import React from 'react';

const Event = ({ event }) => {
  return (
    <div className="event">
      <h3>{event.title}</h3>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Club: {event.club}</p>
      <p>Details: {event.details}</p>
    </div>
  );
};

export default Event;