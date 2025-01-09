import React, { useState, useEffect } from "react";
import "./InternList.css";

const InternList = ({ interns = [],addNotification }) => {
  // Automatically select the first job on load
  const [selectedIntern, setSelectedJob] = useState(interns[0] || null);

  const handleDetails = (intern) => {
    setSelectedJob(intern);
  };

  if (!Array.isArray(interns) || interns.length === 0) {
    return <p>No interns available at the moment.</p>;
  }

  

  return (
    <div>
      <h2 className="Aintern">Available Internships</h2>
      <div className="intern-container">
        {/* Left: Job listings */}
        <div className="intern-list">
          {interns.map((intern) => (
            <div key={intern.id} className={`intern-body ${selectedIntern === intern ? "active" : ""}`}>
              <h3>
                <strong> Title:</strong> {intern.title}
              </h3>
              <p>
                <strong>Company:</strong> {intern.company}
              </p>
              <p>
                <strong>Location:</strong> {intern.location}
              </p>
              <p>
                <strong>Package:</strong> {intern.package}
              </p>
              <button
                onClick={() => handleDetails(intern)}
                className="apply"
              >
                Details
              </button>
            </div>
          ))}
        </div>

        {/* Right: Job details */}
        <div className="intern-details">
          {selectedIntern ? (
            <>
           <div className="sejal1">
              <h1>
                <strong>{selectedIntern.title} </strong> 
              </h1>
              <p>
                <strong>Company:</strong> {selectedIntern.company}
              </p>
              <p>
                <strong>Location:</strong> {selectedIntern.location}
              </p>
              <p>
                <strong>Package:</strong> {selectedIntern.package}
              </p>
              <p className="description1">
                <strong>Description:</strong> {selectedIntern.description}
              </p>
             
              <button className="sejalclick1" onClick={addNotification}>Click </button>
               
              </div>
            </>
          ) : (
            <p>Select a Internships to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternList;
