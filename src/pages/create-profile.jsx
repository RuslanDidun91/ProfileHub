import React, { useState } from 'react';
import { Container, TextField, Button, FormControlLabel, Switch, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(5),
  },
}));

const CreateProfile = () => {
  const classes = useStyles();

  const [imageLink, setImageLink] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [verification, setVerification] = useState(false);

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleVerificationToggle = (event) => {
    setVerification(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <form className={classes.container} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          label="Image Link"
          value={imageLink}
          onChange={handleImageLinkChange}
          fullWidth
        />
        <TextField
          className={classes.textField}
          label="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          fullWidth
        />
        <TextField
          className={classes.textField}
          label="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          fullWidth
        />
        <TextField
          className={classes.textField}
          label="Email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
        />
        <TextField
          className={classes.textField}
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          multiline
          minRows={2}
          fullWidth
        />
        <FormControlLabel
          label="Verification"
          color='primary'
          control={<Switch checked={verification} onChange={handleVerificationToggle} />}
        />
        <Box >
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
          >
            Create Profile
          </Button>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="secondary"
            type="submit"
          >
            go Back
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreateProfile;
