import React from 'react';
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react';
import './social.scss';
import { FaFacebook, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaUserAlt } from 'react-icons/fa';
import '../dashboard/dashboard.scss';
import avatar from './avatar.png';

const Social = () => {
  return (
    <div className="details">
      <CRow className="page-content">
        <CCol className="left-section">
          <CCard className="info-card">
            <CCardHeader className="card-header">
              <p>Signature Details</p>
            </CCardHeader>
            <CCardBody>
              <div className="info-form">
                <div className="field-social">
                  <FaLinkedin className="field-icon-social" />
                  <input type="text" placeholder="Linkedin" />
                </div>
                <div className="field-social">
                  <FaUserAlt className="field-icon-social" />
                  <input type="text" placeholder="M..." />
                </div>
                <div className="field-social">
                  <FaTwitter className="field-icon-social" />
                  <input type="text" placeholder="Twitter" />
                </div>
                <div className="field-social">
                  <FaGithub className="field-icon-social" />
                  <input type="tel" placeholder="Github" />
                </div>
                <p> Add another+</p>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        {/* <CCol className="right-section">
          <h3 className='right-h3 d-flex align-items-center justify-content-center'>
            My Signature
          </h3>
          <h5 className='right-h5'>Selected Template</h5>
          <CCard className="signature-card">
            <CCardBody>
              <div className="signature-section">
                <CRow>
                  <CCol className="right-section">
                    <div className="paragraphs">
                      <div className="signature-box">
                        <CRow>
                          <CCol className="profile-pic">
                                <img src={avatar} alt="Profile" />
                              </CCol>
                          <CCol className="user-info">
                            <p className='cname'>John Doe</p>
                            <p className='crole'>Developer</p>
                            <p className='csocial'>
                              <FaFacebook className="social-icon" />
                              <FaTwitter className="social-icon" />
                              <FaLinkedin className="social-icon" />
                              <FaGithub className="social-icon" />
                            </p>
                          </CCol>
                          <CCol md="5" className="contact-info">
                            <p><FaEnvelope />    user@example.com</p>
                            <p><FaPhone />  (123) 456-7890</p>
                            <p><FaGlobe />   www.example.com</p>
                            <p><FaMapMarkerAlt />  123 Main St, City, Country</p>
                          </CCol>
                        </CRow>
                      </div>
                    </div>
                  </CCol>
                </CRow>
              </div>
              <div className='button-container'>
              </div>
            </CCardBody> 
          </CCard>
          <button className='done-button d-flex align-items-center justify-content-center'>Done</button>
        </CCol> */}
      </CRow>
    </div>
  );
}

export default Social;
