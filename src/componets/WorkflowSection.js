import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const WorkflowSection = () => {
    return (
        <Container sx={{ padding: '50px 20px', backgroundColor: '#111', color: '#fff' }}>
            <Typography variant="h4" gutterBottom textAlign="center">
                Streamlined Workflows
            </Typography>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="body1">
                        Intelligent Discovery, Thoughtful Evaluation, Mentorship Synergy, and Effortless Management.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="/path-to-your-workflow-image.png" alt="Workflow Image" style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default WorkflowSection;
