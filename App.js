
import React, { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import MainJob from './Components/Pages/MainJob';
import Internship from './Components/Pages/Internship';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import JobCard from './Components/JobCard';
import JobList from './Components/Pages/JobList';
import PostJob from './Components/Pages/PostJob';
import JobHeader from './Components/Pages/JobHeader';
import MenuCard from './Components/Pages/MenuCard';
import InternList from './Components/Pages/InternList';
import PostIntern from './Components/Pages/PostIntern';
import Profile from './Components/Pages/Profile';

const AppLayout = ({ children, notifications }) => {
  const location = useLocation(); // Access the location inside AppLayout
  const excludePaths = ["/login", "/register"];

  const shouldExclude = excludePaths.includes(location.pathname);
  

  return (
    <>
      {!shouldExclude && <Dashboard notifications={notifications} />}
      {children}
    </>
  );
};

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Amdocs",
      location: "Pune",
      description: "Build and optimize user interfaces.Key Responsibilities of the Intern: Proficient with corporate productivity tools like Excel, Word, PPT, Outlook, Gmail & Web .Presentation Tools.Lead generation & Cold calling. Excellent verbal & written communication skills. Strong listening & presentation skills. Work from office only",
      package: "4.5 LPA",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Tiger Analytics",
      location: "Work From Home",
      description: "Develop and maintain server-side applications.Build and optimize user interfaces.Key Responsibilities of the Intern: Proficient with corporate productivity tools like Excel, Word, PPT, Outlook, Gmail & Web .Presentation Tools.Lead generation & Cold calling. Excellent verbal & written communication skills. Strong listening & presentation skills. Work from office only",
      package: "6.5 LPA",
    },
  ]);
  const addJob = (newJob) => setJobs((prevJobs) => [...prevJobs, newJob]);

  const [interns, setInterns] = useState([
 
    {
      id: 1,
      title: "Web Developer",
      company: "Microsoft",
      location: "Pune",
      description: "Build and optimize user interfaces.Key Responsibilities of the Intern: Proficient with corporate productivity tools like Excel, Word, PPT, Outlook, Gmail & Web .Presentation Tools.Lead generation & Cold calling. Excellent verbal & written communication skills. Strong listening & presentation skills. Work from office only",
      package: "4.5 lpa"
    },
    {
      id: 2,
      title: "Software Developer",
      company: "Infosys",
      location: "Work Form Home",
      description: "Develop and maintain server-side applications.Build and optimize user interfaces.Key Responsibilities of the Intern: Proficient with corporate productivity tools like Excel, Word, PPT, Outlook, Gmail & Web .Presentation Tools.Lead generation & Cold calling. Excellent verbal & written communication skills. Strong listening & presentation skills. Work from office only",
      package: "6.5 lpa"
    },
     {
      id: 3,
      title: "Data Analyasts",
      company: "Oracle",
      location: "Work Form Home",
      description: "Develop and maintain server-side applications.Build and optimize user interfaces.Key Responsibilities of the Intern: Proficient with corporate productivity tools like Excel, Word, PPT, Outlook, Gmail & Web .Presentation Tools.Lead generation & Cold calling. Excellent verbal & written communication skills. Strong listening & presentation skills. Work from office only",
      package: "6.5 lpa"
    },


  ]);

  const addIntern = (newIntern) => {
    setInterns((prevInterns) => [...prevInterns, newIntern]);
  };




  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: "You have successfully applied!",
      time: new Date().toLocaleTimeString(),
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const location = useLocation(); // Get the current route



  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  // Handle search functionality
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCategory(""); // Clear category when searching
  };

  // Handle category filter
  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    setSearchTerm(""); // Clear search when selecting a category
  };

  return (
    <AppLayout notifications={notifications}>
     {/* Conditionally render JobHeader and MenuCard only on the JobList page */}
{location.pathname === "/joblist" && (
  <>
    <JobHeader onSearch={handleSearch} onCategoryClick={handleCategoryClick} />
    <MenuCard searchTerm={searchTerm} category={category} />
  </>
)}

{/* {location.pathname === "/internlist" && (
  <>
    <JobHeader onSearch={handleSearch} onCategoryClick={handleCategoryClick} />
    <MenuCard searchTerm={searchTerm} category={category} />
  </>
)} */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainjob" element={<MainJob addNotification={addNotification} />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobcard" element={<JobCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/joblist"
          element={<JobList jobs={jobs} addNotification={addNotification} />}
        />
         <Route path="/post-job" element={<PostJob addJob={addJob} />} />

        <Route
          path="/internlist"
          element={<InternList interns={interns} addNotification={addNotification} />}
        />
            <Route path="/post-intern" element={<PostIntern addIntern={addIntern} />} />
        
       
      </Routes>
      <Footer />
    </AppLayout>
  );
}

export default App;
