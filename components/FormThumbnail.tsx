import { CgMoreVerticalAlt } from "react-icons/cg"; 
import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FaChevronLeft, FaSave, FaStar } from 'react-icons/fa';

interface FormThumbnailProps {
  title: string;
  date: string;
}

const FormThumbnail = ({ title ,date }: FormThumbnailProps) => {
  return (
    <div className="bg-white duration-300 flex flex-col max-w-xs rounded-2xl shadow-lg space-y-4 transform w-full hover:translate-y-2">
      <div className="flex flex-row items-center justify-between pt-4 px-4">
        <div className="flex flex-row items-center space-x-4">
          <div className="inline-flex items-center text-gray-600 text-lg">
            <button className="pr-2" aria-label="More options">
              <CgMoreVerticalAlt />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-blue-200 items-center">
        <Image src="/NextImage.png" alt="form-thumbnail" height={200} width={200} />
      </div>
      <div className="flex flex-row items-center justify-between "> 
        <div className="flex flex-col px-4 space-y-1 justify-between pb-4">
          <div className="flex flex-col -space-y-0.5">
            <NextLink href="/">
              <span className="text-gray-800 font-medium tracking-wide w-max px-2">{title}</span>
            </NextLink>
            <p className="text-gray-500 text-xs px-2">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormThumbnail;
