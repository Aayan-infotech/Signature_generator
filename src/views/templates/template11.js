import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import avatar from '../templates/avatar.png';

const SignatureTemplate11 = ({ handleSubmit }) => {
  return (
    <CCard>
      <CCardBody>
        <CRow>
          <CCol md="4">
            <img src={avatar} alt="Profile" />
          </CCol>
          <CCol md="4">
            <p className='cname'><strong>John Doe</strong></p>
            <hr />
            <p className='crole'><strong>Developer</strong></p>
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
        <button onClick={handleSubmit}>Done</button>
      </CCardBody>
    </CCard>
  );
};

export default SignatureTemplate11;
