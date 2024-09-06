import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
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
// import Template13 from './templates/Template13';
// import Template14 from './templates/Template14';
// import Template15 from './templates/Template15';
// import Template16 from './templates/Template16';

const MainPage = () => {
  const { data, setData } = useAppContext();

  const handleSubmit = (templateData) => {
    // Handle the final submission or processing of the template data
    console.log('Template Data:', templateData);
  };

  const renderTemplate = () => {
    switch (data.template) {
      case 'Template1':
        return <Template1 data={data} onSubmit={handleSubmit} />;
      case 'Template2':
        return <Template2 data={data} onSubmit={handleSubmit} />;
      case 'Template3':
        return <Template3 data={data} onSubmit={handleSubmit} />;
      case 'Template4':
        return <Template4 data={data} onSubmit={handleSubmit} />;
      case 'Template5':
        return <Template5 data={data} onSubmit={handleSubmit} />;
      case 'Template6':
        return <Template6 data={data} onSubmit={handleSubmit} />;
      case 'Template7':
        return <Template7 data={data} onSubmit={handleSubmit} />;
      case 'Template8':
        return <Template8 data={data} onSubmit={handleSubmit} />;
        case 'Template9':
          return <Template9 data={data} onSubmit={handleSubmit} />;
        case 'Template10':
          return <Template10 data={data} onSubmit={handleSubmit} />;
        case 'Template11':
          return <Template11 data={data} onSubmit={handleSubmit} />;
        case 'Template12':
          return <Template12 data={data} onSubmit={handleSubmit} />;
          // case 'Template13':
          //   return <Template13 data={data} onSubmit={handleSubmit} />;
          // case 'Template14':
          //   return <Template14 data={data} onSubmit={handleSubmit} />;
          // case 'Template15':
          //   return <Template15 data={data} onSubmit={handleSubmit} />;
          // case 'Template16':
          //   return <Template16 data={data} onSubmit={handleSubmit} />;
      default:
        return <Template1 data={data} onSubmit={handleSubmit} />;
    }
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <Sidebar />
      <div style={{ width: '35%', padding: '20px' }}>
        <Outlet />
      </div>
      <div style={{ width: '80%', backgroundColor: '#f0f0f0', padding: '20px' }}>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default MainPage;