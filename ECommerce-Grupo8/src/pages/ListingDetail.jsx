import {Box, Button, Container, Grid, List, ListItem, TextField, Typography} from "@mui/material";
import {listing_details_sx} from "../assets/styles/listing_details_sx.js";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decrementToCart, removeFromCart, setListings} from "../redux/slices/shoppingCartSlice.js";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline.js";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline.js";
import ListItemText from "@mui/material/ListItemText";
import {ListingDescription} from "../components/listing/ListingDescription.jsx";
import ImageCarousel from "../components/listing/ImageCarousel.jsx";
import {ListingPriceStock} from "../components/listing/ListingPriceStock.jsx";

export const ListingDetail = () => {
    const {id} = useParams();


    const [listings,setListings] = useState([]);
    const [listing, setListing] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/listing/get-listings`);
                const data = await response.json();
                setListings(data);
            } catch(error) {
                console.log(error);
            }
        };

        fetchData();
    }, [])


    useEffect(() => {


        const foundListing = listings.find(item => item.listingId === parseInt(id));
        console.log(listings)
        setListing(foundListing);
    }, [listings]);

    if (!listing) {
        return <Typography>Cargando...</Typography>; // Mostrar un mensaje de carga o un spinner
    }


    return(

        <Grid container sx={{...listing_details_sx.container}} >
            <Grid item lg={12}sx={{...listing_details_sx.title}}>
                <Typography sx={{...listing_details_sx.title_typo}}>{listing.title}</Typography>

            </Grid>
            <Grid item sx={{...listing_details_sx.item_photo_container}}lg={3}>
                <Box sx={{...listing_details_sx.photo_box}}>
                    <ImageCarousel listing={listing}></ImageCarousel>
                </Box>
            </Grid>
            <Grid item sx={{...listing_details_sx.item_stockprice_container}} lg={3}>
                <ListingPriceStock listing={listing}></ListingPriceStock>
            </Grid>
            <Grid item sx={{...listing_details_sx.container.item_listing_info_container}} lg={6.08}>
                <ListingDescription listing={listing}></ListingDescription>
            </Grid>
        </Grid>
    )
}