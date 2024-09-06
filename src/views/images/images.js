import React from 'react';
import { CCard, CCardBody, CCardHeader, CRow, CCol, CButton } from '@coreui/react';
import './images.scss';
import { FaPlus, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../dashboard/dashboard.scss'
import avatar from './avatar.png'; // Replace with the actual path to the profile picture

const images = () => {
  return (
    <div className="details">
      <CRow className="page-content">
        <CCol className="left-section">
          <CCard className="info-card">
            <CCardHeader className="card-header">
              <p>Upload Images/Logo</p>
            </CCardHeader>
            <CCardBody>
              <div className="info-form">
                <CButton className="save-button">
                  Upload Image
                </CButton>
                <p className='text'> Add another+</p>
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

export default images;
