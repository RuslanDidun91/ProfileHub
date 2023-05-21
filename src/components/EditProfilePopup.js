import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Switch,
  IconButton,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EditProfileDialog = ({ open, handleClose }) => {
  const internalHandleClose = () => {
    handleClose();
  };

  return (
    <Dialog open={open} onClose={internalHandleClose}>
      <DialogTitle>
        <IconButton aria-label="close" sx={{ position: 'absolute', right: 8, top: 8 }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        Edit Profile
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <TextField label="Image Link" fullWidth />
          <Stack direction="row" spacing={2}>
            <TextField label="First Name" sx={{ flex: 1 }} />
            <TextField label="Last Name" sx={{ flex: 1 }} />
          </Stack>
          <TextField label="Email" fullWidth />
          <TextField label="Description" fullWidth />
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <label>Talent is verified</label>
            <Switch />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ backgroundColor: '#3DACFF', color: 'white' }}
          onClick={handleClose}>Edit Profile</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileDialog;

