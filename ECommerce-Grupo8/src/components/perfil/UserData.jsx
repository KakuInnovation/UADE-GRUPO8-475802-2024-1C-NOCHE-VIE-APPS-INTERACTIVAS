import {Box, Button, Checkbox, Divider, InputAdornment, List, ListItem, TextField, Typography} from "@mui/material";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import '../../assets/fonts/Tisa/Tisa.css'
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {useSelector} from "react-redux";
import {fetchUpdateUserData} from "../../hooks/user-hooks.js";

const UserData = ({userInfo,setAction,action}) => {
    const token = useSelector(state => state.auth.token);
    const password = useSelector(state => state.auth.password);
    const email = useSelector(state => state.auth.email);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        if (userInfo) {
            setUserData([
                { key: 'Nombre', data: userInfo.firstName || '' },
                { key: 'Apellido', data: userInfo.lastName || '' },
                { key: 'Email', data: userInfo.username || '' },
                { key: "Contraseña", data: password || '' },
                { key: "Telefono", data: userInfo.phoneNumber || '' },
                { key: "Direccion", data: userInfo.address || '' },
                { key: "Documento", data: userInfo.document || '' },
                { key: "Tipo usuario", data: userInfo.role || '' },
                { key: 'userId', data: userInfo.userId || '' }
            ]);
        }
    }, [userInfo, email, password]);

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleUpdateFieldText  = (key,newData) => {
        setUserData((prevData) =>
            prevData.map((item) =>
                item.key === key ? { ...item, data: newData } : item
            )
        );
    };

    const handleUpdateUserData = () => {

        fetchUpdateUserData(userData,token);
        setAction(!action);
    }



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
                                    <Typography sx={{width:{xs:'',md:'30%'},display:{xs:'',md:'flex'},justifyContent:'end', fontFamily:'Tisa Sans Pro Bold', fontSize:'17px'}}>{item.key}:</Typography>
                                    { item.key === 'userId'?
                                        <Typography sx={{}}>{item.data}</Typography>
                                        :
                                        <TextField
                                            value={item.data}
                                            disabled={sessionStorage.getItem('rol') !== "ADMIN" && item.key ==='Tipo usuario'}
                                            type={item.key === "Contraseña" ? (showPassword ? 'text' : 'password') : 'text'}
                                            onClick={item.key === "Contraseña" ?handleTogglePasswordVisibility:''}
                                            sx={{width:{xs:'auto',md:'300px'},
                                                "& fieldset": { border: 'none' },
                                                backgroundColor: '#bdbdbd',
                                            }}
                                            inputProps={{style: {fontSize: '15px',color:'#636363',width:'100%',border:'none'}}}
                                            size={"small"}
                                            id="outlined-basic"
                                            onChange={(e) => handleUpdateFieldText(item.key, e.target.value)}
                                            InputProps={{
                                                endAdornment: item.key === "Contraseña" && (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleTogglePasswordVisibility}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}

                                        />
                                    }
                                </Box>
                            </ListItem>

                            </>
                        ))}
                    </List>
                </Box>
                <Box sx={{display:'flex',padding:{xs:'',md:'10px'},justifyContent:'end', alignItems:'end',flexDirection:'column',gap:'5px'}}>
                    <Button style={{color:'white',width:'10%',backgroundColor:'black'}} onClick={handleUpdateUserData}>Aplicar</Button>
                    <Divider sx={{width:'100%', height:'2px',backgroundColor:'#686868'}}/>
                </Box>

            </Box>
        </Box>
    )
}

UserData.propTypes = {
    userInfo: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        username: PropTypes.string,
        password: PropTypes.string,
        phoneNumber: PropTypes.string,
        address : PropTypes.string,
        document: PropTypes.string,
        role: PropTypes.string,
    }).isRequired
};

export default UserData;