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
import Testimonials from '@/components/Testimonials';
import Highlights from '@/components/Highlights';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

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
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js App Router example in TypeScript
        </Typography>
        <Link href="/about" color="secondary" component={NextLink}>
          Go to the about page
        </Link>

        <AppAppBar />
        <Hero />
        <div>
          <LogoCollection />
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </div>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
//import container 
//import box
//import hero
//import LogoCollection from '@/components/LogoCollection';
//import Features from '@/components/Features';
//import Divider
//
//export default function Home
// return (
//   <Container maxWidth="lg">
//   <Box
//     sx={{
//
//
//       Divider
//       Testimonials
//       Divider
//       Highlights
//       Divider
//       Pricing
//       Divider
//       FAQ
//       Divider
//       Footer
//   </  div>
// </Box>
//</Container>