
const express = require('express');
const mongoose = require('mongoose');
const WebSocket = require('ws');
const adminRoutes = require('./routes/admin');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/admin', adminRoutes);

const connectDB = async () => {
  // Check if already connected (readyState 1 means connected)
  if (mongoose.connection.readyState === 1) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    // Connecting to MongoDB without deprecated options
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/event-calendar');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
    process.exit(1); // Exit if connection fails
  }
};
connectDB();

// WebSocket setup
const wss = new WebSocket.Server({ noServer: true });
wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.send(JSON.stringify({ message: 'Welcome to the event calendar!' }));
});

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

module.exports = { connectDB }; 
