import { Link } from "react-router-dom";
import React from 'react'
import './MainJob.css';


const MainJob = ({addnotification}) => {


  const categories = [
    { name: "Software Development", icon: "💻" },
    { name: "Data Science", icon: "📊" },
    { name: "Graphic Design", icon: "🎨" },
    { name: "Marketing", icon: "📣" },
    { name: "Finance", icon: "💰" },
  ];

  
const rolesData = [
  {
    title: "Data Analyst",
    openings: "370+ Openings",
    companies: [
      { name: "IDFC", logo: "job-s5.webp" },
      { name: "Unilever", logo: "job-s2.webp" },
      { name: "Barclays", logo: "job-s3.webp" },
      { name: "Nokia", logo: "job-s9.webp" },
    ],
  },
  {
    title: "Frontend",
    openings: "250+ Openings",
    companies: [
      { name: "Amazon", logo: "job-s1.webp" },
      { name: "Flipkart", logo: "job-s3.webp" },
      { name: "Microsoft", logo: "job-s8.webp" },
      { name: "Walmart", logo: "job-s7.webp" },
    ],
  },
  {
    title: "Full-Stack Roles",
    openings: "300+ Openings",
    companies: [
      { name: "Cisco", logo: "job-s2.webp" },
      { name: "JPMorgan", logo: "job-s4.webp" },
      { name: "Meesho", logo: "job-s6.webp" },
      { name: "MasterCard", logo: "job-s8.webp" },
    ],
  },
  {
    title: "Product Management",
    openings: "246+ Openings",
    companies: [
      { name: "Deloitte", logo: "job-s3.webp" },
      { name: "Google", logo: "job-s1.webp" },
      { name: "Titan", logo: "job-s5.webp" },
      { name: "PayPal", logo: "job-s7.webp" },
    ],
  },
];

const RoleCard = ({ role }) => {
  return (
    <div className="role-card">
      <h3>{role.title}</h3>
      <p>{role.openings}</p>
      <div className="company-logos">
        {role.companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={`${company.name} Logo`}
            className="company-logo"
          />
        ))}
      </div>
    </div>
  );
};

  return (
    <div className='Rjob'>
 



      <section className="header">
  <div className="header-text">
    <h1>Unlock <span>Ambition</span></h1>
    <p>
      Apply to a plethora of hiring opportunities & work with your dream companies!
    </p>
    <div className="button-container">
    <Link to="/joblist" >
      <button className="find-jobs">Find Jobs</button>
      </Link>
      <Link to="/post-job">
        <button className="post-jobs">Post Jobs</button>
      </Link>
    </div>
  </div>
  <div className="header-image">
    <img
      src="/job3.jpg"
      alt="Person with logos"
      className="person-image"
    />
  </div>
</section>

            {/* Logos can be added here */}
            <div className="j-img-container">
                        <div className="j-wrapper">
                            <marquee behavior="scroll" direction="left" loop="infinite">
                                <img src="1.webp" alt="Image 1" />
                                <img src="asianpaints.webp" alt="Image 2" />
                                <img src="birla_group.webp" alt="Image 3" />
                                <img src="flipkart.webp" alt="Image 4" />
                                <img src="loreal.webp" alt="Image 5" />
                                <img src="walmart.webp" alt="Image 6" />
                                <img src="wipro.webp" alt="Image 7" />
                                <img src="1.webp" alt="Image 1" />
                                <img src="asianpaints.webp" alt="Image 2" />
                                <img src="birla_group.webp" alt="Image 3" />
                                <img src="flipkart.webp" alt="Image 4" />
                                <img src="loreal.webp" alt="Image 5" />
                                <img src="walmart.webp" alt="Image 6" />
                                <img src="wipro.webp" alt="Image 7" />
                                <img src="1.webp" alt="Image 1" />
                                <img src="asianpaints.webp" alt="Image 2" />
                                <img src="birla_group.webp" alt="Image 3" />
                                <img src="flipkart.webp" alt="Image 4" />
                                <img src="loreal.webp" alt="Image 5" />
                                <img src="walmart.webp" alt="Image 6" />
                                <img src="wipro.webp" alt="Image 7" />
                                <img src="1.webp" alt="Image 1" />
                                <img src="asianpaints.webp" alt="Image 2" />
                                <img src="birla_group.webp" alt="Image 3" />
                                <img src="flipkart.webp" alt="Image 4" />
                                <img src="loreal.webp" alt="Image 5" />
                                <img src="walmart.webp" alt="Image 6" />
                                <img src="wipro.webp" alt="Image 7" />
                            </marquee>
                        </div>
                    </div>
                    <div className="jobs-category-container">
        <br />
        <h1 className="j-cat">Jobs Category</h1>
        <div className="categories">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <span className="icon">{category.icon}</span>
              <span className="name">{category.name}</span>
            </div>
          ))}
        </div>
        <br />
        <br /><br></br>
      </div><br></br>

    
                 

                    <div className="R"><br></br>
      <h1>Find The Right Role For You</h1>
      <p>Apply to roles matching your skills from 500+ trending options.</p><br></br>
      <div className="role-container">
        {rolesData.map((role, index) => (
          <RoleCard key={index} role={role} />
        ))}
      </div><br></br><br></br><br></br>
    </div>   <br></br><br></br>


                    
    </div>
  )
}

export default MainJob;
