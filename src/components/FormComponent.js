import React from 'react';
import { useAppContext } from '../context/AppContext';

const FormComponent = () => {
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
      color,
    });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333'
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer'
  };

  const colorBoxContainer = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginTop: '5px',
  };

  const colorBox = (backgroundColor) => ({
    backgroundColor,
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  });

  const radioGroupStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '5px',
  };

  const radioInputStyle = {
    marginRight: '5px',
  };

  return (
    <form style={formStyle}>
      <input
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Name"
        style={inputStyle}
      />
      <input
        name="address"
        value={data.address}
        onChange={handleChange}
        placeholder="Address"
        style={inputStyle}
      />
      <input
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder="Phone"
        style={inputStyle}
      />
      <input
        name="title"
        value={data.title}
        onChange={handleChange}
        placeholder="Title"
        style={inputStyle}
      />
      <input
        name="company"
        value={data.company}
        onChange={handleChange}
        placeholder="Company"
        style={inputStyle}
      />
      <input
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
        style={inputStyle}
      />
      <input
        name="website"
        value={data.website}
        onChange={handleChange}
        placeholder="Website"
        style={inputStyle}
      />

      <div>
        <label style={labelStyle}>Font:</label>
        <select
          name="font"
          value={data.font}
          onChange={handleChange}
          style={selectStyle}
        >
          <option value="Arial">Arial</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Palatino">Palatino</option>
          <option value="Verdana">Verdana</option>
          <option value="Georgia">Georgia</option>
          <option value="Lucida Sans">Lucida Sans</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Color:</label>
        <div style={colorBoxContainer}>
          <div style={colorBox('red')} onClick={() => handleColorChange('red')}></div>
          <div style={colorBox('blue')} onClick={() => handleColorChange('blue')}></div>
          <div style={colorBox('green')} onClick={() => handleColorChange('green')}></div>
          <div style={colorBox('black')} onClick={() => handleColorChange('black')}></div>
          <div style={colorBox('orange')} onClick={() => handleColorChange('orange')}></div>
          <label style={labelStyle}>Customize:</label>
          <input
            type="color"
            value={data.color}
            onChange={(e) => handleColorChange(e.target.value)}
            style={{ ...inputStyle, padding: 0, width: '40px', height: '40px', cursor: 'pointer' }}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Spacing:</label>
        <div style={radioGroupStyle}>
          <label>
            <input
              type="radio"
              name="spacing"
              value="small"
              checked={data.spacing === 'small'}
              onChange={handleChange}
              style={radioInputStyle}
            /> Small
          </label>
          <label>
            <input
              type="radio"
              name="spacing"
              value="medium"
              checked={data.spacing === 'medium'}
              onChange={handleChange}
              style={radioInputStyle}
            /> Medium
          </label>
          <label>
            <input
              type="radio"
              name="spacing"
              value="large"
              checked={data.spacing === 'large'}
              onChange={handleChange}
              style={radioInputStyle}
            /> Large
          </label>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Size:</label>
        <div style={radioGroupStyle}>
          <label>
            <input
              type="radio"
              name="size"
              value="small"
              checked={data.size === 'small'}
              onChange={handleChange}
              style={radioInputStyle}
            /> Small
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="medium"
              checked={data.size === 'medium'}
              onChange={handleChange}
              style={radioInputStyle}
            /> Medium
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="large"
              checked={data.size === 'large'}
              onChange={handleChange}
              style={radioInputStyle}
            /> Large
          </label>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Shape:</label>
        <div style={radioGroupStyle}>
          <label>
            <input
              type="radio"
              name="shape"
              value="square"
              checked={data.shape === 'square'}
              onChange={handleChange}
              style={radioInputStyle}
            /> Square
          </label>
          <label>
            <input
              type="radio"
              name="shape"
              value="circle"
              checked={data.shape === 'circle'}
              onChange={handleChange}
              style={radioInputStyle}
            /> Circle
          </label>
          <label>
            <input
              type="radio"
              name="shape"
              value="rounded-square"
              checked={data.shape === 'rounded-square'}
              onChange={handleChange}
              style={radioInputStyle}
            /> Rounded Square
          </label>
        </div>
      </div>
    </form>
  );
};

export default FormComponent;