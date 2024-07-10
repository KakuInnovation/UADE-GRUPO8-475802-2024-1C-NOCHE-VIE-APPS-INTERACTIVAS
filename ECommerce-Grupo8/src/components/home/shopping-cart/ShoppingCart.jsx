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
    Grid, Typography, TextField
} from '@mui/material';

import {closeDrawer} from "../../../redux/slices/drawerSlice.js";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {sx_drawer_styles} from "../../../assets/styles/home/sx_drawer_styles.js";
import {
    addToCart, applyDiscount,
    decrementToCart,
    removeFromCart,
    sellProducts,
    setListings
} from "../../../redux/slices/shoppingCartSlice.js";
import OutlinedAlerts from "./OutlinedAlerts.jsx";
import Alert from "@mui/material/Alert";
import {useNavigate} from "react-router-dom";
const TemporaryDrawer = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.navbar_drawer.open);
    const listingsWithStock = useSelector(state => state.listing_stock.listingsWithStock);
    const shoppingCart = useSelector(state => state.shopping_cart.shoppingCart);
    const subtotal = useSelector(state => state.shopping_cart.subtotal).toFixed(2);
    const [alertVisible, setAlertVisible] = useState(false);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    const [inputValue, setInputValue] = useState('');
    const [couponSubmited, setCouponSubmited] = useState(false);
    const coupons = {
        "PROMO5%":5,
        "PROMO10%":10,
        "PROMO20%": 20,
        "PROMO30%": 30,
        "PROMO40%":40,
        "PROMO50%":50,
    }

    const handleClickDiscount = (inputValue) => {
        let coupon = "";
        switch (inputValue.trim()){
            case "PROMO5%":
                coupon = "PROMO5%";
                dispatch(applyDiscount({coupon,discount:5}));
                setCouponSubmited(true)
                break;
            case "PROMO10%":
                coupon = "PROMO10%";
                dispatch(applyDiscount({coupon,discount:10}));
                setCouponSubmited(true)
                break;
            case "PROMO20%":
                coupon = "PROMO20%";
                dispatch(applyDiscount({coupon,discount:20}));
                setCouponSubmited(true)
                break;
            case "PROMO30%":
                coupon = "PROMO30%";
                dispatch(applyDiscount({coupon,discount:30}));
                setCouponSubmited(true)
                break;
            case "PROMO40%":
                coupon = "PROMO40%";
                dispatch(applyDiscount({coupon,discount:40}));
                setCouponSubmited(true)
                break;
            case "PROMO50%":
                coupon = "PROMO50%";
                dispatch(applyDiscount({coupon,discount:50}));
                setCouponSubmited(true)
                break;
            default:
                alert("CUPON NO VALIDO");
        }






    }


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

    const handleFinishOperation = () => {
        if(token){
            navigate('/payment')
        }else{
            navigate('/login')
        }


    }

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
                <Box sx={{...sx_drawer_styles.subtotal, flexDirection:'column', justifyContent:'center',alignItems:'center',height:'120px',gap:'10px'}}>
                    <Typography sx={{backgroundColor:'#ccc3c3', padding:'10px', borderRadius:'50px'}}>Ingresa tu cupon!</Typography>
                    <Box sx={{display:'flex',backgroundColor:'#ccc3c3', padding:'10px'}}>
                        <TextField
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            label={couponSubmited?"":"Ingresa tu cupon"}
                            variant="outlined"
                            disabled={couponSubmited}
                            inputProps={{
                                style: {
                                    padding: 10,
                                    height:'20px',
                                    width:'120px'
                                }
                            }}

                        ></TextField>
                        <Button disabled={couponSubmited} onClick={()=> handleClickDiscount(inputValue)}>Aplicar</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{...sx_drawer_styles.box_container_subtotal}}>
                <Box sx={{...sx_drawer_styles.subtotal}}>
                    <Typography>Subtotal:</Typography>
                    <Typography>${subtotal}</Typography>
                </Box>
            </Box>
            <Box sx={{...sx_drawer_styles.button_container}}>
                <Button sx={{...sx_drawer_styles.button_checkout}} onClick={handleFinishOperation}>Finalizar compra</Button>
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
