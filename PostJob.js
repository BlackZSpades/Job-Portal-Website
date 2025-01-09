import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './PostJob.css';


const PostJob = ({ addJob }) => {
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
    addJob({ ...formData, id: Date.now() }); // Add the new job
    alert("Job posted successfully!");
    setFormData({ title: "", company: "", location: "", description: "", pakage: "" });
    navigate("/joblist"); // Redirect to the JobList page
  };

  return (
    <div className="post-job-page">
      <div className="post-job-container">
        <h2>Post a New Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Job Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter job title"
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
            <label>Job Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter job description"
            ></textarea>
          </div>
       
          <button type="submit" className="pojbtn">Post Job</button>
        </form>
      </div><br></br><br></br><br></br>
    </div>
  );
};

export default PostJob;
