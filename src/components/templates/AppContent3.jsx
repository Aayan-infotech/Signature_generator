import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { templateNames3 } from '../Pages/AppPage/AppPageGroup2'

const AppContent3 = () => {
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
              {templateNames3.includes(template) && (
                <div style={{ marginBottom: '', display: 'flex', alignItems: 'center' }}>
                  <strong>{template}:</strong>{' '}
                  <div
                    style={{
                      padding: '10px',
                      margin: '10px 5px',
                      // backgroundColor: 'rgb(27, 162, 235)',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      color: 'purple',
                    }}
                    onClick={() => window.open(selectedContent[template].url, '_blank')}
                  >
                    {selectedContent[template].description || 'Click here'}
                  </div>
                </div>
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AppContent3
