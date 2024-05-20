import {Box, Dialog, DialogActions, DialogContentText, Grid, Select, TextField, Typography} from "@mui/material";
import SelectPhoto from "./comps/SelectPhoto.jsx";

const CreateListing = () => {

    return (
        <Dialog open={true}>
            <DialogContentText>
                <Box>
                    <Typography variant="h4">Crea tu publicacion!</Typography>
                </Box>
            </DialogContentText>
            <DialogActions>
                <Grid Container>
                    <Grid item>
                        <TextField
                            defaultValue="Titulo"
                            size={"small"}
                            label="Titulo"
                        />


                    </Grid>
                    <Grid item>
                        <Typography>Buscar producto</Typography>
                    </Grid>
                    <Grid item>
                        <SelectPhoto></SelectPhoto>
                    </Grid>
                    <Grid item>
                        <Box>
                            <Box>
                                <Typography>Precio:</Typography>
                                <TextField/>
                            </Box>
                            <Box>
                                <Typography>Stock:</Typography>
                                <TextField/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box>
                            <Box>
                                <Box>
                                    <Typography>Categoria: </Typography>
                                    <Typography>Cantidad de jugadores: </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography>Descripcion:</Typography>
                                <TextField/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )

}
export default CreateListing;