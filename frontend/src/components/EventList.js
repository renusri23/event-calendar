// // src/components/EventsList.js
// import React from 'react';
// import Event from './Event';
// import './EventList.css';

// const EventsList = ({ events }) => {
//   const groupedEvents = events.reduce((acc, event) => {
//     const year = event.date.split(' ')[2]; // Assuming date format is 'DD Month YYYY'
//     if (!acc[year]) {
//       acc[year] = [];
//     }
//     acc[year].push(event);
//     return acc;
//   }, {});

//   return (
//     <div className="events-list">
//       {Object.keys(groupedEvents).sort((a, b) => b - a).map(year => (
//         <div key={year}>
//           <h2>{year}</h2>
//           {groupedEvents[year].map(event => (
//             <Event key={event.id} date={event.date.split(' ')[0]} title={event.title} details={event.details} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventsList;

// src/components/EventsList.js
import React from 'react';
import Event from './Event.js';
import './EventList.css';

const EventsList = ({ events }) => {
  const groupedEvents = events.reduce((acc, event) => {
    const year = event.date.split(' ')[1]; // Assuming date format is 'DD Month YYYY'
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {});

  return (
    <div className="events-list">
      {Object.keys(groupedEvents).sort((a, b) => b - a).map(year => (
        <div key={year}>
          <h2>{year}</h2>
          {groupedEvents[year].map(event => (
            <Event key={event.id} date={event.date.split(' ')[0] } title={event.title} details={event.details} />
        
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventsList;
