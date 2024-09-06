import React from 'react';
import { useAppContext } from '../../context/AppContext';
import './ImageUploadPage.scss'; // Import the SCSS file

const ImageUploadPage = () => {
  const { data, setData } = useAppContext();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      if (img.width >= 100 && img.height >= 100) {
        setData({
          ...data,
          image: imageUrl,
        });
      } else {
        alert('Image must be at least 100x100 pixels.');
      }
    };
  };

  return (
    <div className="image-upload-page">
      <h2>Upload Image</h2>
      <label className="upload-label">
      Upload Photo or Logo
      <br/>
      <span className='constraint'>[Image should be at least 100X100px]</span>
        <input type="file" onChange={handleImageUpload} />
      </label>
      {data.image && <img src={data.image} alt="Uploaded" className="uploaded-image" />}
    </div>
  );
};

export default ImageUploadPage;
