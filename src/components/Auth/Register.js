import React from 'react';
import { Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Register = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
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
            <Button variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Box>
          <Typography>
            Already have an account? <Link to="/">Login</Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
