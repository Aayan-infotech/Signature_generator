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

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addField = () => {
    if (selectedField && !data.additionalFields.some(field => field.name === selectedField)) {
      setData({
        ...data,
        additionalFields: [
          { name: selectedField, value: '' },
          ...data.additionalFields,
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

  return (
    <div className="detail-page">
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={data.title || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            placeholder="Text"
            value={data.company || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={data.phone || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Website:</label>
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={data.website || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={data.address || ''}
            onChange={handleChange}
          />
        </div>

        {/* Render Additional Fields */}
        {data.additionalFields.map((field) => (
          <div key={field.name} className="additional-field">
            <label>{field.name}:</label>
            <input
              type="text"
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
      </form>
    </div>
  );
};

export default DetailPage;
