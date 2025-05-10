import React, { useState } from 'react';
import ImageCardSelector from './components/ImageCard';
import CustommButton from './components/CustommButton';

const KitchenSetupPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Setting up your kitchen...
      </h1>

      <h2 className="text-xl text-gray-600 mb-8 ml-8">
        Select your preferences
      </h2>

      <ImageCardSelector onSelectionChange={setSelectedItems} />

      <div className="mt-10 flex justify-center">
        <CustommButton disabled={selectedItems.length !== 3}>
          Continue
        </CustommButton>
      </div>
    </div>
  );
};

export default KitchenSetupPage;
