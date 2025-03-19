'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  'https://i.ibb.co/cXNYMCnk/output-onlinetools-1.png',
  'https://i.ibb.co/Zk1vzZn/output-onlinepngtools-2.png'
];

const darkLogos = [
  'https://i.ibb.co/0RQTRmRx/output-onlinetools.png',
  'https://i.ibb.co/p67BVQgb/output-onlinepngtools-1.png'
];

const logoStyle = {
  width: '150px',
  height: '150px',
  margin: '0 32px',
  opacity: 0.8,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Certifications
      </Typography>
      <Grid container sx={{ justifyContent: 'center', mt: 0.5, opacity: 0.8 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
