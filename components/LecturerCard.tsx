import React from "react";
import { FaThLarge } from "react-icons/fa"; // Icon for modules (grid layout)

interface LecturerCardProps {
    ModuleTitle: string;
    ModuleCode: string;
    ModuleDescription: string;
}

const LecturerCard = ({ ModuleTitle, ModuleCode, ModuleDescription }: LecturerCardProps) => {
    return (
        <div className="flex flex-row bg-white p-6 mb-5 mt-2 ml-3 rounded-2xl shadow-xl items-center group cursor-pointer">
            {/* Icon Section */}
            <div className="text-yellow-500 flex-shrink-0">
                <FaThLarge size={30} className="group-hover:text-yellow-600 transition-colors duration-300" />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-start pl-10">
                <h1 className="text-xl text-gray-600 font-semibold pb-1 group-hover:text-blue-500 transition-colors duration-300">
                    {ModuleCode} - {ModuleTitle}
                </h1>
                <p className="text-lg text-gray-500 font-normal">
                    {ModuleDescription}
                </p>
            </div>

            {/* Button Section */}
            {/* <div className="ml-auto">
                <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition-all duration-300"
                >
                    Details
                </button>
            </div> */}
        </div>
    );
};

export default LecturerCard;
