import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#000', padding: '20px', color: '#fff', textAlign: 'center' }}>
            <Container>
                <Typography variant="body2">
                    © 2024 DealNudge. All Rights Reserved.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' }}>
                    <a href="#facebook" style={{ color: '#fff', textDecoration: 'none' }}>Facebook</a>
                    <a href="#twitter" style={{ color: '#fff', textDecoration: 'none' }}>Twitter</a>
                    <a href="#linkedin" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn</a>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
