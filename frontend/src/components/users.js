// import React, { useState } from 'react';
// src/components/Event.js
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

// Users.js
import React, { useState, useEffect } from 'react';
import './users.css'; // Import the CSS file
import Modal from './Modal'; // Import the Modal component

const Users = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(null); // State to hold the selected event
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    // Filter events whenever the search term changes
    const filtered = events.filter(event => {
      const eventDate = new Date(event.date);
      const eventMonth = eventDate.toLocaleString('default', { month: 'long' });
      const eventDay = eventDate.getDate();
      const formattedDate = `${eventDay} ${eventMonth}`; // Format date for comparison

      const matchesDate = formattedDate.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesClub = event.organizer.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesDate || matchesClub; // Return true if either matches
    });
    setFilteredEvents(filtered);
  }, [searchTerm, events]);

  const openModal = (event) => {
    setSelectedEvent(event); // Set the selected event
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedEvent(null); // Clear the selected event
  };

  return (
    <div className="users-container">
      <h2>Upcoming Events</h2>
      
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Date (e.g., 15 March) or Club Name"
        />
      </div>

      {filteredEvents.length === 0 ? (
        <p>No events found.</p>
      ) : (
        filteredEvents.map((event) => (
          <div key={event.id} className="event">
            <div className="event-date">
              <h3>{new Date(event.date).getDate()}</h3>
              <p>{new Date(event.date).toLocaleString('default', { month: 'long' })}</p>
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>Organizer: {event.organizer}</p>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Venue: {event.venue}</p>
              <p>Status: {event.status}</p>
              <button 
                className="details-button" 
                onClick={() => openModal(event)} // Open the modal with the event details
              >
                Get More Details
              </button>
            </div>
          </div>
        ))
      )}
      
      {/* Render the modal if it's open */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} />
      )}
    </div>
  );
};

export default Users;