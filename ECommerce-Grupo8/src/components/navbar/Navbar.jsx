import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Icon, TextField} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../redux/slices/authSlice.js";
import {openDrawer} from "../../redux/slices/drawerSlice.js";
import TemporaryDrawer from "../home/shopping-cart/ShoppingCart.jsx";
import {fetchSearchedText} from "../../redux/slices/listingsSlice.js";
import Cookies from "js-cookie";





export default function Navbar() {

    const background =   'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
                                 '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
                                 '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)'
    const sx_navbar= {
        layout:{
            backgroundImage:    'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
                '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
                '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
            display:{xs:'',md:'flex'},
            paddingLeft:'11px',


        },
        layout_toolbar:{
            display:{xs:'flex',md:'flex'},
            width:'100%',
            justifyContent:'space-between',


        },
        logo:{

        },
        items:{
            width:{xs:'none',md:'60%'},

            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            gap:'20px',

        },

        options:{
            display:{xs:'none',md:'flex'},
            width:'100%',
            gap:'10px',

            justifyContent:"end"
        },

        login:{
            color:'#636363'
        },

        items_button:{
            borderBottomLeftRadius:'10px',
            borderBottomRightRadius:'10px',
            borderLeftRadius:'10px',
            borderRightRadius:'10px',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',
            backgroundImage:    'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
                                '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
                                '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            width:{xs:'',md:'15%'},
            padding:'5px'
        },

        input_field:{
            display:{xs:'none',md:'flex'},
            width:{xs:'',md:'40%'},
            justifyContent:'center',
            alignItems:'center',
            gap:'px',
            borderBottomLeftRadius:'10px',
            borderBottomRightRadius:'10px',
            borderLeftRadius:'10px',
            borderRightRadius:'10px',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',
        },

        input:{
            width:'70%',
            backgroundColor:'#efebeb',
            color:'#636363',
            borderBottomLeftRadius:'10px',
            borderBottomRightRadius:'10px',
            borderLeftRadius:'10px',
            borderRightRadius:'10px',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',
            margin:'10px',
            "& fieldset": { border: 'none' },
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            fontSize:'10px',


        }

    }



    const navbarList = [{title:'Home',route:'/'},{title:'Catalogo',route:'/catalogo'},{title:'Nosotros',route:'/nosotros'},{title:'Contacto',route:'/contacto'}]
    const [searchText, setSearchText] = useState('');
    const  token = useSelector((state) => state.auth.token);
    const userId = sessionStorage.getItem("userId");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productQuantity = useSelector((state) => state.shopping_cart.productQuantity);
    const t = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("rol");
    const email = sessionStorage.getItem("email");

    const handleSearch = () => {
            dispatch( fetchSearchedText(searchText))
            navigate(`/catalogo/${searchText}`);

    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {


            handleSearch();
        }
    };

    const handleOptionsClick = (option) => {
        // Navega a la página de catálogo al hacer clic en el carrito
        switch (option) {
            case 'login':
                navigate('/login');
                break;
            case 'micuenta':

                navigate(`/profile/${email}/${userId}`);
                break;
            case 'admin':
                navigate('/adminView');
                break;
            case 'logout':
                dispatch(logOut());
                navigate('/');
                break;
            default: return 'opcion no reconocida'

        }

    };


    return (
        <Box >
            <AppBar sx={{...sx_navbar.layout,}} elevation={1} style={{backgroundImage:background}}>
                <Toolbar sx={{...sx_navbar.layout_toolbar}} style={{padding:'0px'}}>
                    <Box sx={{...sx_navbar.logo}}>
                        <Typography variant="h6" component="div" >
                            Roll N' Play
                        </Typography>
                    </Box>
                  
                    <Box sx={{...sx_navbar.items}}>
                        <Box sx={{...sx_navbar.options}}>

                            {navbarList.map((item,index) => (
                                <IconButton key={index} sx={{...sx_navbar.items_button}} component={NavLink} to={item.route}>
                                    <Typography sx={{ fontFamily:'Tisa Sans Pro Regular', color:'#636363', fontSize:'13px'}}>{item.title}</Typography>
                                </IconButton>
                            ))
                            }
                        </Box>
                        <Box  sx={{...sx_navbar.input_field}}>
                            <TextField
                                placeholder={"Buscar"}
                                sx={{...sx_navbar.input}}
                                inputProps={{style: {fontSize: 10,color:'#636363'}}}
                                size={"small"}
                                id="outlined-basic"
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <IconButton
                                sx={{display:'flex',justifyContent:'center',backgroundImage:background, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', }}
                                onClick={() => handleSearch()}
                            >
                                <SearchIcon sx={{color:'#636363'}}></SearchIcon>
                            </IconButton>
                        </Box>


                    </Box>
                    <Box sx={{...sx_navbar.login}}>
                        <IconButton onClick={() => dispatch(openDrawer())} sx={{backgroundColor:'white',color:'#636363',  border:'2px solid #b1afaf'}}>
                            <ShoppingCartIcon />{ productQuantity >0?<Typography
                            sx={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                backgroundColor: '#f50057',
                                color: '#fff',
                                borderRadius: '50%',

                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                            }}

                        >{productQuantity}</Typography>:''}
                        </IconButton>
                        {t?
                            <>
                                <Button onClick={()=> handleOptionsClick('micuenta')} color="inherit">Mi cuenta</Button>
                                {role === 'ADMIN' && (
                                    <Button onClick={() => handleOptionsClick('admin')} color="inherit">ADMIN</Button>
                                )}
                                <Button onClick={()=> handleOptionsClick('logout')} color="inherit">Logout</Button>
                            </>
                            :

                            <Button onClick={()=> handleOptionsClick('login')} color="inherit">Login</Button>

                        }


                    </Box>

                </Toolbar>
            </AppBar>
            <TemporaryDrawer></TemporaryDrawer>
        </Box>
    );
}
