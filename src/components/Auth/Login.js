import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, CircularProgress, Paper } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/profile');
    }, 1000);
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
              Login
            </Typography>
          </Box>
          <form>
            <Box mb={2}>
              <TextField label="Email" variant="outlined" fullWidth />
            </Box>
            <Box mb={2}>
              <TextField label="Password" type="password" variant="outlined" fullWidth />
            </Box>
            <Box mb={2} position="relative">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
                disabled={loading}
                sx={{ boxShadow: 3 }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
              </Button>
            </Box>
            <Typography textAlign="center">
              Don't have an account? <Link to="/register">Register</Link>
            </Typography>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
