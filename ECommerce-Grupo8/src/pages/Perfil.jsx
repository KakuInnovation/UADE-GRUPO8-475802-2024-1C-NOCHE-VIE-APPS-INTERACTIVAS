import {Box, Container, Grid, Typography} from "@mui/material";
import UserData from "../components/perfil/UserData.jsx";
import SellerSelector from "../components/perfil/SellerSelector.jsx";

const Perfil = () => {
    return(
        <Container sx={{backgroundColor:'grey',padding:'20px'}}>
            <Grid container sx={{backgroundColor:'black'}}>
                <Grid item xs={12} md={12}>
                    <Box>
                        <Typography variant="body2" color="white">Mi perfil</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                    <UserData></UserData>
                </Grid>
                <Grid item>
                    <SellerSelector></SellerSelector>
                </Grid>
                <Grid item>

                </Grid>


            </Grid>
        </Container>
    )
}

export default Perfil;