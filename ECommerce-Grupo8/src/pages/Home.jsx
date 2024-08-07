import {sx_user_styles} from "../assets/styles/sx_user_styles.js";
import {Box, Container, Grid, Typography} from "@mui/material";

import Exhibitor from "../components/home/exhibitor/Exhibitor.jsx";
import Carousel from "../components/home/carousel/Carousel.jsx";
import TemporaryDrawer from "../components/home/shopping-cart/ShoppingCart.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useFetchListings} from "../hooks/listing-hooks.js";
import {
    useFetchBrand,
    useFetchDifficulty,
    useFetchDuration,
    useFetchGetCategories,
    useFetchPlayers
} from "../hooks/product_hooks.js";
import {fetchUserData} from "../hooks/user-hooks.js";




const Home = () => {
    const dispatch = useDispatch();
    const listings = [useFetchListings("",dispatch,null)];

    const token = useSelector(state => state.auth.token);


    return(
        <Container  maxWidth={false} sx={{...sx_user_styles.container}}>
            <Grid container sx={{...sx_user_styles.grid_container}} >
                <Grid item xs={12} sm={6} md={4} lg={12} sx={{...sx_user_styles.grid_item}}>
                    <Box sx={{...sx_user_styles.grid_item_title_container}}>
                        <Box sx={{...sx_user_styles.grid_item_title_box}}>
                            <Typography sx={{...sx_user_styles.grid_item_main_title}}>Tu Juego Ideal</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={12} sx={{...sx_user_styles.grid_item,...sx_user_styles.grid_item_dos}}>
                   <Box sx={{...sx_user_styles.grid_item_dos_box_container}}>
                       <Box  sx={{...sx_user_styles.grid_item_title_container}}>
                           <Typography sx={{...sx_user_styles.grid_item_title}}>Mas vendidos!</Typography>
                       </Box>
                       <Box sx={{display:'flex', justifyContent:'space-between', width:'100%',height:'550px'}}>
                           <Carousel listings={listings}></Carousel>
                       </Box>
                   </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={12} sx={{...sx_user_styles.grid_item, ...sx_user_styles.grid_item_tres}}>
                    <Box sx={{...sx_user_styles.grid_item_tres_box_container}}>
                        <Box  sx={{...sx_user_styles.item_tres_box_title}}>
                            <Typography sx={{...sx_user_styles.item_tres_typography}}>Agregados recientemente</Typography>
                        </Box>
                        <Box sx={{...sx_user_styles.item_tres_box_exhibitor}}>
                            <Exhibitor listings={listings}></Exhibitor>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;