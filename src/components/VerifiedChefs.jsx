import React from 'react';
import { Typography } from '@mui/material';

const chefs = [
  { name: 'Claudia', image: '/public/chef1.jpg' },
  { name: 'Anamika', image: '/public/chef2.jpg' },
  { name: 'Rafael', image: '/public/chef3.jpg' },
  { name: 'Jeorge', image: '/public/chef4.jpg' },
  { name: 'Max', image: '/public/chef5.jpg' },
];

const VerifiedChefs = () => {
  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="text-black font-bold">
          Verified Chefs
        </Typography>
        <button className="text-sm text-gray-500 underline">see all</button>
      </div>

      {/* Chef list */}
      <div className="flex gap-6 overflow-x-auto">
        {chefs.map((chef, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <p className="mt-2 text-md text-[#053B50] font-medium">{chef.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerifiedChefs;
