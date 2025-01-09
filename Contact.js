import React, { useState } from "react";
import axios from "axios"; // Import Axios
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-endpoint.com/contact', formData); // Replace with your API URL
      console.log("Form submitted:", formData);
      console.log("Response from server:", response.data);
      alert("Your message has been submitted successfully!");
      setFormData({
        firstName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contact_content"><br></br><br></br><br></br>
      <h1 className="heading">Contact Us</h1>
    
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(000) 000-0000"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form><br></br><br></br><br></br><br></br><br></br>

    </div>
  );
};

export default Contact;
