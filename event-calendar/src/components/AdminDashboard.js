// Dashboard.js
import React, { useState } from 'react';
// import "C:\Users\preks\Downloads\EC\event-calendar\event-calendar\src\pages\admind.css";
import "./AdminDashboard.css";
export default function Dashboard() {
  const [events, setEvents] = useState([
    {
      title: 'Sample Event',
      organizer: 'Club XYZ',
      date: '2024-11-12',
      time: '10:00 AM',
      venue: 'Main Hall',
      description: 'This is a sample event description.',
      status: 'Published',
    },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEvent(null);
  };

  const addEvent = (event) => {
    event.preventDefault();
    const newEvent = {
      title: event.target.title.value,
      organizer: event.target.organizer.value,
      date: event.target.date.value,
      time: event.target.time.value,
      venue: event.target.venue.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };
    setEvents([...events, newEvent]);
    event.target.reset();
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Admin Dashboard</h1>
        <button className="logout-btn">Logout</button>
      </header>

      {/* Create Event Section */}
      <section className="create-event">
        <h2>Create Event</h2>
        <form id="eventForm" onSubmit={addEvent}>
          <label htmlFor="title">Event Title:</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="organizer">Organizer Name:</label>
          <input type="text" id="organizer" name="organizer" required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />

          <label htmlFor="venue">Venue:</label>
          <input type="text" id="venue" name="venue" required />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" required></textarea>

          <div className="event-options">
            <label htmlFor="status">Visibility:</label>
            <select id="status" name="status">
              <option value="draft">Draft</option>
              <option value="published">Publish</option>
            </select>
          </div>

          <button type="submit">Add Event</button>
        </form>
      </section>

      {/* Event List Section */}
      <section className="event-list">
        <h2>Manage Events</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Organizer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Venue</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.title}</td>
                <td>{event.organizer}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.venue}</td>
                <td>{event.status}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => openEditModal(event)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      setEvents(events.filter((_, i) => i !== index))
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Edit Event Modal */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>
              &times;
            </span>
            <h2>Edit Event</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedEvent = {
                  ...selectedEvent,
                  title: e.target.editTitle.value,
                  organizer: e.target.editOrganizer.value,
                  date: e.target.editDate.value,
                  time: e.target.editTime.value,
                  venue: e.target.editVenue.value,
                  description: e.target.editDescription.value,
                  status: e.target.editStatus.value,
                };
                setEvents(
                  events.map((event) =>
                    event === selectedEvent ? updatedEvent : event
                  )
                );
                closeEditModal();
              }}
            >
              <label htmlFor="editTitle">Event Title:</label>
              <input
                type="text"
                id="editTitle"
                name="title"
                defaultValue={selectedEvent.title}
                required
              />

              <label htmlFor="editOrganizer">Organizer Name:</label>
              <input
                type="text"
                id="editOrganizer"
                name="organizer"
                defaultValue={selectedEvent.organizer}
                required
              />

              <label htmlFor="editDate">Date:</label>
              <input
                type="date"
                id="editDate"
                name="date"
                defaultValue={selectedEvent.date}
                required
              />

              <label htmlFor="editTime">Time:</label>
              <input
                type="time"
                id="editTime"
                name="time"
                defaultValue={selectedEvent.time}
                required
              />

              <label htmlFor="editVenue">Venue:</label>
              <input
                type="text"
                id="editVenue"
                name="venue"
                defaultValue={selectedEvent.venue}
                required
              />

              <label htmlFor="editDescription">Description:</label>
              <textarea
                id="editDescription"
                name="description"
                rows="4"
                defaultValue={selectedEvent.description}
                required
              ></textarea>

              <div className="event-options">
                <label htmlFor="editStatus">Visibility:</label>
                <select
                  id="editStatus"
                  name="status"
                  defaultValue={selectedEvent.status}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Publish</option>
                </select>
              </div>

              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
