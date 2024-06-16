import React, { useState } from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import AboutMe from './AboutMe';

const Profile = () => {
  const [user, setUser] = useState({ username: 'JohnDoe', email: 'johndoe@example.com' });

  return (
    <Container maxWidth="sm">
      <Box mt={5} p={3} component={Paper} elevation={3} style={{ backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
        </Typography>
        <Box mb={2}>
          <Typography variant="h6">Username: {user.username}</Typography>
          <Typography variant="h6">Email: {user.email}</Typography>
        </Box>
        <Box mb={2} p={2} component={Paper} elevation={1} style={{ backgroundColor: '#fff' }}>
          <AboutMe />
        </Box>
        <Button variant="contained" color="secondary" onClick={() => window.location.href = '/'}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
