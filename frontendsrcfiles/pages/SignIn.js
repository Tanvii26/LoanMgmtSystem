import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import { useNavigate } from 'react-router-dom';

function SignIn() {
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
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData),
      });

      if(response.status == 200) {
        setIsNotDisabled(true);
        navigate("/register2", {state: formData})
      }
      else {
        alert("Wrong Username or Password");
      }
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Sign In</button>
    </form>
  );
  
}

export default SignIn;
