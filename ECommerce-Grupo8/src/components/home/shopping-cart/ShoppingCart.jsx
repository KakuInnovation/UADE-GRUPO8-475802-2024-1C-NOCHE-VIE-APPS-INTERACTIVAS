import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
    Button,
    Grid, Typography
} from '@mui/material';

import {closeDrawer} from "../../../redux/slices/drawerSlice.js";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {sx_drawer_styles} from "../../../assets/styles/home/sx_drawer_styles.js";
import {addToCart, decrementToCart, removeFromCart, setListings} from "../../../redux/slices/shoppingCartSlice.js";
import OutlinedAlerts from "./OutlinedAlerts.jsx";
import Alert from "@mui/material/Alert";
const TemporaryDrawer = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.navbar_drawer.open);
    const listingsWithStock = useSelector(state => state.listing_stock.listingsWithStock);
    const shoppingCart = useSelector(state => state.shopping_cart.shoppingCart);
    const subtotal = useSelector(state => state.shopping_cart.subtotal).toFixed(2);
    const [alertVisible, setAlertVisible] = useState(false);

    const showAlert = () => {
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000); // Oculta el alert después de 3 segundos
    };

    useEffect(() => {
        dispatch(setListings(listingsWithStock));
    }, [dispatch, listingsWithStock]);

    const handleAddToCart = (id) => {
        dispatch(addToCart({ id, quantity:1 }));
    };

    const handleDecrementFromCart = (id) => {
        dispatch(decrementToCart({ id, quantity:1 }));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const DrawerList = (
        <Box sx={{...sx_drawer_styles.box_container  }} role="presentation" >
            <Box sx={{...sx_drawer_styles.button_container,justifyContent:'start'}}>
                <Button sx={{...sx_drawer_styles.button_checkout}} onClick={() => dispatch(closeDrawer())}>
                    Cerrar
                </Button>
            </Box>
            <Grid container direction="column" sx={{...sx_drawer_styles.grid}}>
                {
                    shoppingCart.map((item, index) => (
                        <Grid item xs={12} sx={{...sx_drawer_styles.grid}} key={index}>
                            <Box sx={{...sx_drawer_styles.grid_box_container}}>
                                <Box sx={{...sx_drawer_styles.grid_product_container}}>
                                    <Typography sx={{...sx_drawer_styles.product_typography}}>{item.productDTO.productName}</Typography>
                                </Box>
                                <Box sx={{...sx_drawer_styles.grid_shopping_cart_container}}>
                                    <Box sx={{...sx_drawer_styles.shopping_cart_quantity}}>
                                        <Typography sx={{...sx_drawer_styles.quantity_typography}}>Cantidad: {item.quantity}</Typography>
                                    </Box>
                                    <Box sx={{...sx_drawer_styles.shopping_cart_quantity}}>
                                        <Typography sx={{...sx_drawer_styles.quantity_typography}}>${item.price}</Typography>
                                    </Box>

                                    <Box sx={{...sx_drawer_styles.shopping_cart_add_decrease_products}}>
                                        <IconButton onClick={() => handleDecrementFromCart(item.listingId)}>
                                            <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                                        </IconButton>
                                        <IconButton onClick={() => handleAddToCart(item.listingId)}>
                                            <AddCircleOutlineIcon></AddCircleOutlineIcon>
                                        </IconButton>

                                    </Box>
                                    <Box sx={{...sx_drawer_styles.shopping_cart_remove_container}}>
                                        <IconButton onClick={() => handleRemoveFromCart(item.listingId)}>
                                            <RemoveShoppingCartIcon></RemoveShoppingCartIcon>
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            <Box sx={{...sx_drawer_styles.box_container_subtotal}}>
                <Box sx={{...sx_drawer_styles.subtotal}}>
                    <Typography>Subtotal:</Typography>
                    <Typography>${subtotal}</Typography>
                </Box>
            </Box>
            <Box sx={{...sx_drawer_styles.button_container}}>
                <Button sx={{...sx_drawer_styles.button_checkout}}>Finalizar compra</Button>
            </Box>

        </Box>
    );

    return (
        <div >
            <Drawer anchor="right" open={isOpen} onClose={() => dispatch(closeDrawer())} >
                {DrawerList}
            </Drawer>

        </div>
    );
};

export default TemporaryDrawer;
