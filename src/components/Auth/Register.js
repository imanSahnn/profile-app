import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

const Register = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('/bg1.jpg')`, // Correct path to the image in the public directory
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
          <Box mt={3} mb={2} textAlign="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Register
            </Typography>
          </Box>
          <form>
            <Box mb={2}>
              <TextField label="Username" variant="outlined" fullWidth />
            </Box>
            <Box mb={2}>
              <TextField label="Email" variant="outlined" fullWidth />
            </Box>
            <Box mb={2}>
              <TextField label="Password" type="password" variant="outlined" fullWidth />
            </Box>
            <Box mb={2}>
              <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                Register
              </Button>
            </Box>
            <Typography textAlign="center">
              Already have an account? <Link to="/">Login</Link>
            </Typography>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
