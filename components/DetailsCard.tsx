import { on } from 'events';
import React from 'react'


interface DetailsCardProps {
    privilege_id: string;
    title: string;
    description: string;
    wide?: boolean;
    onclick?: () => void;
  
}

const DetailsCard = ({privilege_id, title, description, wide, onclick }:DetailsCardProps) => {
  return (
    <div className={`p-6 mb-8 mt-15 rounded-2xl border bg-white hover:border-blue-100 flex items-center group h-13 ${wide ? 'w-full' : 'w-6/12'}`}
      onClick={onclick}
    >

        <div>
            <div className="text-lg text-gray-600 font-semibold mb-1 cursor-pointer group-hover:text-[#706ee4]">{title}</div>
            <div className="text-sm text-gray-500 font-medium mb-1 cursor-pointer group-hover:text-[#706ee4]">Privilege ID - {privilege_id}</div>
            <p className="text-sm text-gray-500 cursor-pointer group-hover:text-[#706ee4]">Description - {description}</p>
        </div>
        
       
    </div>
        
  );
};

export default DetailsCard;