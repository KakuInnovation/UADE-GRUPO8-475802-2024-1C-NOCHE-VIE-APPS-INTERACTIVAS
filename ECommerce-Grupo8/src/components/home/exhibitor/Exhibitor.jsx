import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography } from '@mui/material';
import ProductCard from "../../catalogo/comps/ProductCard.jsx";
import {useSelector} from "react-redux";

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
    const items = useSelector(state => state.listing_stock.listingsWithStock);
    const radius = 270;

    return (
        <div className={classes.root}>
            <div className={classes.carousel}>
                {items.map((item, index) => (
                    <div key={index} className={classes.card} style={{ transform: `rotateY(${index * (360 / items.length)}deg) translateZ(${radius}px)`}}>
                        <ProductCard item={item} key={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exhibitor;
