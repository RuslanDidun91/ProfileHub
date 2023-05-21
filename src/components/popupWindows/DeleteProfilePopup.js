import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { deleteProfileApi } from '../../utils/deleteProfileApi';


const DeleteProfilePopup = ({ open, handleClose, handleDelete, profileId, onDelete }) => {

  const handleDeleteProfile = async () => {
    try {
      await deleteProfileApi(profileId);
      // Call the handleDelete function provided by the parent component
      handleDelete();
      onDelete(profileId);
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}
      sx={{ width: '400px', margin: 'auto' }}>
      <IconButton aria-label="close"
        sx={{ position: 'absolute', right: 8, top: 8 }}
        onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      <DialogTitle>Remove profile</DialogTitle>
      <DialogContent>
        <hr />
        <br />
        <Typography>
          Removed profile will be deleted permanently and won't be available anymore.
        </Typography>
        <br />
        <hr />
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ backgroundColor: '#EEEEEE', color: 'black', width: '168px' }}
          onClick={handleClose} 
          color="primary">
          Cancel
        </Button>
        <Button
          sx={{ backgroundColor: '#CC1016', color: 'white', width: '168px' }}
          onClick={handleDeleteProfile} 
          color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProfilePopup;
