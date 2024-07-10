import {Box, Button, List, ListItem, Typography} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const ListingsUserData = ({listing}) => {
    const background =   'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)';

    const navigate = useNavigate();
    if (!Array.isArray(listing)) {
        return null;
    }
    const handleClick = (listing) => {
        const id = listing.listingId;
        navigate(`/listing/${id}`);
    }
    return (

        <Box sx={{

            height:'auto',
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexDirection:'column'}}>
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
                }}>Publicaciones</Typography>
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
                <ListItem
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems: 'center',
                        gap:'20px'}} >

                    <ListItemText sx={{width:'6%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center', backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Id de publicacion  </Typography></ListItemText>
                    <ListItemText sx={{width:'6%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center', backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Producto</Typography></ListItemText>
                    <ListItemText  sx={{width:'6%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center', backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Estado</Typography></ListItemText>
                    <ListItemText  sx={{width:'6%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center', backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Stock</Typography></ListItemText>
                    <ListItemText  sx={{width:'10%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center', backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Id de vendedor</Typography></ListItemText>
                    <ListItemText  sx={{width:'1%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center', backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Precio</Typography></ListItemText>
                    <ListItemText  sx={{width:'1%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center', backgroundColor:'black',
                        padding:'10px',
                        color:'#fff',}}><Typography>Ir a publicacion</Typography></ListItemText>
                </ListItem>
                {
                    listing.map((item, key) => (

                        <ListItem sx={{display:'flex',justifyContent:'center', alignItems: 'center', gap:'20px'}} key={key}>

                            <ListItemText sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography>{item.listingId}</Typography></ListItemText>
                            <ListItemText sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography>{item.productDTO.productName}</Typography></ListItemText>
                            <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography>{item.listingState?"activa":"pausada"}</Typography></ListItemText>
                            <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography >{item.stock}</Typography></ListItemText>
                            <ListItemText  sx={{width:'16%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography sx={{backgroundColor:'grey'}}>{item.userId}</Typography></ListItemText>

                            <ListItemText  sx={{width:'8%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center',  backgroundColor:'grey',padding:'5px',color:"white"}}><Typography>{item.price}</Typography></ListItemText>
                            <Button sx={{backgroundColor:"black"}} onClick={() => handleClick(item)}>perfil</Button>

                        </ListItem>

                    ))
                }

            </List>
        </Box>

    );
}