import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import '../../assets/fonts/Tisa/Tisa.css';
import ProductCard from "./comps/ProductCard.jsx";

const CatalogView = (props) => {
        const sx_catalog_view = {
            layout:{

                padding:'50px',
                display:'flex',
                gap:{xs:'', md:'50px'},



            },
        }
    return(
        <Box sx={{...sx_catalog_view.layout}}>
            <ProductCard></ProductCard>

        </Box>
    )



}

export default CatalogView;