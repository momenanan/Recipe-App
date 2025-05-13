import React, { useState } from 'react';
import SelectCountry from './Pages/SelectCountry';
import Logo from './components/Logo';
import HeroImage from './components/HeroImage';
import Title from './components/Title';
import Stepper from './components/Stepper';
import {CustomButton} from './components/CustommButton';
import { Radio } from '@mui/material';
import RadioBox from './components/RadioBox';
const images = [
  './3.jpg',
  './1.jpg',
  './2.jpg'
];

const totalSteps = images.length;

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      console.log("Start Cooking!");
    }
  };

  const buttonText = currentStep < totalSteps - 1 ? 'Continue' : 'Start Cooking';

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <HeroImage src={images[currentStep]} />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between">
        <div className="flex justify-center pt-10">
          <Logo />
        </div>
        <div className="flex flex-col items-center pb-10 px-6">
          <Title />
          <Stepper currentStep={currentStep} totalSteps={totalSteps} />
          <CustomButton onClick={handleNextStep}>
            {buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
}