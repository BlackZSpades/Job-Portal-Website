import React, { useEffect, useState } from "react";
import "./JobHeader.css";
import axios from "axios";

const MenuCard = ({ searchTerm, category }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);

      // Adzuna API credentials
      const APP_ID = "d81ce483"; // Your Application ID
      const APP_KEY = "2b4663df865a921a34062c084b8ecbfe"; // Your Application Key
      const BASE_URL = "https://api.adzuna.com/v1/api/jobs/in/search/1"; // India market URL

      // Initialize the URL with basic parameters
      let url =` ${BASE_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`;

      // If a category is selected, add it to the search term as a keyword
      if (category) {
        url += `&what=${encodeURIComponent(category)}`;
      } else if (searchTerm) {
        // Add the search term (e.g., '12th class job') to the URL
        url += `&what=${encodeURIComponent(searchTerm)}`;
      }

      console.log("Fetching URL:", url); // Log the API URL to check

      try {
        const response = await axios.get(url);
        const data = response.data.results;

        // Check if data is received
        if (data && data.length > 0) {
          const formattedJobs = data.map((job, index) => ({
            id: index,
            title: job.title,
            company: job.company.display_name,
            location: job.location.display_name,
            // description: job.description,
            applyLink: job.redirect_url,
            skills: job.skills || "Skills not specified",  // Default if skills are not available
            education: job.education || "Education not specified",  // Default if education is not available
            publishDate: job.created ? new Date(job.created).toLocaleDateString() : "Publish date not available", // Default to current date if not available
            expiryDate: job.expires ? new Date(job.expires).toLocaleDateString() : "Expiry date not available", // Default if not available
          }));

          setJobs(formattedJobs);
        } else {
          setError("No jobs found for this category.");
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to fetch jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchTerm, category]); // Refetch when searchTerm or category changes

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0", color: "#333" }}>
        {searchTerm || category
          ? `Jobs for "${searchTerm || category}"`
          : "Latest Job Vacancies"}
      </h2>
      <div className="job-list">
        {loading ? (
          <p className="loading">Loading jobs...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : jobs.length > 0 ? (
          jobs.map((job) => (


            <div className="job-card" key={job.id}>
              <div className="job-info">
                <h3>{job.title}</h3><br></br>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Published on:</strong> {job.publishDate}</p>
                <p><strong>Expiry on:</strong> {job.expiryDate}</p>
                {/* <p><strong>Description:</strong> {job.description}</p> */}
                <br/><br/>
                <a
                  href={job.applyLink}
                  className="apply-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div><br></br>
            </div>
          ))
        ) : (
          <p className="error">
            No jobs found for "{searchTerm || category}". Try another search or
            category.
          </p>
        )}
      </div>
    </div>
  );
};

export default MenuCard;