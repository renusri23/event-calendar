import React, { useState, useEffect } from 'react';
import './users.css'; 
import Modal from './Modal';

const Users = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    
    const filtered = events.filter(event => {
      const eventDate = new Date(event.date);
      const eventMonth = eventDate.toLocaleString('default', { month: 'long' });
      const eventDay = eventDate.getDate();
      const formattedDate = `${eventDay} ${eventMonth}`; 

      const matchesDate = formattedDate.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesClub = event.organizer.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesDate || matchesClub; 
    });
    setFilteredEvents(filtered);
  }, [searchTerm, events]);

  const openModal = (event) => {
    setSelectedEvent(event); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedEvent(null);
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
                onClick={() => openModal(event)} 
              >
                Get More Details
              </button>
            </div>
          </div>
        ))
      )}
      
    
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} />
      )}
    </div>
  );
};

export default Users;