import { Box, Typography } from '@mui/material';
import "./Backdrop.scss";
import React from 'react';
import Image from '../img/brooke-lark-HlNcigvUi4Q-unsplash.jpg';

const Backdrop = () => {
    return(
        <Box
            style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.52)), url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30vh",
            color: "#f5f5f5",
            padding: '20px',
        }}>
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
        </Box>
    )
}

export default Backdrop;