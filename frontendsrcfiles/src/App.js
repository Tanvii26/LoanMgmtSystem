import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Register from './pages/RegistrationForm';
import Register2 from './pages/RegistrationForm2';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

function App() {
  const [user, setUser] = useState("nia.dessai21@gmail.com")

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route exact path="/" element={<LandingPage />} /> */}
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn user={user} setUser={setUser} /> } />
          <Route exact path='/' element={<Home user={user}></Home>}></Route>
          <Route exact path="/home-loan" element={<Register user={user}/>} />
          <Route exact path="/personal-loan" element={<Register2 user={user}/>} />
          <Route exact path="/dashboard" element={<Dashboard user={user}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
