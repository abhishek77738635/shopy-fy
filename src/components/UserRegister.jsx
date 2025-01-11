import React, { useState } from 'react';
import './UserRegister.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    lat: '',
    long: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      address: {
        city: formData.city,
        street: formData.street,
        number: parseInt(formData.number),
        zipcode: formData.zipcode,
        geolocation: {
          lat: formData.lat,
          long: formData.long,
        },
      },
      phone: formData.phone,
    };

    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('User registered:', data);
        alert('Registration successful!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
      });
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="form-title">Register</h2>
        <div className="form-row">
          <div className="form-column">
            <label>Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
            </label>
            <label>Username:
              <input type="text" name="username" value={formData.username} onChange={handleChange} required className="form-input" />
            </label>
            <label>Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} required className="form-input" />
            </label>
            <label>First Name:
              <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required className="form-input" />
            </label>
            <label>Last Name:
              <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required className="form-input" />
            </label>
          </div>
          <div className="form-column">
            <label>City:
              <input type="text" name="city" value={formData.city} onChange={handleChange} required className="form-input" />
            </label>
            <label>Street:
              <input type="text" name="street" value={formData.street} onChange={handleChange} required className="form-input" />
            </label>
            <label>Number:
              <input type="number" name="number" value={formData.number} onChange={handleChange} required className="form-input" />
            </label>
            <label>Zip Code:
              <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} required className="form-input" />
            </label>
            <label>Latitude:
              <input type="text" name="lat" value={formData.lat} onChange={handleChange} required className="form-input" />
            </label>
            <label>Longitude:
              <input type="text" name="long" value={formData.long} onChange={handleChange} required className="form-input" />
            </label>
            <label>Phone:
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" />
            </label>
          </div>
        </div>
        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
