import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import dhoni from "./images/dhoni.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import resume from "./images/Haneesh_Resume.pdf";
import image1 from "./images/image1.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.png";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.png";
import phonecall from "./images/phonecall.png";
import email from "./images/email.png";
import location from "./images/location.png";
import voting from "./images/voting.webp";
import './Hompage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const galleryRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); 
  };

  const handleClickImage = (imgsrc) => {
    setSelectedImage(imgsrc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);


  return (
    <div className="totalbg">
      <div className="navbar">
        <div className="logo">Haneesh Dabbadi.</div>
        <div ref={menuRef} className={`navbaritems ${isMenuOpen ? 'open' : ''}`}>
          <p onClick={() => handleNavigation(homeRef)}>Home</p>
          <p onClick={() => handleNavigation(aboutRef)}>About</p>
          <p onClick={() => handleNavigation(experienceRef)}>Experience</p>
          <p onClick={() => handleNavigation(projectRef)}>Projects</p>
          <p onClick={() => handleNavigation(galleryRef)}>Gallery</p>
          <p onClick={() => handleNavigation(contactRef)}>Contact</p>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
  {isMenuOpen ? <FaTimes /> : <FaBars />}
</div>
      </div>

      <div ref={homeRef} className="home d-flex">
        <div className="homematter">
          <b>Hello, I'm Haneesh</b><br />
          <p>I'm a student passionate about Full Stack Web Development, specializing in the MERN stack. Skilled in React.js, Node.js, MongoDB, and Express.js.</p>
        </div>
        <div className="homepic">
          <img className="homeimage" src={dhoni} alt="Dhoni" />
        </div>
      </div>

      <hr />
      <div ref={aboutRef} className="aboutme">
        <h1>About Me</h1>
        <p className="aboutmatter">I'm currently a dedicated 4th-year student pursuing my B.Tech in Electronics and Communication Engineering, with a strong focus on Full Stack Web Development. I specialize in the MERN stack, working with React.js, Node.js, MongoDB, and Express.js to build dynamic and responsive web applications.</p>
        <a className='resumedown' href={resume} download="Haneesh_Resume.pdf" >Download RESUME</a>
        <h4>Skills:
          <p className="skill">MERN stack</p>
          <p className="skill">Python</p>
          <p className="skill">MySQL</p>
          <p className="skill">Prompt Engineering</p>
        </h4>
      </div>

      <hr />
      <div ref={experienceRef} className="experience">
        <h3>Experience:</h3>
        <ul className="interns">
          <li>Blackbuck Education Pvt Ltd | MERN Stack Developer Intern</li>
          <li>IIDT APSCHE Blackbuck Engineers Pvt. Ltd. | VLSI Intern</li>
          <li>APSSDC | Embedded Systems Intern</li>
          <li>GEETHANJALI INSTITUTE OF SCIENCE AND TECHNOLOGY | Co-Host and Organizer</li>
        </ul>
      </div>

      <hr />
      <div ref={projectRef} className="projects">
        <h3>Projects:</h3>
        <div className="imgcontainer">
          <img className="votingimg" src={voting} alt="Voting project" />
          <div className="middle">
            <a href="https://github.com/Haneesh-Dabbadi/Verilog-HDL-for-Designing-of-digital-Voting-machine">
              <button className="probutton">Visit</button>
            </a>
          </div>
          <p>Designing of digital Voting Machine using Verilog HDL</p>
        </div>
      </div>

      <hr />
      <div ref={galleryRef} className="gallery">
        <h3>Gallery:</h3>
        <Carousel className="carousel">
          <Carousel.Item interval={2000}>
            <img src={image1} alt="Gallery" onClick={() => handleClickImage(image1)} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={image2} alt="Gallery" onClick={() => handleClickImage(image2)} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={image3} alt="Gallery" onClick={() => handleClickImage(image3)} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={image4} alt="Gallery" onClick={() => handleClickImage(image4)} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={image5} alt="Gallery" onClick={() => handleClickImage(image5)} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={image6} alt="Gallery" onClick={() => handleClickImage(image6)} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={image7} alt="Gallery" onClick={() => handleClickImage(image7)} />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={image8} alt="Gallery" onClick={() => handleClickImage(image8)} />
          </Carousel.Item>
        </Carousel>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <img src={selectedImage} style={{ width: '100%' }} alt="Selected" />
        </Modal.Body>
      </Modal>

      <hr />
      <div ref={contactRef} className="contact">
        <h3>Contact Info & Social Media Links:</h3>
        <div className="column">
          <div className="phonecall d-flex">
            <img src={phonecall} className="phone" alt="Phone" />
            <p className="con">+91 7702693774</p>
          </div>
          <div className="email d-flex">
            <img src={email} className="emai" alt="Email" />
            <p className="con">haneeshdabbadi@gmail.com</p>
          </div>
          <div className="location">
            <img src={location} className="loca" alt="Location" />
            <p className="cont">B.V Nagar, Nellore, A.P, India</p>
            <div className="social">
              <ul className="intern">
                <li>Github: <a href="https://github.com/Haneesh-Dabbadi">Haneesh-Dabbadi</a></li>
                <li>Linkedin: <a href="https://linkedin.com/in/haneesh-dabbadi-ab3842271">Haneesh Dabbadi</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
