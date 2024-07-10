import {
    Box,
    Button,
    Divider,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import '../../assets/fonts/Tisa/Tisa.css'
import * as React from "react";
import {sx_grid} from "../../assets/styles/profile/sx_profile_listing_styles.js";
import {useNavigate} from "react-router-dom";
import {setUserListings} from "../../redux/slices/userSlice.js";
import {useDispatch, useSelector} from "react-redux";
import CreateListingDialog from "./comps/CreateListingDialog.jsx";
import {deleteUserListing, fetchListingUpdate} from "../../hooks/listing-hooks.js";

// eslint-disable-next-line react/prop-types
const Listings = ({open,handleClose,handleOpen, listingsDTO,action,setAction}) => {


    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const status =
        [

                'Publicar',
                'Pausar',
                'Modificar',
                'Eliminar'
        ];

    const handleClickButton = (type,item) => {

        switch (type.toUpperCase()) {
            case "MODIFICAR":
                dispatch(setUserListings(item));
                setAction(!action);
                handleOpen();




                break;
            case "PAUSAR":
                item.listingState =false;
                fetchListingUpdate(item,token);
                setAction(!action);
                break;
            case "PUBLICAR":
                item.listingState = true;
                fetchListingUpdate(item,token);
                setAction(!action);
                break;
            case "ELIMINAR":
                deleteUserListing(item.listingId,token);
                setAction(!action);
                break;
        }
    }



    return(

        <>

            <Grid item xs={12} sm={12} md={12} sx={{...sx_grid.grid}}>
                <Divider sx={{width:'100%', height:'2px',backgroundColor:'#686868'}}/>
                <Box sx={{...sx_grid.tipoBox}}>
                    <Typography
                        backgroundColor='white'
                        textAlign={'center'}
                        sx={{...sx_grid.tipography}}>
                        PANEL DE PUBLICACIONES
                    </Typography>
                </Box>

                <TableContainer component={Paper} sx={{...sx_grid.tableContainer}}>
                    <Table aria-label="simple table" sx={{...sx_grid.table}}>
                        <TableBody sx={{...sx_grid.tableBody}}>
                            {/* eslint-disable-next-line react/prop-types */}
                            {listingsDTO.map((item, index ) => (
                                <Box
                                    key={index}
                                    sx={{...sx_grid.tableBox}}>

                                    <Typography
                                        sx={{...sx_grid.boxTypo}}>
                                        Publicacion {item.listingId/*aca van los id de publicacioens*/}

                                    </Typography>
                                    <Box
                                        sx={{...sx_grid.buttonBox}}>

                                        <TableRow
                                            key={index}
                                            sx={{...sx_grid.button}}>{
                                            status.map((button, key) => (
                                                <Button
                                                    key={key}
                                                    style={{

                                                        color:'#fff',
                                                        fontFamily:'Tisa Sans Pro Bold',
                                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',

                                                    }}
                                                    onClick={()=> handleClickButton (button,item)}
                                                    disabled={item.listingState === false && button !== "Publicar"}
                                                    sx={{backgroundColor: button !=="Eliminar"?'#cfa5a5':'#a13434' , filter : item.listingState === false && button !== "Publicar" ?"brightness(50%)" : "brightness(100%)",
                                                            '&:hover': {
                                                        backgroundColor: button !== "Eliminar" ? '#c59895' : '#703d3d',
                                                    },

                                                }}
                                                >
                                                    {button}
                                                </Button>
                                            ))
                                        }
                                        </TableRow>
                                    </Box>
                                </Box>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>



    )
}


export default Listings;