import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { FaTrash } from 'react-icons/fa';
import './DetailPage.scss';

const additionalFieldsOptions = [
  { name: 'Pronoun' },
  { name: 'Extensions' },
  { name: 'Fax' },
  { name: 'Zoom' },
  { name: 'Hangout' },
  { name: 'Meet' },
  { name: 'WhatsApp' },
];

const DetailPage = () => {
  const { data, setData } = useAppContext();
  const [selectedField, setSelectedField] = useState('');
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    if (value.trim()) {
      switch (name) {
        case 'phone':
          if (!/^\d+$/.test(value)) {
            error = 'Phone number must contain only numbers';
          }
          break;
        case 'email':
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'Invalid email address';
          }
          break;
        case 'website':
          if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(value)) {
            error = 'Invalid website URL';
          }
          break;
        case 'title':
        case 'company':
          if (!/^[a-zA-Z\s]+$/.test(value)) {
            error = `${name.charAt(0).toUpperCase() + name.slice(1)} must contain only letters`;
          }
          break;
        default:
          break;
      }
    }
    return error;
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });

    setData({
      ...data,
      [name]: value,
    });
  };

  const addField = () => {
    if (selectedField && !data.additionalFields.some(field => field.name === selectedField)) {
      setData({
        ...data,
        additionalFields: [
          ...data.additionalFields,
          { name: selectedField, value: '' },
        ],
      });
      setSelectedField('');
    }
  };

  const handleAdditionalFieldChange = (name, value) => {
    setData({
      ...data,
      additionalFields: data.additionalFields.map(field =>
        field.name === name ? { ...field, value } : field
      ),
    });
  };

  const removeField = (name) => {
    setData({
      ...data,
      additionalFields: data.additionalFields.filter(field => field.name !== name),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(data).forEach((field) => {
      const error = validateField(field, data[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted successfully:', data);
      // Proceed with form submission (e.g., API call)
    }
  };

  return (
    <div className="detail-page">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name || ''}
            onChange={handleChange}
            className="form-control"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={data.title || ''}
            onChange={handleChange}
             className="form-control"
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={data.company || ''}
            onChange={handleChange}
             className="form-control"
          />
          {errors.company && <span className="error-message">{errors.company}</span>}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={data.phone || ''}
            onChange={handleChange}
             className="form-control"
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div>
          <label>Website:</label>
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={data.website || ''}
            onChange={handleChange}
             className="form-control"
          />
          {errors.website && <span className="error-message">{errors.website}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email || ''}
            onChange={handleChange}
             className="form-control"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={data.address || ''}
            onChange={handleChange}
             className="form-control"
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        {/* Render Additional Fields */}
        {data.additionalFields.map((field) => (
          <div key={field.name} className="additional-field">
            <label>{field.name}:</label>
            <input
              type="text"
               className="form-control"
              placeholder={`${field.name}`}
              value={field.value || ''}
              onChange={(e) => handleAdditionalFieldChange(field.name, e.target.value)}
            />
            <FaTrash onClick={() => removeField(field.name)} className="remove-icon" />
          </div>
        ))}

        {/* Dropdown to Add New Fields */}
        <div className="field-select">
          <select
            value={selectedField}
             className="form-control"
            onChange={(e) => setSelectedField(e.target.value)}
          >
            <option value="">Add Field</option>
            {additionalFieldsOptions.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <div>
            <span className="add-icon" onClick={addField}>+</span>
          </div>
        </div>

        {/* <button type="submit" className="submit-button">
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default DetailPage;