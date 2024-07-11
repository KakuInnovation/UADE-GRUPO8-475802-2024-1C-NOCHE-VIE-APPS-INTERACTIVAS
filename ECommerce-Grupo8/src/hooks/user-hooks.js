import {failedLogin, fetchLogin, loadingLogin} from "../redux/slices/authSlice.js";
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
                alert('email o contraseña incorrecta');
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
               alert("Usuario creado correctamente");
            } else {
                alert("Error al crear al usuario")
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

export const fetchUserData = async (email) => {
    const token = sessionStorage.getItem('token');
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    };


    try{
        const response =await fetch(`http://localhost:8080/user/get-user/email?email=${email}`,options);
        const statusCode = response.status;
        if(statusCode >= 200 && statusCode < 300){
            return await response.json();
        } else{
            alert("Error al traer los datos del usuario")
        }


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
        const statusCode = response.status;
        if(statusCode >= 200 && statusCode < 300){
            const data = await response.json();
            console.log("data",data)
            if(data){
                dispatch(setAllUsers(data));
                console.log("data",data)

            }
            return data;
        } else {
            alert("Error al traer todos los usuarios")
        }


    } catch (error){
        console.error('Error fetching in:', error);
    }

}



export const fetchUpdateUserData = (userData) => {
    const token = sessionStorage.getItem("token");

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
                const statusCode = response.status;

                if(statusCode >= 200 && statusCode < 300){
                    alert("Usuario actualizado correctamente");
                } else {
                    alert("Error al actualizar al usuario")
                }

            } catch (error) {
                console.error('Error updating user:', error);
            }
        };
        updateUserData();

};

export const updateUserRoleToSeller = (email,a) => {
    const token = sessionStorage.getItem('token');
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
            const statusCode = response.status;

            if(statusCode >= 200 && statusCode < 300){
                alert("Ya sos vendedor!")
            } else {
                alert("Error al actualizar tu rol");
            }

        } catch (error){
            console.log('Error updating user: ',error)
        }

    }
    updateRoleToSeller();
}








