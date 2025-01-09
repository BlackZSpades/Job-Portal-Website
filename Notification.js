import React, { useState } from "react";

function Noti() {
  // State to manage notifications
  const [notifications, setNotifications] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to add a new notification
  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: "You clicked the button!",
      time: new Date().toLocaleTimeString(),
    };
    setNotifications(prev => [...prev, newNotification]);
  };

  // Toggle notification dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Notification Bell Icon */}
        <button 
          onClick={toggleDropdown} 
          style={{
            fontSize: "20px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          🔔 ({notifications.length})
        </button>

        {/* Notification Dropdown */}
        {isDropdownVisible && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              right: "0",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "5px",
              width: "250px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              zIndex: 1000,
            }}
          >
            {notifications.length === 0 ? (
              <p style={{ padding: "10px", margin: 0 }}>No notifications</p>
            ) : (
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {notifications.map(notification => (
                  <li
                    key={notification.id}
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <p style={{ margin: 0 }}>{notification.message}</p>
                    <small style={{ color: "#999" }}>{notification.time}</small>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Button to Trigger a Notification */}
      {/* <div style={{ marginTop: "20px" }}>
        <button 
          onClick={addNotification} 
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Apply
        </button>
      </div> */}
    </div>
  );
}

export default Noti;