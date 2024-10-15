import React from 'react'
import { useAppContext } from '../../context/AppContext'

const Parent = ({ children }) => {
  const { data } = useAppContext()
  const getFontSize = () => {
    switch (data.size) {
      case 'small':
        return '12px'
      case 'medium':
        return '16px'
      case 'large':
        return '20px'
      default:
        return '16px'
    }
  }

  const getSpacing = () => {
    return data.spacing === 'wide' ? '1.5em' : '1em'
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          fontFamily: data.font,
          color: 'inherit',
          fontSize: getFontSize(),
          lineHeight: getSpacing(),
          maxWidth: "700px",
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {children}
      </div>
      {/* Submit Button */}
      <button
        onClick={() => onSubmit(data)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          alignSelf: 'flex-end',
        }}
      >
        OK, I'm done
      </button>
    </>
  )
}

export default Parent