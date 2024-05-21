import {Box, Divider, Drawer, Typography} from "@mui/material";
import SellerSelectorDialog from "./comps/SellerSelectorDialog.jsx";
import {useState} from "react";
import * as React from "react";

const SellerSelector = () => {
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const sx_Selector ={
        box:{
            display:'flex',
            cursor:'pointer',
            width:'70%',
            justifyContent:'end',


        }
    }

    return(
        <Box sx={{...sx_Selector.box}}>
            <Typography  color={'#3eabc6'} onClick={handleOpen} sx={{textDecoration: "underline", paddingRight:{xs:'',md:'20px'} }}>Queres ser vendedor? Hacé click acá.</Typography>

                <SellerSelectorDialog open={open} handleClose={handleClose}></SellerSelectorDialog>

        </Box>
    )
}

export default SellerSelector;