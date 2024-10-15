import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import {
  disclaimerContent,
  extractVideoId,
  greenFooterContent,
  quoteContent,
  templateNames1,
} from '../Pages/AppPage/AppPageGroup1'
import { templateNames21 } from '../Pages/AppPage/AppPagegroup21'

const AppContent = () => {
  const { selectedContent } = useAppContext()

  console.log({ selectedContent })

  return (
    <>
      {/* 1111111111111111111111111111111111111111111111111111 */}
      <div>
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          {Object.entries(selectedContent).map(([template, content], index) => (
            <>
              {/* for group 1  */}
              {templateNames1.includes(template) ? (
                <>
                  <li style={{ marginBottom: '15px' }} key={index}>
                    {template === 'Styled Signoff' ? (
                      <div>
                        <span style={{ fontSize: '20px' }}>{content}</span>
                      </div>
                    ) : template === 'Disclaimer' ? (
                      <span style={{ fontSize: '12px' }}>{disclaimerContent[content]}</span>
                    ) : template === 'Quote' ? (
                      quoteContent[content]
                    ) : template === 'Green footer' ? (
                      <span style={{ color: 'green' }}>{greenFooterContent[content]}</span>
                    ) : template === 'Video' ? (
                      <div style={{ textDecoration: 'None', color: 'black' }}>
                        <a style={{ color: 'black' }} href={content}>
                          Click here to see the Youtube content
                        </a>
                      </div>
                    ) : Array.isArray(content) ? (
                      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        {content.map((imageFile, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={URL.createObjectURL(imageFile)}
                            alt={`gallery-img-${imgIndex}`}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                          />
                        ))}
                      </div>
                    ) : (
                      content
                    )}
                  </li>
                </>
              ) : (
                <>
                  {/* for group 2  */}
                  {templateNames21.includes(template) ? (
                    <>
                      <div style={{ marginBottom: '20px' }}>
                        <strong>{template}:</strong>{' '}
                        <button
                          style={{
                            padding: '10px',
                            margin: '10px 5px',
                            backgroundColor: 'rgb(27, 162, 235)',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                          onClick={() => window.open(selectedContent[template].url, '_blank')}
                        >
                          {selectedContent[template].description || 'Click here'}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>{/* for group next */}</>
                  )}
                </>
              )}
            </>
          ))}
        </ul>
      </div>
      {/* 2222222222222222222222222222222222222222222222222 */}
      {templateNames21.map((template, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <strong>{template}:</strong>{' '}
          {selectedContent[template] && selectedContent[template].url ? (
            <>
              {template === 'Upload my banner' ? (
                <img
                  src={selectedContent[template].url}
                  alt="Banner"
                  style={{ maxWidth: '100%', height: 'auto', margin: '10px 0' }}
                />
              ) : template === 'Video conferencing' ? (
                <button
                  style={{
                    padding: '10px',
                    margin: '10px 5px',
                    backgroundColor: 'rgb(27, 162, 235)',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => window.open(selectedContent[template].url, '_blank')}
                >
                  {selectedContent[template].platform === 'Zoom' && (
                    <FaVideo style={{ color: 'purple', margin: '15px', marginRight: '10px' }} />
                  )}
                  {selectedContent[template].platform === 'Google Meet' && (
                    <FaGoogle style={{ color: 'green', padding: '15px', marginRight: '10px' }} />
                  )}
                  {selectedContent[template].platform === 'Skype' && (
                    <FaSkype style={{ color: 'blue', padding: '15px', marginRight: '10px' }} />
                  )}
                  {selectedContent[template].platform === 'Microsoft Teams' && (
                    <FaMicrosoft
                      style={{ color: 'orange', padding: '15px', marginRight: '10px' }}
                    />
                  )}
                  {selectedContent[template].description || 'Click here'}
                </button>
              ) : (
                <button
                  style={{
                    padding: '10px',
                    margin: '10px 5px',
                    backgroundColor: 'rgb(27, 162, 235)',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open(selectedContent[template].url, '_blank')}
                >
                  {selectedContent[template].description || 'Click here'}
                </button>
              )}
            </>
          ) : (
            <span> </span>
          )}
        </div>
      ))}
    </>
  )
}

export default AppContent
