"use client";
import { useState } from 'react';

interface DropdownProps {
    options: string[];
    onSelect: (selectedOption: string) => void;
    title?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div className="relative inline-block w-44">
            <button
                onClick={handleToggle}
                className="block appearance-none w-full text-gray-600 bg-white border border-gray-300 rounded-full px-5 py-2 h-10 leading-tight focus:outline-none focus:ring-2 focus:ring-[#706ee4] sm:text-sm transition ease-in-out duration-200"
                title={title || "Select an option"} 
            >
                {selectedOption || title || "Select an option"} {/* Placeholder uses title or default */}
                <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pr-3">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-md">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="cursor-pointer py-2 px-4 hover:bg-gray-200 focus:bg-gray-300"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
