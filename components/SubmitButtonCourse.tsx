// SubmitButton.tsx
"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import AlertDialog from './AlertDialog'; // Adjust the path as needed
import { sendCourseFile } from '@/actions/bulkCourse';

interface SubmitButtonProps {
  text: string;
  file: File | null;
}

const SubmitButtonCourse: React.FC<SubmitButtonProps> = ({ text, file }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleSubmit = async () => {
    if (file) {
      console.log("FILE : " + file);
      setIsUploading(true);

      try {
        const response = await sendCourseFile(file);
        setDialogMessage(response);
      } catch (error) {
        console.error('Error uploading file:', error);
        setDialogMessage('Failed to upload file');
      } finally {
        setIsUploading(false);
        setDialogOpen(true);
      }
    } else {
      setDialogMessage("Please select a file first");
      setDialogOpen(true);
    }
  };

  return (
    <div>
      <Button
        className="bg-[#EEF2FF] text-[#706ee4] hover:bg-gray-200 hover:text-gray-600 font-bold py-1.5 px-4 rounded transform transition-transform duration-300 hover:scale-105"
        onClick={handleSubmit}
        disabled={isUploading}
      >
        {isUploading ? 'Uploading...' : text}
      </Button>
      <AlertDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        message={dialogMessage}
      />
    </div>
  );
};

export default SubmitButtonCourse;
