import React, { useState } from "react";
import "./JobHeader.css";

const JobHeader = ({ onSearch, onCategoryClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      onSearch(event.target.value); // Pass the search term to parent
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="container">
       
        <div className="filter-section">
          <button className="filter" onClick={toggleDropdown}>
            Filter
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  onKeyPress={handleSearch}
                />
                <button className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <nav className="nav-linksssssss5">
                <a onClick={() => onCategoryClick("IT Jobs")}>IT Jobs</a>
                <a onClick={() => onCategoryClick("Healthcare Jobs")}>Healthcare Jobs</a>
                <a onClick={() => onCategoryClick("Business Jobs")}>Business Jobs</a>
                <a onClick={() => onCategoryClick("Banking Jobs")}>Banking Jobs</a>
              </nav>
              
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default JobHeader;