'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Copyright from '@/components/Copyright';

import Divider from '@mui/material/Divider';
import LogoCollection from '@/components/LogoCollection';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import AppAppBar from '@/components/AppAppBar';
import Highlights from '@/components/Highlights';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Button from '@mui/material/Button';

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
            Currently studying computer science at Mercer University, Macon GA.
        </Typography>

        <AppAppBar />
        
        <div>
          <LogoCollection />
          <Features />
          <Divider />
          <Highlights />
          <Divider />
          <FAQ />
        </div>

        <Copyright />
      </Box>
    </Container>
  );
}