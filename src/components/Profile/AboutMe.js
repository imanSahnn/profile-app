import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Collapse, Snackbar, Alert, CircularProgress } from '@mui/material';
import { Save, Send } from '@mui/icons-material';

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState('');
  const [draft, setDraft] = useState('');
  const [showDraft, setShowDraft] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSaveDraft = () => {
    setDraft(aboutMe);
    setShowDraft(true);
    setSnackbarMessage('Draft saved!');
    setOpenSnackbar(true);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSnackbarMessage('About Me submitted!');
      setOpenSnackbar(true);
    }, 2000); // Simulate a network request
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box mt={3}>
      <Typography variant="h5" mb={2}>
        About Me
      </Typography>
      <TextField
        label="Write about yourself..."
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSaveDraft}
          startIcon={<Save />}
          sx={{ borderRadius: 2 }}
        >
          Save as Draft
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
          sx={{ borderRadius: 2 }}
          disabled={loading}
        >
          Submit
        </Button>
      </Box>
      <Collapse in={showDraft} sx={{ mt: 2 }}>
        <Box mt={2} p={2} border="1px solid #ccc" borderRadius={2} sx={{ backgroundColor: '#f9f9f9' }}>
          <Typography variant="h6">Draft</Typography>
          <Typography>{draft}</Typography>
        </Box>
      </Collapse>
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AboutMe;
