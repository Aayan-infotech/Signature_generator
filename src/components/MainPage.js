import React, { useState, useEffect } from 'react';
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
import Header from './header/header';
import Offcanvas from 'react-bootstrap/Offcanvas';

const MainPage = () => {
  const { data, setData } = useAppContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the correct state based on current window size.

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (templateData) => {
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
      default:
        return <Template1 data={data} onSubmit={handleSubmit} />;
    }
  };

  return (
    <>
      <Header />
      <div className='container-fluid px-0 d-flex'>
        <Sidebar handleShow={handleShow}/>
        {show ? (
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>SignaTouch</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Outlet />
            </Offcanvas.Body>
          </Offcanvas>
        ) : (
          <div className='sideData d-none d-lg-block'>
            <Outlet />
          </div>
        )}
        <div className='fontchanger'>
          {renderTemplate()}
        </div>
      </div>
    </>
  );
};

export default MainPage;
