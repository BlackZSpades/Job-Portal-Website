import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Image slider state
  const images = ["/regi_img1.jpg", "/regi_img2.jpg" ,"/regi_img6.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
  
    // For now, assume any non-empty email and password is valid (you can replace this with real validation later)
    if (email && password) {
      setError(""); // Clear error
  
      // Save email and password to localStorage
      const loginData = { email, password };
      localStorage.setItem("loginData", JSON.stringify(loginData));
  
      // Navigate to the dashboard after successful login
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };
  
  

  // Image slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
    },
    card: {
      display: "flex",
      width: "300%",
      maxWidth: "930px",
      height: "82vh",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    leftSection: {
      flex: 1,
      padding: "30px",
      background: "#faa84b",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "63vh",
      borderRadius: "10px",
      transition: "opacity 0.3s ease-in-out",
    },
    rightSection: {
      flex: 1,
      padding: "20px",
    },
    title: {
      marginTop: "10%",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    form: {
      marginTop: "15%",
      display: "flex",
      flexDirection: "column",
    },
    formGroup: {
      marginBottom: "25px",
      position: "relative",
    },
    label: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "5px",
      display: "block",
    },
    input: {
      padding: "10px",
      fontSize: "14px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      width: "100%",
      boxSizing: "border-box",
    },
    toggleIcon: {
      position: "absolute",
      top: "70%",
      right: "10px",
      transform: "translateY(-50%)",
      fontSize: "18px",
      color: "#666",
      cursor: "pointer",
    },
    button: {
      padding: "10px",
      backgroundColor: isHovered ? "#0056b3" : "black",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    error: {
      color: "red",
      fontSize: "12px",
      marginBottom: "10px",
      textAlign: "center",
    },
    linkText: {
      textAlign: "center",
      fontSize: "17px",
      marginTop: "9px",
    },
    title: {
      fontSize: "36px",  
      fontWeight: "bold",
      marginTop:'8%',
 
    },
  };
  const hrline = {
    backgroundColor: "gray", 
    height: "0.5px",
    width: "37%", 
    marginLeft:'29%',
    marginTop:'-2%',
    border: "none", 
    filter: "blur(1px)", 
  };
   // Add logo URL here
   const logoUrl = "regi_logo.png";

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Left Section with Image Slider */}
        <div style={styles.leftSection}>
          <img
            src={images[currentImageIndex]}
            alt="Login"
            style={styles.image}
          />
          <h3 style={{ color: "#000", textAlign: "center", marginTop: "8px" }}>
            <span
              style={{
                color: "#7d1072",
                fontWeight: "bold",
                fontSize: "150%",
              }}
            >
              Jobs
            </span>
            <br />
            of various employment types
          </h3>
        </div>


        {/* Right Section with Form */}
        
        <div style={styles.rightSection}>
          {/* Flexbox container for title and logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Logo Image */}
            <img src={logoUrl} alt="Logo" style={{ height: "60px" ,marginLeft:'25%',}} />
           
            {/* Title */}
            <h2 style={styles.title}>Login</h2>
          </div> <hr style={hrline}></hr>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                style={styles.input}
              />
              <i
                className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                style={styles.toggleIcon}
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            {error && <p style={styles.error}>{error}</p>}

            <button
              type="submit"
              style={styles.button}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Login
            </button>

            <p style={styles.linkText}>
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "dodgerblue" }}>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
