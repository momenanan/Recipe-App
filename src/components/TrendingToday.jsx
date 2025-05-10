import React from 'react';
import { Typography } from '@mui/material';

const trendingItems = [
  {
    title: 'Italian Pizza',
    image: '/public/italian-pizza.jpg', 
  },
  {
    title: 'Indian Tawa',
    image: '/public/indian-tawa.jpg',
  },
];

const TrendingToday = () => {
  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="text-black font-bold">
          Trending Today
        </Typography>
        <button className="text-sm text-gray-500 underline">see all</button>
      </div>

      {/* Cards */}
      <div className="flex gap-4 overflow-x-auto">
        {trendingItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl overflow-hidden shadow-md min-w-[160px] bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-28 object-cover"
            />
            <div className="bg-[#0A3C4C] text-white flex items-center gap-2 px-2 py-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingToday;
