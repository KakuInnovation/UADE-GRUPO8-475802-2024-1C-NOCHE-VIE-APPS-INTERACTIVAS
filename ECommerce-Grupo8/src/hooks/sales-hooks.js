export const fetchSalesByUser = async (userId) => {
    try{
        const token = sessionStorage.getItem("token");

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },

        };


        const response = await fetch(`http://localhost:8080/get-sales/user?userId=${userId}`,options);
        const statusCode = response.status;
        if(statusCode >= 200 && statusCode < 300){
            return await response.json();
        } else{
            alert("Error interno al traer las ventas del usuario")
        }

    } catch (error){
        console.log(error);
    }
}

export const fetchBuy = async (shoppingCart,subtotal,dispatch) => {


    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    console.log(shoppingCart)
    const saleDTO = {
        "buyer" : userId,
        "listingsDTO" : shoppingCart

    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: JSON.stringify( saleDTO )
    }
    try{
        const response = await fetch("http://localhost:8080/create-sale",options)
        const statusCode = response.status;
        if(statusCode >= 200 && statusCode < 300){
            alert("Compra realizada existosamente")
        } else {
            alert("Error al realizar la compra")
        }

    } catch(error) {
        console.log(error);
    }
}

export const getBuys = async ( userId) => {
    const token = sessionStorage.getItem("token");

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },

    }

    try{
        const response = await fetch(`http://localhost:8080/get-purchases?userId=${userId}`, options)
        const statusCode = response.status;
        if(statusCode >= 200 && statusCode < 300){
            return await response.json();
        } else {
            alert("Error interno al traer las compras")
        }

    } catch(error){
        console.log(error);
    }


}