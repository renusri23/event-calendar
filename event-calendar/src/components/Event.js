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

// src/components/Event.js
import React from 'react';
import './Event.css';

const Event = ({ date, title, details }) => {
  return (
    <div className="event">
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
