import { Box, Typography, Button } from '@mui/material';
import "./CarouselCard.scss";
import React from 'react';
import Image from '../img/brooke-lark-HlNcigvUi4Q-unsplash.jpg';

const CarouselCard = () => {
    return(
        <Box className="card-container">
            <Box className="first-section-container">
                <Typography
                    class="first-section-header"
                    variant="h4">
                    Filter menus by your dietary requirements
                </Typography>
                <Button size="medium" class="button-check">
                    Check it out
                </Button>
            </Box>
            
            <Box
                className="second-section-container"
                style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#f5f5f5",
                padding: '20px',
                zIndex: '-1'
            }}/>
        </Box>
    )
}

export default CarouselCard;