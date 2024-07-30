// SubmitButton.tsx
"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { sendFile } from '@/actions/bulkRegistration';
import AlertDialog from './AlertDialog'; // Adjust the path as needed

interface SubmitButtonProps {
  text: string;
  file: File | null;
}

const SubmitButtonBulk: React.FC<SubmitButtonProps> = ({ text, file }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleSubmit = async () => {
    if (file) {
      console.log("FILE : " + file);
      setIsUploading(true);

      try {
        const response = await sendFile(file);
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
        className="text-white bg-[#4F46E5] hover:bg-[#adaaf2] hover:text-white font-bold py-1.5 px-4 rounded"
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

export default SubmitButtonBulk;
