import React from 'react'
import { useAppContext } from '../../context/AppContext'
import {
  disclaimerContent,
  greenFooterContent,
  quoteContent,
  templateNames1
} from '../Pages/AppPage/AppPageGroup1' 

const AppContent = () => {
  const { selectedContent } = useAppContext()

  // console.log({ selectedContent, templateNames21 })

  return (
    <>
      {/* 1111111111111111111111111111111111111111111111111111 */}
      <div className='mt-4'>
        <ul
        className='ps-0'
          style={{
            listStyle: 'none',
          }}
        >
          {Object.entries(selectedContent).map(([template, content], index) => (
            <>
              {templateNames1.includes(template) && (
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
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AppContent
