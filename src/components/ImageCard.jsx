import React, { useState } from 'react';
import clsx from 'clsx';

const ImageCard = ({ label, image, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'relative w-32 px-4 pt-5 pb-10 cursor-pointer flex flex-col items-center transition duration-300',
        selected ? 'opacity-100' : 'opacity-70'
      )}
      style={{
        backgroundColor: '#fde2c7',
        borderRadius: '1rem',
      }}
    >
      <div className={clsx(
        'w-20 h-20 rounded-full overflow-hidden mb-3 border-2',
        selected ? 'border-cyan-400' : 'border-transparent'
      )}>
        <img src={image} alt={label} className="w-full h-full object-cover" />
      </div>

      <div className="text-gray-700 font-semibold">{label}</div>

      <div
        className={clsx(
          'w-5 h-5 rounded-full absolute -bottom-3 transition border-2 border-white',
          selected ? 'bg-cyan-400' : 'bg-gray-300'
        )}
      />
    </div>
  );
};

const ImageCardSelector = ({ onSelectionChange }) => {
  const [selectedLabels, setSelectedLabels] = useState([]);

  const items = [
    { label: 'Indian', image: '/indian.jpg' },
    { label: 'Italian', image: '/itilian.jpg' },
    { label: 'Chinese', image: '/chinese.jpg' },
    { label: 'Japanese', image: '/japanese.jpg' },
    { label: 'Thai', image: '/thai.jpg' },
    { label: 'Mexican', image: '/Mexican.jpg' },
  ];

  const handleClick = (label) => {
    let updated = [];

    if (selectedLabels.includes(label)) {
      updated = selectedLabels.filter((item) => item !== label);
    } else {
      if (selectedLabels.length >= 3) return; 
      updated = [...selectedLabels, label];
    }

    setSelectedLabels(updated);
    onSelectionChange && onSelectionChange(updated);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10">
        {items.map((item) => (
          <ImageCard
            key={item.label}
            label={item.label}
            image={item.image}
            selected={selectedLabels.includes(item.label)}
            onClick={() => handleClick(item.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCardSelector;
