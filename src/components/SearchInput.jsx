import React from 'react';
import { InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchInput = () => {
  return (
    <div className="flex items-center w-96 rounded-xl shadow-sm bg-white px-4 py-2">
      <InputBase
        placeholder="Enter your country’s name"
        fullWidth
        inputProps={{ 'aria-label': 'search countries' }}
        className="text-gray-500"
      />
<Search className="text-pink-500" fontSize="large" />
</div>
  );
};

export default SearchInput;