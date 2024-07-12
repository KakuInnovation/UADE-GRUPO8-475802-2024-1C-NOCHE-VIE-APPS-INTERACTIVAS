import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import {useSelector} from "react-redux";
import {useState} from "react";

const products = [
    {
        name: 'Product 1',
        desc: 'A nice thing',
        price: '$9.99',
    },
    {
        name: 'Product 2',
        desc: 'Another thing',
        price: '$3.45',
    },
    {
        name: 'Product 3',
        desc: 'Something else',
        price: '$6.51',
    },
    {
        name: 'Product 4',
        desc: 'Best thing of all',
        price: '$14.11',
    },
    { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];



export default function Review() {
    const shoppingCart = useSelector (state => state.shopping_cart.shoppingCart);
    const subtotal = useSelector(state => state.shopping_cart.subtotal);
    const userId = useSelector(state => state.auth.userId);
    const coupon =  useSelector(state => state.shopping_cart.coupon);
    const total = shoppingCart.reduce((acc, listing) => acc + listing.price * listing.quantity, 0);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {shoppingCart.map((listing) => (
                    <ListItem key={listing.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={listing.productDTO.productName + " x "+listing.quantity} secondary={listing.desc} />
                        <Typography variant="body2">$ {listing.price* listing.quantity}</Typography>
                    </ListItem>
                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${total}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total con descuento" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${subtotal}
                    </Typography>
                </ListItem>
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Cupon" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {coupon?coupon:"SIN CUPON"}
                    </Typography>
                </ListItem>
            </List>

        </React.Fragment>
    );
}