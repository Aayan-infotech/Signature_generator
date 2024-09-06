import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaImage, FaShareAlt, FaLayerGroup, FaPaintBrush, FaThLarge } from 'react-icons/fa';
import './Sidebar.scss';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/details');

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="sidebar">
      <Link
        to="/details"
        className={`sidebar-link ${activeLink === '/details' ? 'active' : ''}`}
        onClick={() => handleClick('/details')}
      >
        <FaPencilAlt className={`sidebar-icon ${activeLink === '/details' ? 'active-icon' : ''}`} /> Details
      </Link>
      <Link
        to="/images"
        className={`sidebar-link ${activeLink === '/images' ? 'active' : ''}`}
        onClick={() => handleClick('/images')}
      >
        <FaImage className={`sidebar-icon ${activeLink === '/images' ? 'active-icon' : ''}`} /> Images
      </Link>
      <Link
        to="/social"
        className={`sidebar-link ${activeLink === '/social' ? 'active' : ''}`}
        onClick={() => handleClick('/social')}
      >
        <FaShareAlt className={`sidebar-icon ${activeLink === '/social' ? 'active-icon' : ''}`} /> Social
      </Link>
      <Link
        to="/template"
        className={`sidebar-link ${activeLink === '/template' ? 'active' : ''}`}
        onClick={() => handleClick('/template')}
      >
        <FaLayerGroup className={`sidebar-icon ${activeLink === '/template' ? 'active-icon' : ''}`} /> Templates
      </Link>
      <Link
        to="/design"
        className={`sidebar-link ${activeLink === '/design' ? 'active' : ''}`}
        onClick={() => handleClick('/design')}
      >
        <FaPaintBrush className={`sidebar-icon ${activeLink === '/design' ? 'active-icon' : ''}`} /> Design
      </Link>
      <Link
        to="/app"
        className={`sidebar-link ${activeLink === '/app' ? 'active' : ''}`}
        onClick={() => handleClick('/app')}
      >
        <FaThLarge className={`sidebar-icon ${activeLink === '/app' ? 'active-icon' : ''}`} /> Apps
      </Link>
    </div>
  );
};

export default Sidebar;
