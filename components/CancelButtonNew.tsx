import React from 'react';

interface CancelButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CancelButtonNew: React.FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <button 
      className="text-gray-600 bg-gray-200 hover:bg-gray-100 hover:text-gray-500 font-regular py-1.5 px-4 rounded-full" 
      onClick={onClick}
    >
      Cancel
    </button>
  );
};

export default CancelButtonNew;
