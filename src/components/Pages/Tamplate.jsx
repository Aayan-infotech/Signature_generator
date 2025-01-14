import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import './Tamplate.css'

const TamplatesPreview = () => {
  const { handleTamplate, selectedTamplate } = useAppContext()
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  // Array of 12 template names
  const templates = Array.from({ length: 12 }, (_, index) => `Template${index + 1}`)

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template) // Set the clicked template as active
    handleTamplate(template)
  }

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
          <div key={index} className="position-relative">
            <img
              src={`/preview/${template}.jpg`}
              alt={template}
              className={` template-item ${selectedTemplate === template ? 'active' : ''}`} // Add active class dynamically
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
            {index >= 2 && (
              <div className="position-absolute start-0 ps-2 pt-1 top-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffc107"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TamplatesPreview
