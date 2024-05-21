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
            padding:{xs:"",md:"",xl:"10px"},
        },
        dialogContentText_typo:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding:{xs:0,md:"10px"},
        },
        firstBox:{
            display:"flex",
            justifyContent: 'center',
            alignItems: 'center',

        },
        formControl: {
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            backgroundColor: "white",


        },
        formBox:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            padding:5,
        }
    };

    return (
        <Dialog open={true} sx={{...sx_dialog.layout}} maxWidth='md' fullWidth>
            <DialogContent sx={{...sx_dialog.dialogContext}}>
                <DialogContentText sx={{...sx_dialog.dialogContentText}}>
                    <Typography variant="h4" sx={{ ...sx_dialog.dialogContentText_typo }}>Crea tu publicación!</Typography>
                </DialogContentText>
                <Box component="form" sx={{...sx_dialog.firstBox, width: '100%' }}>
                    <Grid container >
                        <Grid item xs={12} sx={{...sx_dialog.formControl}}>
                            <Box sx={{ display: 'flex',  alignItems:'center' , justifyContent:'start', gap:'20px', padding:'35px',border: "1px solid black",width:'90%'}}>
                                <TextField
                                    fullWidth
                                    label="Titulo"
                                    size="small"
                                />
                            </Box>

                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center', gap:'10px'}}>
                            <Box sx={{ display: 'flex',  alignItems:'center' , justifyContent:'start', gap:'20px', padding:'35px',border: "1px solid black",width:'90%'}}>
                                <Typography>Buscar producto</Typography>
                                <ComboBox />
                            </Box>

                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, width:'90%',}}>
                            <Box sx={{ display: 'flex',  alignItems:'center' , justifyContent:'start', gap:'20px', padding:'35px',border: "1px solid black",width:'90%'}}>
                                <SelectPhoto />
                            </Box>

                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center',}}>
                            <Box sx={{ display: 'flex',  alignItems:'start' , justifyContent:'start', gap:'10px',padding:'35px', border: "1px solid black",width:'90%'}}>
                                <Box sx={{display: 'flex', alignItems:'center' ,gap:'10px'  }}>
                                    <Typography>Precio:</Typography>
                                    <TextField fullWidth size="small" />
                                </Box>
                                <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center' ,gap:'10px' }}>
                                    <Typography>Stock:</Typography>
                                    <TextField fullWidth size="small" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ display: 'flex',  alignItems:'center' , justifyContent:'start', gap:'20px', padding:'35px',border: "1px solid black",width:'90%'}}>
                                <Typography>Categoria:</Typography>
                                <ComboBox></ComboBox>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{display: 'flex',  alignItems:'center' , justifyContent:'start', gap:'10px', padding:'35px',border: "1px solid black",width:'90%'}}>
                                <Typography>Descripcion del producto:</Typography>
                                <ComboBox></ComboBox>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{display: 'flex',  alignItems:'center' , justifyContent:'start', gap:'10px', padding:'35px',border: "1px solid black",width:'90%'}}>
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
