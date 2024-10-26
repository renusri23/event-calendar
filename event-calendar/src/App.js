// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
// import Login from './components/Login';
// import AdminDashboard from './components/AdminDashboard';
// // import UserDashboard from './components/UserDashboard';
// import EventDetails from './components/EventDetails';
// import { AuthProvider } from './context/AuthContext';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="App">
//           <Switch>
//             <Route path="/" exact component={Login} />
//             <Route path="/admin" component={AdminDashboard} />
//             {/* <Route path="/user" component={User Dashboard} /> */}
//             <Route path="/event/:id" component={EventDetails} />
//           </Switch>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
// import UserDashboard from './components/UserDashboard';
// import EventDetails from './components/EventDetails';
import { AuthProvider } from './context/AuthContext';
import Home from './components/home.js';
import EventList from './components/EventList.js';
function App() {
  const events = [
    { id: 1, date: 'Oct-26 2024', title: 'Event 1', details: 'Details about Event 1 happening now.', isCurrent: true },
    { id: 2, date: 'Oct-27 2024', title: 'Event 2', details: 'Details about Event 2 happening now.', isCurrent: true },
    { id: 3, date: 'Oct-20 2024', title: 'Event 1', details: 'Details about Event 1 that happened before.', isCurrent: false },
    { id: 4, date: 'Oct-21 2023', title: 'Event 2', details: 'Details about Event 2 that happened before.', isCurrent: false },
    // Add more events here
  ];

  return (
    <AuthProvider>
      <Router>
        
        <div className="App">
          <Home/>
          <EventList events={events}/>
          <AdminDashboard/>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            {/* <Route path="/admin" element={<AdminDashboard />} />2 */}
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