import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import './signin.css'

function SignIn({ user, setUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const [isNotDisabled, setIsNotDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault()

    const response = await fetch("/verify", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (response.status == 200) {
      setIsNotDisabled(true);
      setUser(formData.email);
      <Navigate to="/home"></Navigate>
      navigate("/register2", { state: formData })
    }
    else {
      alert("Wrong Username or Password");
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='signin'>

        <h2>Log In</h2>
        <input className='form-inp' type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className='form-inp' type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Log In</button>
        <span className='span'>New User ? <NavLink to="/signup" className="signup-link">SignUp</NavLink></span>
      </div>
    </form>
  );

}

export default SignIn;
