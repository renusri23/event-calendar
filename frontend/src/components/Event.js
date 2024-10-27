// import React from 'react';
// import './Event.css';

// const Event = ({ date, title, details }) => {
//   return (
//     <div className="event">
//       <div className="event-date">
//         <h3>{date}</h3>
//       </div>
//       <div className="event-details">
//         <h3>{title}</h3>
//         <p>{details}</p>
//       </div>
//     </div>
//   );
// };

// export default Event;
// Event.js
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