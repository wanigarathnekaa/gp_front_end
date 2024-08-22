"use client";
import { useState } from 'react';

interface DropdownProps {
    options: string[];
    onSelect: (selectedOption: string) => void;
}

const Dropdown = ({ options, onSelect }: DropdownProps) => {
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
        <div className="relative inline-block w-64">
            <button
                onClick={handleToggle}
                className="block appearance-none w-full bg-white border border-gray-300 rounded-2xl px-4 py-2 pr-10 h-10 shadow-md leading-tight focus:outline-none focus:shadow-outline hover:border-gray-400 sm:text-sm transition ease-in-out duration-200"
                title="Select an option"
            >
                <span className={selectedOption ? 'text-gray-500 text-sm font-bold' : 'text-gray-500 text-sm '}>
                    {selectedOption || "Select an option"}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 ">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-gray-200 border border-gray-400 rounded-2xl shadow-md">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className="cursor-pointer rounded-2xl py-2 px-4 hover:bg-gray-400 focus:bg-gray-300 focus:rounded-xl"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;
