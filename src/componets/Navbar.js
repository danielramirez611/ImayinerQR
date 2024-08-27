import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Asegúrate de que esto esté correcto

const Navbar = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#000' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    DealNudge
                </Typography>
                <Button color="inherit" component={Link} to="#pricing">Pricing</Button>
                <Button color="inherit" component={Link} to="#contact">Contact</Button>
                <Button variant="contained" color="primary" component={Link} to="#book-demo">
                    Book a Demo
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
