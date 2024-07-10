import {Box, Button, Divider, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {listing_details_sx} from "../../assets/styles/listing_details_sx.js";

import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/slices/shoppingCartSlice.js";

export const ListingPriceStock = ({listing}) => {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState("");
    const handleAddToCart = (id,quantity) => {
        dispatch(addToCart({ id, quantity }));
    };

   

    return(
        <>
            <Box sx={{...listing_details_sx.stock_price_box}}>
                <Box sx={{...listing_details_sx.title_box}}>
                    <Typography sx={{
                        fontFamily:'Tisa Sans Pro Bold',
                        fontSize:'25px',
                        backgroundColor:'rgba(53,52,52,0.19)',
                        width:'100%',
                        textAlign:'center'
                    }}>{listing.productDTO.productName}</Typography>
                    <Divider sx={{width: '100%', height: '2px', backgroundColor: '#fff'}}/>
                    <Typography sx={{   fontFamily:'Tisa Sans Pro Bold', fontSize:'20px',
                        backgroundColor:'rgba(53,52,52,0.19)',
                        width:'100%',
                        textAlign:'center'
                    }}>${listing.price}</Typography>
                </Box>
                <Box sx={{...listing_details_sx.add_box}}>

                        <TextField

                            variant="outlined"
                            value={quantity}
                            placeholder={"cantidad"}
                            onChange={event => setQuantity(event.target.value)}
                            sx={{width:'50%'}}
                            inputProps={{
                                style: {
                                    padding: 5,
                                    height:'40px'
                                }
                            }}
                            margin="normal"
                        />


                    <Button sx={{...listing_details_sx.button_add_cart, backgroundColor:listing.listingState? "black": 'grey'}}

                            disabled={!listing.listingState}
                            onClick={() => handleAddToCart(listing.listingId,parseInt(quantity))}>
                        AGREGAR AL CARRITO
                    </Button>
                </Box>
            </Box>
        <Box>

        </Box>
        </>
    )
}