import React from 'react';
import { Typography, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

const categories = ['Healthy', 'Quick', 'Cuisine', 'Breakfast', 'Snack', 'Dinner'];

const cards = [
  {
    title: 'Salad 2.0',
    image: '/public/categories1.jpg',
    time: '10-20 mins',
    people: '4-5 People',
    author: 'Maria',
    color: 'bg-green-500',
  },
  {
    title: 'Tomato Salad',
    image: '/public/categories2.jpg',
    time: '15-20 mins',
    people: '3-4 People',
    author: 'Ralph',
    color: 'bg-green-500',
  },
  {
    title: 'Egg Salad',
    image: '/public/categories3.jpg',
    time: '35-45 mins',
    people: '4-5 People',
    author: 'Jeorge',
    color: 'bg-red-500',
  },
];

const CategoriesSection = () => {
  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="text-black font-bold">
          Categories
        </Typography>
        <button className="text-sm text-gray-500 underline">see all</button>
      </div>

      {/* Category Chips */}
      <div className="flex gap-3 mb-6 overflow-x-auto">
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            className="!text-[#e85455] !border-[#e85455] !bg-[#ffe9ea]"
            variant="outlined"
            clickable
          />
        ))}
      </div>

      <div className="flex gap-5 overflow-x-auto">
        {cards.map((item, i) => (
          <div
            key={i}
            className="rounded-[2rem] bg-gradient-to-b from-[#fcd5cf] to-[#f9c1b1] overflow-hidden shadow-md min-w-[180px] w-[200px]"
          >
            <div className="w-full h-[130px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-3 pb-3 mt-2 text-xs text-gray-700 space-y-1">
              <div className="flex items-center gap-1">
                <AccessTimeIcon fontSize="inherit" />
                <span>{item.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <GroupIcon fontSize="inherit" />
                <span>{item.people}</span>
              </div>
              <div className="flex items-center justify-end gap-1 text-sm">
                <span>{item.author}</span>
                <PersonIcon fontSize="small" />
              </div>
            </div>

            <div className="bg-[#002b36] text-white px-3 py-2 rounded-b-[2rem] flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
