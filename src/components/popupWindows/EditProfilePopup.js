import React, { useState, useEffect } from 'react';
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
import { toast } from 'react-toastify';
import { editProfileApi } from '../../utils/editProfileApi';
import { getUsers } from '../../utils/fetchFromApi';

const EditProfileDialog = ({ open, handleClose, users, currentProfileId, setUsers }) => {

  // State variable for tracking update status
  const [updateStatus, setUpdateStatus] = useState(null);

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: '',
    description: '',
    isVerified: false,
  });

  useEffect(() => {
    const currentProfile = users.find((user) => user.id === currentProfileId);
    if (currentProfile) {
      setInputs({
        firstName: currentProfile.first_name,
        lastName: currentProfile.last_name,
        email: currentProfile.email,
        imageUrl: currentProfile.image_url,
        description: currentProfile.description,
        isVerified: currentProfile.is_verified,
      });
    }
  }, [currentProfileId, users]);

  //make page re-render after profile edited
  useEffect(() => {
    if (updateStatus === 'success') {
      getUsers().then((users) => {
        setUsers(users);
      });
    }
  }, [updateStatus]);

  const { firstName, lastName, email, imageUrl, description, isVerified } = inputs;

  const internalHandleClose = () => {
    handleClose();
  };

  const handleInputChange = (name, value) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const idValue = currentProfileId.id;

  const handleEditProfile = () => {
    // Construct the profile object with updated information
    const updatedProfile = {
      id: idValue,
      firstName,
      lastName,
      email,
      imageUrl,
      description,
      isVerified,
    };
    // Call the editProfileApi function with the updated profile
    editProfileApi(updatedProfile)
      .then(() => {
        console.log('Profile updated successfully!');
        toast.success('Profile edited successfully');
        setUpdateStatus('success');
        handleClose();
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        toast.error('Error occured, check your logs');
      });
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
          <TextField
            label="Image Link"
            fullWidth
            value={imageUrl}
            onChange={e => handleInputChange('imageUrl', e.target.value)}
          />
          <Stack direction="row" spacing={2}>
            <TextField
              label="First Name"
              sx={{ flex: 1 }}
              value={firstName}
              onChange={e => handleInputChange('firstName', e.target.value)}
            />
            <TextField
              label="Last Name"
              sx={{ flex: 1 }}
              value={lastName}
              onChange={e => handleInputChange('lastName', e.target.value)}
            />
          </Stack>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={e => handleInputChange('email', e.target.value)}
          />
          <TextField
            label="Description"
            fullWidth
            value={description}
            onChange={e => handleInputChange('description', e.target.value)}
          />
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <label>Talent is verified</label>
            <Switch
              checked={isVerified}
              onChange={e => handleInputChange('isVerified', e.target.checked)}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ backgroundColor: '#3DACFF', color: 'white' }}
          onClick={handleEditProfile}
        >
          Edit Profile
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileDialog;
