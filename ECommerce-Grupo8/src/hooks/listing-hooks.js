import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {failedListingFetch, fetchListingsWithStock, loadingFetch} from "../redux/slices/listingsWithStockSlice.js";

const useFetchListingsCreate = () => {
    const [userId, setUserId] = useState("");
    const [listingId, setListingId] = useState("");
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImageList] = useState([]);
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [productDTO, setProductDTO] = useState("");
    const [listingState, setListingState] = useState("");
    const [category, setCategory] = useState("");


    const data = {
        "userId": userId,
        "listingId": listingId,
        "title": title,
        "description": description,
        "images": images,
        "price": price,
        "stock": stock,
        "productDTO": productDTO,
        "listingState": listingState,

    }

    return {userId, listingId, title, description, images, price, stock, setListingId, setUserId, setTitle, setDescription, setImageList, setPrice,
        setStock, setProductDTO, setListingState};

}

const useFetchListingDialog = (data) => {
    const token = useSelector(state => state.auth.token);
// Configuración de la solicitud
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': "Bearer " + token //localStorage.getItem("token"),
        },
        body: JSON.stringify(data)
    };



    useEffect( ()  => {
        const fetchData = async () => {
            const data = await fetch("http://localhost:8080/listing/create-listing", options)
        }
        fetchData()
    }, []);


}

const useFetchListings = (selectedCategories = [],dispatch) => {
    const [productos, setProducts] = useState([]);

    dispatch(loadingFetch());
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    };

    useEffect(() => {
        const fetchListings = async () => {
            if (selectedCategories.length === 0) {
                try {
                    const response = await fetch("http://localhost:8080/listing/get-listings", options);
                    const data = await response.json();
                    setProducts(data);





                } catch (error) {
                    console.error('Error fetching all listings:', error);
                    dispatch(failedListingFetch(error));
                }
            } else {
                try {
                    const requests = selectedCategories.map( async (category)  =>  {
                        let [type, value] = category.split(':');

                        switch (type) {
                            case "categoria":
                                type = "category"
                                break;
                            case "dificultad":
                                type = "difficulty"
                                break;
                            case "duracion":
                                type = "duration"
                                break;
                            case "marca":
                                type = "brand"
                                break;
                        }

                        const response = await  fetch(`http://localhost:8080/listing/get-listing/${type}?${type}=${value.toLowerCase()}`, options)
                        return response.json()
                    });

                    const responses = await Promise.all(requests);
                    const data = responses.flat();

                    const uniqueIds = new Set();
                    const uniqueProducts = data.filter(product => {
                        if (!uniqueIds.has(product.listingId)) {
                            uniqueIds.add(product.listingId);
                            return true;
                        }
                        return false;
                    });

                    setProducts(uniqueProducts);
                } catch (error) {
                    console.error('Error fetching filtered listings:', error);
                }
            }
        };

        fetchListings();
    }, [selectedCategories]);


    useEffect(() => {
        if (productos.length > 0) {
            const listingStock = productos.filter(listing => listing.stock > 0);
            dispatch(fetchListingsWithStock(listingStock));
        }
    }, [productos, dispatch]);

    return productos;
};


const useFetchListingsByUser  = (userId)  =>  {
    const [listings, setListings] = useState([]);
    const token = useSelector(state => state.auth.token);
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



export {useFetchListingDialog, useState,useFetchListings,useFetchListingsByUser}