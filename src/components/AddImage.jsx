import React from 'react';

const AddImage = () => {
  return (
    <div className="w-full max-w-[400px] h-[200px] bg-gray-300 rounded-xl border border-red-300 flex flex-col items-center justify-center relative mx-auto">
      <div className="text-5xl text-gray-700">+</div>
      <p className="text-sm text-gray-600">Add Image</p>
      <div className="w-8 h-8 bg-green-600 rounded-full absolute bottom-2 left-2" />
    </div>
  );
};

export default AddImage;
