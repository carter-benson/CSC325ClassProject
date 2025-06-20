'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LogoCollection from '@/components/LogoCollection';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import AppAppBar from '@/components/AppAppBar';
import Highlights from '@/components/Highlights';

export default function Home() {
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
        
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Carter Benson
        </Typography>

        <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
            >
            Currently studying computer science at Mercer University, located in Macon, Georgia.
        </Typography>

        <AppAppBar />
        
        <div>
          <LogoCollection />
          <Features />
          <Divider />
          <Highlights />
          <Divider />
        </div>
      </Box>
    </Container>
  );
}