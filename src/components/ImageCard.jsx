import React, { useState } from 'react';
import { Card } from '@mui/material';
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
        clipPath: `path('M0,0 H100% Vcalc(100% - 16px) Q50% 100% 0 calc(100% - 16px) Z')`, // هذا تقريب عام
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
          'w-5 h-5 rounded-full absolute bottom-[-12px] transition border-2 border-white',
          selected ? 'bg-cyan-400' : 'bg-gray-300'
        )}
      />
    </div>
  );
};

const ImageCardSelector = () => {
  const [selectedLabel, setSelectedLabel] = useState('');

  const items = [
    { label: 'Indian', image: '/indian.jpg' },
    { label: 'Italian', image: '/itilian.jpg' },
    { label: 'Chinese', image: '/chinese.jpg'},
    {label:'Japanese', image:'/japanese.jpg'},
    {label:'Thai', image:'/thai.jpg'},
    {label:'Mexican', image:'/Mexican.jpg'},
  ];

  return (
    <div className="flex gap-6 justify-center mt-10">
      {items.map((item) => (
        <ImageCard
          key={item.label}
          label={item.label}
          image={item.image}
          selected={selectedLabel === item.label}
          onClick={() => setSelectedLabel(item.label)}
        />
      ))}
    </div>
  );
};

export default ImageCardSelector;
