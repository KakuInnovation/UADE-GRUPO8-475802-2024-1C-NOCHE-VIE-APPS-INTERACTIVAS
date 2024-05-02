import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import '../../assets/fonts/Tisa/Tisa.css';
import ProductCard from '../catalogo/comps/ProductCard.jsx'
import data from '../../../db.json';
import PropTypes from 'prop-types';


const searchInDB = (dataRequest) =>{
        const dataResponse = [];
        for(let key in dataRequest){
            for(let elem in dataRequest[key]){
                for (let product in data.productos){
                    if(data.productos[product][key] === dataRequest[key][elem])
                        dataResponse.push(data.productos[product]);
                }
            }
        }
        return dataResponse;












}












const CatalogView = ({dictionary}) => {


    // eslint-disable-next-line react/prop-types
    const matches = searchInDB(dictionary);





    const sx_catalog_view = {
            layout:{
                padding:'50px',
                display:'flex',
                gap:{xs:'', md:'50px'},
                flexWrap:'wrap',
            },
        }
    return(
        <Box sx={{...sx_catalog_view.layout}}>
            {matches.map((item,index)=>(
                <ProductCard key={index} item={item} ></ProductCard>
            ))}


        </Box>
    )

}
CatalogView.propTypes = {
    dictionary: PropTypes.object.isRequired // Define el tipo de dictionary y asegúrate de que sea requerido
};
export default CatalogView;