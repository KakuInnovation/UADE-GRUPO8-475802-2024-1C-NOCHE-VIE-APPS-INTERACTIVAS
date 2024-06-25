import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography } from '@mui/material';
import ProductCard from "../../catalogo/comps/ProductCard.jsx";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '300px',
        perspective: '1000px',
        width: '100%',


    },
    carousel: {
        position: 'relative',
        width: '400px',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        gap:'50px',
        height: '200px',
        transformStyle: 'preserve-3d',
        animation: '$spin 15s linear infinite',

    },
    card: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformOrigin: 'center',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',

    },
    '@keyframes spin': {
        '0%': { transform: 'rotateY(0deg)' },
        '100%': { transform: 'rotateY(360deg)' },
    },
}));

const Exhibitor = () => {
    const classes = useStyles();
    const items = [
        { title: 'Card 1', description: 'Description for Card 1' },
        { title: 'Card 2', description: 'Description for Card 2' },
        { title: 'Card 3', description: 'Description for Card 3' },
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
        <div className={classes.root}>
            <div className={classes.carousel}>
                {items.map((item, index) => (
                    <div key={index} className={classes.card} style={{ transform: `rotateY(${index * (360 / items.length)}deg) translateZ(150px)` }}>
                        <ProductCard item={listing} key={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exhibitor;
