import React, { useState } from 'react';
import {
  FaBlogger,
  FaHandPointUp,
  FaMoneyBill,
  FaRegAddressCard,
  FaShoppingCart,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';
import { useAppContext } from '../../../context/AppContext';

// Group 2 templates and icons
const templateData = [
  { name: 'Give feedback', icon: <FaMoneyBill style={{ color: 'blue' }} /> },
  { name: 'Join a webinar', icon: <FaRegAddressCard style={{ color: '#4CAF50' }}/> },
  { name: 'Join newsletter', icon: <FaHandPointUp style={{ color: 'red' }} /> },
  { name: 'Download app', icon: <FaBlogger style={{ color: '#9C27B0' }} /> },
  { name: 'Post a job offer', icon: <FaShoppingCart style={{ color: '#FFC107' }}/> },
];

// AppContent3
export const templateNames3 = [
  'Give feedback',
  'Join a webinar',
  'Join newsletter',
  'Download app',
  'Post a job offer',
];

const taglines = ['Open position', 'Join our team', 'We are hiring', 'Click to join', 'Job opening'];

// Main component for handling templates and modal for Group 2
const AppPageGroup2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [description, setDescription] = useState('');
  const [selectedCard, setSelectedCard] = useState(null); 

  const [url, setUrl] = useState('');
  const { setSelectedTemplate, selectedTemplate, handleModalSelect, selectedContent } = useAppContext(); // Updated to use selectedContent for rendering buttons
  const [extra, setExtra] = useState(null);
    const [selectedTagline, setSelectedTagline] = useState(taglines[0]); // Store selected tagline
    const [appStoreLink, setAppStoreLink] = useState(''); // Store App Store download link
    const [googlePlayLink, setGooglePlayLink] = useState(''); // Store Google Play download link

  const handleTemplateClick = (template) => {
    setModalOpen(true);
    setSelectedTemplate(template.name);
    setModalData({ templateName: template.name });
    setSelectedCard(templateName)
  };

  const handleCancel = () => {
    setModalOpen(false);
    setDescription('');
    setUrl('');
    setExtra(null);
  };

  const handleSubmit = () => {
    let content = { description, url, extra };
    handleModalSelect(content);
    handleCancel();
  };

  const handleDownloadClick = (downloadUrl) => {
    window.open(downloadUrl, '_blank');
  };

  return (
    <div>
      {/* <h3>Call to Action for Group 2</h3> */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {templateData.map((template, index) => (
          <button
            key={index}
            style={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              border: selectedCard === templateData ? '1px solid blue' : '1px solid gray',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: 'transparent',
            }}
            className={`template-item ${selectedCard === templateData ? 'active' : ''}`}
            onClick={() => handleTemplateClick(template)}
          >
            {template.icon}
            {template.name}
          </button>
        ))}
      </div>

      {/* Display selected content for "Post a job offer" and "Download app" */}
      {selectedTemplate === 'Post a job offer' && selectedContent[selectedTemplate] && (
        <>
          <span
            style={{
              marginLeft: '10px',
              color: 'black',
              textDecoration: 'none',
              cursor: 'pointer',
              backgroundColor: 'transparent',
            }}
            onClick={() => window.open(selectedContent[selectedTemplate].url, '_blank')} // Add redirection on click
          >
          </span>
        </>
      )}

      {selectedTemplate === 'Download app' && selectedContent[selectedTemplate] && (
        <>
          {selectedContent[selectedTemplate].appStore && (
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
              onClick={() => handleDownloadClick(selectedContent[selectedTemplate].appStore)}
            >
              <FaApple style={{ marginRight: '8px' }} /> Download on App Store
            </button>
          )}
          {selectedContent[selectedTemplate].googlePlay && (
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
              onClick={() => handleDownloadClick(selectedContent[selectedTemplate].googlePlay)}
            >
              <FaGooglePlay style={{ marginRight: '8px' }} /> Download on Google Play
            </button>
          )}
        </>
      )}

      {/* Modal for content submission */}
      {isModalOpen && (
          <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex:"1",
          }}
        >
              <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '5px',
          maxWidth: '400px',
          width: '100%',
        }}
      >

          
          <h4>{modalData.templateName}</h4>

          <label>Description:</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
            value={description}
             className="form-control"
          />
          <label>URL:</label>
          <input
            type="text"
            value={url}
             className="form-control"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          {modalData.templateName === 'Post a job offer' && (
            <>
          <label>Tagline:</label>
          <select
           className="form-control"
            value={selectedTagline}
            onChange={(e) => setSelectedTagline(e.target.value)}
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          >
            {taglines.map((tagline, index) => (
              <option key={index} value={tagline}>{tagline}</option>
            ))}
          </select>
            </>
          )}

          <button
            onClick={handleSubmit}
            style={{
              
              marginTop: '10px',
              backgroundColor: 'lightblue',
             
              border: '2px solid white',
              color: 'white',
              borderRadius: '8px',
              padding: '10px 18px',
            }}
          >
            Add
          </button>
          <button
            onClick={handleCancel}
            style={{
       
              marginTop: '10px',
              marginLeft: '5px',
              backgroundColor: 'lightcoral',
            
              border: '2px solid white',
              color: 'white',
              borderRadius: '8px',
              padding: '10px 18px',
            }}
          >
            Cancel
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default AppPageGroup2;
