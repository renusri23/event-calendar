// routes/admin.js
const express = require('express');
const router = express.Router();
const { createEvent, getEvent, editEvent, deleteEvent } = require('../controllers/eventController.js');
// const eventController = require('../controllers/eventController');

// CRUD routes for events
router.post('/events', createEvent);
router.get('/events/:id', getEvent);
router.put('/events/:id', editEvent);
router.delete('/events/:id', deleteEvent);
// router.get('/events', getAllEvents);


module.exports = router;
