import React, { useState, useEffect } from "react";
import "./JobList.css";
import JobHeader from "./JobHeader";
import MenuCard from "./MenuCard";


const JobList = ({ jobs = [],addNotification }) => {
  // Automatically select the first job on load
  const [selectedJob, setSelectedJob] = useState(jobs[0] || null);

  const handleDetails = (job) => {
    setSelectedJob(job);
  };

  if (!Array.isArray(jobs) || jobs.length === 0) {
    return <p>No jobs available at the moment.</p>;
  }


  return (
    <div>
{/* 
<JobHeader></JobHeader> 
<MenuCard></MenuCard> */}


      <br></br>   <br></br>   <br></br>
      <h2 className="Ajob">Avaliable Jobs</h2><br/><br/>
      <div className="job-container">



        {/* Left: Job listings */}
        <div className="job-list">
          {jobs.map((job) => (
            <div key={job.id} className={`job-body ${selectedJob === job ? "active" : ""}`}>
              <h3>
                <strong>Job Title:</strong> {job.title}
              </h3>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Package:</strong> {job.package}
              </p>
              <button
                onClick={() => handleDetails(job)}
                className="apply"
              >
                Details
              </button>
            </div>
          ))}
        </div>

        {/* Right: Job details */}
        <div className="job-details">
          {selectedJob ? (
            <>
            <div className="sejal">
              <h1>
                <strong>{selectedJob.title}</strong> 
              </h1>
              <p>
                <strong>Company:</strong> {selectedJob.company}
              </p>
              <p>
                <strong>Location:</strong> {selectedJob.location}
              </p>
              <p>
                <strong>Package:</strong> {selectedJob.package}
              </p>
              <p className="description">
                <strong>Description:</strong> {selectedJob.description}
              </p>
             
              <button  className="sejalclick " onClick={addNotification}>Apply</button>
               
              </div>
            </>
          ) : (
            <p>Select a job to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
