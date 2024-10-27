// EventDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css'; // Optional: add CSS for styling

const EventDetails = ({ events }) => {
  const { id } = useParams(); // Get the event ID from the URL
  const event = events.find(event => event.id === parseInt(id)); // Find the event by ID

  if (!event) {
    return <p>Event not found.</p>; // Handle case where event is not found
  }

  return (
    <div className="event-details-container">
      <h2>{event.title}</h2>
      <p><strong>Organizer:</strong> {event.organizer}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Status:</strong> {event.status}</p>
      <p><strong>Description:</strong> {event.description}</p> {/* Add a description field in your event data */}
      <button onClick={() => window.history.back()}>Back to Events</button>
    </div>
  );
};

export default EventDetails;