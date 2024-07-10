
import {Container} from "@mui/material";
import Navbar from "./components/navbar/Navbar.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import {Route, Router, RouterProvider, Routes} from "react-router-dom";



import Footer from "./components/footer/Footer.jsx";
import Payment from "./pages/payment/Payment.jsx";
import Perfil from "./pages/Perfil.jsx";
import CreateListingDialog from "./components/perfil/comps/CreateListingDialog.jsx";
import SignInSide from "./pages/SignInSide.jsx";
import SignUp from "./pages/SignUp.jsx";
import {Provider, useDispatch, useSelector} from "react-redux";
import Home from "./pages/Home.jsx";
import ProtectedRouteProfile from "./protected_routes/PrivateRoute.jsx";
import Contacto from "./pages/Contacto.jsx";
import {ListingDetail} from "./pages/ListingDetail.jsx";
import {
    useFetchBrand,
    useFetchDifficulty,
    useFetchDuration,
    useFetchGetCategories,
    useFetchPlayers, useFetchProducts
} from "./hooks/product_hooks.js";
import {AdminView} from "./pages/Admin.jsx";
import PrivateAdminRoute from "./protected_routes/PrivateAdminRoute.jsx";
import {useFetchListings} from "./hooks/listing-hooks.js";


function App() {
    const background =   'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)';
    const dispatch = useDispatch();

    useFetchPlayers(dispatch);
    useFetchGetCategories(dispatch);
    useFetchBrand(dispatch);
    useFetchPlayers(dispatch);
    useFetchDuration(dispatch);
    useFetchDifficulty(dispatch);

     useFetchProducts(dispatch);

    return (

            <Container sx={{backgroundImage:background,width:'100%',marginTop:'64px', minHeight: "100vh"}} disableGutters maxWidth={false}>

                <Navbar></Navbar>

                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path={'/profile/:email/:userId'} element={<ProtectedRouteProfile><Perfil></Perfil></ProtectedRouteProfile>}/>
                    <Route path="/catalogo/:listing" element={<Catalogo/>} />
                    <Route path="/catalogo" element={<Catalogo/>} />
                    <Route path="/login" element={<SignInSide/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/payment" element={<Payment/>} />
                    <Route path="/crear-publicacion" element={<CreateListingDialog/>} />
                    <Route path="/contacto" element={<Contacto></Contacto>} ></Route>
                    <Route path={"/listing/:id"} element={<ListingDetail></ListingDetail>}></Route>
                    <Route path={"/adminview"} element={<PrivateAdminRoute><AdminView></AdminView></PrivateAdminRoute>}></Route>
                </Routes>

                <Footer></Footer>
            </Container>






    )
}

export default App
