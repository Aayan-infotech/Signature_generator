import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';
import './template5.scss';

const SignatureTemplate5 = ({ handleSubmit }) => {
  return (
    <div className="signature-container">
      <CCard className="signature-card">
        <CCardBody>
          <CRow>
            <CCol md="4">
              <img src={avatar} alt="Profile" className="signature-avatar" />
            </CCol>
            <CCol md="4">
              <p className='cname'><strong>John Doe</strong></p>
              <p className='crole'><strong>Developer</strong></p>
              <hr />
              <p className='caddress'>123 Main St, City, Country</p>
            </CCol>
            <CCol md="4">
              <div className='contact-info'>
                <p><FaEnvelope /> user@example.com</p>
                <p><FaPhone /> (123) 456-7890</p>
                <p><FaGlobe /> www.example.com</p>
              </div>
              <div className='csocial'>
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
                <FaGithub />
                <FaWhatsapp />
                <FaInstagram />
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <button className="done-button" onClick={handleSubmit}>Done</button>
    </div>
  );
};

export default SignatureTemplate5;
