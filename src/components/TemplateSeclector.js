// import React from 'react';
// import { useAppContext } from '../context/AppContext'; // Adjust the path as needed

// const TemplateSelector = () => {
//   const { selectTemplate } = useAppContext();

//   return (
//     <div>
//       <button onClick={() => selectTemplate('template1')}>Template 1</button>
//       <button onClick={() => selectTemplate('template2')}>Template 2</button>
//       <button onClick={() => selectTemplate('template3')}>Template 3</button>
//       <button onClick={() => selectTemplate('template4')}>Template 4</button>
//       <button onClick={() => selectTemplate('template5')}>Template 5</button>
//     </div>
//   );
// };

// export default TemplateSelector;


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

