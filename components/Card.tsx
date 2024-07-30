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
    <div className={` bg-white p-6 mb-8 mt-15 ml-3 rounded-2xl shadow-xl flex items-center  group cursor-pointer hover:text-blue-500 h-13 ${wide ? 'w-96' : 'w-75'}`}
      onClick={onclick}
    >
        <Icon className = "text-3xl mr-8 ml-10 text-gray-600 cursor-pointer group-hover:text-blue-500"/>

        <div>
            <div className="text-lg text-gray-600 font-semibold mb-1 cursor-pointer group-hover:text-blue-500">{title}</div>
       
        
            <p className='text-sm text-gray-500 cursor-pointer group-hover:text-blue-500 '>{description}</p>

        </div>
        
       
    </div>
        
  );
};

export default Card;