import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, onClose, message }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-lg font-bold text-gray-800">Notification</DialogTitle>
      <DialogContent className="text-gray-600 text-sm p-4">
        <p>{message}</p>
      </DialogContent>
      <DialogActions className="p-4">
        <Button onClick={onClose} color="primary" className="bg-blue-500 text-white hover:bg-blue-600">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
