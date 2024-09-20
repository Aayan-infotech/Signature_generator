import React from 'react';
import { useAppContext } from '../context/AppContext';

const TemplateSelector = () => {
  const { data, setData, availableTemplates } = useAppContext();

  const handleTemplateChange = (e) => {
    setData({ ...data, template: e.target.value });
  };

  return (
    <div>
      <select value={data.template} onChange={handleTemplateChange}>
        {availableTemplates.map((template) => (
          <option key={template} value={template}>
            {template}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemplateSelector;