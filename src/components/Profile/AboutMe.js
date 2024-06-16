import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState('');
  const [draft, setDraft] = useState('');

  const handleSaveDraft = () => {
    setDraft(aboutMe);
    alert('Draft saved!');
  };

  const handleSubmit = () => {
    alert('About Me submitted!');
  };

  return (
    <Box mt={3}>
      <Typography variant="h5">About Me</Typography>
      <TextField
        label="Write about yourself..."
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
      />
      <Box mt={2}>
        <Button variant="outlined" color="primary" onClick={handleSaveDraft} sx={{ marginRight: 2 }}>
          Save as Draft
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      {draft && (
        <Box mt={2}>
          <Typography variant="h6">Draft</Typography>
          <Typography>{draft}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default AboutMe;
