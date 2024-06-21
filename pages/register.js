import React, { useState } from "react";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import axios from 'axios';


if (typeof window !== 'undefined') {
  require('text-encoding'); // Import the polyfill only on the client-side
}

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

   // Import axios if not already imported

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validateForm();
  
  if (Object.keys(validationErrors).length === 0) {
    try {
      // Make a POST request using axios
      const response = await axios.post('http:localhost:8000/api/register', formData);
      
      // Handle the response if needed
      console.log("Form submitted successfully:", response.data);
      
    } catch (error) {
      // Handle errors from the request
      console.error("Error submitting form:", error.message);
    }
  } else {
    // Form has validation errors, display them
    setErrors(validationErrors);
  }
};


  return (
    <Layout header={1}>
      <section className="register-section mt-95">
        <div className="register-container row">
          <div className="col">
            <h3>Register</h3>
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                />
                {errors.username && <span className="error">{errors.username}</span>}
              </div>
              <div className="col-md-6">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="col-md-6">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="col-md-6">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <div className="col-md-6">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-password"
                  required
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
              </div>
              <div className="col-md-6" >
              <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Register;
