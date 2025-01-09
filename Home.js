import React, { Component } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../Footer';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      carouselImages: [
        "slider2.jpg",
        "slider3.jpg",
        "slider4.jpg",
        "slider5.jpg",
        "slider8.jpg",
      ],
    };
  }

  nextImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.carouselImages.length,
    }));
  };

  prevImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + prevState.carouselImages.length) % prevState.carouselImages.length,
    }));
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.timer = setInterval(this.nextImage, 3000); // Change slide every 1 second
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  render() {
    const { currentIndex, carouselImages } = this.state;

    // Get the next two images to display
    const displayedImages = [
      carouselImages[currentIndex % carouselImages.length],
      carouselImages[(currentIndex + 1) % carouselImages.length],
    ];


    return (
      <div>
     
        <div className='con'>
        <div className="flex-container">
  {/* <div className="text-section">
    <h1 className='hgrow'>
      Grow Your Skills and <br /> Reach Your Potential
    </h1>
    <p >
      No matter who you are or if you're technical or non-technical,<br />
      you can expand your career with ServiceNow University.
    </p>
  </div> */}
  <div className='left'>
            <h1>Grow Your Skills and <br></br> Reach Your Potential 
            </h1>
            <p>No matter who you are or if you're technical or non-technical,
              <br></br> you can expand your career with ServiceNow University.</p>
          </div>
  <div className="image-section">
    <img 
      src="home_img2.jpg" 
      alt="Growth" 
      className="growth-image" 
    />
  </div>
</div>
          <div className='circle'>
            <div className='intern' id='a'>
              <h2>Jobs</h2>
              <p><b>Explore</b><br />Diverse <br />Careers</p>
          
            </div>
            <div className='job' id='a'>
              <h2>Internships</h2>
              <p><b>Gain</b><br />Practical <br />Experience</p>
            </div>
          </div> 
        </div><br></br><br></br>

        <div className="image-container">
          <div className="image-wrapper">
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



        <div className='rj' style={{background:'#E9BCB9'}}>
          <div className='browse'>
            <h1 id='jo'>Browse Job/ Internship <br></br> That's Right For You!</h1>
            <p id='ro'>Find a role that fits your career aspirations.</p>
            <div className='shr'>
              <button className="but"><Link to='/joblist'>Find Jobs</Link></button>
              <button className="but">Full-Time</button>
              <button className="but">Part-Time</button> <br />
              <button className="but">Work Form Home</button>
              <button className="but">On-Field</button>
            </div>
          </div>
          <div className='find'>
            <div className='abc'>
              <h3>Jobs</h3>
              <button id='web'>Web Developer <span id='so'>Software Developer</span></button>
              <button id='web'>Data Science <span id='so'>Computer Science</span></button>
              <button id='web'>Digital Marketing <span id='so'>Marketing</span></button>
            </div>
            <div className='ab'>
              <h3>Internships</h3>
              <button id='web'>Web Developer <span id='so'>Software Developer</span></button>
              <button id='web'>Content Writing <span id='so'>Computer Science</span></button>
              <button id='web'>UI/UX Designer <span id='so'>Marketing</span></button>
            </div>
          </div>
        </div><br></br><br></br>




             {/* Add Buttons Section */}
             {/* <div className="button-group">
          <button className="button">Applied Jobs</button>
          <button className="button">Saved Drafts</button>
        </div> <br /><br /> */}

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <button onClick={this.prevImage} id='next'> <FontAwesomeIcon icon={faChevronLeft} /></button>
            {displayedImages.map((image, index) => (
              <img key={index} src={image} alt={`Carousel Image ${currentIndex + index + 1}`} />
            ))}
            <button onClick={this.nextImage} id='next'> <FontAwesomeIcon icon={faChevronRight} /> </button>
          </div>
        </div><br></br>

   

        <div className='slo'>
          <FontAwesomeIcon icon={faQuoteLeft} id='quote'/>
          <h1>
          “Now I feel like an equal, I don’t feel out of place because I came from a non-technical background. I actually fit right in.”
          </h1>
          <p>Ebony A.</p>
        </div>

      

        {/* Add Card Section */}
        <div className="card-container">
          <div className="card">
            <div className="card-image placeholder-image"><img src='o1.jpg' alt='office image' style={{height: '350px', width: '400px'}}></img></div>
            <div className="card-content">
              <h3>A huge course catalog</h3>
              <p>Explore 600+ self-paced free courses and get suggestions specific to your interests.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image placeholder-image"><img src='o2.jpg' alt='office image' style={{height: '350px', width: '400px'}}></img></div>
            <div className="card-content">
              <h3>A career that progresses</h3>
              <p>Get hands-on practice with in-demand classes and workshops , outcomes, and solutions.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image placeholder-image"><img src='o3.jpg' alt='office image' style={{height: '350px', width: '400px'}}></img></div>
            <div className="card-content">
              <h3>A rise in confidence</h3>
              <p>Achieve certifications and get credentials on ServiceNow products, outcomes, and solutions.</p>
            </div>
          </div>
        </div>


        <div className='rj' style={{background:'#E5C9D7'}} >
          <div className='browse'>
            <h1 id='jo'>Browse Job/ Internship <br></br> That's Right For You!</h1>
            <p id='ro'>Find a role that fits your career aspirations.</p>
            <div className='shr'>
              <button className="but"><Link to='/joblist'>Find Jobs</Link></button>
              <button className="but">Full-Time</button>
              <button className="but">Part-Time</button> <br />
              <button className="but">Work Form Home</button>
              <button className="but">On-Field</button>
            </div>
          </div>
          <div className='find'>
            <div className='abc'>
              <h3>Jobs</h3>
              <button id='web'>Web Developer <span id='so'>Software Developer</span></button>
              <button id='web'>Data Science <span id='so'>Computer Science</span></button>
              <button id='web'>Digital Marketing <span id='so'>Marketing</span></button>
            </div>
            <div className='ab'>
              <h3>Internships</h3>
              <button id='web'>Web Developer <span id='so'>Software Developer</span></button>
              <button id='web'>Content Writing <span id='so'>Computer Science</span></button>
              <button id='web'>UI/UX Designer <span id='so'>Marketing</span></button>
            </div>
          </div>
        </div>


        
        <div className="image-container">
          <div className="image-wrapper">
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
      
      
      </div>
      
    );
  }
}

export default Home;