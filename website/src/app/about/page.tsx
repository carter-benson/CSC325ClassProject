import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppAppBar from '@/components/AppAppBar';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';

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

        <FAQ />
      </Box>
    </Container>
  );
}
