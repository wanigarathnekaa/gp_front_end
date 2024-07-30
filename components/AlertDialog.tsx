import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { CiWarning } from "react-icons/ci";

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, onClose, message }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: "p-4 rounded-2xl w-full max-w-lg" }}
    >
      <div className="flex flex-col items-center">
        {message === "Data imported successfully!" ? (
          <CiWarning className="text-6xl text-green-500 mb-1 mt-4" />
        ) : (
          <CiWarning className="text-6xl text-red-500 mb-1 mt-4" />
        )}
        {/* <DialogTitle className="text-2xl font-bold text-gray-800">Notification</DialogTitle> */}
      </div>
      <DialogContent className="flex flex-col items-center text-lg text-black-800 p-2">
        <p>{message}</p>
      </DialogContent>
      <DialogActions className="p-4">
        <Button
          onClick={onClose}
          className="text-blue px-4 py-2 rounded-md"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
