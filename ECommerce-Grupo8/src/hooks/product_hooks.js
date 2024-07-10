import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchDifficulties,
    fetchDurations,
    fetchBrand,
    fetchPlayer,
    loadingFetch, fetchCategory
} from "../redux/slices/listingsSlice.js";
import {
    errorProductFetch,
    fetchProducts,
    loadingProductFetch,
    updateProductInList
} from "../redux/slices/product_slice.js";

const useFetchProducts =  async (dispatch) => {


    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    };
    try{
        const response = await fetch("http://localhost:8080/get-all-products", options)
        const data = await response.json();
        console.log("fetching",data)

        dispatch(fetchProducts(data));
        return data;

    }
     catch(error){
        dispatch(errorProductFetch);
     }

}

export const createProduct = async (productDTO,dispatch) => {
    const token = sessionStorage.getItem("token");
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: JSON.stringify(productDTO),
    };


    try{
        const response = await fetch(`http://localhost:8080/create-product`, options)
        const data = await response.json();


    } catch (error){
        console.log(error);
    }
}

export const fetchProductUpdate = async(productDTO,dispatch ) => {
    dispatch(loadingProductFetch());
    const token = sessionStorage.getItem("token");
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: JSON.stringify(productDTO),
    };

    try{
        const response = await fetch(`http://localhost:8080/update-product`, options)
        const data = await response.json();
        console.log('Product update response:', data);

    } catch (error){
        console.log("error:",error.response);
        dispatch(errorProductFetch())
    }

}


const useFetchGetCategories = async (dispatch) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-categories`, options)
        const data = await response.json();
        dispatch(fetchCategory(data));

    } catch (error){
        console.log(error)
    }

}


const useFetchPlayers =  async (dispatch) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-all-players`, options)
        const data = await response.json();
        dispatch(fetchPlayer(data));

    } catch (error){
        console.log(error)
    }

}

const useFetchBrand = async (dispatch) => {


    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-brands`, options)
        const data = await response.json();
        dispatch(fetchBrand(data));

    } catch (error){
        console.log(error)
    }



}

const useFetchDifficulty = async (dispatch) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-all-difficulties`, options)
        const data = await response.json();
        dispatch(fetchDifficulties(data));

    } catch (error){
        console.log(error)
    }

}

const useFetchDuration = async (dispatch) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-all-durations`, options)
        const data = await response.json();

        dispatch(fetchDurations(data));

    } catch (error){
        console.log(error)
    }

}

export const deleteProduct = async (productId) => {
    const token = sessionStorage.getItem("token");
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token

        },
    };
    try{
        await fetch(`http://localhost:8080/delete-product?productId=${productId}`, options)
    }
    catch(error) {
        console.log(error);
    }

}

//hacer fetch de categorias, marcas, duracion ,cantidad jugadores




export {useFetchProducts, useFetchBrand, useFetchDifficulty, useFetchDuration, useFetchGetCategories, useFetchPlayers}
