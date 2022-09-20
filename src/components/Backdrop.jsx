import { Box } from '@mui/material';
import "./Backdrop.scss";
import React from 'react';
import Image from '../img/brooke-lark-HlNcigvUi4Q-unsplash.jpg';

const Backdrop = () => {
    return(
        <Box
            style={{
            position: 'absolute',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.52)), url(${Image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#f5f5f5",
            height: "35vh",
            width: "100vw",
        }} />
    )
}

export default Backdrop;