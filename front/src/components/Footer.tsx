import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <nav className="menu d-flex justify-content-center p-3">
      <ul className="nav">
        <li className="nav-item">
          <a href="https://github.com/sarahrcalderon" target="_blank" rel="noopener noreferrer" className="nav-link">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://medium.com/@sarahrcalderonn" target="_blank" rel="noopener noreferrer" className="nav-link">
            <i className="bi bi-medium"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.behance.net/sarahcalderonn" target="_blank" rel="noopener noreferrer" className="nav-link">
            <i className="bi bi-behance"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/srcalderon/" target="_blank" rel="noopener noreferrer" className="nav-link">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Footer;
