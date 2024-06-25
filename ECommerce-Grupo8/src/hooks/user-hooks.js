import {useEffect, useState} from "react";
import {failedLogin, fetchLogin, loadingLogin} from "../redux/slices/authSlice.js";
import {useSelector} from "react-redux";


export const useLogin = () => {
    let token = "";

    return async (email, password,dispatch) => {
        dispatch(loadingLogin())
        try {


            const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,password})

            });

            if (!response.ok) {
                throw new Error('Failed to authenticate');
            }

            const data = await response.json();
            token = data.access_token;

            dispatch(fetchLogin({email, password,token}));




        } catch (error) {
            console.error('Error logging in:', error);
            dispatch(failedLogin({error: error.message}));

        }

        return token;
    };
}


export const useFetchUserData = (email) => {
    const [userData, setUserData] = useState({});
    const token = useSelector(state => state.auth.token);
    console.log("token:" + token)

    const [isLoading, setIsLoading] = useState(true);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    };


    useEffect( () => {
        const fetchUserData = async () => {

            const request = await fetch(`http://localhost:8080/user/get-user/email?email=${email}`,options);
            const data = await request.json();
            setUserData(data);
            }
        fetchUserData();
        }
        , [])




   return userData;

}




