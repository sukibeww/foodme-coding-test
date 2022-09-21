import { Box, Typography } from '@mui/material';
import React from 'react';
import Carousel from '../Carousel/Carousel';
import './HeroSection.scss';

const HeroSection = () => {
    return(
        <Box id="hero-section-wrapper">
            <Typography
                id="sub-header"
                variant="h4">
                Find great restaurant &#38; food options
            </Typography>
            <Typography
                id="main-header"
                variant="h3">
                no matter your dietary requirements
            </Typography>
            <Carousel />
        </Box>
    );
};

export default HeroSection;
