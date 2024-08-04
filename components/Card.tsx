import { on } from 'events';
import React from 'react'
import { IconType } from 'react-icons';



interface CardProps {
  title: string;
  description: string;
  icon:IconType;
  wide?: boolean;
  onclick?: () => void;
  
}

const Card = ({title, description,icon :Icon, wide, onclick }:CardProps) => {
  return (
    <div className={`p-6 mb-8 mt-15 ml-3 rounded-2xl border bg-white hover:border-blue-100 flex items-center  group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:text-blue-500 h-13 ${wide ? 'w-96' : 'w-75'}`}
      onClick={onclick}
      // bg-[#EEF2FF]
    >
        <Icon className = "text-3xl mr-8 ml-10 text-gray-600 cursor-pointer group-hover:text-[#706ee4]"/>

        <div>
            <div className="text-lg text-gray-600 font-semibold mb-1 cursor-pointer group-hover:text-[#706ee4]">{title}</div>
       
        
            <p className="text-sm text-gray-500 cursor-pointer group-hover:text-[#706ee4]">{description}</p>

        </div>
        
       
    </div>
        
  );
};

export default Card;