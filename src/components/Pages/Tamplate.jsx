import React from 'react'
import { useAppContext } from '../../context/AppContext'

const TamplatesPreview = () => {
  const { handleTamplate, selectedTamplate } = useAppContext()

  // Create an array with 12 elements (representing 12 templates)
  const templates = Array.from({ length: 12 }, (_, index) => `Template${index + 1}`)

  return (
    <div>
      <h3>Templates</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns layout
          gap: '20px', // Space between the buttons
          maxWidth: '600px', // Optional: max-width to control overall width
          margin: '0 auto', // Center the grid container
          height:"calc(100vh - 100px )",
          overflowY:"auto",
        }}
      >
        {templates.map((template, index) => (
          <>
            {/* <button
            key={index}
            onClick={() => handleTamplate(template)}  // Call your handleTamplate function
            style={{
              padding: '15px',
              border: selectedTamplate === template ? '2px solid blue' : '1px solid gray',
              backgroundColor: selectedTamplate === template ? 'lightblue' : 'white',
              cursor: 'pointer',
              width: '100%',  // Ensure buttons take full width
              boxSizing: 'border-box', // Ensure padding doesn't affect width
            }}
          >
            {template}
          </button> */}

            <img
              src={`/preview/${template}.jpg`}
              style={{
                padding: '15px',
                border: selectedTamplate === template ? '2px solid blue' : '1px solid gray',
                // backgroundColor: selectedTamplate === template ? 'lightblue' : 'white',
                cursor: 'pointer',
                width: '100%', // Ensure buttons take full width
                objectFit: 'contain',
                boxSizing: 'border-box', // Ensure padding doesn't affect width
                borderRadius: '8px',
              }}
              height={100}
              onClick={() => handleTamplate(template)}
            />
          </>
        ))}
      </div>
    </div>
  )
}

export default TamplatesPreview
