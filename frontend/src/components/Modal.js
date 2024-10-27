// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Import the CSS for styling

const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null; // Don't render if modal is not open or event is not provided

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{event.title}</h2>
        <div className="modal-detail">
          <h3>Organizer:</h3>
          <p>{event.organizer}</p>
        </div>
        <div className="modal-detail">
          <h3>Date:</h3>
          <p>{event.date}</p>
        </div>
        <div className="modal-detail">
          <h3>Time:</h3>
          <p>{event.time}</p>
        </div>
        <div className="modal-detail">
          <h3>Venue:</h3>
          <p>{event.venue}</p>
        </div>
        <div className="modal-detail">
          <h3>Status:</h3>
          <p>{event.status}</p>
        </div>
        <div className="modal-detail">
          <h3>Description:</h3>
          <p>{event.description}</p> {/* Add more description */}
        </div>
        <div className="modal-detail">
          <h3>Location:</h3>
          <p>{event.location}</p> {/* Additional field */}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;