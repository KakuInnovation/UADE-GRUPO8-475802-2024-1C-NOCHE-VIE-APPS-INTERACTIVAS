import {Box, List, ListItem, Typography} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import {listing_details_sx} from "../../assets/styles/listing_details_sx.js";

export const ListingDescription = ({listing}) => {
    return (
        <>
            <Box sx={{...listing_details_sx.listing_info_box}}>
                <Box sx={{...listing_details_sx.title_product_box}}>
                    <Typography sx={{...listing_details_sx.title_product}}>Producto</Typography>
                </Box>

                <List sx={{ ...listing_details_sx.list }}>
                    <ListItem key={0} sx={{ ...listing_details_sx.list_item }}>
                        <ListItemText
                            primary={<Typography variant="h6" sx={{fontFamily:"Tisa Sans Pro Bold"}}>{listing.productDTO.productName}</Typography>}
                            sx={{ ...listing_details_sx.item_text }}
                        />
                    </ListItem>
                    <ListItem key={1} sx={{ ...listing_details_sx.list_item }}>
                        <ListItemText
                            primary={<Typography variant="subtitle1" sx={{fontFamily:"Tisa Sans Pro Bold"}}>Marca</Typography>}
                            sx={{ ...listing_details_sx.item_text }}
                        />
                        <ListItemText
                            primary={<Typography variant="subtitle1" sx={{fontFamily:"Tisa Sans Pro Bold"}}>{listing.productDTO.brandName}</Typography>}
                            sx={{ ...listing_details_sx.item_text }}
                        />
                    </ListItem>
                    <ListItem key={2} sx={{ ...listing_details_sx.list_item }}>
                        <ListItemText
                            primary={<Typography variant="subtitle1" sx={{fontFamily:"Tisa Sans Pro Bold"}}>Categoria</Typography>}
                            sx={{ ...listing_details_sx.item_text }}
                        />
                        <ListItemText
                            primary={<Typography variant="subtitle1" sx={{fontFamily:"Tisa Sans Pro Bold"}}>{listing.productDTO.categoryName}</Typography>}
                            sx={{ ...listing_details_sx.item_text }}
                        />
                    </ListItem>
                    <ListItem key={3} sx={{ ...listing_details_sx.list_item }}>
                        <ListItemText
                            primary={<Typography variant="subtitle1" sx={{fontFamily:"Tisa Sans Pro Bold"}}>Dificultad</Typography>}
                            sx={{ ...listing_details_sx.item_text }}
                        />
                        <ListItemText
                            primary={<Typography variant="subtitle1" sx={{fontFamily:"Tisa Sans Pro Bold"}}>{listing.productDTO.difficulty}</Typography>}
                            sx={{ ...listing_details_sx.item_text }}
                        />
                    </ListItem>
                    <ListItem key={4} sx={{ ...listing_details_sx.list_item }}>
                        <ListItemText
                            primary={<Typography variant="subtitle1" sx={{fontFamily:"Tisa Sans Pro Bold"}}>Cantidad de jugadores</Typography>}
                            sx={{ ...listing_details_sx.item_text }}
                        />
                        <ListItemText
                            primary={<Typography variant="subtitle1" sx={{fontFamily:"Tisa Sans Pro Bold"}}>{listing.productDTO.playerCounter}</Typography>}
                            sx={{ ...listing_details_sx.item_text }}
                        />
                    </ListItem>
                </List>

                <Box sx={{...listing_details_sx.listing_description_box}}>
                    <Typography sx={{...listing_details_sx.listing_description_title}}>Descripcion</Typography>
                    <Typography sx={{...listing_details_sx.listing_description_text}}>{listing.description}</Typography>
                </Box>
            </Box>

    </>
    )
}