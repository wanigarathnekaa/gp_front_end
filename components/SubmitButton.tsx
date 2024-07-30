import React from 'react';


interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      className="text-white bg-[#4F46E5] hover:bg-[#3b31f8] hover:text-white font-bold py-1.5 px-4 rounded"
    >
      {text}
    </button>

  );
};

export default SubmitButton;