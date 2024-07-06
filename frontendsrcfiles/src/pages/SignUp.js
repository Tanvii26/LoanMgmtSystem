import React, { useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import './signin.css'

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault()

    const response = await fetch("/customer", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (response.status == 200) {
      alert("Account created Successfully! Routing You Next");
      <Navigate to="/signin"></Navigate>
    }
    else {
      alert("Account already exists");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='signin'>

        <h2>Sign Up</h2>
        <input className='form-inp' type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input className='form-inp' type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className='form-inp' type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
        <span className='span'>Already Signed Up ? <NavLink to="/signin" className="signup-link">SignIn</NavLink></span>
      </div>
    </form>
  );
}

export default SignUp;
