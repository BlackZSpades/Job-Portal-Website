import React from "react";

const JobDetails = ({ job }) => {
  if (!job) return <div style={{ padding: "16px" }}>Select a job to view details.</div>;

  return (
    <div style={styles.details}>
      <img src={job.logo} alt={`${job.company} Logo`} style={styles.logo} />
      <h2 style={styles.title}>{job.title}</h2>
      <p style={styles.company}>{job.company}</p>
      <p style={styles.location}>📍 {job.location}</p>
      <p style={styles.updatedOn}>📅 Updated On: {job.updatedOn}</p>
      <div style={styles.footer}>
        <button style={styles.applyButton}>Quick Apply</button>
        <span style={styles.salary}>💰 Salary: {job.salary}</span>
      </div>
    </div>
  );
};

const styles = {
  details: {
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff"
  },
  logo: {
    width: "80px",
    height: "80px",
    borderRadius: "12px",
    marginBottom: "16px"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "8px 0"
  },
  company: {
    fontSize: "16px",
    margin: "4px 0"
  },
  location: {
    fontSize: "14px",
    color: "#777"
  },
  updatedOn: {
    fontSize: "12px",
    color: "#aaa",
    margin: "8px 0"
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px"
  },
  applyButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none"
  },
  salary: {
    fontSize: "14px",
    color: "#555"
  }
};

export default JobDetails;
