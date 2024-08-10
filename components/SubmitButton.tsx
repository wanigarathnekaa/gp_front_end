import React from 'react';


interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      className="text-white bg-[#312e81ef] hover:bg-[#4e46e5b5] hover:text-white font-bold py-1.5 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default SubmitButton;