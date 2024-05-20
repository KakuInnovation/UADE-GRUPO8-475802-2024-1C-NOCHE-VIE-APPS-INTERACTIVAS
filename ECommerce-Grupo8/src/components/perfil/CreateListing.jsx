import React from 'react';
import {
    Box, Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import SelectPhoto from "./comps/SelectPhoto.jsx";
import ComboBox from "./comps/ComboBox.jsx";

const CreateListing = () => {
    const sx_dialog = {
        layout: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        dialogContext: {
            display: 'flex',
            justifyContent: 'start',
            flexDirection: 'column',
            backgroundColor:'pink',


        },
        dialogContentText: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            backgroundColor: 'black',
        },
        formControl: {

            backgroundColor: "white",
        }
    };

    return (
        <Dialog open={true} sx={{...sx_dialog.layout}} maxWidth='lg' fullWidth>
            <DialogContent sx={{...sx_dialog.dialogContext}}>
                <DialogContentText sx={{...sx_dialog.dialogContentText}}>
                    <Typography variant="h4" sx={{ textAlign: 'center', }}>Crea tu publicación!</Typography>
                </DialogContentText>
                <Box component="form" sx={{...sx_dialog, width: '100%' }}>
                    <Grid container >
                        <Grid item xs={12} sx={sx_dialog.formControl}>
                            <TextField
                                fullWidth
                                label="Titulo"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12} sx={sx_dialog.formControl}>
                            <Typography>Buscar producto</Typography>
                            <ComboBox />
                        </Grid>
                        <Grid item xs={12} sx={sx_dialog.formControl}>
                            <SelectPhoto />
                        </Grid>
                        <Grid item xs={12} sx={sx_dialog.formControl}>
                            <Box sx={{...sx_dialog, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                                <Box sx={{...sx_dialog, flex: 1 }}>
                                    <Typography>Precio:</Typography>
                                    <TextField fullWidth size="small" />
                                </Box>
                                <Box sx={{...sx_dialog, flex: 1 }}>
                                    <Typography>Stock:</Typography>
                                    <TextField fullWidth size="small" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={sx_dialog.formControl}>
                            <Box sx={{...sx_dialog}}>
                                <Typography>Categoria:</Typography>
                                <ComboBox></ComboBox>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={sx_dialog.formControl}>
                            <Box sx={{...sx_dialog}}>
                                <Typography>Descripcion del producto:</Typography>
                                <ComboBox></ComboBox>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={sx_dialog.formControl}>
                            <Box sx={{...sx_dialog}}>
                                <Typography>Cantidad de jugadores:</Typography>
                               <ComboBox></ComboBox>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={sx_dialog.formControl}>
                            <Typography>Descripción:</Typography>
                            <TextField fullWidth multiline rows={4} />
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => console.log('Submit')}>Submit</Button>
                <Button onClick={() => console.log('Cancel')}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateListing;
