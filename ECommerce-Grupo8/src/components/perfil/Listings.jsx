import {
    Box,
    Button,
    Divider,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import '../../assets/fonts/Tisa/Tisa.css'
import * as React from "react";

const Listings = () => {
    const status = [['Publicar', 'Pausar', 'Modificar', 'Eliminar'],['Publicar', 'Pausar', 'Modificar', 'Eliminar'],['Publicar', 'Pausar', 'Modificar', 'Eliminar'],['Publicar', 'Pausar', 'Modificar', 'Eliminar']];
    const sx_grid = {
        grid:{
            display:'flex',
            flexDirection:'column',
            padding:{xs:'',md:'',lg:'20px'},


        },
        tipoBox:{
            display:'flex',
            width:'100%',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',



        },
        tipography:{
            fontFamily:'Tisa Sans Pro Bold',
            fontSize:{xs:'',md:'25px'},
            width:'100%',
            padding:{xs:'',md:'',lg:'10px'},
            backgroundColor:'rgba(53,52,52,0.19)',
        },
        tableContainer:{
            display:'flex',
            backgroundColor:'rgba(53,52,52,0.19)',
        },
        table:{
            display:'flex',
            justifyContent:'center',
        },
        tableBody:{
            display:'flex',
            flexDirection:'column',
            width:'90%',
            gap:{xs:'',md:'',lg:'10px'},
            padding:{xs:'',md:'15px',lg:'15px'},


        },
        tableBox:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:{xs:'',md:'',lg:'10px'},
            gap:{xs:'',md:'',lg:'10px'},
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',

            borderBottomLeftRadius:'10px',
            borderBottomRightRadius:'10px',
            borderLeftRadius:'10px',
            borderRightRadius:'10px',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',


        },
        boxTypo:{
            fontFamily:'Tisa Sans Pro Bold',
            backgroundColor:'#cfa5a5',
            color:'#fff',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:{xs:'',md:'',lg:'10px'},
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
            borderBottomLeftRadius:'10px',
            borderBottomRightRadius:'10px',
            borderLeftRadius:'10px',
            borderRightRadius:'10px',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',
        },
        buttonBox:{
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            backgroundColor: 'white',
            gap:{xs:'',md:'',lg:'10px'},
            padding:{xs:'',md:'',lg:'4px'},
            width:'80%',
            border:'2px solid grey',
            borderBottomLeftRadius:'10px',
            borderBottomRightRadius:'10px',
            borderLeftRadius:'10px',
            borderRightRadius:'10px',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',
        },
        button:{
            display:'flex',
            gap:{xs:'',md:'',lg:'10px'},
            padding:{xs:'',md:'',lg:'5px'},


        }






    }

    return(

        <>

        <Grid item xs={12} sm={12} md={12} sx={{...sx_grid.grid}}>
            <Divider sx={{width:'100%', height:'2px',backgroundColor:'#686868'}}/>
            <Box sx={{...sx_grid.tipoBox}}>
                <Typography   backgroundColor='white' textAlign={'center'} sx={{...sx_grid.tipography}}>PANEL DE PUBLICACIONES</Typography>
            </Box>

            <TableContainer component={Paper} sx={{...sx_grid.tableContainer}}>
                <Table aria-label="simple table" sx={{...sx_grid.table}}>
                    <TableBody sx={{...sx_grid.tableBody}}>
                        {status.map((item, index ) => (
                            <Box key={index} sx={{...sx_grid.tableBox}}>
                                <Typography sx={{...sx_grid.boxTypo}}>Publicacion {index+1}</Typography>
                                <Box sx={{...sx_grid.buttonBox}}>
                                    <TableRow key={index} sx={{...sx_grid.button}}>{
                                        item.map((button, key) => (
                                            <Button key={key} style={{backgroundColor:'#cfa5a5',color:'#fff', fontFamily:'Tisa Sans Pro Bold', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',}}>{button}</Button>
                                        ))
                                    }
                                    </TableRow>
                                </Box>
                            </Box>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
            </>



    )
}


export default Listings;