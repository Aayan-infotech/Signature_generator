import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    fontColor: '#000000',
    fontSize: 14,
    backgroundColor: '#ffffff',
    borderRadius: 0,
    template: 'Template1',
    socialLinks: [],
    additionalFields: [],
  })

  const [selectedTamplate, setSelectedTamplate] = useState('Template1')

  const availableTemplates = [
    'Template1',
    'Template2',
    'Template3',
    'Template4',
    'Template5',
    'Template6',
    'Template7',
    'Template8',
    'Template9',
    'Template10',
    'Template11',
    'Template12',
  ]

  const handleTamplate = (t) => {
    setSelectedTamplate(t)
    setData((prevData) => ({
      ...prevData,
      template: t,
    }))
  }

  return (
    <AppContext.Provider
      value={{ data, setData, availableTemplates, selectedTamplate, handleTamplate }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
