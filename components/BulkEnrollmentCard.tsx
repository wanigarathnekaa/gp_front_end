"use client";
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileUpload } from 'react-icons/fa';
import { SubmitButton, CancelButton, Button } from '@/components';

const BulkEnrollCard = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileContent = reader.result;
        console.log(fileContent);
        
      };

      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: { 
      'text/csv': ['.csv'] 
    } 
  });

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-2xl  p-12 bg-white rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold text-center mb-4">Enroll Students as a bulk</h2>
        <div
          {...getRootProps()}
          className={` h-96 mt-8 mb-8  border-4 border-dashed rounded-lg p-8 text-center bg-gray-200 flex flex-col justify-center items-center  ${
            isDragActive ? 'border-blue-600' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          <FaFileUpload className="mx-auto  justify-center  text-6xl text-gray-400" />
          {isDragActive ? (
            <p className="mt-4 text-blue-600">Drop the files here...</p>
          ) : (
            <p className="mt-4 text-gray-600">Drag & drop some files here, or click to select files</p>
          )}
        </div>
        <div className='flex justify-end space-x-4'>
          <Button/>
          <SubmitButton text="Upload" />
        </div>

      </div>
    </div>
  );
};

export default BulkEnrollCard;