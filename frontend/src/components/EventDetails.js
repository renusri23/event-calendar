import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <p>Event not found.</p>; 
  }

  return (
    <div className="event-details-container">
      <h2>{event.title}</h2>
      <p><strong>Organizer:</strong> {event.organizer}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Status:</strong> {event.status}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <button onClick={() => window.history.back()}>Back to Events</button>
    </div>
  );
};

export default EventDetails;