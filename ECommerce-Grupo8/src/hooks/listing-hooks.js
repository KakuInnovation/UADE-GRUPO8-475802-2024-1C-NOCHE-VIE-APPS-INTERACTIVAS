import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
    failedListingFetch, fetchAlListings,
    fetchListings,
    loadingFetch
} from "../redux/slices/listingsSlice.js";
import {setListings} from "../redux/slices/shoppingCartSlice.js";

export const getListingByUserMail = async (email,token) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': "Bearer " + token //localStorage.getItem("token"),
        },
    };

    try{
        const response = await fetch(`http://localhost:8080/listing/get-listing/user?email=${email}`,options)
        const data = await response.json();
        console.log('response here');

        return data;
    }
    catch(err){
        console.log(err);
    }
}


//crear publicacion
const useFetchListingDialog = (data,token) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': "Bearer " + token //localStorage.getItem("token"),
        },
        body: JSON.stringify(data)
    };

        console.log(JSON.stringify(data));

        const fetchData = async () => {
            const data = await fetch("http://localhost:8080/listing/create-listing", options)

        }
        fetchData()



}
//componente para traer las publicaciones
const useFetchListings = (selectedCategories = [],dispatch,searchedText) => {
    const [productos, setProducts] = useState([]);
    const [search,setSearch] = useState(searchedText);
    dispatch(loadingFetch());
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    };

    useEffect(() => {
        const fetchListings = async () => {
            dispatch(loadingFetch());
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            };

            try {
                let endpoint = "http://localhost:8080/listing/get-listings";

                if (searchedText) {
                    endpoint = `http://localhost:8080/listing/get-listing/game?game=${encodeURIComponent(searchedText)}`;
                } else if (selectedCategories.length > 0) {
                    const requests = selectedCategories.map(async (category) => {
                        let [type, value] = category.split(':');

                        switch (type.toLowerCase()) {
                            case "categoria":
                                type = "category";
                                break;
                            case "dificultad":
                                type = "difficulty";
                                break;
                            case "duracion":
                                type = "duration";
                                break;
                            case "marca":
                                type = "brand";
                                break;
                            case "cantidad de jugadores":
                                type = "players";
                                break;
                        }

                        const response = await fetch(`http://localhost:8080/listing/get-listing/${type.toLowerCase()}?${type.toLowerCase()}=${encodeURIComponent(value.toLowerCase())}`, options);
                        return response.json();
                    });

                    const responses = await Promise.all(requests);
                    let data = responses.flat();

                    const uniqueIds = new Set();
                    const uniqueProducts = data.filter(product => {
                        if (!uniqueIds.has(product.listingId)) {
                            uniqueIds.add(product.listingId);
                            return true;
                        }
                        return false;
                    });

                    setProducts(uniqueProducts);
                    dispatch(fetchAlListings(uniqueProducts));
                    return;
                }

                const response = await fetch(endpoint, options);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching listings:', error);
                dispatch(failedListingFetch(error));
            }
        };

        fetchListings();
    }, [selectedCategories, searchedText]);



    useEffect(() => {
        if (productos.length > 0) {



            const listingStock = productos.filter(listing => listing.stock > 0 );
                const filteredProducts = listingStock.filter(listing => listing.listingState === true);


                    setProducts(filteredProducts);
                    dispatch(fetchListings(listingStock));
                    dispatch(setListings(listingStock));








        }

    }, [productos]);


    return productos;



};


const UseFetchListingsByUser  = ()  =>  {
    const [listings, setListings] = useState([]);
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    };
    useEffect(() => {
        const fetchListings = async () => {
            try{
                const request = await fetch(`http://localhost:8080/user/get-listing?id=${userId}`, options)
                const data = await request.json();
                setListings(data);
            } catch (error){
                console.log("Errorfetching lisings:", error)
            }

        }
        fetchListings();
    } , []);
    return listings;
}


//PUT
const fetchListingUpdate = async (listingDTO) => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: JSON.stringify(listingDTO)
    };
    console.log(listingDTO)

        try{

            const response = await fetch('http://localhost:8080/listing/update-listing', options)
            return await response.json();
        } catch (error){
            console.log("Error updating listing:", error)
            return error;
        }


}

const deleteUserListing = async (id,) =>  {
    const token = sessionStorage.getItem("token");

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },

    };
    try{
        const response = await fetch(`http://localhost:8080/listing/delete-listing?id=${id}`, options);
        return await response.json();
    }catch(error){
       return ("Error deleting listing:",error)
    }
}





export {useFetchListingDialog, useState,useFetchListings,UseFetchListingsByUser,fetchListingUpdate,deleteUserListing}