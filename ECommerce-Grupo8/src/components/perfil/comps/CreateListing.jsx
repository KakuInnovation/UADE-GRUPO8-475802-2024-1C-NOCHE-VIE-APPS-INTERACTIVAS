import {Box, Button} from "@mui/material";
import {useState} from "react";
import CreateListingDialog from "./CreateListingDialog.jsx";

const CreateListing = () => {

    const background = 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)'


    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sx_CreateListing = {
        box: {
            display: 'flex',
            cursor: 'pointer',
            width: '20%',
            justifyContent: 'center',
            marginRight:'10px',


        }
    }

    return(
        <Box sx={{...sx_CreateListing.box}}>
            <Button
                onClick={handleOpen}
                style={{backgroundImage:background, color:'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',fontFamily:"Tisa Sans Pro Bold",}}
                sx={{padding:{lg:'15px'}}}>

                Crea tu publicacion aca
            </Button>
            <CreateListingDialog open={open} handleClose={handleClose}></CreateListingDialog>
        </Box>
    )
}

export default CreateListing;