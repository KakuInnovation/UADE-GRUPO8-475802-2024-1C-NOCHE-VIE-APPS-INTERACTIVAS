import {Box, Button, List, ListItem, Typography} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import {useState} from "react";
import CreateListingDialog from "../perfil/comps/CreateListingDialog.jsx";
import {sx_dialog as sx_CreateListing} from "../../assets/styles/profile/sx_profile_create_update_listings.js";
import CreateProductDialog from "./CreateProduct.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct} from "../../hooks/product_hooks.js";

export const ProductsData = ({products}) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    if (!Array.isArray(products)) {
        return null;
    }



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickDeleteProduct = (productId) => {
        deleteProduct(productId,token);
        dispatch(deleteProduct(productId));
    }
    const background =   'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)';

    return(
        <Box sx={{ height:'autp',display:'flex',justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
            <Box sx={{
                background:background,
                height:'90px',
                width:'95%',
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
                padding:'20px',
                flexDirection:'column'}}>
                <Typography sx={{
                    backgroundColor:'#000',
                    height:'100px',
                    width:'100%',
                    display:'flex',
                    color:'#817b7b',
                    justifyContent:'center',
                    alignItems: 'center',
                    fontSize:'40px',
                }}>Productos</Typography>
            </Box>

            <List  sx={{
                backgroundImage:"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3080686d-9681-4359-9106-1e2b65617e48/dg6bkr1-62022d88-dfe0-42b4-b92b-debb1aeae14a.jpg/v1/fill/w_1280,h_721,q_75,strp/sauron_s_return___lord_of_the_rings_4k_wallpaper_by_mixmyphotoshop_dg6bkr1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvMzA4MDY4NmQtOTY4MS00MzU5LTkxMDYtMWUyYjY1NjE3ZTQ4XC9kZzZia3IxLTYyMDIyZDg4LWRmZTAtNDJiNC1iOTJiLWRlYmIxYWVhZTE0YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.o25qazgbeYfKeyCDPM0bhtIepXfug04vabVTp8n4Reo')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                width:'95%',
                display:"flex",
                flexDirection:'column',
                justifyContent:'center',
                alignItems: 'center'}}>
                <ListItem sx={{display:'flex',justifyContent:'center', alignItems: 'center', gap:'10px'}} >

                    <ListItemText sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',     backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Id de producto  </Typography></ListItemText>
                    <ListItemText sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',     backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Nombre de producto</Typography></ListItemText>
                    <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',     backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Marca</Typography></ListItemText>
                    <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',     backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography >Categoria</Typography></ListItemText>
                    <ListItemText  sx={{width:'16%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',     backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Cantidad de jugadores</Typography></ListItemText>
                    <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',     backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Dificultad</Typography></ListItemText>
                    <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',     backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Duracion</Typography></ListItemText>
                    <ListItemText  sx={{width:'2%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',     backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Borrar</Typography></ListItemText>
                </ListItem>
                {
                    products.map((product, key) => (

                        <ListItem sx={{display:'flex',justifyContent:'center', alignItems: 'center', gap:'20px'}} key={key}>

                            <ListItemText sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography>{product.productId}</Typography></ListItemText>
                            <ListItemText sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography>{product.productName}</Typography></ListItemText>
                            <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography>{product.productBrand.brandName}</Typography></ListItemText>
                            <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography sx={{backgroundColor:'grey'}}>{product.productCategory.categoryName}</Typography></ListItemText>
                            <ListItemText  sx={{width:'16%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography sx={{backgroundColor:'grey'}}>{product.playerCounter}</Typography></ListItemText>
                            <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography>{product.difficulty}</Typography></ListItemText>
                            <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography>{product.durationDTO.durationName}</Typography></ListItemText>
                            <Button onClick={() => handleClickDeleteProduct(product.productId)}>Borrar</Button>

                        </ListItem>

                    ))
                }

            </List>
            <Box sx={{...sx_CreateListing.box,width:"95%", justifyContent:'center' }}>
                <Button
                    onClick={handleOpen}
                    sx={{background:"grey", color:'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',fontFamily:"Tisa Sans Pro Bold",padding:{lg:'15px'}}}

                >

                     Crear o editar producto
                </Button>
                <CreateProductDialog open={open} handleClose={handleClose} ></CreateProductDialog>
            </Box>
        </Box>
    )
}