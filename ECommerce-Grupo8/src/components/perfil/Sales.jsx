import {
    Box,
    Button, CircularProgress,
    Divider,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableHead,
    TableRow,
    Typography
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import '../../assets/fonts/Tisa/Tisa.css'
import * as React from "react";
import {useNavigate} from "react-router-dom";

const Sales = ({salesDTO}) => {
    const status = [['Publicar', 'Pausar', 'Modificar', 'Eliminar'],['Publicar', 'Pausar', 'Modificar', 'Eliminar'],['Publicar', 'Pausar', 'Modificar', 'Eliminar'],['Publicar', 'Pausar', 'Modificar', 'Eliminar']];
    const shopping = [['Nro. Venta','Fecha','Producto', 'Comprador','Publicacion']]
    const shoplist = [['1','1/1/1','TEG Estrategia','John Doe','linkapublicacion'],['1','1/1/1','TEG Estrategia','John Doe','linkapublicacion'],['1','1/1/1','TEG Estrategia','John Doe','linkapublicacion'],['1','1/1/1','TEG Estrategia','John Doe','linkapublicacion']]
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
            flexDirection:'column'
        },
        table:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center'

        },
        tableBody:{
            display:'flex',
            flexDirection:'column',
            width:'100%',

            padding:{xs:'',md:'15px',lg:'15px'},


        },
        tableBox:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:{xs:'',md:'',lg:'10px'},
            gap:{xs:'',md:'',lg:'10px'},


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


        },
        tableHead:{
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:{xs:'',md:'',lg:'10px'}


        },
        tableHeadBox:{
            display:'flex',
            justifyContent:'center',

        },
        tableRow:{
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'green',



        },
        tableCell:{
            width:'100%',
            display:'flex',
            justifyContent:'center',

        },
        tableTitle:{

            display:'flex',
            justifyContent:'center',
            backgroundColor:'blue',




        }


    }



    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`../listing/${id}`,{ replace: true });
    }

    return(

        <>

            <Grid item xs={12} sm={12} md={12} sx={{...sx_grid.grid}}>

                <Box sx={{...sx_grid.tipoBox}}>
                    <Typography   backgroundColor='white' textAlign={'center'} sx={{...sx_grid.tipography}}>MIS VENTAS</Typography>
                </Box>

                <TableContainer component={Paper} sx={{...sx_grid.tableContainer}}>
                    <Divider sx={{width:'90%', height:'2px',backgroundColor:'#686868'}}/>
                    <Table aria-label="simple table" sx={{...sx_grid.table}}>
                        <TableHead sx={{...sx_grid.tableBody,width:'100%'}}>
                            {shopping.map((item, index ) => (
                                <Box key={index} sx={{...sx_grid.tableBox,gap:'10px'}}>

                                    <Box sx={{...sx_grid.buttonBox,width:'90%',gap:'10px'}}>
                                        <TableRow key={index} sx={{...sx_grid.button,gap:'10px',width:'100%',paddingLeft:{xs:'',md:'10px',lg:'100px'}}}>{
                                            item.map((button, key) => (
                                                <Typography key={key} sx={{backgroundColor:'#cfa5a5',color:'#fff',
                                                    fontFamily:'Tisa Sans Pro Bold', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                                                    padding:{xs:'',md:'',lg:'5px'},
                                                    width:'25%',
                                                    textAlign:'center',
                                                }}>{button}</Typography>
                                            ))
                                        }
                                        </TableRow>
                                    </Box>
                                </Box>
                            ))}


                        </TableHead>
                        <Divider sx={{width:'90%', height:'5px',backgroundColor:'#686868'}}/>
                        <TableBody sx={{...sx_grid.tableBody}}>
                            {salesDTO.map((item, index ) => (
                                <Box key={index} sx={{...sx_grid.tableBox}}>
                                    <Typography sx={{...sx_grid.boxTypo}}>Compra {index+1}</Typography>
                                    <Box sx={{...sx_grid.buttonBox,justifyContent:'start', }}>
                                        <TableRow key={index} sx={{...sx_grid.button,width:'100%', }}>

                                            <Typography  style={{backgroundColor:'#cfa5a5',
                                                color:'#fff', fontFamily:'Tisa Sans Pro Bold', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                                                textAlign:'center',
                                            }}
                                                         sx={{padding:'5px',width:'20%',}}>{item.saleId}</Typography>

                                            <Typography  style={{backgroundColor:'#cfa5a5',
                                                color:'#fff', fontFamily:'Tisa Sans Pro Bold', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                                                textAlign:'center',
                                            }}
                                                         sx={{padding:'5px',width:'20%'}}>{item.saleDate}</Typography>

                                            <Typography  style={{backgroundColor:'#cfa5a5',
                                                color:'#fff', fontFamily:'Tisa Sans Pro Bold', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                                                textAlign:'center',
                                            }}
                                                         sx={{padding:'5px',width:'20%'}}>{item.listingsDTO.map(listing => listing.productDTO.productName)}</Typography>

                                            <Typography  style={{backgroundColor:'#cfa5a5',
                                                color:'#fff', fontFamily:'Tisa Sans Pro Bold', boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                                                textAlign:'center',
                                            }}
                                                         sx={{padding:'5px',width:'20%'}}>{item.buyerName}</Typography>
                                            <Typography
                                                style={{
                                                    backgroundColor:'#cfa5a5',
                                                    color:'#fff',
                                                    fontFamily:'Tisa Sans Pro Bold',
                                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
                                                    textAlign:'center',
                                                }}
                                                sx={{padding:'5px',width:'20%'}}
                                                onClick={() => {handleClick(item.listingsDTO.map(listing => listing.listingId))}}



                                            >    {item.listingsDTO.map(listing => listing.listingId)}</Typography>

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


export default Sales