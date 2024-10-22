import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { callLinks, templateNames21 } from '../Pages/AppPage/AppPagegroup21'
import { Link } from 'react-router-dom'

const AppContent2 = () => {
  const { selectedContent } = useAppContext()

  // console.log({ selectedContent })

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
              {/* for group 2  */}
              {templateNames21.includes(template) && (
                <>
                  {template === 'Video conferencing' ? (
                    <>
                      <Link>
                        <img
                          src={callLinks[selectedContent[template].platform]}
                          alt=""
                          width={40}
                        />
                      </Link>
                    </>
                  ) : (
                    <div style={{ marginBottom: '', display: 'flex', alignItems: 'center' }}>
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
                  )}
                </>
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AppContent2
