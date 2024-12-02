import React from 'react';


interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      className="text-white bg-blue-600 hover:bg-blue-500 hover:text-white font-regular  py-1.5 px-4 rounded-full cursor-pointer"
    >
      {text}
    </button>
  );
};

export default SubmitButton;