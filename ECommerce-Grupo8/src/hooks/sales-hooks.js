export const fetchSalesByUser = async () => {
    try{
        const token = sessionStorage.getItem("token");
        const userId = sessionStorage.getItem("userId");
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },

        };


        const response = await fetch(`http://localhost:8080/get-sales/user?userId=${userId}`,options);

        const data = await response.json();
        return data;
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
        await response.json();

    } catch(error) {
        console.log(error);
    }
}

export const getBuys = async ( ) => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },

    }

    try{
        const response = await fetch(`http://localhost:8080/get-purchases?userId=${userId}`, options)
        const data = await response.json();
        console.log("array:",Object.values(data))
        return data;
    } catch(error){
        console.log(error);
    }


}