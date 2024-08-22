"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="flex w-full">
            <input
                type="text"
                className="border border-gray-300 rounded-l-full py-2 px-3 h-10 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-[#706ee4]"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button
                className="bg-[#706ee4] text-white p-2 h-10 rounded-r-full focus:outline-none focus:ring-2 focus:ring-[#706ee4] flex items-center justify-center"
                onClick={handleSearch}
                aria-label="Search"
            >
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;
