import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import ProductCard from "../../catalogo/comps/ProductCard.jsx";

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
    const cards = [
        { id: 1, content: 'Card 1' },
        { id: 2, content: 'Card 2' },
        { id: 3, content: 'Card 3' },
        { id: 4, content: 'Card 4' },
        // Agrega más tarjetas según sea necesario
    ];
    const listing = {
        "listingId": null,
        "title":"vendo monopoly",
        "description": "vendo juego familiar",
        "stock": 10,
        "price": 99.99,
        "userId": "093db954-b355-4108-ab38-fda866f30f02",
        "productDTO": {
            "productId": null,
            "productName" : "monopoly",
            "productDescription": "juego familiar",
            "productCategory": {
                "categoryId": 1,
                "categoryName":"familiar"
            },
            "productPlayers":{
                "playerId":3,
                "numberOfPlayers":"4 - 10 personas"
            },
            "productPrice": 99,
            "productBrand":{
                "brandId": null,
                "brandName": "hasbro"
            }
        },
        "listingState":true,
        "images": [
            {
                "imageUrl":"https://images.fravega.com/f500/b0229cfbc520ab09945c663336a3981f.jpg"
            },
            {
                "imageUrl":"https://m.media-amazon.com/images/I/81oC5pYhh2L._AC_SL1500_.jpg"
            }
        ]

    }

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
                    <ProductCard item={listing} key={card.id} >

                    </ProductCard>
                ))}
                {/* Duplicar las tarjetas para un bucle continuo */}
                {cards.map((card) => (

                    <ProductCard item={listing} key={`duplicate-${card.id}`}>

                        </ProductCard>
                ))}
            </Box>
        </Box>
    );
};

export default Carousel;
