const express = require('express');
const router = express.Router();
const { createEvent, getEvent, editEvent, deleteEvent } = require('../controllers/eventController.js');

router.post('/events', createEvent);
router.get('/events/:id', getEvent);
router.put('/events/:id', editEvent);
router.delete('/events/:id', deleteEvent);


module.exports = router;
