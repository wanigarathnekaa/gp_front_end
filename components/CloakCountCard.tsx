import React from 'react';

interface CardProps {
    title: string;
    countSmall: number;
    countMedium: number;
    countLarge: number;
    description: string;
    wide?: boolean;
}

const CloakCountCard = ({ title, countSmall, countMedium, countLarge, description, wide }: CardProps) => {
    const total = countSmall + countMedium + countLarge;

    return (
        <div className={`bg-white p-6 mb-8 mt-15 ml-3 rounded-2xl shadow-xl flex flex-row items-center justify-between group cursor-pointer hover:text-blue-500 h-13 ${wide ? 'w-80' : 'w-75'}`}>
            <div>
                <div className="text-xl text-gray-600 font-semibold mb-1 cursor-pointer group-hover:text-blue-500">{title}</div>
                
                <p className='text-sm text-gray-500 cursor-pointer group-hover:text-blue-500'>Small - {countSmall}</p>
                <p className='text-sm text-gray-500 cursor-pointer group-hover:text-blue-500'>Medium - {countMedium}</p>
                <p className='text-sm text-gray-500 cursor-pointer group-hover:text-blue-500'>Large - {countLarge}</p>
                
            </div>

            <div className='text-4xl text-gray-700 font-bold mr-10'>
                {total}
            </div>
        </div>
    );
};

export default CloakCountCard;
