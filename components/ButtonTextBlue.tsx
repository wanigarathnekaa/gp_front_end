import React from 'react';


interface ButtonTextProps {
  text: string;
}

const ButtonText: React.FC<ButtonTextProps> = ({ text }) => {
  return (
    <button className="text-white bg-blue-600 hover:bg-blue-500 hover:text-white font-regular rounded py-2 px-4 h-10 ">
      {text}
    </button>
  );
};

export default ButtonText