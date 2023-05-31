import React, { useState } from 'react';
import './app.css';

function App() {
  const [activeSection, setActiveSection] = useState('About Me');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="App">
      <header>
        <h1>Developer's Portfolio</h1>
        <nav>
          <ul>
            <li
              className={activeSection === 'About Me' ? 'active' : ''}
              onClick={() => handleNavClick('About Me')}
            >
              About Me
            </li>
            <li
              className={activeSection === 'Portfolio' ? 'active' : ''}
              onClick={() => handleNavClick('Portfolio')}
            >
              Portfolio
            </li>
            <li
              className={activeSection === 'Contact' ? 'active' : ''}
              onClick={() => handleNavClick('Contact')}
            >
              Contact
            </li>
            <li
              className={activeSection === 'Resume' ? 'active' : ''}
              onClick={() => handleNavClick('Resume')}
            >
              Resume
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {activeSection === 'About Me' && (
          <section>
            <h2>About Me</h2>
            <img src="" alt="Icon" />
            <p>Short bio about the developer.</p>
          </section>
        )}
        {activeSection === 'Portfolio' && (
          <section>
            <h2>Portfolio</h2>
            <div className="projects">
              {/* Replace with your own project images and links */}
              <div>
                <h3>Project 1</h3>
                <a href="#project1">Demo</a>
                <a href="#project1-github">GitHub</a>
              </div>
              <div>
                <h3>Project 2</h3>
                <a href="#project2">Demo</a>
                <a href="#project2-github">GitHub</a>
              </div>
              {/* Repeat for the remaining projects */}
            </div>
          </section>
        )}
        {activeSection === 'Contact' && (
          <section>
            <h2>Contact</h2>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        )}
        {activeSection === 'Resume' && (
          <section>
            <h2>Resume</h2>
            <a href="resume.pdf" download>Download Resume</a>
            <ul>
              <li>Proficiency 1</li>
              <li>Proficiency 2</li>
              <li>Proficiency 3</li>
              {/* Add more proficiencies as needed */}
            </ul>
          </section>
        )}
      </main>
      <footer>
        <p>
          Connect with me on:
          <a href="https://github.com/clapitan1">GitHub</a>
          <a href="https://www.linkedin.com/in/caleb-lapitan-62669926a/">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
