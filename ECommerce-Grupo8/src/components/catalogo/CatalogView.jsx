import {Box} from '@mui/material';
import ProductCard from '../catalogo/comps/ProductCard.jsx'

import '../../assets/fonts/Tisa/Tisa.css';
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const CatalogView = ({productos}) => {



    // eslint-disable-next-line react/prop-types
    const sx_catalog_view = {
        layout: {
            padding: '50px',
            display: 'flex',
            gap: {xs: '', md: '50px'},
            flexWrap: 'wrap',
        },
    }
    return (
        <Box sx={{...sx_catalog_view.layout}}>
            {productos.map((item, index) => (
                <ProductCard key={index} item={item}></ProductCard>
            ))}
        </Box>
    )
}

export default CatalogView;