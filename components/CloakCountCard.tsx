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
        <div className={`p-6 rounded-2xl border bg-white hover:border-blue-200 flex items-center shadow-lg  justify-between group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:text-blue-500 h-13 ${wide ? 'w-96' : 'w-full'} mx-3`}>
            <div className='flex-grow'>
                <div className="text-3xl sm:text-2xl text-gray-600 font-semibold mb-4">{title}</div>
                
                <div className='flex flex-col space-y-1'>

                    <div className='flex justify-start text-base sm:text-sm text-gray-500'>
                        <span className='w-16'>Small</span> 
                        <span>- {countSmall}</span>
                    </div>

                    <div className='flex justify-start text-base sm:text-sm text-gray-500'>
                        <span className='w-16'>Medium</span> 
                        <span>- {countMedium}</span>
                    </div>

                    <div className='flex justify-start text-base sm:text-sm text-gray-500'>
                        <span className='w-16'>Large</span> 
                        <span>- {countLarge}</span>
                    </div>
                </div>
            </div>

            <div className='text-4xl sm:text-3xl text-gray-600 font-bold mr-8 mt-6 '>
                {total}
            </div>
        </div>
    );
};

export default CloakCountCard;
