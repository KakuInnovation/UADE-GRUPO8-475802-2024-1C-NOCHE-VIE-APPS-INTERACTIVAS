import {Box, Grid, List, ListItem} from "@mui/material";
import {SideBarAdmin} from "../components/admin/SidebarAdmin.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsers} from "../hooks/user-hooks.js";
import {useEffect, useState} from "react";
import {setUserData} from "../redux/slices/authSlice.js";
import {UsersData} from "../components/admin/UsersData.jsx";
import CatalogView from "../components/catalogo/CatalogView.jsx";
import {useFetchListings} from "../hooks/listing-hooks.js";
import {ListingsUserData} from "../components/admin/ListingsUserData.jsx";
import {setListings} from "../redux/slices/shoppingCartSlice.js";
import {ProductsData} from "../components/admin/ProductsData.jsx";
import {useFetchProducts} from "../hooks/product_hooks.js";


export const AdminView = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const data = useSelector(state => state.user_slice.users);
    const [usersData, setUsersData] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [listings, setListings] = useState([])

    
    
    const products = useSelector(state => state.product_slice.products)



    useEffect(() => {
        const fetchUsers = async () => {
            const data = await fetchAllUsers( dispatch);
            setUsersData(data);
        }

        fetchUsers();
    }, [token, dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',

                }
            };
            try{
                const response = await fetch(`http://localhost:8080/listing/get-listings`, options)
                const data = await response.json();
                setListings(data);
                console.log(data);
            } catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[])


    useEffect(() => {
        const fetchProductsData = async () => {
            await useFetchProducts(dispatch);
        };
        fetchProductsData();
    }, []);


        // OBSOLETO
    const handleChange = (event, action, tag) => {
        const isChecked = event? event.target.checked:'';
        switch (action) {
            case "role":
                if(isChecked){
                    setUsersData(data.filter(user => user.role === tag.toUpperCase()));
                } else {
                    setUsersData([]);
                }

                break;
            case "todos los usuarios":
                if(isChecked) {
                    setUsersData(data);
                } else {
                    setUsersData([]);
                }
                break;
            case "userId":
                alert(1);
                setUsersData(data.filter(user => user.userId === tag))
                break;
            default:
                setUsersData([]) ;
        }

    };



    return(
       <Grid container spacing={2} sx={{padding:'10px'}}>
           <Grid item xs={12} sx={{display:'flex',flexDirection:'column', gap:'50px'}}>
               <UsersData usersData={usersData}></UsersData>
               <ListingsUserData listing={listings}></ListingsUserData>
               <ProductsData products={products}></ProductsData>


           </Grid>

       </Grid>
    )
}