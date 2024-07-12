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


/**GET TODOS LOS PRODUCTOS**/
const useFetchProducts =  async (dispatch) => {


    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    };
    try{
        const response = await fetch("http://localhost:8080/get-all-products", options)
        const statusCode =  response.status;
        let data = null;
        if(statusCode >= 200 && statusCode < 300){
            data = await response.json();
            dispatch(fetchProducts(data));

        } else if (statusCode >  400 && statusCode < 500){
            console.error('Error fetching products from product',statusCode);
        } else if (statusCode >= 500){
            console.error('Error fetching products from product ',statusCode);
        }


        return data;



    }
     catch(error){
        dispatch(errorProductFetch);
     }

}
/**POST CREACION PRODUCTOS**/
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
        const statusCode =  response.status;
        if(statusCode >= 200 && statusCode < 300){
            alert("Usuario creado correctamente")
        }
        else if(statusCode > 400 && statusCode < 500){
            alert("400 error")
        }
        else if(statusCode >= 500){
            alert("Error interno del  server")
        }
        const data = await response.json();


    } catch (error){
        console.log(error);
    }
}

/**PUT ACTUALIZACION DE PRODUCTOS**/
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
        const statusCode =  response.status;;
        if(statusCode >= 200 && statusCode < 300){
            const data = await response.json();
            alert("Producto actualizado correctaemnte")
        } else if(statusCode > 400 && statusCode < 500){
            alert("Not found")
        } else if(statusCode === 500){
            alert("Server Error")
        } else {
            console.log(`Unexpected status code: ${statusCode}`)
        }


    } catch (error){
        console.log("error:",error.response);
        dispatch(errorProductFetch())
    }

}

/**GET CATEGORIAS**/
const useFetchGetCategories = async (dispatch) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-categories`, options)
        const statusCode =  response.status;
        if(statusCode >= 200 && statusCode < 300){
            const data = await response.json();
            dispatch(fetchCategory(data));
        }

    } catch (error){
        console.log(error)
    }

}

/**GET CANTIDAD DE JUGADORES**/
const useFetchPlayers =  async (dispatch) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-all-players`, options)
        const statusCode =  response.status;

        if(statusCode >= 200 && statusCode < 300){
            const data = await response.json();
            dispatch(fetchPlayer(data));
        }

    } catch (error){
        console.log(error)
    }

}


/**GET MARCAS**/
const useFetchBrand = async (dispatch) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-brands`, options)
        const statusCode =  response.status;
        if(statusCode >= 200 && statusCode < 300){
            const data = await response.json();
            dispatch(fetchBrand(data));
        }


    } catch (error){
        console.log(error)
    }



}
/**GET DIFICULTADES**/
const useFetchDifficulty = async (dispatch) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-all-difficulties`, options)
        const statusCode =  response.status;

        if(statusCode >= 200 && statusCode < 300){
            const data = await response.json();
            dispatch(fetchDifficulties(data));
        }


    } catch (error){
        console.log(error)
    }

}


/**GET DURACION**/
const useFetchDuration = async (dispatch) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    };

    try{
        const response = await fetch(`http://localhost:8080/get-all-durations`, options)
        const statusCode =  response.status;

        if(statusCode >= 200 && statusCode < 300){
            const data = await response.json();
            dispatch(fetchDurations(data));
        }


    } catch (error){
        console.log(error)
    }

}

/**DELETE PRODUCTO**/
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
       const response =  await fetch(`http://localhost:8080/delete-product?productId=${productId}`, options)
        const statusCode =  response.status;
       if(statusCode >= 200 && statusCode < 300){
           alert("Producto eliminado correctamente")
       } else if(statusCode > 300){
           alert("Error al eliminar el producto")
       }
    }
    catch(error) {
        console.log(error);
    }

}

//hacer fetch de categorias, marcas, duracion ,cantidad jugadores




export {useFetchProducts, useFetchBrand, useFetchDifficulty, useFetchDuration, useFetchGetCategories, useFetchPlayers}
