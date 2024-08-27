import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';  // Asegúrate de que esto esté importado

const features = [
    { title: "Portfolio", description: "Empower your startup's growth with personalized mentoring and guidance.", image: "/path-to-your-feature-image-1.png" },
    { title: "Dashboard", description: "Manage your progress with a personalized dashboard.", image: "/path-to-your-feature-image-2.png" },
    { title: "Meeting", description: "Schedule and manage your meetings effectively.", image: "/path-to-your-feature-image-3.png" },
    { title: "Network", description: "Expand your network and leverage connections.", image: "/path-to-your-feature-image-4.png" }
];

const FeaturesSection = () => {
    return (
        <Box sx={{ padding: '50px 20px', backgroundColor: '#222', color: '#fff' }}>
            <Typography variant="h4" gutterBottom textAlign="center">
                Key Features
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {features.map((feature, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <Card sx={{ backgroundColor: '#333', color: '#fff' }}>
                            <img src={feature.image} alt={feature.title} style={{ width: '100%' }} />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2">
                                    {feature.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">Explore &gt;</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeaturesSection;
