import {Box, Button, createTheme, TextField, ThemeProvider, Typography} from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useEffect, useState} from "react";

import '../../assets/fonts/Tisa/Tisa.css'
import '../../assets/fonts/Inter/Inter.css'
import {useDispatch, useSelector} from "react-redux";
import {sideBar_sx} from "../../assets/styles/listings/sidebar_filter_sx.js";
import {fetchAllUsers} from "../../hooks/user-hooks.js";


const theme = createTheme({
    typography: {
        fontFamily: 'Tisa Sans Pro Regular',
        fontSize:'15px',


    },
});




const SidebarUserFilter = ({handleChange}) => {
    const token = useSelector((state) => state.auth.token);
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const [userIdInput, setUserIdInput] = useState("");
    useEffect(() => {
        setUsers();
    },[])

    const data_navbar = [
        "seller",
        "user",
        "admin"

    ]

    const handleCheckboxChange = (event, action, tag) => {
        if (handleChange) {

            handleChange(event, action, tag);
        }
    };

    const handleUserIdChange = (event) => {

        setUserIdInput(event.target.value);
    };

    const handleSearchClick = () => {
        if (handleChange && userIdInput.trim() !== "") {
            handleChange(null, "userId", userIdInput.trim()); // Llama a handleChange con la acción "userId" y el valor actual de userIdInput
        }
    };


    return(
        <>
            <Box sx={{...sideBar_sx.layout}}>



                <Box sx={{...sideBar_sx.category}} >
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        alignItem:'center',

                        borderBottom: '2px solid #e4e4e4',
                    }}>
                        <Typography variant="body2" sx={{...sideBar_sx.title_2,padding:{xs:'',md:'5px'}}}>Id de Usuaurio</Typography>
                    </Box>

                    <Box sx={{...sideBar_sx.item_category}}>


                        <ThemeProvider theme={theme}>
                            <FormControlLabel
                                value="end"
                                control={<Checkbox />}
                                label= {"Todos los usuarios"}
                                labelPlacement="end"
                                style={{color:'#636363', fontSize:'14px'}}
                                onClick= {(event) => handleCheckboxChange(event,"todos los usuarios",'')}
                            />
                        </ThemeProvider>



                                <Box  sx={{ display:'flex', justifyContent:'start',alignItems:'center',   gap:'5px',}}>
                                    <Typography
                                        sx={{
                                            ...sideBar_sx.title_2,
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItem:'center',
                                            paddingTop:'10px',


                                            }}>
                                        User id:
                                    </Typography>
                                    <TextField
                                        variant="outlined"
                                        placeholder={"userId"}
                                        onChange={handleUserIdChange}
                                        value={userIdInput}
                                        sx={{width:'70%'}}
                                        inputProps={{
                                            style: {
                                                padding: 5,
                                                height:'20px'
                                            }
                                        }}
                                        margin="normal"

                                    >

                                    </TextField>

                                </Box>
                        <Box sx={{...sideBar_sx.apply, borderBottom:'none',justifyContent:'center'}}>
                            <Button sx={{...sideBar_sx.button}} onClick={handleSearchClick}>Buscar</Button>
                        </Box>


                    </Box>
                </Box>


            </Box>

            <Box sx={{...sideBar_sx.layout}}>



                            <Box sx={{...sideBar_sx.category}} >
                                <Box sx={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItem:'center',

                                    borderBottom: '2px solid #e4e4e4',
                                }}>
                                    <Typography variant="body2" sx={{...sideBar_sx.title_2,padding:{xs:'',md:'5px'}}}>Rol</Typography>
                                </Box>

                                <Box sx={{...sideBar_sx.item_category}}>
                                    {
                                        data_navbar.map((tag, index) => (
                                            <Box key={index} sx={{}}>
                                                <ThemeProvider theme={theme}>
                                                    <FormControlLabel
                                                        value="end"
                                                        control={<Checkbox />}
                                                        label= {tag}
                                                        labelPlacement="end"
                                                        style={{color:'#636363', fontSize:'14px'}}
                                                        onClick= {(event) => handleCheckboxChange(event,"role",tag)}
                                                    />
                                                </ThemeProvider>
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </Box>


            </Box>
        </>
    )
}
export default SidebarUserFilter;