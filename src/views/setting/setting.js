import React from 'react';
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react';
import './setting.scss';
import '../dashboard/dashboard.scss';
import { FaFacebook, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaUserAlt } from 'react-icons/fa';


const Setting = () => {
    return (
        <div className="details">
            <CRow className="page-content">
                <CCol className="left-section">
                    <CCard className="info-card">
                        <CCardHeader className="card-header">
                            <p>Setting</p>
                        </CCardHeader>
                        <CCardBody>
                            <div className="info-form-setting">
                                <div className="field-setting">
                                    <label htmlFor="linkedin">Select  Signature</label>
                                    <input type="text" id="linkedin" placeholder="Signature" />
                                </div>
                                <div className="field">
                                    <label htmlFor="m">Email Adress</label>
                                    <input type="text" id="m" placeholder="Email" />
                                </div>
                                
                            </div>
                            <p className='add-signature'> Add signature+</p>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
}

export default Setting;
