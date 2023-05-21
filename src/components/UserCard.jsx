import { Container } from '@material-ui/core';
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const UserCard = ({ image, name, surname, email, description }) => {
  return (
    <Container>
      <Card sx={{
        maxWidth: "342px",
        minHeight: "120px",
        padding: "30px",
        cursor: "pointer",
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between' }}>
          <CardMedia
            component="img"
            width="64px"
            height="64px"
            image={image}
            alt="card image"
            sx={{ borderRadius: '50%', width: '64px', height: '64px', objectFit: 'cover' }}
          />
          <Box >
            <Typography sx={{display: 'flex', margin: '5px'}}>
              <strong>{name} {surname}</strong>
              <VerifiedIcon color="primary" />
            </Typography>
            <Typography>
              {email}
            </Typography>
          </Box>
          <MoreVertIcon color="action" />
        </Box>
        <Box sx={{ textAlign: 'center'}}>
          {description}
        </Box>
      </Card>
    </Container>
  )
}

export default UserCard;