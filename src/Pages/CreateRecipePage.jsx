import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GroupIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import AddImage from '../components/AddImage';
import { FormInput } from '../components/FormInput';
import CounterControl from '../components/CounterControl';
import FooterNav from '../components/FooterNav';

const CreateRecipePage = () => {
  return (
    <div className="bg-[#fbf7f2] min-h-screen flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pt-6 pb-32">
        {/* Top Bar */}
        <div className="flex items-center gap-3 mb-4">
          <ArrowBackIosNewIcon className="text-[#e85455]" />
          <h1 className="text-lg font-bold text-[#e85455]">Create Recipe</h1>
        </div>

        {/* Add Image */}
        <AddImage />

        {/* Dish Name */}
        <div className="mt-4">
          <FormInput placeholder="Name your Dish..." />
        </div>

        {/* Serves */}
        <div className="flex items-center gap-2 mt-5">
          <GroupIcon className="text-[#e85455]" />
          <span className="font-bold text-base text-[#2e2e2e]">Serves</span>
          <div className="ml-auto">
            <CounterControl />
          </div>
        </div>

        {/* Cook Time */}
        <div className="flex items-center gap-2 mt-5">
          <AccessTimeIcon className="text-[#e85455]" />
          <span className="font-bold text-base text-[#2e2e2e]">Cook Time</span>
          <div className="ml-auto w-[100px]">
            <FormInput placeholder="in mins" className="py-1 text-sm" />
          </div>
        </div>

        {/* Ingredients */}
        <div className="mt-6">
          <h2 className="text-[#e85455] font-bold mb-2 text-base">Ingredients</h2>

          <div className="grid grid-cols-2 gap-3">
            <FormInput placeholder="Item" className="text-sm py-2" />
            <FormInput placeholder="Quantity" className="text-sm py-2" />
            <FormInput placeholder="Item" className="text-sm py-2" />
            <FormInput placeholder="Quantity" className="text-sm py-2" />
          </div>

          <button className="text-[#e85455] mt-2 underline text-sm">
            + Add more Ingredients
          </button>
        </div>

        {/* Procedure */}
        <div className="mt-6 mb-10">
          <h2 className="text-[#e85455] font-bold mb-2 text-base">Procedure</h2>
          <FormInput placeholder="Write steps..." className="text-sm py-2" />
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0">
        <FooterNav />
      </div>
    </div>
  );
};

export default CreateRecipePage;
