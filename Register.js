import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Register = () => {
  const [formType, setFormType] = useState("Candidate");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companyAddress: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [hoveredButton, setHoveredButton] = useState(null); // Track hovered button
  const [currentSlide, setCurrentSlide] = useState(0); // Track current image slide

  const sliderImages = [
    "/regi_img1.jpg", // Add your image paths here
    "/regi_img2.jpg",
    "/regi_img5.jpg"
  ];

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
    imageSlider: {
      width: "100%",
      height: "63vh",
      borderRadius: "10px",
      overflow: "hidden",
    },
    sliderImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    rightSection: {
      flex: 1,
      padding: "20px 30px",
    },
    title1: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
      width: "100%",
    },
    inputWrapper: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    toggleIcon: {
      position: "absolute",
      right: "10px",
      cursor: "pointer",
      fontSize: "18px",
      color: "#333",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease", // Smooth transition for hover effect
    },
    activeButton: {
      backgroundColor: "dodgerblue", // Highlighted color when active
      color: "#fff",
    },
    buttonHover: {
      backgroundColor: "dodgerblue", // Hover effect color
    },

    title: {
      fontSize: "18px",  // Decrease the font size here
      fontWeight: "bold",
      marginBottom: "15px",
    },

  };
  const hrline = {
    backgroundColor: "gray", 
    height: "0.5px",
    width: "70%", 
    margin: "10px auto", 
    border: "none", 
    filter: "blur(1px)", 
  };
  

  const navigate = useNavigate();

  const handleFormToggle = (type) => {
    setFormType(type);
    setFormData({
      ...formData,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      companyAddress: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registrationData = {
      formType,
      ...formData,
    };

    localStorage.setItem("registrationData", JSON.stringify(registrationData));

    alert(`You have successfully registered as a ${formType}!`);
    navigate("/login", { state: { role: formType } });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Add logo URL here
  const logoUrl = "regi_logo.png";

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.leftSection}>
          <div style={styles.imageSlider}>
            <img
              src={sliderImages[currentSlide]}
              alt="Slider"
              style={styles.sliderImage}
            />
          </div>
          <h3 style={{ color: "#000", textAlign: "center", marginTop: "8px" }}>
            <span style={{ color: "#7d1072", fontWeight: "bold", fontSize: "150%" }}>
              Jobs
            </span>
            <br />
            of various employment types
          </h3>
        </div>

        <div style={styles.rightSection}>
          {/* Flexbox container for title and logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Logo Image */}
            <img src={logoUrl} alt="Logo" style={{ height: "60px" ,marginLeft:'7%',}} />
           
            {/* Title */}
            <h2 style={styles.title1}>Create an Account </h2>
          </div> <hr style={hrline}></hr>
          <h2 style={styles.title}>Register as {formType}</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "15px" }}>
            <button
              style={{
                ...styles.button,
                ...(formType === "Candidate" ? styles.activeButton : {}),
                ...(hoveredButton === "Candidate" ? styles.buttonHover : {}),
              }}
              onClick={() => handleFormToggle("Candidate")}
              onMouseEnter={() => setHoveredButton("Candidate")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Candidate
            </button>
            <button
              style={{
                ...styles.button,
                ...(formType === "Company" ? styles.activeButton : {}),
                ...(hoveredButton === "Company" ? styles.buttonHover : {}),
              }}
              onClick={() => handleFormToggle("Company")}
              onMouseEnter={() => setHoveredButton("Company")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Employee
            </button>
          </div><br />

          <form style={styles.form} onSubmit={handleSubmit}>
            {formType === "Candidate" && (
              <>
                <div style={{ display: "flex", gap: "15px" }}>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="First Name"
                    style={{ ...styles.input, width: "48%" }}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Last Name"
                    style={{ ...styles.input, width: "48%" }}
                    onChange={handleChange}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  style={{ ...styles.input, width: "95%" }}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="+91 Phone"
                  style={{ ...styles.input, width: "95%" }}
                  onChange={handleChange}
                />
                <div style={styles.inputWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    style={styles.input}
                    onChange={handleChange}
                  />
                  <i
                    className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                    style={styles.toggleIcon}
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <div style={styles.inputWrapper}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm Password"
                    style={styles.input}
                    onChange={handleChange}
                  />
                  <i
                    className={`fas ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"}`}
                    style={styles.toggleIcon}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                </div>
              </>
            )}
            {formType === "Company" && (
              <>
                <input
                  type="text"
                  name="EmployeeName"
                  value={formData.companyName}
                  placeholder="Employee Name"
                  style={{ ...styles.input, width: "95%" }}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="EmployeeAddress"
                  value={formData.companyAddress}
                  placeholder="Employee Address"
                  style={{ ...styles.input, width: "95%" }}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Employee Email"
                  style={{ ...styles.input, width: "95%" }}
                  onChange={handleChange}
                />
                    <div style={styles.inputWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    style={styles.input}
                    onChange={handleChange}
                  />
                  <i
                    className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                    style={styles.toggleIcon}
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <div style={styles.inputWrapper}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm Password"
                    style={styles.input}
                    onChange={handleChange}
                  />
                  <i
                    className={`fas ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"}`}
                    style={styles.toggleIcon}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                </div>
              </>
            )}
            <button type="submit" style={styles.button}>
              Register
            </button>
            <p style={{ marginLeft: "20%" }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "dodgerblue", textDecoration: "underline" }}>
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
