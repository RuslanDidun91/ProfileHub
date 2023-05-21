import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Switch,
  IconButton,
  Stack
} from '@mui/material';
import { useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CloseIcon from '@mui/icons-material/Close';

const CreateProfilePopup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" sx={{ borderRadius: '10px' }} onClick={handleOpen}>
        <PersonAddAlt1Icon sx={{ padding: '5px' }} />
        Create Profile
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <IconButton aria-label="close" sx={{ position: 'absolute', right: 8, top: 8 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          Create Profile
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
          <Button color='primary' onClick={handleClose}>Create Profile</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateProfilePopup;
