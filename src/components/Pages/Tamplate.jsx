import React , {useState} from 'react';
import { useAppContext } from '../../context/AppContext';
import './Tamplate.css';

const TamplatesPreview = () => {
  const { handleTamplate, selectedTamplate } = useAppContext();
  const [selectedTemplate, setSelectedTemplate] = useState(null); 

  // Array of 12 template names
  const templates = Array.from({ length: 12 }, (_, index) => `Template${index + 1}`);

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template); // Set the clicked template as active
    handleTamplate(template)
  };

  return (
    <div>
      <h3>Templates</h3>
      <div
        className="pe-2"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // 2-column layout
          gap: '20px', // Space between items
          margin: '0 auto', // Center grid
          height: 'calc(100vh - 100px)',
          overflowY: 'auto',
        }}
      >
        {templates.map((template, index) => (
          <div key={index}>
            <img
              src={`/preview/${template}.jpg`}
              alt={template}
              className={`template-item ${selectedTemplate === template ? 'active' : ''}`} // Add active class dynamically
              style={{
                padding: '15px',
                border: selectedTemplate === template ? '2px solid blue' : '1px solid gray',
                cursor: 'pointer',
                width: '100%',
                objectFit: 'contain',
                boxSizing: 'border-box',
                borderRadius: '8px',
              }}
              height={100}
              onClick={() => handleTemplateClick(template)} // 
             
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TamplatesPreview;
