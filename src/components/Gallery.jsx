import { useState } from 'react';

const Gallery = ({ images, onMainClick }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="gallery">
      <img 
        src={images[activeIdx].main} 
        className="main-img" 
        alt="Product" 
        onClick={() => onMainClick(activeIdx)}
      />
      <div className="thumbnails">
        {images.map((img, idx) => (
          <div 
            key={img.id} 
            className={`thumb ${activeIdx === idx ? 'active' : ''}`}
            onClick={() => setActiveIdx(idx)}
          >
            <img src={img.thumb} alt="thumb" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;