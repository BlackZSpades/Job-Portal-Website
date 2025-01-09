import React from "react";

const InternCard = ({ intern }) => {
  return (
    <div className="intern-card">
      <h3>{intern.title}</h3>
      <p><strong>Company:</strong> {intern.company}</p>
      <p><strong>Location:</strong> {intern.location}</p>
      <p><strong>Package:</strong> {intern.package}</p>
      <p><strong>Description:</strong> {intern.description}</p>
     
    </div>
  );
};

export default InternCard;