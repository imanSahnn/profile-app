import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Avatar, IconButton } from '@mui/material';
import { Edit, Logout } from '@mui/icons-material';
import AboutMe from './AboutMe';

const Profile = () => {
  const [user] = useState({ username: 'JohnDoe', email: 'johndoe@example.com' });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F0F4F8', // Light pastel blue background
        padding: 2,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Container maxWidth="md" sx={{ flex: 1 }}>
        <Box
          p={4}
          component={Paper}
          elevation={3}
          sx={{
            backgroundColor: '#FFFBF0', // Soft pastel yellow background
            borderRadius: 3,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box display="flex" justifyContent="center" mb={3}>
            <Avatar sx={{ width: 100, height: 100, bgcolor: '#F7A1A1' }}>JD</Avatar> {/* Soft pastel pink background */}
          </Box>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Profile
          </Typography>
          <Box mb={2} textAlign="center">
            <Typography variant="h6">Username: {user.username}</Typography>
            <Typography variant="h6">Email: {user.email}</Typography>
            <IconButton color="primary">
              <Edit />
            </IconButton>
          </Box>
          <Box mb={2} p={2} component={Paper} elevation={1} sx={{ backgroundColor: '#FFFFFF', borderRadius: 2 }}>
            <AboutMe />
          </Box>
          <Box display="flex" justifyContent="center">
            <IconButton
              color="secondary"
              sx={{ borderRadius: 2 }}
              onClick={() => (window.location.href = '/')}
            >
              <Logout fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{
          width: '100%',
          padding: 2,
          backgroundColor: '#FFFBF0', // Soft pastel yellow background
          textAlign: 'center',
          boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2024 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
