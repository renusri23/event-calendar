const mongoose = require('mongoose');

// Define the event schema
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organizer: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  description: { type: String },
  visibility: { type: String, enum: ['draft', 'published'], default: 'draft' },
  // createdAt: { type: Date, default: Date.now },
});

// Export the Event model
module.exports = mongoose.model('Event', eventSchema);
