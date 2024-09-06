import React, { useState } from "react";
// import "./ForgotPassword.scss";
import { Link } from "react-router-dom";

const test = () => {
  const [selectedOption, setSelectedOption] = useState("Featured Product");
  const [featuredProductValue, setFeaturedProductValue] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [leadValue, setLeadValue] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "featuredProduct") {
      setFeaturedProductValue(value);
    } else if (name === "contact") {
      setContactValue(value);
    } else if (name === "lead") {
      setLeadValue(value);
    }
  };

  return (
    <>
      <div className="row gy-5 w-100">
        <div className="col-12">
          <div className="p-3 border bg-secondary">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <h5 onClick={() => handleOptionClick("Featured Product")}>
                  Featured Product
                </h5>
                <h5 onClick={() => handleOptionClick("Contact")}>Contact</h5>
                <h5 onClick={() => handleOptionClick("Lead")}>Lead</h5>
              </div>
              <div className="me-4">
                {selectedOption === "Featured Product" && (
                  <input
                    type="text"
                    name="featuredProduct"
                    placeholder="Featured Product"
                    value={featuredProductValue}
                    onChange={handleInputChange}
                  />
                )}
                {selectedOption === "Contact" && (
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={contactValue}
                    onChange={handleInputChange}
                  />
                )}
                {selectedOption === "Lead" && (
                  <input
                    type="text"
                    name="lead"
                    placeholder="Lead"
                    value={leadValue}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="me-4">
                <div className="card w-100">
                  <div className="card-body">
                    <h5> {featuredProductValue ? featuredProductValue : 'Abinash'}</h5>
                    <h5> {contactValue ? contactValue : '475868678'}</h5>
                    <h5> {leadValue ? leadValue : 'lead your'}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default test;