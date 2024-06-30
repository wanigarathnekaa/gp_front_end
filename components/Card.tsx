import React from 'react'
import { IconType } from 'react-icons';



interface CardProps {
  title: string;
  description: string;
  icon:IconType;
  
}

const Card = ({title, description,icon :Icon, }:CardProps) => {
  return (
    <div className=' bg-white p-6 mb-8 mt-15 rounded-2xl shadow-xl flex items-center   h-13 w-75'>
        <Icon className = "text-3xl mr-8 ml-10 text-gray-600"/>

        <div>
            <div className="text-lg text-gray-600 font-semibold mb-1">{title}</div>
       
        
            <p className='text-sm text-gray-500 '>{description}</p>

        </div>
        
       
    </div>
        
  );
};

export default Card;