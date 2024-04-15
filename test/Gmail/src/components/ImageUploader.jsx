import React, { useState } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const uploadImages = async () => {
    try {
      setUploading(true);
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`image${index}`, image);
      });
      // Send formData to your backend endpoint using fetch
      await fetch('http://localhost:3000', {
        method: 'POST',
        body: formData
      });
      setImages([]);
      setUploading(false);
      alert('Images uploaded successfully!');
    } catch (error) {
      console.error('Error uploading images:', error);
      setUploading(false);
      alert('Error uploading images. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={uploadImages} disabled={uploading || images.length === 0}>
        {uploading ? 'Uploading...' : 'Upload Images'}
      </button>
    </div>
  );
};

export default ImageUploader;
