import React from 'react';
import '../../../assets/fonts/Tisa/Tisa.css'
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
import SelectPhoto from "./SelectPhoto.jsx";
import ComboBox from "./ComboBox.jsx";

// eslint-disable-next-line react/prop-types
const CreateListingDialog = ({open,handleClose}) => {

    const background = 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)'

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
            alignItems: 'center',

            backgroundImage: 'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
                '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
                '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
            gap:'20px',

        },
        dialogContentText: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            flexDirection: 'column',
            color: '#000',
            backgroundImage: background,
            border:'2px solid #878282',
            borderBottomLeftRadius:'20px',
            borderBottomRightRadius:'20px',
            borderLeftRadius:'20px',
            borderRightRadius:'20px',
            borderTopLeftRadius:'20px',
            borderTopRightRadius:'20px',

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



        },
        formBox:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            padding:5,

        },
        box:{
            display: 'flex',
            alignItems:'center' ,
            justifyContent:'start',
            gap:'20px',
            padding:'35px',

            width:'90%',

            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',


        }
    };

    return (
        <Dialog open={open} sx={{...sx_dialog.layout}} maxWidth='md' fullWidth>
            <DialogContent sx={{...sx_dialog.dialogContext}}>
                <DialogContentText sx={{...sx_dialog.dialogContentText}}>
                    <Typography variant="h4" sx={{ ...sx_dialog.dialogContentText_typo }}>Crea tu publicación!</Typography>
                </DialogContentText>
                <Box component="form" sx={{...sx_dialog.firstBox, width: '100%' ,}}>
                    <Grid container sx={{display:'flex', gap:'10px'}}>
                        <Grid item xs={12} sx={{...sx_dialog.formControl}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular',}}>Titulo:</Typography>
                                <TextField
                                    fullWidth
                                    label="Titulo"
                                    size="large"
                                    InputProps={{
                                        sx: {
                                            '& .MuiInputBase-input': {
                                                fontSize: '25px',
                                                fontFamily:'Tisa Sans Pro bold',
                                            },
                                        },
                                    }}
                                    InputLabelProps={{
                                        sx: {
                                            fontSize: '20px',
                                        },
                                    }}
                                />
                            </Box>

                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center', gap:'10px'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular',}}>Buscar producto</Typography>
                                <ComboBox />
                            </Box>

                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, width:'90%',}}>
                            <Box sx={{ ...sx_dialog.box,  justifyContent:'center',  flexDirection:'column', alignItems:'start', }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro bold', fontSize:{lg:'20px'},width:'100%',
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                                    padding:{lg:'10px'},
                                    textAlign:'center',
                                    backgroundImage:background

                                }

                                }

                                >
                                    Subi hasta cuatro fotos
                                </Typography>
                                <Box sx={{width:'100%'}}>
                                    <SelectPhoto />
                                </Box>

                            </Box>

                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center',}}>
                            <Box sx={{ ...sx_dialog.box, justifyContent:'center' }}>
                                <Box sx={{display: 'flex', alignItems:'center' ,gap:'10px'  }}>
                                    <Typography sx={{fontFamily:'Tisa Sans Pro Regular',}}> Precio:</Typography>
                                    <TextField fullWidth size="small" />
                                </Box>
                                <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center' ,gap:'10px' }}>
                                    <Typography sx={{fontFamily:'Tisa Sans Pro Regular',}}>Stock:</Typography>
                                    <TextField fullWidth size="small" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{ ...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular', width: {lg:'26%'}, textAlign:'center'}}>Categoria:</Typography>
                                <ComboBox></ComboBox>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular',}}>Descripcion del producto:</Typography>
                                <ComboBox></ComboBox>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center'}}>
                            <Box sx={{...sx_dialog.box }}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro Regular',width:{lg:'26%'}}}>Cantidad de jugadores:</Typography>
                               <ComboBox></ComboBox>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{...sx_dialog.formControl, alignItems:'center',}}>
                            <Box sx={{...sx_dialog.box ,flexDirection:'column', alignItems:'start'}}>
                                <Typography sx={{fontFamily:'Tisa Sans Pro bold',
                                    padding:{lg:'10px'},
                                    textAlign:'center',
                                    backgroundImage:background,
                                    width:'100%',
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',

                                }}>Describi tu juego</Typography>
                                <TextField fullWidth multiline rows={4} />
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions sx={{backgroundImage:background,display:'flex', justifyContent:'space-around',boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',}}>
                <Button style={{backgroundColor:"red",color:"#fff",height:'50px',width:'100px',fontFamily:'Tisa Sans Pro Regular'}}onClick={handleClose}>Cancel</Button>
                <Button style={{backgroundColor:"green",color:"#fff",height:'50px',width:'100px',fontFamily:'Tisa Sans Pro Regular'}}onClick={() => console.log('Submit')}>Submit</Button>

            </DialogActions>
        </Dialog>
    );
};

export default CreateListingDialog;
