import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';
import Template5 from './templates/Template5';
import Template6 from './templates/Template6';
import Template7 from './templates/Template7';
import Template8 from './templates/Template8';
import Template9 from './templates/Template9';
import Template10 from './templates/Template10';
import Template11 from './templates/Template11';
import Template12 from './templates/Template12';

const DisplayScreen = () => {
  const { data ,selectedTamplate} = useAppContext();
  const [selectedTemplate, setSelectedTemplate] = useState('Template1');

  const handleSubmit = () => {
    console.log("Submitted Data:", data);
  };

  const renderTemplate = () => {
    const templateProps = { data, onSubmit: handleSubmit };

    switch (selectedTamplate) {
      case 'Template1':
        return <Template1 {...templateProps} />;
      case 'Template2':
        return <Template2 {...templateProps} />;
      case 'Template3':
        return <Template3 {...templateProps} />;
      case 'Template4':
        return <Template4 {...templateProps} />;
      case 'Template5':
        return <Template5 {...templateProps} />;
      case 'Template6':
        return <Template6 {...templateProps} />;
      case 'Template7':
        return <Template7 {...templateProps} />;
      case 'Template8':
        return <Template8 {...templateProps} />;
      case 'Template9':
        return <Template9 {...templateProps} />;
      case 'Template10':
        return <Template10 {...templateProps} />;
      case 'Template11':
        return <Template11 {...templateProps} />;
      case 'Template12':
        return <Template12 {...templateProps} />;
      default:
        return <Template1 {...templateProps} />;
    }
  };

  return (
    <div>
      <div>
        {Array.from({ length: 12 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedTemplate(`Template${index + 1}`)}
          >
            Template {index + 1}
          </button>
        ))}
      </div>
      <div>{renderTemplate()}</div>
    </div>
  );
};

export default DisplayScreen;
