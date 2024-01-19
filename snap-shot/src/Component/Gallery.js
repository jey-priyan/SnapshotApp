import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';
import Image from './Image';

const Gallery = () => {
  const { images, setImages } = useContext(AppContext);
  const [error, SetError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/?client_id=NSd68eNBF34a3uMAd2ogsfS0F9g0Ep2Lfksbr2-BD8s'
        );
        console.log('API Response:', response.data);

        setImages(response.data);
        
      } catch (error) {
        SetError('Error fetching data', error);
      }
    };

    fetchData();
  }, [setImages]);

  return (
    <div className="gallery-container">
    {Array.isArray(images) &&
      images.map((image) => (
        <Image
          key={image.id}
          title={image.alt_description || 'Untitled'}
          link={image.urls.small}
          author={image.user.username}
        />
      ))} 
          <div>{error}</div>
      
    </div>
  
  );
};

export default Gallery;
