// server.js
const express = require('express');
const mongoose = require('mongoose');
const WebSocket = require('ws');
const adminRoutes = require('./routes/admin');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/admin', adminRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Could not connect to MongoDB:', error));

// WebSocket setup
const wss = new WebSocket.Server({ noServer: true });
wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  // Example broadcast on every connection
  ws.send(JSON.stringify({ message: 'Welcome to the event calendar!' }));
});

function broadcastEventUpdate(event) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(event));
    }
  });
}

// Attach WebSocket to HTTP server
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

module.exports = { broadcastEventUpdate };
