
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageList from './imagelist';

const ScrollWall = () => {
const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
         
           count: 20,
          query: 'hiking'
        },
      })
      .then((response) => {
        console.log(response.data)
        setImages([...images, ...response.data]);
      });
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      fetchImages();
    }
  };

  return (
    <div className="image-board" onScroll={handleScroll}>
      <ImageList images={images} />
    </div>
  );
}
export default ScrollWall