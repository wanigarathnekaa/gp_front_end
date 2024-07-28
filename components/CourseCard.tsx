"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CourseCardProps {
  title: string;
  link: string;
  image: string; 
}

const CourseCard = ({ title, link, image }: CourseCardProps) => (
  <div className="bg-white shadow-lg rounded-xl  p-4 hover:shadow-xl transition-shadow duration-300">
    <Link href={link} legacyBehavior>
      <a>
        <Image src={image} alt={title} width={400} height={200} className="w-full h-32 object-cover rounded-t-lg" />
        <h2 className="text-xl text-gray-700 font-bold mt-4 mb-2">{title}</h2>
      </a>
    </Link>
  </div>
);

export default CourseCard;
