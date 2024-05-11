import {Box, Button, Checkbox, Divider, List, ListItem, TextField, Typography} from "@mui/material";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import '../../assets/fonts/Tisa/Tisa.css'
import {useState} from "react";

const UserData = () => {
    const userData = ['Nombre','Nickname','Email','Telefono','Direccion','Tipo usuario']



    const sx_userData = {
        layout:{
            height:"auto",

            display:{xs:'',md:'flex'},
            padding:{xs:'auto',md:'20px'}
        },
        title:{
            fontFamily:"Tisa Sans Pro Bold",
            fontSize:{xs:"",md:'25px'},
            color:'#676767',
            backgroundColor:'rgba(53,52,52,0.19)',
            width:'100%',
            padding:{xs:"",md:'10px'},
            display:{xs:'',md:'flex'},
            justifyContent:'center',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
        },
        userData:{
            display:{xs:'',md:'flex'},
        },
        userDataList:{
            display:{xs:'',md:'flex'},
            flexWrap:'wrap',
            backgroundColor:'rgba(53,52,52,0.19)',
        },
        userDataItem:{
            display:{xs:'',md:'flex'},
            width:'50%',

        },
        userDataListBox:{
            display:{xs:'',md:'flex'},
            backgroundColor:'rgba(53,52,52,0.19)',
            alignItems:'center',
            width:'100%',
            justifyContent: 'start',
            padding:{xs:"",md:'5px'},
            gap:{xs:'',md:'20px'},
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
            borderBottomLeftRadius:'10px',
            borderBottomRightRadius:'10px',
            borderLeftRadius:'10px',
            borderRightRadius:'10px',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',
        }
    }
    return(
        <Box sx={{...sx_userData.layout}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Box sx={{...sx_userData.title}}>
                    <Typography sx={{fontFamily:'Tisa Sans Pro Bold', fontSize:{xs:'', md:'25px'}}}>MIS DATOS</Typography>
                </Box>
                <Divider sx={{width:'100%', height:'2px',backgroundColor:'#eae7e7'}}/>
                <Box sx={{...sx_userData.userData}}>
                    <List sx={{...sx_userData.userDataList}}>
                        {userData.map((item, index) => (
                            <>

                            <ListItem key={index} sx={{...sx_userData.userDataItem}}>
                                <Box sx={{...sx_userData.userDataListBox,}}>
                                    <Typography sx={{width:{xs:'',md:'30%'},display:{xs:'',md:'flex'},justifyContent:'end', fontFamily:'Tisa Sans Pro Bold'}}>{item}:</Typography>
                                    {item === 'Tipo usuario'?
                                        <Typography sx={{}}>Vendedor</Typography>
                                        :
                                        <TextField
                                            defaultValue="Texto predefinido"

                                            sx={{width:{xs:'auto',md:'300px'},
                                                "& fieldset": { border: 'none' },
                                                backgroundColor: '#bdbdbd',
                                            }}
                                            inputProps={{style: {fontSize: 10,color:'#636363',width:'100%',border:'none'}}}
                                            size={"small"}
                                            id="outlined-basic"

                                        />
                                    }
                                </Box>
                            </ListItem>

                            </>
                        ))}
                    </List>
                </Box>
                <Box sx={{display:'flex',padding:{xs:'',md:'10px'},justifyContent:'end', alignItems:'end',flexDirection:'column',gap:'5px'}}>
                    <Button style={{color:'white',width:'10%',backgroundColor:'black'}}>Aplicar</Button>
                    <Divider sx={{width:'100%', height:'2px',backgroundColor:'#686868'}}/>
                </Box>

            </Box>
        </Box>
    )
}

export default UserData;