import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,faNodeJs,faJs  } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  return (
    <div className='container'>
     <h3 className='text-center' >Bharat Vasnani</h3>
     <h3 className='text-center' >Welcome to my portfolio!</h3>

     <div className="container">
  <div className="row">
    <div className="col-lg-6 col-md-12">
<p style={{fontFamily:"Serif" , fontSize:"20px"}} >I'm a passionate Full Stack Developer based in Jaipur, India.
   With hands-on experience in the MERN stack, I've crafted dynamic
    web solutions and innovative projects. My journey as a Front End Developer
     has brought fresh visual appeal to user interfaces. I believe in the power 
     of knowledge sharing and mentoring. Feel free to explore my work and reach 
     out for exciting collaborations.</p>
<p style={{fontFamily:"Serif" , fontSize:"25px"}} >Connect with me on <a target='blank' href="https://github.com/Bharatdev1"> <GitHubIcon/></a> and <a target='blank' href="https://www.linkedin.com/in/bharat-vasnani-4497a6112/"> <LinkedInIcon/> </a> .</p>

    </div>

    <div className="col-lg-6 col-md-6">

<div className="card">

  <div className="view overlay">
    <img className="card-img-top" src="/images/Bharat2.jpg"
      alt="Card image cap"/>
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>
</div>

    </div>
  </div>
<br/>
  {/* Technologies */}
  <div class="container">
  <div class="row">

    <div class="col-sm m-2 ">
      {/*1 */}
      <div className="card w-100 h-100 d-flex align-items-center justify-content-center">
      <FontAwesomeIcon
        icon={faReact} // The specific Font Awesome icon
        className="fa-icon fa-5x" // You can use CSS classes for additional styling
        style={{ color: '#0693fe' }} // Inline styling for color
        beat
      />
      </div>

    </div>

    <div class="col-sm m-2">
    <div className="card w-100 h-100 d-flex align-items-center justify-content-center">
      <FontAwesomeIcon
        icon={faNodeJs} // The specific Font Awesome icon
        className="fa-icon fa-5x" // You can use CSS classes for additional styling
        style={{ color: '#44ff00' }} // Inline styling for color
        beat
      />
      </div>

    </div>
    
    <div class="col-sm m-2">
    <div className="card w-100 h-100 d-flex align-items-center justify-content-center">
      <FontAwesomeIcon
        icon={faJs} // The specific Font Awesome icon
        className="fa-icon fa-5x" // You can use CSS classes for additional styling
        style={{ color: '#fbf546' }} // Inline styling for color
        beat
      />
      </div>

    </div>

    <div class="col-sm m-2">
    <div className="card w-100 h-100 d-flex align-items-center justify-content-center">
      <FontAwesomeIcon
        icon={faDatabase} // The specific Font Awesome icon
        className="fa-icon fa-5x" // You can use CSS classes for additional styling
        style={{ color: '#1020fe' }} // Inline styling for color
        beat
      />
      </div>

    </div>

  </div>
</div>
 

</div>
        </div>
  )
}

export default Home
