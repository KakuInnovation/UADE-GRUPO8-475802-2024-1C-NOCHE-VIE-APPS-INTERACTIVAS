import {Box, Drawer, Typography} from "@mui/material";
import SellerSelectorDialog from "./comps/SellerSelectorDialog.jsx";
import {useState} from "react";

const SellerSelector = () => {
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Box>
            <Typography variant="h4" component="div" color={"white"} onClick={handleOpen}>Queres ser vendedor? Hacé click acá.</Typography>

                <SellerSelectorDialog open={open} handleClose={handleClose}></SellerSelectorDialog>

        </Box>
    )
}

export default SellerSelector;