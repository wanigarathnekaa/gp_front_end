import React from "react";


interface LecturerCardProps {
    ModuleTitle: string;
    ModuleCode: string;
    ModuleDescription: string;    
}

const LecturerCard = ({ ModuleTitle, ModuleCode, ModuleDescription }: LecturerCardProps) => {
    return (
        <div className={`flex-row bg-white p-6 mb-5 mt-2 ml-3 rounded-2xl shadow-xl flex items-center  group cursor-pointer hover:text-blue-500 h-13 transform transition-transform duration-300 hover:scale-105`}>
            <div className="flex flex-col items-start pl-5">
                <h1 className="text-xl text-gray-600 font-semibold items-start justify-center pb-1 hover:text-blue-500 hover:underline">{ModuleCode} - {ModuleTitle}</h1><br/>
                <h1 className="text-lg text-gray-500 font-normal items-start justify-start ">{ModuleDescription}</h1><br/>
            </div>

            
        </div>
    );
};

export default LecturerCard;
