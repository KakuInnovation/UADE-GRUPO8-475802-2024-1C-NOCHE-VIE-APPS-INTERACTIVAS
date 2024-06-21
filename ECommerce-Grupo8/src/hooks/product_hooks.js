import {useEffect, useState} from "react";

const useFetchGetCategories = async () => {
    const [categories, setCategories] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': "Bearer " +  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb3lwdEBleGFtcGxlLmNvbSIsImlhdCI6MTcxODg2NDI0" +
                "OCwicm9sZSI6IlVTRVIiLCJleHAiOjE3MjE0NTYyNDh9.lFF1Ct82U6vL-NOcvIu8ypu589OoQvf-IVsH1ItLHTTBB6MEbD0Ypc" +
                "Hc4WIZdClPLC06wMLzGTdMGhuiE9gXng"//localStorage.getItem("token"),
        },

    };
    useEffect(async () =>{
        const response = await fetch("http://localhost:8080/listing/getCategories", options);
        const data = await response.json();
        setCategories(data)
    },[])

    return categories;

}

const useFetchProducts =  () => {
    const [products, setProducts] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': "Bearer " +  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb3lwdEBleGFtcGxlLmNvbSIsImlhdCI6MTcxODg2NDI0" +
                "OCwicm9sZSI6IlVTRVIiLCJleHAiOjE3MjE0NTYyNDh9.lFF1Ct82U6vL-NOcvIu8ypu589OoQvf-IVsH1ItLHTTBB6MEbD0Ypc" +
                "Hc4WIZdClPLC06wMLzGTdMGhuiE9gXng" //localStorage.getItem("token"),
        },
    };

    useEffect( () =>{
        const fetchProducts = async () => {
        const response = await fetch("http://localhost:8080/get-all-products", options)
        const data = await response.json();
        setProducts(data)
        }
        fetchProducts();
        },[])

    return products;
}

const useFetchPlayers =  () => {
    const [players, setPlayers] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': "Bearer " +  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb3lwdEBleGFtcGxlLmNvbSIsImlhdCI6MTcxODg2NDI0" +
                "OCwicm9sZSI6IlVTRVIiLCJleHAiOjE3MjE0NTYyNDh9.lFF1Ct82U6vL-NOcvIu8ypu589OoQvf-IVsH1ItLHTTBB6MEbD0Ypc" +
                "Hc4WIZdClPLC06wMLzGTdMGhuiE9gXng"//localStorage.getItem("token"),
        },
    };

    useEffect( () => {
        const fetchPlayers = async ()  => {
            const response = await fetch("http://localhost:8080/player/get-all-players", options)
            const data = await response.json();
            setPlayers(data)
        }
    fetchPlayers()},
        [])

    return players;
}

const useFetchBrand =  () => {
    const [brands, setBrands] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb3lwdEBleGFtcGxlLmNvbSIsImlhdCI6MTcxODg2NDI0" +
                "OCwicm9sZSI6IlVTRVIiLCJleHAiOjE3MjE0NTYyNDh9.lFF1Ct82U6vL-NOcvIu8ypu589OoQvf-IVsH1ItLHTTBB6MEbD0Ypc" +
                "Hc4WIZdClPLC06wMLzGTdMGhuiE9gXng"//localStorage.getItem("token"),
        },
    };


    useEffect( () =>{
        const fetchBrands = async () => {
            const response = await fetch("http://localhost:8080/brand/get-all-brands", options)
            const data = await response.json();
            setBrands(data)
        }
        fetchBrands()
    },[])
    return brands;
}

const useFetchDifficulty =  () => {
    const [difficulty, setDifficulty] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb3lwdEBleGFtcGxlLmNvbSIsImlhdCI6MTcxODg2NDI0" +
                "OCwicm9sZSI6IlVTRVIiLCJleHAiOjE3MjE0NTYyNDh9.lFF1Ct82U6vL-NOcvIu8ypu589OoQvf-IVsH1ItLHTTBB6MEbD0Ypc" +
                "Hc4WIZdClPLC06wMLzGTdMGhuiE9gXng"//localStorage.getItem("token"),
        },
    };

    useEffect( () => {
        const fetchDifficulty = async () => {
            const response = await fetch ("http://localhost:8080/difficulty/get-all-difficulties",options)
            const data = await response.json();
            setDifficulty(data)
        }
        fetchDifficulty()
    },[])

    return difficulty;
}

const useFetchDuration =  () => {
    const [duration, setDuration] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzb3lwdEBleGFtcGxlLmNvbSIsImlhdCI6MTcxODg2NDI0" +
                "OCwicm9sZSI6IlVTRVIiLCJleHAiOjE3MjE0NTYyNDh9.lFF1Ct82U6vL-NOcvIu8ypu589OoQvf-IVsH1ItLHTTBB6MEbD0Ypc" +
                "Hc4WIZdClPLC06wMLzGTdMGhuiE9gXng"//localStorage.getItem("token"),
        },
    };

    useEffect(() => {
        const fetchDuration = async () => {
            const response = await fetch ("http://localhost:8080/duration/get-all-duration", options)
            const data = await response.json();
            setDuration(data);
        }
        fetchDuration();
    },[])
    return duration;
}


export {useFetchProducts, useFetchBrand, useFetchDifficulty, useFetchDuration, useFetchGetCategories, useFetchPlayers}
