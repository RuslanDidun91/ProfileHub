// import React from 'react';
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Switch,
//   IconButton,
//   Stack,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { editProfileApi } from '../../utils/editProfileApi';

// const EditProfileDialog = ({ open, handleClose }) => {

//   const internalHandleClose = () => {
//     handleClose();
//   };

//   return (
//     <Dialog open={open} onClose={internalHandleClose}>
//       <DialogTitle>
//         <IconButton aria-label="close" sx={{ position: 'absolute', right: 8, top: 8 }} onClick={handleClose}>
//           <CloseIcon />
//         </IconButton>
//         Edit Profile
//       </DialogTitle>
//       <DialogContent>
//         <Stack spacing={2}>
//           <TextField label="Image Link" fullWidth />
//           <Stack direction="row" spacing={2}>
//             <TextField label="First Name" sx={{ flex: 1 }} />
//             <TextField label="Last Name" sx={{ flex: 1 }} />
//           </Stack>
//           <TextField label="Email" fullWidth />
//           <TextField label="Description" fullWidth />
//           <Stack direction="row" alignItems="center" justifyContent="space-between">
//             <label>Talent is verified</label>
//             <Switch />
//           </Stack>
//         </Stack>
//       </DialogContent>
//       <DialogActions>
//         <Button
//           sx={{ backgroundColor: '#3DACFF', color: 'white' }}
//           onClick={handleClose}>Edit Profile</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default EditProfileDialog;

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
import { editProfileApi } from '../../utils/editProfileApi';

const EditProfileDialog = ({ open, handleClose, users }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (users && users.length > 0) {
      users.forEach((user, index) => {
        // Set the input values for each user
        setFirstName(user.first_name || '');
        setLastName(user.last_name || '');
        setEmail(user.email || '');
        setImageUrl(user.image_url || '');
        setDescription(user.description || '');
        setIsVerified(user.is_verified || false);
      });
    }
  }, [users]);

  const internalHandleClose = () => {
    handleClose();
  };

  const handleEditProfile = () => {
    // Construct the profile object with updated information
    const updatedProfile = {
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
        // Handle success
        console.log('Profile updated successfully!');
        handleClose();
      })
      .catch(error => {
        // Handle error
        console.error('Error updating profile:', error);
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
          <TextField label="Image Link" fullWidth value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
          <Stack direction="row" spacing={2}>
            <TextField label="First Name" sx={{ flex: 1 }} value={firstName} onChange={e => setFirstName(e.target.value)} />
            <TextField label="Last Name" sx={{ flex: 1 }} value={lastName} onChange={e => setLastName(e.target.value)} />
          </Stack>
          <TextField label="Email" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Description" fullWidth value={description} onChange={e => setDescription(e.target.value)} />
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <label>Talent is verified</label>
            <Switch checked={isVerified} onChange={e => setIsVerified(e.target.checked)} />
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
