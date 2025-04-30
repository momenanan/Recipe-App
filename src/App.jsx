import React, { useState } from 'react'; // Import useState
import Logo from './components/Logo';
import HeroImage from './components/HeroImage';
import Title from './components/Title';
import Stepper from './components/Stepper';
import {CustomButton} from './components/CustommButton'; // Assuming CustomButton is correctly exported

const images = [
  './3.jpg', // Step 0 image
  './1.jpg',                                   // Step 1 image (REPLACE PATH)
  './2.jpg'                                    // Step 2 image (REPLACE PATH)
];

const totalSteps = images.length;

export default function App() {
  // State to track the current step (0, 1, or 2)
  const [currentStep, setCurrentStep] = useState(0);

  // Function to handle button click
  const handleNextStep = () => {
    // If not on the last step, go to the next step
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      // Optional: Add logic for when "Start Cooking" is clicked
      console.log("Start Cooking!");
      // Maybe navigate or perform another action
      // For now, it just logs to the console and doesn't change the step further
    }
  };

  // Determine button text based on the current step
  const buttonText = currentStep < totalSteps - 1 ? 'Continue' : 'Start Cooking';

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Pass the current image source to HeroImage */}
      <HeroImage src={images[currentStep]} />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between">
        <div className="flex justify-center pt-10">
          <Logo />
        </div>
        <div className="flex flex-col items-center pb-10 px-6">
          <Title />
          {/* Pass currentStep and totalSteps to Stepper */}
          <Stepper currentStep={currentStep} totalSteps={totalSteps} />
          {/* Attach onClick handler and set dynamic button text */}
          <CustomButton onClick={handleNextStep}>
            {buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
}