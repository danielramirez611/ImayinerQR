import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const HeroSection = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: '100px 20px', backgroundColor: '#111', color: '#fff' }}>
            <Container>
                <Typography variant="h2" gutterBottom>
                    Smarter Investments Through Data-Driven Precision
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Make most of your deal flow management
                </Typography>
                <img src="/path-to-your-hero-graphic.png" alt="Hero Graphic" style={{ maxWidth: '100%' }} />
            </Container>
        </Box>
    );
};

export default HeroSection;
