import React from 'react';
import { useAppContext } from '../../context/AppContext';
import './DesignPage.scss'; // Import the SCSS file

const DesignPage = () => {
  const { data, setData } = useAppContext();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorChange = (color) => {
    setData({
      ...data,
      fontColor: color, 
    });
  };

  return (
    <div className="detail-page">
      {/* <h2>Design Page</h2> */}
      <form>
        {/* Font Selection */}
        <div>
          <label>Font:</label>
          <select
            name="font"
            value={data.font || 'Arial'}
            onChange={handleChange}
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>
        
        {/* Text Color with Palette and Customization */}
        <div>
          <label>Text Color:</label>
          <div className="color-picker-container">
            <div className="color-boxes">
              <div
                style={{ backgroundColor: 'red' }}
                className="color-box"
                onClick={() => handleColorChange('red')}
              ></div>
              <div
                style={{ backgroundColor: 'blue' }}
                className="color-box"
                onClick={() => handleColorChange('blue')}
              ></div>
              <div
                style={{ backgroundColor: 'green' }}
                className="color-box"
                onClick={() => handleColorChange('green')}
              ></div>
              <div
                style={{ backgroundColor: 'black' }}
                className="color-box"
                onClick={() => handleColorChange('black')}
              ></div>
              <div
                style={{ backgroundColor: 'orange' }}
                className="color-box"
                onClick={() => handleColorChange('orange')}
              ></div>
            </div>
            <div className="customize-section">
              <label>Customize:</label>
              <input
                type="color"
                name="fontColor"
                value={data.fontColor || '#000000'}
                onChange={(e) => handleColorChange(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div>
          <label>Spacing:</label>
          <select
            name="spacing"
            value={data.spacing || 'normal'}
            onChange={handleChange}
          >
            <option value="normal">Normal</option>
            <option value="wide">Wide</option>
          </select>
        </div>

        {/* Size */}
        <div>
          <label>Size:</label>
          <select
            name="size"
            value={data.size || 'medium'}
            onChange={handleChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        
        {/* Shape */}
        <div>
          <label>Shape:</label>
          <select
            name="shape"
            value={data.shape || 'square'}
            onChange={handleChange}
          >
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="rounded-square">Rounded Square</option>
          </select>
        </div>
        
        {/* Background Color */}
        {/* <div>
          <label>Background Color:</label>
          <input
            type="color"
            name="backgroundColor"
            value={data.backgroundColor || '#ffffff'}
            onChange={handleChange}
          />
        </div> */}
      </form>
    </div>
  );
};

export default DesignPage;