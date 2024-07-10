import {useEffect, useState} from "react";
import {failedLogin, fetchLogin, loadingLogin, setUserData} from "../redux/slices/authSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {setAllUsers, setLoading} from "../redux/slices/userSlice.js";


export const useLogin = () => {
    let token = "";


    return async (email, password,dispatch) => {
        dispatch(loadingLogin())
        try {


            const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({email,password})

            });

            if (!response.ok) {
                throw new Error('Failed to authenticate');
            }

            const data = await response.json();
            token = data.access_token;
            const userId =data.userId;
            const role = data.role;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('email', email)
            sessionStorage.setItem('rol', role);
            dispatch(fetchLogin({email, password,token,userId,role}));

        } catch (error) {
            console.error('Error logging in:', error);
            dispatch(failedLogin({error: error.message}));

        }
        return token;
    };
}

export const signUp = async (userDTO) => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDTO)
            });

            if (response.ok) {
               console.log('user created successfully');
            }

        } catch (error) {
            console.error('Error logging in:', error);
        }
}


export const useFetchUserData =  async (email,token) => {
    /*
    const [userData, setUserData] = useState({});
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
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
   */


}

export const fetchUserData = async (dispatch) => {
    const token = sessionStorage.getItem('token');
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    };

    const email = sessionStorage.getItem('email');
    try{
        const response =await fetch(`http://localhost:8080/user/get-user/email?email=${email}`,options);
        const data = await response.json();

        console.log('response user here')
        return data;

    }catch (error) {
        console.error('Error fetching in:', error);
    }
}

export const fetchAllUsers = async ( dispatch) => {
    const token = sessionStorage.getItem('token');
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    };
     dispatch(setLoading())
    try{
        const response = await fetch("http://localhost:8080/user/get-all-users",options);
        const data = await response.json();
        console.log("data",data)
        if(data){
            dispatch(setAllUsers(data));
            console.log("data",data)

        }
        return data;

    } catch (error){
        console.error('Error fetching in:', error);
    }

}



export const fetchUpdateUserData = (userData,token) => {


    const userDTO = {
        userId: userData.find(item => item.key === 'userId').data,
        firstName: userData.find(item => item.key === 'Nombre').data,
        lastName: userData.find(item => item.key === 'Apellido').data,
        username: userData.find(item => item.key === 'Email').data,
        password: userData.find(item => item.key === 'Contraseña').data,
        address: userData.find(item => item.key === 'Direccion').data,
        phoneNumber: userData.find(item => item.key === 'Telefono').data,
        document: userData.find(item => item.key === 'Documento').data,
        role: userData.find(item => item.key === 'Tipo usuario').data,
    };

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userDTO)
    };


        const updateUserData = async () => {
            try {
                const response = await fetch('http://localhost:8080/user/update-user', options);

                console.log(response,'User updated successfully');
            } catch (error) {
                console.error('Error updating user:', error);
            }
        };
        updateUserData();

};

export const updateUserRoleToSeller = (email,token) => {
    const userDTO = {
        username: email,
        role: 'SELLER'
    }

    const role = "SELLER"
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userDTO),
    };
    const updateRoleToSeller = async () => {
        try{
            const response = await fetch('http://localhost:8080/user/update-user-role',options);
            const data = await response.json();
        } catch (error){
            console.log('Error updating user: ',error)
        }

    }
    updateRoleToSeller();


}





