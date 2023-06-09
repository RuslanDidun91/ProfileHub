import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  CardMedia,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import DeleteProfilePopup from './popupWindows/DeleteProfilePopup';
import EditProfilePopup from './popupWindows/EditProfilePopup';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const UserCard = ({ profileId, image, name, surname, email, description, onDelete, users, isVerified, setUsers }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditProfileDialog, setOpenEditProfileDialog] = useState(false);
  const [openDeleteProfileDialog, setOpenDeleteProfileDialog] = useState(false);
  const [currentProfileId, setCurrentProfileId] = useState(profileId);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    const clickedUser = users.find((user) => user.id === profileId);
    setCurrentProfileId(clickedUser)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditProfile = () => {
    handleClose();
    setOpenEditProfileDialog(true);
  };

  const handleDeleteProfile = () => {
    handleClose();
    setOpenDeleteProfileDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenEditProfileDialog(false);
    setOpenDeleteProfileDialog(false);
  };

  const handleDelete = () => {
    handleCloseDialog();
  };

  return (
    <Container>
      <Card
        sx={{
          minWidth: '262px',
          minHeight: '150px',
          padding: '10px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            justifyContent: 'space-between',
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt="user avatar"
            sx={{
              borderRadius: '50%',
              width: '64px',
              height: '64px',
              objectFit: 'cover',
            }}
          />
          <Box>
            <Typography sx={{ display: 'flex', margin: '7px' }}>
              <strong>{name} {surname} </strong>
              {isVerified && <VerifiedIcon color="primary" />}
            </Typography>
            <Typography sx={{
              width: '150px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {email}
            </Typography>
          </Box>
          <MoreVertIcon color="action" onClick={handleClick} />
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >{description}</Box>
      </Card>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleEditProfile}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit Profile
        </MenuItem>
        <MenuItem onClick={handleDeleteProfile}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Remove Profile
        </MenuItem>
      </Menu>
      <EditProfilePopup
        open={openEditProfileDialog}
        handleClose={handleCloseDialog}
        users={users}
        setUsers={setUsers}
        profileId={profileId}
        currentProfileId={currentProfileId}
      />
      <DeleteProfilePopup
        profileId={profileId}
        open={openDeleteProfileDialog}
        handleClose={handleCloseDialog}
        handleDelete={handleDelete}
        onDelete={onDelete}
      />
    </Container>
  );
};

export default UserCard;
