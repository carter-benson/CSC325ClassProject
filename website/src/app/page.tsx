'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
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
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Hero />
        
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Carter Benson - Home
        </Typography>
        
        {/* About page navigation button */}
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/about">
            Go to the About Page
          </Button>
        </Box>

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