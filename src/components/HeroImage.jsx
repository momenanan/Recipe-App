import React from 'react';
import PropTypes from 'prop-types'; 
export default function HeroImage({ src }) { 
  return (
    <img
      src={src} 
      alt="Background depicting cooking ingredients or process" 
      className="w-full h-full object-cover"
    />
  );
}

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
};