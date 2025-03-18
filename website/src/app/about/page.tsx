import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';
import AppAppBar from '@/components/AppAppBar';
import Hero from '@/components/Hero';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 0,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Hero />

        <AppAppBar />
        
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>

        <Copyright />
      </Box>
    </Container>
  );
}
