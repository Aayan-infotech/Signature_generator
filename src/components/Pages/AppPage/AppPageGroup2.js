import React, { useState } from 'react';
import { FaMoneyBill, FaRegAddressCard, FaHandPointUp, FaBlogger, FaShoppingCart, FaBriefcase, FaApple, FaGooglePlay } from 'react-icons/fa';
import { useAppContext } from '../../../context/AppContext';

// Group 2 templates and icons
export const templateNames2 = [
  // 'Online Payments', 'Social buttons', 'Custom buttons', 'Blog Template', 'Upload my banner',
  // 'Sales event', 'Video conferencing', 
  'Give feedback', 'Join a webinar', 'Join newsletter', 'Download app', 'Post a job offer',
];

export const templateIcons2 = [
  <FaMoneyBill />, <FaRegAddressCard />, <FaHandPointUp />, <FaBlogger />, <FaShoppingCart />,
  <FaBriefcase />, <FaBriefcase />, <FaBriefcase />, <FaBriefcase />, <FaBriefcase />, <FaBriefcase />, <FaBriefcase />
];

const taglines = ['Open position', 'Join our team', 'We are hiring', 'Click to join', 'Job opening'];

// Main component for handling templates and modal for Group 2
const AppPageGroup2 = () => {
  const [selectedContent, setSelectedContent] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  
  // Controllers for different functionalities
  const [newsDescription, setNewsDescription] = useState(''); // Store News description
  const [newsUrl, setNewsUrl] = useState(''); // Store URL for News posting

  const [feedbackDescription, setFeedbackDescription] = useState(''); // Store feedback description
  const [feedbackUrl, setFeedbackUrl] = useState(''); // Store URL for feedback

  const [webinarDescription, setWebinarDescription] = useState(''); // Store webinar description
  const [webinarUrl, setWebinarUrl] = useState(''); // Store URL for webinar

  const [jobDescription, setJobDescription] = useState(''); // Store job description
  const [jobUrl, setJobUrl] = useState(''); // Store URL for job posting
  const [selectedTagline, setSelectedTagline] = useState(taglines[0]); // Store selected tagline
  const [appStoreLink, setAppStoreLink] = useState(''); // Store App Store download link
  const [googlePlayLink, setGooglePlayLink] = useState(''); // Store Google Play download link

  const { setSelectedTemplate, selectedTemplate } =useAppContext()

  const handleTemplateClick = (templateName) => {
    setModalOpen(true);
    setSelectedTemplate(templateName)
  }

  const handleNewsSubmit = () => {
    setSelectedContent((prevState) => ({
      ...prevState,
      [selectedTemplate]: {
        description: newsDescription,
        url: newsUrl,
      },
    }));
    setModalOpen(false); // Close modal after submission
  };

  const handleFeedbackSubmit = () => {
    setSelectedContent((prevState) => ({
      ...prevState,
      [selectedTemplate]: {
        description: feedbackDescription,
        url: feedbackUrl,
      },
    }));
    setModalOpen(false); // Close modal after submission
  };

  const handleWebinarSubmit = () => {
    setSelectedContent((prevState) => ({
      ...prevState,
      [selectedTemplate]: {
        description: webinarDescription,
        url: webinarUrl,
      },
    }));
    setModalOpen(false); // Close modal after submission
  };

  const handleJobSubmit = () => {
    setSelectedContent((prevState) => ({
      ...prevState,
      [selectedTemplate]: {
        description: jobDescription,
        url: jobUrl,
        tagline: selectedTagline, // Save the selected tagline
      },
    }));
    setModalOpen(false); // Close modal after submission
  };

  const handleDownloadSubmit = () => {
    setSelectedContent((prevState) => ({
      ...prevState,
      [selectedTemplate]: {
        appStore: appStoreLink,
        googlePlay: googlePlayLink,
      },
    }));
    setModalOpen(false); // Close modal after submission
  };

  const handleDownloadClick = (link) => {
    if (link) {
      window.open(link, '_blank'); // Open the download link in a new tab
    }
  };

  return (
    <div>
      <h3>Call to Action</h3>
      {templateNames2.map((template, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <strong>{template}:</strong>
          {template === 'Post a job offer' && selectedContent[template] ? (
            <>
              <button
                style={{
                  padding: '10px',
                  margin: '10px 5px',
                  backgroundColor: 'lightblue',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => handleDownloadClick(selectedContent[template].url)}
              >
                {selectedContent[template].tagline}
              </button>
              <span 
                style={{ marginLeft: '10px', color: 'black', textDecoration: 'none', cursor: 'pointer',  backgroundColor:'transparent', }} 
                onClick={() => window.open(selectedContent[template].url, '_blank')} // Add redirection on click
              >
                {selectedContent[template].description}
              </span>
            </>
          ) : template === 'Download app' && selectedContent[template] ? (
            <>
              {selectedContent[template].appStore && (
                <button
                  style={{
                    padding: '10px',
                    margin: '10px 5px',
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => handleDownloadClick(selectedContent[template].appStore)}
                >
                  <FaApple style={{ marginRight: '8px' }} /> Download on App Store
                </button>
              )}
              {selectedContent[template].googlePlay && (
                <button
                  style={{
                    padding: '10px',
                    margin: '10px 5px',
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => handleDownloadClick(selectedContent[template].googlePlay)}
                >
                  <FaGooglePlay style={{ marginRight: '8px' }} /> Download on Google Play
                </button>
              )}
            </>
          ) : (
            <span 
              style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }} 
              onClick={() => window.open(selectedContent[template]?.url, '_blank')} // Add redirection on click
            >
              {selectedContent[template]?.description}
            </span>
          )}
        </div>
      ))}

      {/* Render buttons for Group 2 templates */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
        {templateNames2.map((template, index) => (
          <button
            key={index}
            style={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              border: '1px solid gray',
              borderRadius: '8px',
              cursor: 'pointer',
               backgroundColor:'transparent',
            }}
            onClick={() => handleTemplateClick(template)}
          >
            {templateIcons2[index]}
            {template}
          </button>
        ))}
      </div>

      {/* Modal for 'Join newsletter' */}
      {isModalOpen && selectedTemplate === 'Join newsletter' && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid gray',
            borderRadius: '8px',
            width: '400px',
          }}
        >
          <h4>{selectedTemplate}</h4>
          <label>News Description:</label>
          <textarea
            value={newsDescription}
            onChange={(e) => setNewsDescription(e.target.value)}
            placeholder="Enter News description"
            style={{ width: '100%', height: '10px', marginBottom: '10px', padding: '5px' }}
          />
          <label>News URL:</label>
          <input
            type="text"
            value={newsUrl}
            onChange={(e) => setNewsUrl(e.target.value)}
            placeholder="Enter News URL"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          <button
            onClick={handleNewsSubmit}
            style={{ padding: '10px', backgroundColor: 'green', borderRadius: '5px', color:'white', marginRight: '10px' }}
          >
            Save
          </button>
          <button onClick={() => setModalOpen(false)} style={{ padding: '10px', backgroundColor: 'red', color:'white', borderRadius: '5px' }}>
            Close
          </button>
        </div>
      )}

      {/* Modal for 'Give feedback' */}
      {isModalOpen && selectedTemplate === 'Give feedback' && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid gray',
            borderRadius: '8px',
            width: '400px',
          }}
        >
          <h4>{selectedTemplate}</h4>
          <label>Feedback Description:</label>
          <textarea
            value={feedbackDescription}
            onChange={(e) => setFeedbackDescription(e.target.value)}
            placeholder="Enter Feedback description"
            style={{ width: '100%', height: '10px', marginBottom: '10px', padding: '5px' }}
          />
          <label>Feedback URL:</label>
          <input
            type="text"
            value={feedbackUrl}
            onChange={(e) => setFeedbackUrl(e.target.value)}
            placeholder="Enter Feedback URL"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          <button
            onClick={handleFeedbackSubmit}
            style={{ padding: '10px', backgroundColor: 'green', borderRadius: '5px',color:'white', marginRight: '10px' }}
          >
            Save
          </button>
          <button onClick={() => setModalOpen(false)} style={{ padding: '10px', backgroundColor: 'red', color:'white', borderRadius: '5px' }}>
            Close
          </button>
        </div>
      )}

      {/* Modal for 'Join a webinar' */}
      {isModalOpen && selectedTemplate === 'Join a webinar' && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid gray',
            borderRadius: '8px',
            width: '400px',
          }}
        >
          <h4>{selectedTemplate}</h4>
          <label>Webinar Description:</label>
          <textarea
            value={webinarDescription}
            onChange={(e) => setWebinarDescription(e.target.value)}
            placeholder="Enter Webinar description"
            style={{ width: '100%', height: '10px', marginBottom: '10px', padding: '5px' }}
          />
          <label>Webinar URL:</label>
          <input
            type="text"
            value={webinarUrl}
            onChange={(e) => setWebinarUrl(e.target.value)}
            placeholder="Enter Webinar URL"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          <button
            onClick={handleWebinarSubmit}
            style={{ padding: '10px', backgroundColor: 'green', borderRadius: '5px', marginRight: '10px' ,color:'white'}}
          >
            Save
          </button>
          <button onClick={() => setModalOpen(false)} style={{ padding: '10px', backgroundColor: 'red',color:'white', borderRadius: '5px' }}>
            Close
          </button>
        </div>
      )}

      {/* Modal for 'Post a job offer' */}
      {isModalOpen && selectedTemplate === 'Post a job offer' && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid gray',
            borderRadius: '8px',
            width: '400px',
          }}
        >
          <h4>{selectedTemplate}</h4>
          <label>Job Description:</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Enter Job description"
            style={{ width: '100%', height: '10px', marginBottom: '10px', padding: '5px' }}
          />
          <label>URL:</label>
          <input
            type="text"
            value={jobUrl}
            onChange={(e) => setJobUrl(e.target.value)}
            placeholder="Enter Job URL"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          <label>Tagline:</label>
          <select
            value={selectedTagline}
            onChange={(e) => setSelectedTagline(e.target.value)}
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          >
            {taglines.map((tagline, index) => (
              <option key={index} value={tagline}>{tagline}</option>
            ))}
          </select>
          <button
            onClick={handleJobSubmit}
            style={{ padding: '10px', backgroundColor: 'green', borderRadius: '5px',color:'white', marginRight: '10px' }}
          >
            Save
          </button>
          <button onClick={() => setModalOpen(false)} style={{ padding: '10px', backgroundColor: 'red', color:'white', borderRadius: '5px' }}>
            Close
          </button>
        </div>
      )}

      {/* Modal for 'Download app' */}
      {isModalOpen && selectedTemplate === 'Download app' && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid gray',
            borderRadius: '8px',
            width: '400px',
          }}
        >
          <h4>{selectedTemplate}</h4>
          <label>App Store URL:</label>
          <input
            type="text"
            value={appStoreLink}
            onChange={(e) => setAppStoreLink(e.target.value)}
            placeholder="Enter App Store URL"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          <label>Google Play URL:</label>
          <input
            type="text"
            value={googlePlayLink}
            onChange={(e) => setGooglePlayLink(e.target.value)}
            placeholder="Enter Google Play URL"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          <button
            onClick={handleDownloadSubmit}
            style={{ padding: '10px', backgroundColor: 'green', color:'white', borderRadius: '5px', marginRight: '10px' }}
          >
            Save
          </button>
          <button onClick={() => setModalOpen(false)} style={{ padding: '10px', backgroundColor: 'red', color:'white',  borderRadius: '5px' }}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AppPageGroup2;