import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import UserData from "../components/perfil/UserData.jsx";
import SellerSelector from "../components/perfil/SellerSelector.jsx";
import '../assets/fonts/Tisa/Tisa.css'
import * as React from "react";
import Listings from "../components/perfil/Listings.jsx";
import Shopping from "../components/perfil/Shopping.jsx";
import Sales from "../components/perfil/Sales.jsx";
import CreateListing from "../components/perfil/comps/CreateListing.jsx";
import {fetchUserData, useFetchUserData} from "../hooks/user-hooks.js";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setUserListings} from "../redux/slices/userSlice.js";
import {getListingByUserMail} from "../hooks/listing-hooks.js";
import {fetchSalesByUser, getBuys} from "../hooks/sales-hooks.js";
import {useParams} from "react-router-dom";



const Perfil = () => {
    const background = 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)'
    const backgroundGrid = ' radial-gradient(circle at 50% -20.71%, #c9e7e9 0, #c9e7eb 10%, #c9e6ed 20%, #cae6ef 30%, #cbe6f1 40%, #cde5f2 50%, #cfe4f3 60%, #d1e4f4 70%, #d4e3f5 80%, #d6e2f5 90%, #d9e1f5 100%)'

    const sx_perfil = {
        grid:{
            backgroundImage:backgroundGrid,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
            justifyContent:'center',

        },
        firstGrid_Box:{
            display:'flex', padding:{xs:'',md:'15px'}, justifyContent:'start',
            backgroundImage:    'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
                '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
                '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',


        },
        firstGrid_title:{
            fontFamily:"Tisa Sans Pro Bold",
            fontSize:{xs:"",md:'25px'},
            color:'#676767',
            backgroundColor:'rgba(53,52,52,0.19)',
            width:'100%',
            padding:{xs:"",md:'10px'},


        }

    }
    const {email, userId} = useParams();


    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    const [isLoading, setIsLoading] = useState(true);
    const [listingsDTO,setListingDTO] = useState([]);
    const [salesDTO, setSalesDTO] = useState([]);
    const [purchasesDTO, setPurchasesDTO] = useState([]);
    const [userData,setUserData] = useState([]);
    const [actionUser,setActionUser] = useState(false);
    const [actionListing,setActionListing] = useState(false);
    const [actionSale,setActionSale] = useState(false);
    const [actionPurchase,setActionPurchase] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const listingsDTOs = await getListingByUserMail(email);
                setListingDTO(listingsDTOs);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [ actionUser,userData]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfo = await fetchUserData( email);
                setUserData(userInfo); // Actualización del estado local de userData
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchData();
    }, [actionUser]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sales = await fetchSalesByUser(userId);
                if (sales) {
                    setSalesDTO(sales);
                }
            } catch (error) {
                console.error('Error fetching user sales', error);
            }
        };

        if (userData && userData.userId) {
            fetchData();
        }
    }, [userData]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const sales = await getBuys( userId);
                if(sales){
                    setPurchasesDTO(sales);
                }

            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchData();
    }, []);







    const [open, setOpen] = useState(false);
    const [editListing, setEditListing] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    return(
        <Container sx={{backgroundImage:background,padding:'20px'}}>
            <Grid container sx={{...sx_perfil.grid}}>
                <Grid item xs={12} md={12}>
                    <Box sx={{...sx_perfil.firstGrid_Box}}>
                        <Typography variant="body2"  sx={{...sx_perfil.firstGrid_title}}>Mi perfil</Typography>
                    </Box>
                    <Divider sx={{width:'100%', height:'2px',backgroundColor:'#686868'}}/>
                </Grid>

                <Grid item xs={12} md={12}>
                    <UserData userInfo={userData} setAction={setActionUser}  action={actionUser}></UserData>

                </Grid>
                <Grid item  xs={12} md={12}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <CreateListing open={open} handleOpen={handleOpen} handleClose={handleClose} setEditListing={setEditListing} editListing={editListing} userId={userId}></CreateListing>
                        <SellerSelector></SellerSelector>
                    </Box>

                </Grid>
                <Grid item xs={12} md={12}>
                    <Listings listingsDTO={listingsDTO} open={open} handleOpen={handleOpen} handleClose={handleClose} setEditListing={setEditListing} setAction={setActionListing}
                    action={actionListing} ></Listings>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Shopping purchasesDTO={purchasesDTO}></Shopping>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Sales salesDTO ={salesDTO}></Sales>
                </Grid>


            </Grid>
        </Container>
    )
}

export default Perfil;