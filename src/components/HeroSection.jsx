import { Box, Typography } from '@mui/material';
import React from 'react'
import Carousel from './Carousel';
import './HeroSection.scss';

const HeroSection = () => {
    return(
        <Box className="hero-section-wrapper">
            <Typography
                class="sub-header"
                variant="h4">
                Find great restaurant & food options
            </Typography>
            <Typography
                class="main-header"
                variant="h3">
                no matter your dietary requirements
            </Typography>
            <Carousel />
        </Box>
    )
}

export default HeroSection;
