// About.js
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        
        <p>
          Welcome to our blog! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum, quam id placerat dapibus, est nulla mollis quam, vel accumsan justo elit eu
          orci.
        </p>
        <p>
          Our team is dedicated to providing you with high-quality and insightful articles on a
          variety of topics. Whether you're a seasoned reader or a newcomer, there's something here
          for everyone.
        </p>
        <p>
          Join our community of avid readers and contributors. We believe in the power of sharing
          knowledge and fostering discussions. Feel free to explore our blog and engage with our
          content.
        </p>
      </div>
      <div className="about-image">
        <img src="about-image.jpg" alt="About Us" />
      </div>
    </section>
  );
};

export default About;
