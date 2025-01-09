import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Package:</strong> {job.package}</p>
      <p><strong>Description:</strong> {job.description}</p>
     
    </div>
  );
};

export default JobCard;