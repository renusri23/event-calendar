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
import EventDetails from './components/EventDetails';
import { AuthProvider } from './context/AuthContext';
import Home from './components/home.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Home/>
          {/* <AdminDashboard/> */}
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/admin" element={<AdminDashboard />} />2
            {/* <Route path="/user" element={<User Dashboard />} /> */}
            <Route path="/event/:id" element={<EventDetails />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;