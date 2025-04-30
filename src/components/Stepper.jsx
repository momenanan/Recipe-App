import React from 'react';
import PropTypes from 'prop-types';

export default function Stepper({ currentStep, totalSteps }) {
  return (
    <div className="flex space-x-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-8 h-2 rounded-full transition-colors duration-300 ${
            index === currentStep
              ? 'bg-pink-400'
              : 'bg-white bg-opacity-30'
          }`}
        ></div>
      ))}
    </div>
  );
}

Stepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};
