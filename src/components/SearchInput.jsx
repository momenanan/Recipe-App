import React from 'react';
import { InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchInput = ({ placeholderText = "Search..." }) => {
  return (
    <div className="flex items-center w-full sm:w-96 rounded-xl shadow-sm bg-white px-4 py-2">
      <InputBase
        placeholder={placeholderText}
        fullWidth
        inputProps={{ 'aria-label': 'search input' }}
        className="text-gray-500"
      />
      <Search className="text-pink-500" fontSize="large" />
    </div>
  );
};

export default SearchInput;
