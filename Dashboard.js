import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; 
import Chat from "./Pages/Chat";

const Dashboard = ({notifications = []}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login status


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // For mobile responsiveness
  const navLinkClasses = isMobileMenuOpen
    ? "nav-links nav-links-mobile"
    : "nav-links";

  // Add your actual logo URL here
  const logoUrl = "logo.jpg";

  //chatbot
  const [showChat, setShowChat] = useState(false); 

  const toggleChat = () => {
      setShowChat(prev => !prev); 
  };

  const handleCloseChat = () => {
      setShowChat(false); 
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Toggle the visibility of the notification dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logoUrl} alt="Logo" className="logo-image" />
        <h1 className="logo-text">RiseUp</h1>
      </div>

      {/* Mobile Menu Icon */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776;
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search Opportunities"
          className="search-input"
        />
      </div>

      {/* Navigation Links */}
      <ul className={navLinkClasses}>
        <li>
          <Link to="/" className="nav-link3">
            Home
          </Link>
        </li>
        <li>
          <Link to="/mainjob" className="nav-link3">
            Job
          </Link>
        </li>
        <li>
          <Link to="/internship" className="nav-link3">
            Internship
          </Link>
        </li>
        {/* <li>
          <Link to="/chat" className="nav-link">
            <i className="fas fa-comment chat-icon"></i>
          </Link>


         </li> */}



</ul>
  
    <div className="notification-container">
        <button className="notification-icon" onClick={toggleDropdown}>
        <i class="fa fa-bell" aria-hidden="true"></i>
          <span className="notification-count">{notifications.length}</span>
        </button>

        {isDropdownVisible && (
          <div className="notification-dropdown">
            {notifications.length === 0 ? (
              <p>No notifications yet</p>
            ) : (
              <ul>
                {notifications.map(notification => (
                  <li key={notification.id}>
                    <p>{notification.message}</p>
                    <small>{notification.time}</small>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <Link to="/profile" className="profileicon1">
  <i className="fa fa-user" aria-hidden="true"></i>
</Link>

     
      <div className="nav-item login">
          <Link to="/login" className="nav1-link">
           Login 
          </Link>
        </div>

         
           {!showChat && ( 
                <div className="clickable-circle" onClick={toggleChat}>
                    <span style={{ color: 'white' }}><i className="fas fa-comment chat-icon"></i></span> 
                </div>
            )}

            
            {showChat && <Chat onClose={handleCloseChat} />}
    </nav>
  );
};

export default Dashboard;
