import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import avatar from '../templates/avatar.png';
import './template1.scss'; // Import the SCSS file

const SignatureTemplate1 = ({ handleSubmit }) => {
  return (
    <div className="signature-container">
      <div className="signature-content">
        <div className="signature-row">
          <div className="signature-image">
            <img src={avatar} alt="Profile" />
          </div>
          <div className="signature-details">
            <p className="signature-name"><strong>John Doe</strong></p>
            <p className="signature-role"><strong>Developer</strong></p>
            <hr />
            <p className="signature-address">123 Main St, City, Country</p>
          </div>
          <div className="signature-contact">
            <div className="contact-info">
              <p><FaEnvelope className="icon" /> user@example.com</p>
              <p><FaPhone className="icon" /> (123) 456-7890</p>
              <p><FaGlobe className="icon" /> www.example.com</p>
            </div>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaLinkedin className="icon" />
              <FaGithub className="icon" />
              <FaWhatsapp className="icon" />
              <FaInstagram className="icon" />
            </div>
          </div>
        </div>
      </div>
      {/* Button positioned outside the main content box */}
      <button
        className="done-button"
        onClick={handleSubmit}
      >
        Done
      </button>
    </div>
  );
};

export default SignatureTemplate1;
