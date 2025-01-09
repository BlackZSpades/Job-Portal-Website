import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    location: "",
    email: "",
    mobile: "",
    profileImage: null,
    education: "",
    college: "",
    resume:"",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(true); // Automatically enable editing mode on load
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData({ ...profileData, profileImage: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert("Profile saved successfully!"); // Display success message
    console.log("Saved Profile Data:", profileData); // Log the saved data
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "application/pdf" || file.type === "application/msword" || file.type.includes("wordprocessingml"))) {
      setProfileData({ 
        ...profileData, 
        resume: { name: file.name, url: URL.createObjectURL(file) }
      });
    } else {
      alert("Please upload a valid resume (PDF, DOC, or DOCX).");
    }
  };
  
  
  

  
  return (
    <div className="p-container">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-image-preview">
            <img
              src={
                profileData.profileImage ||
                "https://via.placeholder.com/150?text=Profile+Image"
              }
              alt="Profile Preview"
            />
            <label>
              Upload Profile Image:
              <input type="file" onChange={handleImageChange} accept="image/*" />
            </label>
          </div>
          <label>
            Education:
            <input
              type="text"
              name="education"
              value={profileData.education}
              onChange={handleChange}
              // required
            />
          </label>
          <label>
            College Name:
            <input
              type="text"
              name="college"
              value={profileData.college}
              onChange={handleChange}
              // required
            />
          </label>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleChange}
              // required
            />
          </label>
          <label>
            Gender:
            <div className="gender-radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={profileData.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label style={{ marginLeft: "10px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={profileData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={profileData.dob}
              onChange={handleChange}
              // required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={profileData.location}
              onChange={handleChange}
              // required
            />
          </label>
          <label>
            Mobile Number:
            <input
              type="text"
              name="mobile"
              value={profileData.mobile}
              onChange={handleChange}
              // required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              // required
            />
          </label>
          <label>
           Upload Resume:
              <input type="file" name="resume" onChange={handleResumeChange} accept=".pdf,.doc,.docx" />
          </label>


          <button className="btn1" type="submit">Save</button>
        </form>
      ) : (
        <div className="profile-header">
          <div className="profile-image">
            <img
              src={
                profileData.profileImage ||
                "https://via.placeholder.com/150?text=Profile+Image"
              }
              alt="Profile"
            />
          </div>
          <div className="profile-info">
            <h2>{profileData.fullName}</h2>
            <p>{profileData.education}</p>
            <p>{profileData.college}</p>
            <hr className="gaphr" />
            <div className="profile-details">
              <p><i className="fas fa-map-marker-alt"></i> {profileData.location}</p>
              <p><i className="fas fa-phone-alt"></i> {profileData.mobile}</p>
              <p><i className="fas fa-envelope"></i> {profileData.email}</p>
              <p><i className="fas fa-calendar-alt"></i> {profileData.dob}</p>
              <p>
  <i className="fa fa-file" aria-hidden="true"></i>
  {profileData.resume ? (
    <a href={profileData.resume.url} target="_blank" rel="noopener noreferrer">
      {profileData.resume.name}
    </a>
  ) : (
    "No Resume Uploaded"
  )}
</p>



            </div>
          </div>
          <button id="btn2" onClick={handleEdit}>Edit</button>
        </div>
        
      )}
    </div>
  );
};

export default Profile;
