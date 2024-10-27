
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import Home from './components/home.js';
import Users from './components/users.js';
import { useState, useEffect } from 'react';





  const App = () => {
    const [events, setEvents] = useState([{
      id: 1,
      title: 'Sample Event 1',
      organizer: 'Club XYZ',
      date: '2024-11-12',
      time: '10:00 AM',
      venue: 'Main Hall',
      description: 'This is a sample event description for Event 1.',
      status: 'Published',
    },
    {
      id: 2,
      title: 'Sample Event 2',
      organizer: 'Organization ABC',
      date: '2024-11-15',
      time: '2:00 PM',
      venue: 'Conference Room',
      description: 'This is a sample event description for Event 2.',
      status: 'Draft',
    },
    {
      id: 3,
      title: 'Sample Event 3',
      organizer: 'Team 123',
      date: '2024-12-01',
      time: '5:00 PM',
      venue: 'Auditorium',
      description: 'This is a sample event description for Event 3.',
      status: 'Published',
    },]);
  
    useEffect(() => {
      const fetchEvents = async () => {
        const response = await fetch('http://localhost:3000/events'); // Replace with your API endpoint
        const data = await response.json();
        setEvents(data);
      };
  
      fetchEvents();
    }, []);

  return (
    <AuthProvider>
      <Router>
        
        <div className="App">
        <div className="fixed-background"></div> 
          <Home/>
          <Users events={events}/>
          <AdminDashboard/>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
           <Route path="/admin" element={<AdminDashboard />} />2 
            {/* <Route path="/user" element={<User Dashboard />} /> */}
            {/* <Route path="/event/:id" element={<EventDetails />} /> */}
          </Routes>
        </div>
        {/* </body  > */}
      </Router>
    </AuthProvider>
  );
}

export default App;