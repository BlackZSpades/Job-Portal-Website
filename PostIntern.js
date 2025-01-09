import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './PostIntern.css';


const PostIntern = ({ addIntern }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    package: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.company || !formData.location ||  !formData.package || !formData.description) {
      alert("Please fill all the fields.");
      return;
    }
    addIntern({ ...formData, id: Date.now() }); // Add the new job
    alert("Inetrn posted successfully!");
    setFormData({ title: "", company: "", location: "", description: "", pakage: "" });
    navigate("/internlist"); // Redirect to the JobList page
  };

  return (
    <div className="post-intern-page">
      <div className="post-intern-container">
        <h2>Post a New Internship</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>InternTitle:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter intern title"
            />
          </div>
          <div className="form-group">
            <label>Company Name:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
            />
          </div>
          <div className="form-group">
            <label>Package:</label>
            <input
              type="text"
              name="package"
              value={formData.package}
              onChange={handleChange}
              placeholder="Enter package"
            />
          </div>
          <div className="form-group">
            <label>Intern Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter intern description"
            ></textarea>
          </div>
       
          <button type="submit" className="poibtn">Post Intern</button>
        </form>
      </div><br></br><br></br><br></br>
    </div>
  );
};

export default PostIntern;
