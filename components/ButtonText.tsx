import React from 'react';


interface ButtonTextProps {
  text: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({ text }) => {
  return (
    <button
      className="text-white bg-[#312e81ef] hover:bg-[#4e46e5b5] hover:text-white font-regular rounded-full py-2 px-4 h-10 "
    >
      {text}
    </button>
  );
};

export default ButtonText