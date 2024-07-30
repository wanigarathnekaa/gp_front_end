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
        <div className={`bg-white p-6 mb-8 mt-15 ml-3 rounded-2xl shadow-xl flex flex-row items-center justify-between group cursor-pointer h-13 ${wide ? 'w-96' : 'w-'}`}>
            <div>
                <div className="text-xl text-gray-600 font-semibold mb-1 cursor-pointer">{title}</div>
                
                <p className='text-sm text-gray-500 cursor-pointer '>Small - {countSmall}</p>
                <p className='text-sm text-gray-500 cursor-pointer '>Medium - {countMedium}</p>
                <p className='text-sm text-gray-500 cursor-pointer '>Large - {countLarge}</p>
                
            </div>

            <div className='text-4xl text-gray-700 font-bold mr-10 group-hover:text-blue-500 group-hover:text-5xl duration-300'>
                {total}
            </div>
        </div>
    );
};

export default CloakCountCard;
