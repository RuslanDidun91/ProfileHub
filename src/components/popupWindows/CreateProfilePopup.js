import { createProfileApi } from '../../utils/createProfileApi';
import { toast } from 'react-toastify';
import { useState } from 'react';
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
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CloseIcon from '@mui/icons-material/Close';
import 'react-toastify/dist/ReactToastify.css';

const CreateProfilePopup = () => {

  const [open, setOpen] = useState(false);
  const [imageLink, setImageLink] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateProfile = async () => {
    //empty field validation
    if (!imageLink || !firstName || !lastName || !email || !description) {
      setError('Please fill in all required fields.');
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      // data for the API request
      const profileData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        isVerified: isVerified,
        imageUrl: imageLink,
        description: description
      };
      const response = await createProfileApi(profileData);
      // Handle the response
      if (response.ok) {
        toast.success('Profile created successfully');
        setImageLink('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setDescription('');
        setIsVerified(false);
        setError('');
        handleClose();
      } else {
        // Error occurred during profile creation
        console.error('Error creating profile:', response.error);
        toast.error('An error occurred while creating the profile. Please try again.');
      }
    } catch (error) {
      // Network error or other exception occurred
      console.error('Error creating profile:', error);
      toast.error('An error occurred while creating the profile. Please try again.');
    }
  };

  return (
    <>
      <Button variant="outlined" sx={{ borderRadius: '10px' }} onClick={handleOpen}>
        <PersonAddAlt1Icon sx={{ padding: '5px' }} />
        Create Profile
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <IconButton
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8 }}
            onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          Create Profile
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              label="Image Link"
              fullWidth
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)} />
            <Stack direction="row" spacing={2}>
              <TextField
                label="First Name"
                sx={{ flex: 1 }}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName} />
              <TextField
                label="Last Name"
                sx={{ flex: 1 }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            </Stack>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <TextField
              label="Description"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)} />
            <Stack direction="row"
              alignItems="center"
              justifyContent="space-between">
              <label>Talent is verified</label>
              <Switch checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)} />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color='primary'
            sx={{ backgroundColor: '#3DACFF', color: 'white' }}
            onClick={handleCreateProfile}>Create Profile</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateProfilePopup;
