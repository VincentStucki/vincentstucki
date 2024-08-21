import './style.css';
import './script.js';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faVolleyballBall, faRunning, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';





function App() {

  

  const controls = useAnimation();

  useEffect(() => {
    
    controls.start({
      rotate: [0, 360], 
      transition: { duration: 0.5, ease: "linear" }, 
    }).then(() => {
      controls.start({
        rotate: [0, 360], 
        transition: { duration: 2, ease: "linear", loop: Infinity }, 
      });
    });
  }, [controls]);

  return (
    <div className="App">

      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://github.com/vincentstucki" target="_blank" rel="noopener noreferrer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#E0E0E0"
                className="github-icon"
              >
                <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6 0-.3 0-1.3 0-2.4-3.3.7-4.1-1.6-4.1-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.3.1-2.7 0 0 1-.3 3.3 1.2.9-.2 1.8-.4 2.7-.4.9 0 1.8.1 2.7.4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.1 2.4.1 2.7.7.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2.1 0 1.5 0 2.7 0 3.1 0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>


      <header id="home" className="App-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
      </header>
      
      <section id="about" className="section">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <p>I am an 18-year-old student currently pursuing a career in software development.</p>
          <h3>Hobbys</h3>
          <p>
            Volleyball  
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onViewportEnter={(e) => {
                const icon = e.target.querySelector('.volleyball-icon');
                icon.style.animation = 'spin-fast 0.5s linear, spin-slow 2s linear 0.5s infinite';
              }}
              onViewportLeave={(e) => {
                const icon = e.target.querySelector('.volleyball-icon');
                icon.style.animation = 'none'; 
              }}
            >
            <FontAwesomeIcon icon={faVolleyballBall} className="volleyball-icon" />
            </motion.div> 
          </p> 
          <p>
            Freerunning
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onViewportEnter={(e) => {
                const icon = e.target.querySelector('.freerunning-icon');
                icon.style.animation = 'move-left-right 1s ease-in-out forwards';
              }}
            >
            <FontAwesomeIcon icon={faRunning} className="freerunning-icon" />
            </motion.div>
          </p>

          <p>
            Snowboarding
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onViewportEnter={(e) => {
                const icon = e.target.querySelector('.snowboarding-icon');
                icon.style.animation = 'spin-fast 0.5s linear, spin-slow 2s linear 0.5s infinite';
              }}
              onViewportLeave={(e) => {
                const icon = e.target.querySelector('.snowboarding-icon');
                icon.style.animation = 'none'; 
              }}
            >
            <FontAwesomeIcon icon={faSnowflake} className="snowboarding-icon" />
            </motion.div>
          </p>
        </motion.div>
      </section>
      
      <section id="projects" className="section dark">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Projects</h2>
          <p>Here are some of my recent works or what I'm currently working on.</p>
          <div id="project-list">
           
        </div>
        </motion.div>
      </section>

      <section id="contact" className="section">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contact</h2>
          <p>Feel free to reach out via email.</p>
          <a href="mailto:deine.email@domain.com" className="email-link">
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
           vincentstucki9@gmail.com
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default App;

