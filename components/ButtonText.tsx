import React from 'react';

interface ButtonTextProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonText: React.FC<ButtonTextProps> = ({ text, onClick }) => {
  return (
    <button 
      className="text-white bg-blue-600 hover:bg-blue-500 hover:text-white font-regular rounded-full py-2 px-4 h-10" 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonText;
