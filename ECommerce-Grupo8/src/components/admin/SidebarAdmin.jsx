import {Box, Button, createTheme, ThemeProvider, Typography} from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useEffect, useState} from "react";

import '../../assets/fonts/Tisa/Tisa.css'
import '../../assets/fonts/Inter/Inter.css'
import {useSelector} from "react-redux";
import {sideBar_sx} from "../../assets/styles/listings/sidebar_filter_sx.js";
import {ListingFilter} from "./ListingFilter.jsx";
import SidebarUserFilter from "./SidebarUserFilter.jsx";
import {ProductFilter} from "./ProductFilter.jsx";





export const SideBarAdmin = ({handleChange,setSelectedCategories , selectedCategories}) => {













    return(
        <Box sx={{...sideBar_sx.layout}}>
            <Box sx={{...sideBar_sx.apply}}>
                <Button sx={{...sideBar_sx.button}}>Aplicar</Button>
            </Box>
            <Box sx={{...sideBar_sx.types}}>
                <Box sx={{...sideBar_sx.title}}>
                    <Typography sx={{color:'#636363',}}>Filtrar por:</Typography>
                </Box>
                <Box sx={{...sideBar_sx.title, justifyContent:'center'}}>
                    <Typography sx={{color:'#636363'}}>Usuario</Typography>
                </Box>
                <SidebarUserFilter  handleChange={handleChange}></SidebarUserFilter>
                <Box sx={{...sideBar_sx.title, justifyContent:'center'}}>
                    <Typography sx={{color:'#636363'}}>Publicacion</Typography>
                </Box>

                <ListingFilter setSelectedCategories ={setSelectedCategories}  selectedCategories = {selectedCategories}></ListingFilter>

                <Box sx={{...sideBar_sx.title, justifyContent:'center'}}>
                    <Typography sx={{color:'#636363'}}>Productos</Typography>
                </Box>
                <ProductFilter></ProductFilter>
                
            </Box>
        </Box>
    )
}
