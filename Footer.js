import React from "react";
import "./Footer.css";

const Footer = () => {

const styles = {
  fcontainer: {
    // backgroundColor: '#001f4d', 
   
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
    marginLeft:'-10%',
  },
  newsletter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '7px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px 0 0 5px',
    outline: 'none',
  },
  button: {
    padding: '7px',
    fontSize: '16px',
    backgroundColor: '#f39c12',
    color: '#fff',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
  },
  buttonsContainer: {
    margin: '20px 0',
  },
  actionButton: {
    width:'35%',
    margin: '0 10px',
    padding: '7px',
    backgroundColor: '#f39c12',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  
};

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
            <h1>RiceUp</h1>
            <h5>Rise up, take courage and do it</h5>
          
          
          




          <div style={styles.fcontainer}>
      <div style={styles.newsletter}>
        <input 
          type="text" 
          placeholder="Sign up for our newsletter" 
          style={styles.input} 
        />
        <button style={styles.button}>➤</button>
      </div>
      <div style={styles.buttonsContainer}>
        <button style={styles.actionButton}>Share</button>
        <button style={styles.actionButton}>Publish</button>
      </div>
      
    </div>
          
          {/* <p><i className="fas fa-map-marker-alt"></i> 123 Main St, City, Country</p> */}
         
          

        </div>

        {/* Quick Links Section */}
        <div style={{marginLeft:'5%'}} className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/mainjob">Find Jobs</a></li>
            <li><a href="/employers">Employers</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
          
        </div>

        {/* Contact Section */}
        <div  className="footer-section">
          <h4>Apply</h4>
          
         <ul>
            <li><a href="/mainjob"> Jobs</a></li>
            <li><a href="/internship"> Internship</a></li>
            <li><a href="/contact"> Scholarship</a></li>
         
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
        <h4>Stay Connected</h4>
        <p><i className="fas fa-phone"></i> +1-234-567-890</p>
          <p className="inquiries">Support Inquiries</p>
          <p><i className="fas fa-envelope"></i> support@jobportal.com</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Main St, City, Country</p>
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RiseUp Job Portal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;