import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaDownload, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "./Hompage.css"
import dhoni from "./images/dhoni.jpg";
import resume from "./images/Haneesh_Resume.pdf";
import localsphere from "./images/localsphere.png";
import jarvis from "./images/jarvis.jpg";
import todo from "./images/todo.png";
import eventmanagementapp from "./images/eventmanagementapp.png";
import voting from "./images/voting.webp";


function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Timeline animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // 3D tilt effect handler
  const handle3DTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  const projects = [
    { img: voting, link: "https://github.com/Haneesh-Dabbadi/Verilog-HDL-for-Designing-of-digital-Voting-machine", title: "Voting Machine using Verilog HDL", desc: "Digital voting machine designed with Verilog HDL" },
    { img: localsphere, link: "https://github.com/Haneesh-Dabbadi/LocalSphere", title: "Local Sphere - MERN Web App", desc: "Full-stack web application built with MERN stack" },
    { img: jarvis, link: "https://github.com/Haneesh-Dabbadi/Jarvis-Voice-Assistant", title: "JARVIS Voice Assistant", desc: "AI-powered voice assistant with natural language processing" },
    { img: eventmanagementapp, link: "https://github.com/Haneesh-Dabbadi/Event-Management-Application", title: "Event Management App", desc: "Comprehensive event planning and management solution" },
    { img: todo, link: "https://github.com/Haneesh-Dabbadi/ToDo-List-App", title: "To-Do List App", desc: "Task management application with modern UI" }
  ];

  const skills = [ "Python", "MySQL","MERN Stack", "HTML/CSS", "JAVA","UI/UX Design", "Prompt Engineering"];

  const experiences = [
    { company: "Blackbuck Education Pvt Ltd", role: "MERN Stack Developer Intern", duration: "2023-2024" },
    { company: "IIDT APSCHE", role: "VLSI Intern", duration: "2023" },
    { company: "APSSDC", role: "Embedded Systems Intern", duration: "2022" },
    { company: "GEETHANJALI INSTITUTE", role: "Co-Host & Organizer", duration: "2023-2024" }
  ];

  return (
    <div className="bg-dark text-light" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#1a1a2e', boxShadow: '0 2px 20px rgba(25, 88, 184, 0.3)' }}>
        <div className="container">
          <span className="navbar-brand fw-bold fs-3 text-info">Haneesh Dabbadi</span>
          <button className="navbar-toggler border-0" onClick={toggleMenu} style={{ boxShadow: 'none' }}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              {[
                { ref: homeRef, label: 'Home' },
                { ref: aboutRef, label: 'About' },
                { ref: experienceRef, label: 'Experience' },
                { ref: projectRef, label: 'Projects' },
                { ref: contactRef, label: 'Contact' }
              ].map(({ ref, label }) => (
                <li key={label} className="nav-item mx-2">
                  <span 
                    className="nav-link fw-medium px-3 py-2 rounded-pill text-light"
                    onClick={() => handleNavigation(ref)}
                    style={{ 
                      cursor: 'pointer', 
                      transition: 'all 0.3s ease',
                      ':hover': { backgroundColor: '#0dcaf0', color: '#000' }
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#0dcaf0';
                      e.target.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#fff';
                    }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header ref={homeRef} className="py-5 scroll-section" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', minHeight: '90vh' }}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">
                Hello, I'm <span className="text-info">Haneesh</span>
              </h1>
              <p className="lead mb-4 text-light-emphasis">
                Full Stack Developer specializing in MERN Stack
              </p>
              <p className="fs-5 mb-4 text-secondary">
                React.js | Node.js | MongoDB | Express.js
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <button 
                  className="btn btn-info btn-lg px-4 py-2 fw-semibold"
                  onClick={() => handleNavigation(projectRef)}
                >
                  View Projects
                </button>
                <button 
                  className="btn btn-outline-info btn-lg px-4 py-2 fw-semibold"
                  onClick={() => handleNavigation(contactRef)}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src={dhoni} 
                alt="Haneesh Dabbadi" 
                className="img-fluid rounded-circle shadow-lg"
                style={{ 
                  width: '300px', 
                  height: '300px', 
                  objectFit: 'cover',
                  border: '5px solid #0dcaf0',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section ref={aboutRef} className="py-5 scroll-section" style={{ backgroundColor: '#0f1419' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4 text-info">About Me</h2>
              <p className="lead mb-4">
                I'm a 4th-year ECE student with a passion for full stack development using the MERN stack. 
                I bring concepts to life with clean, scalable code and modern user experiences.
              </p>
              <div className="mb-4">
                <a 
                  className="btn btn-outline-info btn-lg"
                  href={resume}
                  download
                >
                  <FaDownload className="me-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12">
              <h4 className="text-center mb-4 text-info">Technical Skills</h4>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="skillbadge badge fs-6 px-3 py-2"
                    style={{ 
                      borderRadius: '25px',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-5 scroll-section" style={{ backgroundColor: '#1a1a2e' }}>
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5 text-info">Experience</h2>
          
          {/* Timeline Container */}
          <div className="position-relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Vertical Timeline Line */}
            <div 
              className="position-absolute timeline-vertical-line"
              style={{
                left: '50%',
                top: '0',
                bottom: '0',
                width: '4px',
                background: 'linear-gradient(to bottom, #0dcaf0, #0dcaf0, transparent)',
                transform: 'translateX(-50%)',
                borderRadius: '2px',
                boxShadow: '0 0 20px rgba(13, 202, 240, 0.5)'
              }}
            ></div>

            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`timeline-item d-flex align-items-center mb-5 ${index % 2 === 0 ? 'justify-content-end' : 'justify-content-start'}`}
                style={{
                  opacity: 0,
                  transform: `translateX(${index % 2 === 0 ? '100px' : '-100px'}) rotateY(${index % 2 === 0 ? '15deg' : '-15deg'})`,
                  transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Timeline Dot */}
                <div 
                  className="position-absolute timeline-dot"
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#0dcaf0',
                    borderRadius: '50%',
                    border: '4px solid #1a1a2e',
                    boxShadow: '0 0 20px rgba(13, 202, 240, 0.7)',
                    zIndex: 10,
                    animation: 'pulse 2s infinite'
                  }}
                ></div>

                {/* Experience Card */}
                <div 
                  className={`${index % 2 === 0 ? 'me-5' : 'ms-5'}`}
                  style={{ width: '45%' }}
                >
                  <div 
                    className="card border-0 shadow-lg h-100"
                    style={{ 
                      backgroundColor: '#16213e',
                      transition: 'all 0.4s ease',
                      transformStyle: 'preserve-3d',
                      borderLeft: index % 2 === 0 ? 'none' : '4px solid #0dcaf0',
                      borderRight: index % 2 === 0 ? '4px solid #0dcaf0' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateZ(20px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 25px 50px rgba(13, 202, 240, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateZ(0px) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                    <div className="card-body p-4">
                      <div className={`d-flex align-items-start ${index % 2 === 0 ? 'text-end' : 'text-start'}`}>
                        <div className="flex-grow-1">
                          <h5 className="card-title text-info fw-bold mb-2">{exp.company}</h5>
                          <h6 className="card-subtitle text-light mb-3">{exp.role}</h6>
                          <span 
                            className="badge bg-info text-dark px-3 py-2"
                            style={{ fontSize: '0.9em' }}
                          >
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      
                      {/* Connection Line to Timeline */}
                      <div 
                        className="position-absolute timeline-connector"
                        style={{
                          top: '50%',
                          [index % 2 === 0 ? 'right' : 'left']: '-25px',
                          width: '20px',
                          height: '2px',
                          backgroundColor: '#0dcaf0',
                          transform: 'translateY(-50%)',
                          boxShadow: '0 0 10px rgba(13, 202, 240, 0.5)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
  .timeline-item.animate-in {
    opacity: 1 !important;
    transform: translateX(0) rotateY(0deg) !important;
  }

  /* Existing styles */
  .timeline-dot {
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background-color: #0dcaf0;
    border-radius: 50%;
    border: 2px solid #0dcaf0;
    z-index: 10;
  }

  /* Mobile responsive timeline */
  @media (max-width: 991px) {
    .timeline-vertical-line {
      left: 30px !important;
      transform: none !important;
    }

    .timeline-item {
      justify-content: flex-start !important;
      padding-left: 70px !important;
      transform: translateX(-100px) rotateY(-15deg) !important;
    }

    .timeline-item.animate-in {
      transform: translateX(0) rotateY(0deg) !important;
      opacity: 1 !important;
    }

    .timeline-item > div {
      width: calc(100% - 70px) !important;
      margin: 0 !important;
    }

    .timeline-dot {
      left: 30px !important;
      transform: translateX(-100%) translateY(-50%) !important;
      width: 12px !important;
      height: 12px !important;
      background-color: #0dcaf0 !important;
      border: 2px solid #0dcaf0 !important;
      box-shadow: none !important;
    }

    .timeline-item .card {
      border-left: 3px solid #0dcaf0 !important;
      border-right: none !important;
      margin-left: 10px !important;
    }

    .timeline-item .card-body > div {
      text-align: left !important;
    }

    .timeline-connector {
      left: 38px !important;
      right: auto !important;
      width: 16px !important;
      height: 2px !important;
      background-color: #0dcaf0 !important;
      transform: translateY(-50%);
      box-shadow: none !important;
    }
  }
`}</style>
      </section>

      {/* Projects Section */}
      <section ref={projectRef} className="py-5 scroll-section" style={{ backgroundColor: '#0f1419' }}>
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5 text-info">Projects</h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className="card h-100 border-0 shadow-lg"
                  style={{ 
                    backgroundColor: '#1a1a2e',
                    transition: 'all 0.3s ease',
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseMove={handle3DTilt}
                  onMouseLeave={resetTilt}
                >
                  <img 
                    src={project.img} 
                    className="card-img-top" 
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title text-info fw-bold">{project.title}</h5>
                    <p className="card-text text-light-emphasis flex-grow-1">{project.desc}</p>
                    <a 
                      href={project.link} 
                      className="btn btn-outline-info mt-auto"
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <FaGithub className="me-2" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer ref={contactRef} className="py-5 scroll-section" style={{ backgroundColor: '#1a1a2e' }}>
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5 text-info">Get In Touch</h2>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="text-center">
                <div className="row g-4 mb-4">
                  <div className="col-md-4 mb-4">
                    <div className="p-4 h-100 d-flex flex-column align-items-center">
                      <FaPhone className="text-info mb-3" size={30} />
                      <p className="mb-2 fw-semibold">Phone</p>
                      <p className="text-light-emphasis mb-0 text-center">+91 7702693774</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="p-4 h-100 d-flex flex-column align-items-center">
                      <FaEnvelope className="text-info mb-3" size={30} />
                      <p className="mb-2 fw-semibold">Email</p>
                      <p className="text-light-emphasis mb-0 text-center">haneeshdabbadi@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="p-4 h-100 d-flex flex-column align-items-center">
                      <FaMapMarkerAlt className="text-info mb-3" size={30} />
                      <p className="mb-2 fw-semibold">Location</p>
                      <p className="text-light-emphasis mb-0 text-center">Nellore, A.P, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="d-flex justify-content-center gap-4 mt-4">
                  <a 
                    href="https://github.com/Haneesh-Dabbadi" 
                    className="text-light p-3 rounded-circle"
                    target="_blank" 
                    rel="noreferrer"
                    style={{ 
                      backgroundColor: '#1a1a2e',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#0dcaf0';
                      e.target.style.color = '#000';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#1a1a2e';
                      e.target.style.color = '#fff';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <FaGithub size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/haneesh-dabbadi-ab3842271"
                    className="text-light p-3 rounded-circle"
                    target="_blank" 
                    rel="noreferrer"
                    style={{ 
                      backgroundColor: '#1a1a2e',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#0dcaf0';
                      e.target.style.color = '#000';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#1a1a2e';
                      e.target.style.color = '#fff';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid white' }}>
            <p className="text-light-emphasis mb-0">
              © 2024 Haneesh Dabbadi. Built with React & Bootstrap 5
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;