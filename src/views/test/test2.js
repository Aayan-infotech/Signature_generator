import React, { useState } from 'react';
import { CRow, CCol, CCard, CCardBody, CForm, CFormGroup, CLabel, CInput, CButton } from '@coreui/react';

const SignatureDashboard = () => {
  // Set up state for the form fields
  const [signatureDetails, setSignatureDetails] = useState({
    name: 'John Doe',
    title: 'Developer',
    company: 'Example Company',
    phone: '(123) 456-7890',
    mobile: '(123) 456-7890',
    email: 'user@example.com',
    website: 'www.example.com',
    address: '123 Main St, City, Country'
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignatureDetails({
      ...signatureDetails,
      [name]: value,
    });
  };

  return (
    <CRow>
      {/* Left Side - Form */}
      <CCol md="6">
        <CCard className="bg-dark text-white">
          <CCardBody>
            <h5>Signature Details</h5>
            <CForm>
              {Object.keys(signatureDetails).map((key) => (
                <CFormGroup key={key}>
                  <CLabel htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</CLabel>
                  <CInput
                    type="text"
                    id={key}
                    name={key}
                    value={signatureDetails[key]}
                    onChange={handleInputChange}
                  />
                </CFormGroup>
              ))}
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Right Side - Signature Preview */}
      <CCol md="6">
        <CCard>
          <CCardBody>
            <h5>My Signature</h5>
            <p>Selected Template</p>
            <div>
              <img src="https://via.placeholder.com/100" alt="Profile" style={{ borderRadius: '50%' }} />
              <div>
                <h6>{signatureDetails.name}</h6>
                <p>{signatureDetails.title}</p>
                <p>{signatureDetails.company}</p>
                <p><i className="cil-envelope-closed"></i> {signatureDetails.email}</p>
                <p><i className="cil-phone"></i> {signatureDetails.phone}</p>
                <p><i className="cil-mobile"></i> {signatureDetails.mobile}</p>
                <p><i className="cil-link"></i> {signatureDetails.website}</p>
                <p><i className="cil-location-pin"></i> {signatureDetails.address}</p>
              </div>
            </div>
            <CButton color="dark">Done</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default SignatureDashboard;
