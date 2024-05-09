import {Box, Checkbox, List, ListItem, TextField, Typography} from "@mui/material";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";

const UserData = () => {
    const userData = ['Nombre','Nickname','Email','Telefono','Direccion','Tipo usuario']
    const sx_userData = {
        layout:{
            height:"auto",
            backgroundColor:'red',
            display:{xs:'',md:'flex'},
            padding:{xs:'auto',md:'20px'}
        },
        title:{
            backgroundColor: 'violet',
            display:{xs:'',md:'flex'},
            justifyContent:'center',
        },
        userData:{
            display:{xs:'',md:'flex'},
        },
        userDataList:{
            display:{xs:'',md:'flex'},
            flexWrap:'wrap',
        },
        userDataItem:{
            display:{xs:'',md:'flex'},
            width:'50%',
            backgroundColor:'blue',
        },
        userDataListBox:{
            display:{xs:'',md:'flex'},
            backgroundColor:'green',
            alignItems:'center',
            width:'100%',
            justifyContent: 'start',
            gap:{xs:'',md:'20px'},
        }
    }
    return(
        <Box sx={{...sx_userData.layout}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Box sx={{...sx_userData.title}}>
                    <Typography>Mis datos</Typography>
                </Box>
                <Box sx={{...sx_userData.userData}}>
                    <List sx={{...sx_userData.userDataList}}>
                        {userData.map((item, index) => (
                            <ListItem key={index} sx={{...sx_userData.userDataItem}}>
                                <Box sx={{...sx_userData.userDataListBox,}}>
                                    <Typography sx={{width:{xs:'',md:'30%'},display:{xs:'',md:'flex'},justifyContent:'end'}}>{item}:</Typography>
                                    {item === 'Tipo usuario'?
                                        <Typography sx={{}}>Vendedor</Typography>
                                        :
                                        <TextField
                                            sx={{width:{xs:'auto',md:'300px'}}}
                                            inputProps={{style: {fontSize: 10,color:'#636363',width:'100%'}}}
                                            size={"small"}
                                            id="outlined-basic"
                                        />
                                    }

                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default UserData;