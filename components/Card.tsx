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
    <div className={`p-6 mb-8 mt-15 ml-3 rounded-2xl bg-white shadow-md flex items-center  group cursor-pointer transform transition-transform duration-300 hover:scale-105  h-13 ${wide ? 'w-full' : 'w-6/12'}`}
      onClick={onclick}
    >
        <Icon className = "text-3xl mr-8 ml-10 text-[#FDC500] cursor-pointer"/>

        <div>
            <div className="text-lg text-gray-900 font-semibold mb-1 cursor-pointer group-hover:text-blue-600">{title}</div>
       
        
            <p className="text-sm text-gray-500 cursor-pointer">{description}</p>

        </div>
        
       
    </div>
        
  );
};

export default Card;