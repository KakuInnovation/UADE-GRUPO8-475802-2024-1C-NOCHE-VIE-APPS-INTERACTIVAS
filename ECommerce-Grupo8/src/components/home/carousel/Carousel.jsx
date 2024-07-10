import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import ProductCard from "../../catalogo/comps/ProductCard.jsx";
import {useSelector} from "react-redux";

// Definir la animación de deslizamiento
const slide = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Carousel = () => {
    const cards = useSelector(state => state.listing_stock.listingsWithStock);
    const isLoading = useSelector(state => state.auth.isLoading);
    return (
        <Box
            sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                width: '100%',
                backgroundColor: '#f0f0f0',
                backgroundImage: "url('https://images.pexels.com/photos/1240581/pexels-photo-1240581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '20px',
                borderBottomLeftRadius:'10px',
                borderBottomRightRadius:'10px',
                backgroundAttachment: 'fixed',
            }}
        >
            <Box
                sx={{
                    display: 'inline-flex',
                    animation: `${slide} 25s linear infinite`,
                    gap:'10px',
                }}
            >
                {cards.map((card) => (
                    <ProductCard item={card} key={card.id} >

                    </ProductCard>
                ))}

                {cards.map((card) => (

                    <ProductCard item={card} key={`duplicate-${card.id}`}>

                        </ProductCard>
                ))}
            </Box>
        </Box>
    );
};

export default Carousel;
