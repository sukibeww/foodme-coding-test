import { Box, Typography, Button } from '@mui/material';
import "./CarouselCard.scss";
import React from 'react';

const CarouselCard = (props) => {
    const { isAvailable, message, imgUrl } = props;
    return(
        <Box className="card-container">
            <Box className="first-section-container">
                <Typography
                    class="first-section-header"
                    variant="h4">
                    {message}
                </Typography>
                {isAvailable ? 
                    <Button size="medium" class="button-check">
                        Check it out
                    </Button>
                    :
                    <Button size="medium" class="button-coming-soon">
                        Coming VERY SOON
                    </Button>
                }
            </Box>
            
            <Box
                className="second-section-container"
                style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "left top",
                color: "#f5f5f5",
                padding: '20px',
                zIndex: '-1'
            }}/>
        </Box>
    );
};

export default CarouselCard;
